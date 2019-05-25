import axios, {AxiosInstance} from 'axios';

import { apiUrl } from './api-config';
import {IProvider, IProviderQuery, IProviderResponse} from "../types/provider";
const apiEndPoint = `${apiUrl}/providers`;

export class ProvidersService {
    // Axios instance
    private _requests: AxiosInstance;

    constructor() {
        this._requests = axios.create({
            headers: { 'accept': 'application/json' },
        });
    }

    query(params: IProviderQuery): Promise<IProvider[]> {
        let url = `${apiEndPoint}`;

        const sp = Object.entries(params).map(([key, val]) => {
            if (!val) return null;
            return `${key}=${encodeURIComponent(val)}`
        }).filter(Boolean).join('&');

        if (sp != '') {
            url += '?' + sp;
        }

        return this._requests.get(url).then(results => {
            return results.data.map((record: IProviderResponse) => ({
                ProviderName: record["Provider Name"],
                ProviderStreetAddress: record["Provider Street Address"],
                ProviderCity: record["Provider City"],
                ProviderState: record["Provider State"],
                ProviderZipCode: record["Provider Zip Code"],
                HospitalReferralRegionDescription: record["Hospital Referral Region Description"],
                TotalDischarges: record["Total Discharges"],
                AverageCoveredCharges: record["Average Covered Charges"],
                AverageTotalPayments: record["Average Total Payments"],
                AverageMedicarePayments: record["Average Medicare Payments"],
            }) as IProvider);
        })
    }
}