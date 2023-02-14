import React from "react";
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const Secondary = () => {
    const list = useSelector(s => s.nameList);

    return (
        <View>
            <FlatList
                data={list}
                renderItem={({ item }) => <Text>{item}</Text>}
            />
        </View>
    )
}

export default Secondary;