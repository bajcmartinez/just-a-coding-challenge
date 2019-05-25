import React from 'react';
import { IProvider } from "../../types/provider";

interface IProvidersListItemProps {
    provider: IProvider
}

const ProviderListItem: React.FC<IProvidersListItemProps> = ({ provider }) => {
    return (
        <tr>
            <td>{provider.ProviderName}</td>
            <td>{provider.ProviderStreetAddress}</td>
            <td>{provider.ProviderCity}</td>
            <td>{provider.ProviderState}</td>
            <td>{provider.ProviderZipCode}</td>
            <td>{provider.HospitalReferralRegionDescription}</td>
            <td>{provider.TotalDischarges}</td>
            <td>{provider.AverageCoveredCharges}</td>
            <td>{provider.AverageTotalPayments}</td>
            <td>{provider.AverageMedicarePayments}</td>
        </tr>
    );
};

export default ProviderListItem;
