import React, { useState } from 'react';
import { FormName } from 'redux-form';

const InitialForm = ({setForm, fromNumber, cta}) => {
    return (
        <div>
            <button onClick={() => setForm(fromNumber - 1)}>Back</button>
            <button onClick={() => setForm(fromNumber + 1)}>{cta}</button>
        </div>
    );
};

export default InitialForm;