import React, { useState } from "react";
import { View, Text, TextInput, Button } from 'react-native';

const Primary = () => {

    const [text, setText] = useState("");

    const handleAdd = () => {
        setText("")
        console.log(text);
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
        </View>
    )
}

export default Primary;