import axios, {AxiosInstance} from 'axios';

import { apiUrl } from './api-config';
import { IProvider, IProviderResponse } from "../types/provider";
const apiEndPoint = `${apiUrl}/providers`;

export class ProvidersService {
    // Axios instance
    private _requests: AxiosInstance;

    constructor() {
        this._requests = axios.create({
            headers: { 'accept': 'application/json' },
        });
    }

    query(): Promise<IProvider[]> {
        return this._requests.get(`${apiEndPoint}`).then(results => {
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