import React from 'react'
import { Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'

interface IProps {
    label: string,
    placeHolder?: string,
    onChangeText: (text: string | number) => void,
    errors: string | undefined
}

const Input = (props: IProps) => {

    const { label, placeHolder, onChangeText, errors } = props

    return (
        <TouchableWithoutFeedback
            onPress={() => Keyboard.dismiss()}
        >
            <View style={styles.contentForm}>
                <Text style={styles.text}>{label}:</Text>
                <TextInput 
                    style={!errors ? styles.input : styles.inputError}
                    placeholder={placeHolder}
                    onChangeText={onChangeText}
                />
                <Text style={styles.textError}>{errors}</Text>
            </View>
        </TouchableWithoutFeedback>
    )

}

export default Input;

const styles = StyleSheet.create({
    contentForm: {
        marginBottom: 5,
    },
    text: {
        fontSize: 18,
        marginBottom: 2,
        fontWeight: '600',
        color: '#505050',
    },
    input: {
        backgroundColor: '#f5f5f5',
        height: 50,
        borderRadius: 25,
        padding: 15,
        borderColor: '#e5e5e5',
        borderWidth: 1,
    },
    inputError: {
        backgroundColor: 'rgba(250, 30, 14, .1)',
        height: 50,
        borderRadius: 25,
        padding: 15,
        borderColor: '#fa1e0e',
        borderWidth: 1,
    },
    textError: {
        marginHorizontal: 15,
        color: '#fa1e0e',
        height: 17,
    }
})