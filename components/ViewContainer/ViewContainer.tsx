import React from 'react'
import { View, StyleSheet } from 'react-native'

import { IChildren } from '../../types/children';

const ViewContainer = ({children}: IChildren) => {

    return (
        <View style={styles.container}>
            {children}
        </View>
    )

}

export default ViewContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginTop: 10,
    },
});
  