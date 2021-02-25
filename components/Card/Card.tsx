import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../styles/global';
import { IDate } from '../../types/date';

import ModalApp from '../Modal/Modal';
import ViewContainer from '../ViewContainer/ViewContainer';

interface IProps {
    date: IDate;
    handleDelete: (id: string) => void;
}

const Card = ({date, handleDelete}: IProps) => {

    const [modal, setModal] = useState<boolean>(false)

    return (

        <View style={styles.container}>

            <ModalApp
                date={date}
                modal={modal}
                setModal={setModal}
                handleDelete={handleDelete}
            />

            <TouchableOpacity onPress={() => setModal(true)}>
                <View style={styles.containerCard}>
                    <Text style={globalStyles.txtParagraph}>Paciente:
                        <Text style={globalStyles.txt}> {date.patient}</Text>
                    </Text>
                    <Text style={globalStyles.txtParagraph}>Propietario:
                        <Text style={globalStyles.txt}> {date.owner}</Text>
                    </Text>
                    <Text style={globalStyles.txtParagraph}>Síntomas:
                        <Text style={globalStyles.txt}> {date.symptom}</Text>
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
    },
    containerCard: {
        marginBottom: 5,
        padding: 10,
        backgroundColor: '#fff',
        elevation: 3,
        shadowColor: '#f3f3f3',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: .8,
        shadowRadius: 3,
        borderRadius: 10,
        borderColor: '#f3f3f3',
        borderWidth: 2,
    }
})