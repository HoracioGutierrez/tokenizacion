import { Box, Button, Grid, TextField } from "@mui/material"
import { Controller, useForm } from "react-hook-form"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const FormSwatch = () => {

    const schema = yup.object().shape({
        nombre: yup.string().required("El nombre es obligatorio").max(50, "El nombre no puede tener mas de 50 caracteres").min(3, "El nombre debe tener al menos 3 caracteres").matches(/^[a-zA-Z\s]*$/, "El nombre solo puede contener letras"),
        dni: yup.string().required("El DNI es obligatorio").max(10, "El DNI no puede tener mas de 9 caracteres").min(8, "El DNI debe tener al menos 8 caracteres").matches(/^[0-9]{1,2}-|.?[0-9]{3}-|.?[0-9]{3}$/, "El DNI no tiene el formato correcto"),
        pais: yup.string().required("El pais es obligatorio").max(50, "El pais no puede tener mas de 50 caracteres").min(3, "El pais debe tener al menos 3 caracteres").matches(/^[a-zA-Z\s]*$/, "El pais solo puede contener letras"),
        provincia: yup.string().required("La provincia es obligatoria").max(50, "La provincia no puede tener mas de 50 caracteres").min(3, "La provincia debe tener al menos 3 caracteres").matches(/^[a-zA-Z\s]*$/, "La provincia solo puede contener letras"),
    })

    const { control, handleSubmit, formState } = useForm({
        defaultValues: {
            nombre: "",
            dni: "",
            pais: "",
            provincia: "",
        },
        resolver: yupResolver(schema)
    })

    const { errors } = formState

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Controller name="nombre" control={control} render={({ field }) => (
                <TextField {...field} error={errors.nombre ? true : false} placeholder="Nombre" helperText={errors.nombre?.message} fullWidth className="input-control" />
            )} />
            <Controller name="dni" control={control} render={({ field }) => (
                <TextField {...field} error={errors.dni ? true : false} placeholder="DNI" helperText={errors.dni?.message} fullWidth className="input-control" />
            )} />
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Controller name="pais" control={control} render={({ field }) => (
                        <TextField {...field} error={errors.pais ? true : false} placeholder="Pais" helperText={errors.pais?.message} fullWidth className="input-control" />
                    )} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Controller name="provincia" control={control} render={({ field }) => (
                        <TextField {...field} error={errors.provincia ? true : false} placeholder="Provincia" helperText={errors.provincia?.message} fullWidth className="input-control" />
                    )} />
                </Grid>
            </Grid>
            <Button variant='contained' type="submit">Submit</Button>
        </Box>
    )
}

export default FormSwatch
