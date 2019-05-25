import React, { FormEvent } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import styles from './filters.module.scss';

interface IProvidersFilterProps {
    refreshQuery: () => void,
    filterChanged: (event: FormEvent<HTMLInputElement>) => void
}

const ProvidersFilter: React.FC<IProvidersFilterProps> = ({refreshQuery, filterChanged}) => {
    return (
        <div>
            <b>Filters:</b>
            <br />
            <Form onSubmit={(event: FormEvent) => {
                event.preventDefault();
                refreshQuery();
            }}>
                <Row>
                    <Col md={6} className={styles.filter}>
                        Discharges
                        <Form.Row>
                            <Col>
                                <Form.Control name="min_discharges" type="number" placeholder="Min" onChange={(event: any) => filterChanged(event as any)} />
                            </Col>
                            <Col>
                                <Form.Control name="max_discharges" type="number" placeholder="Max" onChange={(event: any) => filterChanged(event as any)} />
                            </Col>
                        </Form.Row>
                    </Col>
                    <Col md={6} className={styles.filter}>
                        Avg Covered Charges
                        <Form.Row>
                            <Col>
                                <Form.Control name="min_average_covered_charges" type="number" placeholder="Min" onChange={(event: any) => filterChanged(event as any)} />
                            </Col>
                            <Col>
                                <Form.Control name="max_average_covered_charges" type="number" placeholder="Max" onChange={(event: any) => filterChanged(event as any)} />
                            </Col>
                        </Form.Row>
                    </Col>
                    <Col md={6} className={styles.filter}>
                        Avg Medicare Payments
                        <Form.Row>
                            <Col>
                                <Form.Control name="min_average_medicare_payments" type="number" placeholder="Min" onChange={(event: any) => filterChanged(event as any)} />
                            </Col>
                            <Col>
                                <Form.Control name="max_average_medicare_payments" type="number" placeholder="Max" onChange={(event: any) => filterChanged(event as any)} />
                            </Col>
                        </Form.Row>
                    </Col>
                    <Col md={6} className={styles.filter}>
                        State
                        <Form.Row>
                            <Col>
                                <Form.Control name="state" type="text" placeholder="State" onChange={(event: any) => filterChanged(event as any)} />
                            </Col>
                        </Form.Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="primary" block type="submit">Search</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default ProvidersFilter;
