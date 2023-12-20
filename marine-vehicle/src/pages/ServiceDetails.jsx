// src/pages/ServiceDetails.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import env from "../env-config";
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    card: {
        marginBottom: 16,
    },
});

const apiUrl = env.apiUrl

const ServiceDetails = () => {
    console.log('ServiceDetails component is rendered');

    const classes = useStyles();
    const [service, setService] = useState(null);
    const { id } = useParams();

    useEffect(() => {

            const serviceUrl = `${apiUrl}/api/v1/unauth/service/${id}`


            const fetchServiceDetails = async () => {
                try {
                    const response = await axios.get(`${serviceUrl}`);
                    setService(response.data.data);
                } catch (error) {
                    console.error('Error fetching service details:', error);
                }
            };

            fetchServiceDetails();
        }, [id])

    if (!service) {
        return <div>جاري التحميل...</div>;
    }

    return (
        <div>
            {service.service_fees.map((fee) => (
                <Card key={fee.id} className={classes.card}>
                    <CardContent>
                        <Typography variant="h5">{fee.item_fee}</Typography>
                        <Typography variant="body1">{fee.description}</Typography>
                        <Typography variant="body2">
                            Payment Method: {fee.payment_method}, Amount: {fee.payment_amount} {fee.currency}
                        </Typography>
                    </CardContent>
                </Card>
            ))}

            {service.service_outputs.map((output) => (
                <Card key={output.id} className={classes.card}>
                    <CardContent>
                        <Typography variant="h5">{output.name}</Typography>
                        <Typography variant="body1">{output.description}</Typography>
                        <Typography variant="body2">Conditions: {output.conditions}</Typography>
                        <Typography variant="body2">Document Format: {output.document_format}</Typography>
                        <Typography variant="body2">Shelf Life: {output.shelf_life}</Typography>
                    </CardContent>
                </Card>
            ))}
            <Button variant="contained" color="primary" component={Link} to={`/information-form`}>
                تقديم الطلب
            </Button>
        </div>
    );
};

export default ServiceDetails;
