import { Button, Typography, TextField, Box, InputAdornment } from "@mui/material"
import { useState } from "react"
import Icon from '@mui/material/Icon';
import { Controller, useForm, useController } from "react-hook-form"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const DividedPage = ({ children }) => {
    return (
        <div id="divided-page">
            {children}
        </div>
    )
}

export const PageCard = ({ imgUrl, firstText, secondText, buttonText, onChangeFirst, onChangeSecond, onSubmit, onSubmitFirst, onSubmitSecond }) => {

    const [disabledFirst, setDisabledFirst] = useState(true)
    const [disabledSecond, setDisabledSecond] = useState(true)

    const schema = yup.object().shape({
        firstValue: yup.string().required("El campo es obligatorio").max(50, "El campo no puede tener mas de 50 caracteres").min(3, "El campo debe tener al menos 3 caracteres").matches(/^[a-zA-Z\s]*$/, "El campo  no tiene el formato correcto"),
        secondValue: yup.string().required("El campo es obligatorio").max(50, "El campo no puede tener mas de 50 caracteres").min(3, "El campo debe tener al menos 3 caracteres").matches(/^[a-zA-Z\s]*$/, "El campo no tiene el formato correcto")
    })

    const { control, handleSubmit: handleSubmitHook, formState } = useForm({
        defaultValues: {
            firstValue: firstText,
            secondValue: secondText
        },
        resolver: yupResolver(schema)
    })
    const { errors } = formState

    const toggleEditFirst = () => {
        setDisabledFirst(!disabledFirst)
    }

    const toggleEditSecond = () => {
        setDisabledSecond(!disabledSecond)
    }

    return (
        <div id="divided-page-card">
            <div id="divided-page-card-img">
                <img src={imgUrl} alt="Avatar" />
            </div>
            <div id="divided-page-card-info">
                <Box component="form" onSubmit={handleSubmitHook(onSubmit)}>
                    <div>
                        <Controller name="firstValue" control={control} render={({ field }) => (
                            <TextField {...field}
                                error={errors.firstValue ? true : false}
                                placeholder="Primer Texto"
                                helperText={errors.firstValue?.message}
                                fullWidth
                                variant="standard"
                                className={`input-control ${disabledFirst ? "disabled" : ""}`}
                                disabled={disabledFirst}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">
                                        <Icon onClick={toggleEditFirst}> mode_edit</Icon>
                                    </InputAdornment>
                                }}
                            />
                        )} />
                    </div>
                    <div>
                        <Controller name="secondValue" control={control} render={({ field }) => (
                            <TextField {...field}
                                error={errors.secondValue ? true : false}
                                placeholder="Segundo Texto"
                                helperText={errors.secondValue?.message}
                                fullWidth
                                variant="standard"
                                className={`input-control ${disabledSecond ? "disabled" : ""}`}
                                disabled={disabledSecond}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">
                                        <Icon onClick={toggleEditSecond}> mode_edit</Icon>
                                    </InputAdornment>
                                }}
                            />
                        )} />
                    </div>
                    {<Button variant="contained" color="primary">{buttonText}</Button>}
                </Box>
            </div>
        </div>
    )
}

export const PageContent = ({ children, title = "Titulo Pagina" }) => {
    return (
        <div id="divided-page-content">
            <Typography variant="h5">{title}</Typography>
            {children}
        </div>
    )
}