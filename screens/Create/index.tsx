import React, { useEffect } from 'react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import ViewContainer from '../../components/ViewContainer/ViewContainer'
import { ScrollView } from 'react-native';

interface IFormInput {
    patient: string,
    owner: string,
    symptom: string,
}

const schema = yup.object().shape({
    patient: yup.string().required().trim(),
    owner: yup.string().required().trim(),
    symptom: yup.string().required().trim(),
});

export default function Create () {

    const { register, handleSubmit, setValue, errors } = useForm<IFormInput>({
        resolver: yupResolver(schema)
    });

    useEffect(() => {
        register('patient')
        register('owner')
        register('symptom')
    }, [register])


    const onSubmit = (data: IFormInput) => {
        console.log(data)
    }

    return (
        <ScrollView>
            <ViewContainer>
                <Input 
                    label='Paciente'
                    placeHolder="John Doe..."
                    onChangeText={text => setValue('patient', text)}
                    errors={errors.patient && errors.patient.message}
                />
                <Input 
                    label='Propietario'
                    placeHolder="John Doe..."
                    onChangeText={text => setValue('owner', text)}
                    errors={errors.owner && errors.owner.message}
                />
                <Input 
                    label='Síntomas'
                    placeHolder="Dolor de cabeza..."
                    onChangeText={text => setValue('symptom', text)}
                    errors={errors.symptom && errors.symptom.message}
                />

                <Button 
                    title="Crear cita"
                    onPress={handleSubmit(onSubmit)}
                    block={true}
                />
            </ViewContainer>
        </ScrollView>
    )

}