import { TextField } from '@mui/material';
import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return (
        <div className="input-block">
            <TextField variant="outlined" id="outlined-basic" label="name"  />
        </div>
    );
}

export default Input;