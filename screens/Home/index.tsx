import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { globalStyles } from '../../styles/global'

import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import ViewContainer from '../../components/ViewContainer/ViewContainer';

import { IDate } from '../../types/date';
import { useNavigation } from '@react-navigation/native';

export default function App() {

    const navigation = useNavigation();

    const [date, setDate] = useState<IDate[]>([
        {id: '1', patient: 'JE', owner: 'JE', symptom: 'NOSE'},
        {id: '2', patient: 'JE 2', owner: 'JE 2', symptom: 'NOSE 2'},
    ])

    const handleDelete = (id: string) => {
        setDate( cite => cite.filter(date => date.id !== id))
    }

    return (
        <ViewContainer>
            <FlatList
                ListHeaderComponent={
                    <View style={styles.row}>
                        <Text style={globalStyles.txtTitle}>Mis citas</Text>

                        <Button 
                            title="Crear"
                            onPress={() => navigation.navigate('Create')}
                        />
                    </View>
                }
                data={date}
                renderItem={({item}) => <Card date={item} handleDelete={handleDelete} />}
                keyExtractor={item => item.id}
            />
        </ViewContainer>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
