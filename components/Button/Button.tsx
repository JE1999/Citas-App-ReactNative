import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface IProps {
    title: string;
    onPress: () => void;
    block?: boolean
}

const Button = ({title, onPress, block = false}: IProps) => {
 
    return (
        <View style={!block && styles.containerButton}>
            <TouchableOpacity
                style={!block ? styles.button : styles.buttonBlock}
                onPress={onPress}
            >
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
 
}
 
 export default Button;

 const styles = StyleSheet.create({
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    button: {
        backgroundColor: '#841584',
        padding: 10,
        borderRadius: 10,
        elevation: 3,
    },
    buttonBlock: {
        backgroundColor: '#841584',
        padding: 18,
        borderRadius: 25,
        marginVertical: 10,
        elevation: 5,
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
    }
 })