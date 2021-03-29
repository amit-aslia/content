import React, { useState } from 'react';
import FirstForm from './firstForm';
import SecondForm from './secondForm';
import Footer from './footer';

const MIN = 1;
const MAX = 3;
const InitialForm = () => {
    const [fromNumber, setFormNumber] = useState(1)
    const getForm = () => {
        switch(fromNumber) {
            case 1:
                return <FirstForm />
            case 2:
                return <SecondForm />
            case 3:
                return <h1>Third Form</h1>
            default: 
                null
        }
    }

    const setForm = formValue => {
        if(formValue <= MAX && formValue >= MIN)
            setFormNumber(formValue)
    }
    return (
        <div>
        {getForm()}
        <Footer setForm={setForm} fromNumber={fromNumber} cta={fromNumber == 3 ? 'Continue' : 'next'} />
        </div>
    );
};

export default InitialForm;