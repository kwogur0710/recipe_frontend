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
    ScrollView,
    Modal,
    FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { height, marginWidth, width } from '../../config/globalStyles';
import { RecipeData } from '../../config/RecipeData';
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';

const UselessTextInput = (props) => {
    return (
        <TextInput
            {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
            editable
            maxLength={40}
        />
    );
};

const GetId = () => {
    return Math.floor(Math.random() * 10000);
};

const RecipeAddScreen = () => {
    const navigation = useNavigation();
    const [visibleMoal, setVisibleModal] = useState(false);
    const [value, onChangeText] = React.useState('Useless Multiline Placeholder');
    const [inputs, setInputs] = useState({
        id: GetId(),
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
        setInputs({
            ...inputs,
            img: { uri: result.uri },
        });
        // 이미지 업로드 결과 및 이미지 경로 업데이트
        setImageUrl(result.uri);
        console.log('inputs', inputs.img);
        console.log(result);
        console.log('imageUrl', imageUrl);
    };
    const BtnList = ({ name }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    setVisibleModal(false),
                        setInputs({
                            ...inputs,
                            type: name,
                        });
                }}
            >
                <View
                    style={{
                        padding: width * 10,
                        paddingLeft: width * 30,
                        borderColor: 'gray',
                    }}
                >
                    <Text
                        style={{
                            fontSize: height * 16,
                            fontFamily: 'PretendardRegular',
                        }}
                    >
                        {name}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };
    const ModalList = ({ name }) => {
        return (
            <SafeAreaView>
                <Modal animationType="slide" transparent={true} visible={visibleMoal}>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            backgroundColor: 'rgba(100, 100, 100, 0.5)',
                        }}
                    >
                        <View
                            style={{
                                width: '100%',
                                height: height * 350,
                                borderTopRightRadius: 30,
                                borderTopLeftRadius: 30,
                                borderColor: '#cccccc',
                                borderWidth: 1,
                                backgroundColor: '#ffffff',
                                padding: 5,
                                justifyContent: 'space-between',
                            }}
                        >
                            <View>
                                <Text
                                    style={{
                                        paddingTop: height * 20,
                                        paddingBottom: height * 10,
                                        paddingLeft: width * 30,
                                        fontSize: height * 20,
                                        fontFamily: 'PretendardSemiBold',
                                    }}
                                >
                                    음식 종류
                                </Text>
                                <BtnList name={'한식'} />
                                <BtnList name={'일식'} />
                                <BtnList name={'중식'} />
                                <BtnList name={'양식'} />
                            </View>
                            <TouchableOpacity
                                style={{
                                    width: '100%',
                                    height: height * 40,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                onPress={() => {
                                    setVisibleModal(false);
                                }}
                            >
                                <View
                                    style={{
                                        width: width * 400,
                                        height: height * 50,
                                        borderColor: 'gray',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: '#9d6ab9',
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: height * 16,
                                            fontFamily: 'PretendardSemiBold',
                                        }}
                                    >
                                        취소
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        );
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <ModalList />
                <View>
                    <TouchableOpacity
                        style={{
                            width: height * 100,
                            height: height * 100,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={uploadImage}
                    >
                        {!imageUrl ? (
                            <View
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderColor: 'gray',
                                    borderWidth: 1,
                                    borderRadius: 14,
                                }}
                            >
                                <Feather name="camera" size={40} color="black" />
                                <Text
                                    style={{
                                        fontSize: height * 12,
                                        fontFamily: 'PretendardRegular',
                                    }}
                                >
                                    사진 선택
                                </Text>
                            </View>
                        ) : (
                            <Image
                                source={{ uri: imageUrl }}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 14,
                                }}
                            />
                        )}
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', marginTop: height * 4 }}>
                        <TextInput
                            onChange={(e) => onChange('title', e)}
                            value={title}
                            style={styles.TextInput}
                            placeholder={'레시피 제목'}
                            placeholderTextColor={'gray'}
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.TypeInput}
                        onPress={() => {
                            setVisibleModal(true);
                        }}
                    >
                        {inputs.type ? <Text> {inputs.type} </Text> : <Text>음식 종류</Text>}
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            onChange={(e) => onChange('difficulty', e)}
                            value={difficulty}
                            style={styles.TextInput}
                            placeholder={'난이도'}
                            placeholderTextColor={'gray'}
                        />
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            onChange={(e) => onChange('serving', e)}
                            value={serving}
                            style={styles.TextInput}
                            placeholder={'인분'}
                            placeholderTextColor={'gray'}
                        />
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            onChange={(e) => onChange('time', e)}
                            value={time}
                            style={styles.TextInput}
                            placeholder={'소요 시간'}
                            placeholderTextColor={'gray'}
                        />
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            onChange={(e) => onChange('material', e)}
                            value={material}
                            style={styles.TextInput}
                            placeholder={'재료'}
                            placeholderTextColor={'gray'}
                        />
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            multiline
                            numberOfLines={4}
                            onChange={(e) => onChange('detail', e)}
                            value={detail}
                            style={styles.TextInputBox}
                            placeholder={'레시피 내용'}
                            placeholderTextColor={'gray'}
                        />
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('MainScreen'), Save(inputs);
                    }}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: height * 40,
                        backgroundColor: '#8721be',
                    }}
                >
                    <Text style={{ fontSize: 30, fontFamily: 'PretendardSemiBold', color:'rgb(255,255,255)' }}>저장</Text>
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
    TypeInput: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 15,
        color: 'black',
        borderColor: 'gray',
        borderBottomWidth: 1,
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
        textAlignVertical: 'top',
    },
});

export default RecipeAddScreen;

{
    /* //이미지 업로드 기능
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
*/
}
