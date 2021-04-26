import React from 'react'
import { TextField } from '@material-ui/core';
import { useFormContext} from 'react-hook-form'
import {Controller} from 'react-hook-form'

const TextFieldCustom = ({name, label, autoComplete, type, id}) => {
    const { control } = useFormContext();
    return (
        <Controller
            control={control}
            name={name}
            id={id}
            render={({ field: {onChange, onBlur, value}})=>(
                <TextField
                    color='primary'
                    variant="outlined"
                    defaultValue=""
                    required
                    fullWidth
                    label={label}
                    onChange={onChange}
                    onBlur={onBlur}
                    selected={value}
                    autoComplete={autoComplete}
                    type={type}
                    autoFocus
                    id={id}
                    name={name}
                    margin="normal"
                />

                )  }
        >   

        </Controller>
    )
}

export default TextFieldCustom
