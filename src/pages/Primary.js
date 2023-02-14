import React, { useState } from "react";
import { View, TextInput, Button } from 'react-native';

import { useDispatch } from 'react-redux';

const Primary = () => {

    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const handleAdd = () => {
        setText("");
        dispatch({ type: 'ADD_NAME', payload: { name: text } });
    }

    const handleClean = () => {
        dispatch({ type: 'CLEAN_LIST' });
    }

    return (
        <View>
            <View style={{ borderWidth: 1, margin: 10, padding: 5 }}>
                <TextInput
                    value={text}
                    onChangeText={setText}
                    placeholder="İsim Giriniz..."
                />
            </View>
            <Button title="Ekle" onPress={handleAdd} />
            <Button title="Temizle" onPress={handleClean} color='red'/>
        </View>
    )
}

export default Primary;