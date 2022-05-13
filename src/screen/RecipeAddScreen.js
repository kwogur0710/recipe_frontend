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
import { height, marginWidth, width } from '../../config/globalStyles';
import { RecipeData, GetId } from '../../config/RecipeData';

const UselessTextInput = (props) => {
    return (
      <TextInput
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={40}
      />
    );
  }

const RecipeAddScreen = () => {
    const navigation = useNavigation();
    const [value, onChangeText] = React.useState('Useless Multiline Placeholder');
    const [inputs, setInputs] = useState({
        id: GetId,
        title: '',
        type: '',
        img: '',
        difficulty: '',
        serving: '',
        time: '',
        material: '',
        detail: '',
    });

    const { id, type, title, img, difficulty, serving, time, material, detail } = inputs;

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
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        onChange={(e) => onChange('title', e)}
                        value={title}
                        style={styles.TextInput}
                        placeholder={'레시피 제목'}
                        placeholderTextColor={'#D5D5D5'}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        onChange={(e) => onChange('type', e)}
                        value={type}
                        style={styles.TextInput}
                        placeholder={'음식 종류'}
                        placeholderTextColor={'#D5D5D5'}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        onChange={(e) => onChange('img', e)}
                        value={img}
                        style={styles.TextInput}
                        placeholder={'사진'}
                        placeholderTextColor={'#D5D5D5'}
                    />
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        onChange={(e) => onChange('difficulty', e)}
                        value={difficulty}
                        style={styles.TextInput}
                        placeholder={'난이도'}
                        placeholderTextColor={'#D5D5D5'}
                    />
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        onChange={(e) => onChange('serving', e)}
                        value={serving}
                        style={styles.TextInput}
                        placeholder={'인분'}
                        placeholderTextColor={'#D5D5D5'}
                    />
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        onChange={(e) => onChange('time', e)}
                        value={time}
                        style={styles.TextInput}
                        placeholder={'소요 시간'}
                        placeholderTextColor={'#D5D5D5'}
                    />
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        onChange={(e) => onChange('material', e)}
                        value={material}
                        style={styles.TextInput}
                        placeholder={'재료'}
                        placeholderTextColor={'#D5D5D5'}
                    />
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <UselessTextInput
                        multiline
                        numberOfLines={4}
                        onChange={(e) => onChange('detail', e)}
                        value={detail}
                        style={styles.TextInputBox}
                        placeholder={'레시피 내용'}
                        placeholderTextColor={'#D5D5D5'}
                    />
                </View>
            </View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('MainScreen'), Save(inputs);
                }}
                style={{alignItems:'center', width:'100%',  borderWidth:1, borderColor:'gray'}}
            >
                <Text style={{ fontSize: 30, }}>저장</Text>
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
        borderBottomWidth: 1,
        borderColor: 'gray',
        width: '100%',
        marginBottom: height * 10
    },
    TextInputBox: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 15,
        color: 'black',
        borderBottomWidth: 1,
        borderColor: 'gray',
        width: '100%',
        height: height * 200,
        marginBottom: height * 10
    },
});

export default RecipeAddScreen;
