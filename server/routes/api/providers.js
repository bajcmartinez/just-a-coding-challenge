import { Router }from 'express';
import { checkSchema, validationResult } from 'express-validator/check';
import Sequelize from 'sequelize';
import models from '../../models';
const Records = models.records;
const Providers = models.providers;
const DRGs = models.drgs;

const router = Router();

/**
 * Valid response fields
 *
 * @type {string[]}
 */
const valid_fields = [
    "Provider Name",
    "Provider Street Address",
    "Provider City",
    "Provider State",
    "Provider Zip Code",
    "Hospital Referral Region Description",
    "Total Discharges",
    "Average Covered Charges",
    "Average Total Payments",
    "Average Medicare Payments"];

/**
 * List all providers using search criteria
 *
 * @param max_discharges
 * @param min_discharges
 * @param max_average_covered_charges
 * @param min_average_covered_charges
 * @param max_average_medicare_payments
 * @param min_average_medicare_payments
 * @param state
 * @param fields
 */
router.get('/', checkSchema({
    max_discharges: {
        in: ['query'],
        optional: true,
        isInt: true,
        toInt: true,
        errorMessage: "Max Discharges is invalid!"
    },
    min_discharges: {
        in: ['query'],
        optional: true,
        isInt: true,
        toInt: true,
        errorMessage: "Min Discharges is invalid!"
    },
    max_average_covered_charges: {
        in: ['query'],
        optional: true,
        isFloat: true,
        toFloat: true,
        errorMessage: "Max Average Covered Charges is invalid!"
    },
    min_average_covered_charges: {
        in: ['query'],
        optional: true,
        isFloat: true,
        toFloat: true,
        errorMessage: "Min Average Covered Charges is invalid!"
    },
    max_average_medicare_payments: {
        in: ['query'],
        optional: true,
        isFloat: true,
        toFloat: true,
        errorMessage: "Max Average Medicare Payments is invalid!"
    },
    min_average_medicare_payments: {
        in: ['query'],
        optional: true,
        isFloat: true,
        toFloat: true,
        errorMessage: "Min Average Medicare Payments is invalid!"
    },
    state: {
        in: ['query'],
        optional: true,
        isLength: {
            errorMessage: "State should be 2 chars long!",
            options: {
                min: 2,
                max: 2
            }
        },
        trim: true,
        errorMessage: "State is invalid!"
    },
    fields: {
        in: ['query'],
        optional: true,
        custom: {
            errorMessage: "fields is invalid! Remember to separate the fields with `,` and that the valid options are: " + valid_fields.join(', '),
            options: (value) => {
                const fields = value.split(',');

                let error = false;
                fields.every(field => {
                   if (!valid_fields.includes(field.trim())) {
                       error = true;
                       return false;
                   }
                   return true;
                });

                return !error;
            }
        }
    }
}), function(req, res) {
    const val = validationResult(req);
    if (!val.isEmpty()) {
        res.status(400).jsonp(val.array());
    } else {
        // All params are good to go
        const Op = Sequelize.Op;
        const conditions = {};

        // Add filters for total Discharges
        if (req.query.max_discharges) conditions.totalDischarges = {
            [Op.lte]: req.query.max_discharges
        };
        if (req.query.min_discharges) conditions.totalDischarges = {
            ...conditions.totalDischarges,
            [Op.gte]: req.query.min_discharges
        };

        // Add filters for Average Covered Charges
        if (req.query.max_average_covered_charges) conditions.avgCoveredCharges = {
            [Op.lte]: req.query.max_average_covered_charges
        };
        if (req.query.min_average_covered_charges) conditions.avgCoveredCharges = {
            ...conditions.avgCoveredCharges,
            [Op.gte]: req.query.min_average_covered_charges
        };

        // Add filters for Average Medicare Payments
        if (req.query.max_average_medicare_payments) conditions.avgMedicarePayments = {
            ...conditions.avgMedicarePayments,
            [Op.lte]: req.query.max_average_medicare_payments
        };
        if (req.query.min_average_medicare_payments) conditions.avgMedicarePayments = {
            ...conditions.avgMedicarePayments,
            [Op.gte]: req.query.min_average_medicare_payments
        };

        // Add filters for state
        let include = [{
            model: Providers,
        }, {
            model: DRGs
        }];

        if (req.query.state) include[0].where = { State: req.query.state };

        Records.findAll({
            where: conditions,
            include,
            limit: 100 //TODO: Enable paging for the user to be able to query all results
        }).then(records => {

            records = records.map(record => {
                const r =  {
                    "Provider Name": record.provider.name,
                    "Provider Street Address": record.provider.streetAddress,
                    "Provider City": record.provider.city,
                    "Provider State": record.provider.state,
                    "Provider Zip Code": record.provider.zip,
                    "Hospital Referral Region Description": record.provider.hospitalReferral,
                    "Total Discharges": record.totalDischarges,
                    "Average Covered Charges": record.avgCoveredCharges,
                    "Average Total Payments": record.avgTotalPayments,
                    "Average Medicare Payments": record.avgMedicarePayments
                };

                if (req.query.fields) {
                    const fr = {};
                    req.query.fields.split(',').forEach(field => fr[field] = r[field]);
                    console.log(fr);
                    return fr;
                } else {
                    return r;
                }
            });

            res.status(200).json(records)
        }).catch(error => res.status(400).send(error));
    }
});

export default router;