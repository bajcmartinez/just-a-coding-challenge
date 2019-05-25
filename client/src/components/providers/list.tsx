import React from 'react';
import { Table } from 'react-bootstrap';
import { IProvider } from "../../types/provider";
import ListItem from './list-item';

interface IProvidersListProps {
    providers: IProvider[]
}

const ProvidersList: React.FC<IProvidersListProps> = ({ providers }) => {
    return (
        <Table responsive striped bordered hover size="sm">
            <thead>
                <tr>
                    <td colSpan={6}>Provider</td>
                    <td colSpan={5}>&nbsp;</td>
                </tr>
                <tr>
                    <td>Provider Name</td>
                    <td>Street Address</td>
                    <td>City</td>
                    <td>State</td>
                    <td>ZIP</td>
                    <td>Hospital Referral Region Description</td>
                    <td>Total Discharges</td>
                    <td>Avg Covered Charges</td>
                    <td>Avg Total Payments</td>
                    <td>Avg Medicare Payments</td>
                </tr>
            </thead>
            <tbody>
            {providers && providers.map((provider, index) => (
                <ListItem key={index} provider={provider} />
            ))}
            </tbody>
        </Table>
    );
};

export default ProvidersList;
