import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { height, marginWidth, width } from '../config/globalStyles';
import { RecipeData } from '../config/RecipeData';

const TestScreen = () => {
    const navigation = useNavigation();
    const [inputs, setInputs] = useState({
        id: '',
        type: '',
        title: '',
        img: '',
        recipedifficulty: '',
        recipeserving: '',
        recipeTime: '',
        recipeInMaterial: '',
        recipeDetail: '',
    });

    const {
        id,
        type,
        title,
        img,
        recipedifficulty,
        recipeserving,
        recipeTime,
        recipeInMaterial,
        recipeDetail,
    } = inputs;

    const onChange = (keyvalue, e) => {
        const { text } = e.nativeEvent;
        setInputs({
            ...inputs,
            [keyvalue]: text,
        });
        console.log(inputs);
    };
    const Save = (value) => {
        RecipeData.push(inputs);
        console.log('저장', inputs, RecipeData);
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 15, width: '20%' }}> 제목 : </Text>
                <TextInput
                    onChange={(e) => onChange('title', e)}
                    value={title}
                    style={styles.TextInput}
                    placeholder={'title'}
                    placeholderTextColor={'#D5D5D5'}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 15, width: '20%' }}> 타입 : </Text>
                <TextInput
                    onChange={(e) => onChange('type', e)}
                    value={type}
                    style={styles.TextInput}
                    placeholder={'type'}
                    placeholderTextColor={'#D5D5D5'}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 15, width: '20%' }}> 난이도 : </Text>
                <TextInput
                    onChange={(e) => onChange('recipedifficulty', e)}
                    value={recipedifficulty}
                    style={styles.TextInput}
                    placeholder={'난이도'}
                    placeholderTextColor={'#D5D5D5'}
                />
            </View>

            <Text>
                {inputs.title} {inputs.type} {inputs.recipedifficulty}
            </Text>
            <TouchableOpacity
                onPress={() =>
                    {navigation.navigate('MainScreen'), Save(inputs)}
                }
            >
                <Text style={{ fontSize: 30 }}>저장</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        //바탕
        flex: 1,
        paddingTop: Platform.OS === 'android' ? height * 40 : 0,
        marginBottom: height * 20, //마진 : 10%
        marginLeft: width * 20,
        marginRight: width * 20,
    },
    TextInput: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 15,
        color: 'black',
        borderWidth: 1,
        borderColor: 'gray',
        width: '70%',
    },
});

export default TestScreen;
