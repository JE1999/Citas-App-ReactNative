import React from 'react'
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import { globalStyles } from '../../styles/global';

import { IDate } from '../../types/date';

import Button from '../Button/Button';
import ViewContainer from '../ViewContainer/ViewContainer';

interface IProps {
    date: IDate;
    modal: boolean;
    setModal: Function;
    handleDelete: (id: string) => void;
}

const ModalApp = ({date, modal, setModal, handleDelete}: IProps) => {

    return (
        <Modal 
            visible={modal}
            animationType="slide"
        >
            <ViewContainer>
                <TouchableOpacity
                    onPress={() => setModal(false)}
                >
                    <View style={styles.containerClose}>
                        <Text style={styles.close}>X</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.viewContent}>
                    <Text style={globalStyles.txtParagraph}>Paciente:</Text>
                    <Text style={globalStyles.txtTitle}>{date.patient}</Text>

                    <Text style={globalStyles.txtParagraph}>Propietario:</Text>
                    <Text style={globalStyles.txtTitle}>{date.owner}</Text>
                    
                    <Text style={globalStyles.txtParagraph}>Síntomas:</Text>
                    <Text style={globalStyles.txtTitle}>{date.symptom}</Text>

                </View>
                <Button 
                    title="Eliminar"
                    onPress={() => handleDelete(date.id)}
                    block={true}
                />
            </ViewContainer>
        </Modal>
    )

}

export default ModalApp;

const styles = StyleSheet.create({
    containerClose: {
        marginBottom: 10
    },
    close: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    viewContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})