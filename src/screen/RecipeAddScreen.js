import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Pressable,
    Button,
    ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { height, marginWidth, width } from '../../config/globalStyles';
import { RecipeData, GetId } from '../../config/RecipeData';
import * as ImagePicker from 'expo-image-picker';

const UselessTextInput = (props) => {
    return (
        <TextInput
            {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
            editable
            maxLength={40}
        />
    );
};

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
    };

    // 현재 이미지 주소
    const [imageUrl, setImageUrl] = useState('');
    // 권한 요청을 위한 hooks
    const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

    const uploadImage = async () => {
        // 권한 확인 코드: 권한 없으면 물어보고, 승인하지 않으면 함수 종료
        if (!status?.granted) {
            const permission = await requestPermission();
            if (!permission.granted) {
                return null;
            }
        }

        // 이미지 업로드 기능
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            quality: 1,
            aspect: [1, 1],
        });
        if (result.cancelled) {
            return null; // 이미지 업로드 취소한 경우
        }

        // 이미지 업로드 결과 및 이미지 경로 업데이트
        console.log(result);
        console.log('imageUrl',imageUrl);
        setImageUrl(result.uri);
{/*
        // 서버에 요청 보내기
        const localUri = result.uri;
        const filename = localUri.split('/').pop();
        const match = /\.(\w+)$/.exec(filename ?? '');
        const type = match ? `image/${match[1]}` : `image`;
        const formData = new FormData();
        formData.append('image', { uri: localUri, name: filename, type });

        await axios({
            method: 'post',
            url: '{API주소}',
            headers: {
                'content-type': 'multipart/form-data',
            },
            data: formData,
        });
*/}
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <TouchableOpacity
                        style={{
                            width: width * 100,
                            height: height * 100,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        onPress={uploadImage}
                    >
                        {!imageUrl ? (
                            <Text style={{ flex: 1, borderWidth: 1 }}>사진 추가하기</Text>
                        ) : (
                            <Image
                                source={{ uri: imageUrl }}
                                style={{
                                    width: width * 100,
                                    height: height * 100,
                                }}
                            />
                        )}
                    </TouchableOpacity>
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
                    {/*
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            onChange={(e) => onChange('img', e)}
                            value={img}
                            style={styles.TextInput}
                            placeholder={'사진'}
                            placeholderTextColor={'#D5D5D5'}
                        />
                    </View>
*/}
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
                    style={{
                        alignItems: 'center',
                        width: '100%',
                        borderWidth: 1,
                        borderColor: 'gray',
                    }}
                >
                    <Text style={{ fontSize: 30 }}>저장</Text>
                </TouchableOpacity>
            </ScrollView>
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
        marginBottom: height * 10,
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
        marginBottom: height * 10,
    },
});

export default RecipeAddScreen;
