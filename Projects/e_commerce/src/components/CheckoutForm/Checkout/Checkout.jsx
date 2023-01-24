import React, { useState } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core'
import { SettingsPowerSharp } from '@material-ui/icons'

import useStyles from './styles'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'

// checkout steps:
const steps = ['Shipping Address', 'Payment Details']

const Checkout = () => {
    const [activeStep, setActiveStep] = useState(2);
    const classes = useStyles();


    const Confirmation = () => (
        <div>
            Confirmation
        </div>
    );

    const Form = () => activeStep === 0 ? <AddressForm /> : <PaymentForm />


    return (
        <>
            <div className={classes.toolbar} /> {/* div moves content below navigation bar */}
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant='h4' align='center'>Checkout Me</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {/* if last step - show "Confirmation", othervise "Form" component" */}
                    {activeStep === steps.length ? <Confirmation /> : <Form />}
                </Paper>
            </main>
        </>
    )
}


export default Checkout