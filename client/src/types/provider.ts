export interface IProvider {
    ProviderName: string,
    ProviderStreetAddress: string,
    ProviderCity: string,
    ProviderState: string,
    ProviderZipCode: string,
    HospitalReferralRegionDescription: string,
    TotalDischarges: number,
    AverageCoveredCharges: number,
    AverageTotalPayments: number,
    AverageMedicarePayments: number
}

export interface IProviderResponse {
    "Provider Name": string,
    "Provider Street Address": string,
    "Provider City": string,
    "Provider State": string,
    "Provider Zip Code": string,
    "Hospital Referral Region Description": string,
    "Total Discharges": number,
    "Average Covered Charges": number,
    "Average Total Payments": number,
    "Average Medicare Payments": number
}

export interface IProviderQuery {
    state: string
}