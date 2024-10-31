import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import { validationSchemas } from '@/app/schemas'
import { Icon } from '@iconify/react'
import FirstNameInput from '@/app/components/fields/FirstNameInput'
import MiddleNameInput from '@/app/components/fields/MiddleNameInput'
import LastNameInput from '@/app/components/fields/LastNameInput'
import OccupationInput from '@/app/components/fields/OccupationInput'
import UsernameInput from '@/app/components/fields/UsernameInput'
import PasswordInput from '@/app/components/fields/PasswordInput'
import ConfirmPasswordInput from '@/app/components/fields/ConfirmPasswordInput'

export default function WizardForm() {
    const [step, setStep] = useState(1);
    const isLastStep = step === validationSchemas.length;

    const handleNext = (setTouched) => {
        setStep(step + 1);
        setTouched({});
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    const handleSubmit = (values, { setTouched }) => {
       isLastStep ? alert(JSON.stringify(values)) : handleNext(setTouched)
    };

    return (
        <Formik
            initialValues={{
                firstName: '',
                middleName: '',
                lastName: '',
                occupation: '',
                username: '',
                password: '',
                confirmPassword: '',
            }}
            validationSchema={validationSchemas[step - 1]}
            onSubmit={handleSubmit}
        >
            {({ values, isValid, setTouched }) => (
                <Form className='space-y-4'>
                    {step === 1 && (
                        <div className='space-y-3'>
                            <div>Basic Info</div>
                            <FirstNameInput name="firstName" type="text" placeholder="First Name" />
                            <MiddleNameInput name="middleName" type="text" placeholder="Middle Name" />
                            <LastNameInput name="lastName" type="text" placeholder="Last Name" />
                        </div>
                    )}
                    {step === 2 && (
                        <OccupationInput
                            name="occupation"
                            type="text"
                            placeholder="Student, Chef, etc."
                        />
                    )}
                    {step === 3 && (
                        <div className='space-y-4'>
                            <UsernameInput name="username" type="text" placeholder="Username" />
                            <PasswordInput name="password" placeholder="Password" />
                            <ConfirmPasswordInput name="confirmPassword" placeholder="Confirm Password" />
                        </div>
                    )}
                    <div className='space-x-2 flex justify-end'>
                        {step > 1 && (
                            <button className='btn btn-accent' type='button' onClick={handleBack}>
                                <Icon icon='mingcute:arrow-left-fill' />
                            </button>
                        )}
                        <button className='btn btn-accent' type='submit'>
                            {isLastStep ? 'Submit' : 'Next'}
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}
