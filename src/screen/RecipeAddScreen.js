import React, { useState, useEffect } from 'react';
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
    ToastAndroid,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { height, marginWidth, width } from '../../config/globalStyles';
import { RecipeData } from '../../config/RecipeData';
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';

const GetId = () => {
    return Math.floor(Math.random() * 10000);
};

const RecipeAddScreen = () => {
    const navigation = useNavigation();
    const [visibleModal, setVisibleModal] = useState(false);
    const [visibleMaterialModal, setVisibleMaterialModal] = useState(false);
    const showToast = (text) => {
        Platform.OS === 'android' ? ToastAndroid.show(text, ToastAndroid.SHORT) : null;
    };

    const [modalName, setModalName] = useState('');
    const [modalValue, setModalValue] = useState('');
    const [modalList, setModalList] = useState('');
    const [modalE, setModalUnit] = useState('');
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
        amount: '',
    });
    const { id, type, title, img, difficulty, serving, time, material, detail, amount } = inputs;

    const timeset = () => {
        let a = [];
        for (let i = 5; i <= 100; i += 5) {
            a.push(i);
        }
        return a;
    };

    const onChange = (keyvalue, e) => {
        const { text } = e.nativeEvent;
        setInputs({
            ...inputs,
            [keyvalue]: text,
        });
        console.log(keyvalue, text);
    };

    const pressSave = (value, name) => {
        const text = name;
        setInputs({
            ...inputs,
            [value]: text,
        });
        console.log(inputs);
    };
    const InputSave = () => {
        let m = [];
        let a = [];
        addList.map((item) => {
            console.log('item', item);
            m.push(item.materialB);
            a.push(item.materialB + item.amountB);
        });
        if (materialA) m.push(materialA);
        if (amountA) a.push(materialA + amountA);
        setInputs({
            ...inputs,
            material: m,
            amount: a,
        });
        console.log('inputs', inputs.material, inputs.amount);
    };
    const Save = (value) => {
        InputSave();
        RecipeData.push(inputs);
        inputsReset();
    };
    const inputsReset = () => {
        setImageUrl('');
        setInputs({
            id: GetId(),
            title: '',
            type: '',
            img: '',
            difficulty: '',
            serving: '',
            time: '',
            material: '',
            detail: '',
            amount: '',
        });
        setAddList([]);
    };
    const addListRemove = (item) => {
        const a = addList;
        let b = [];
        console.log(a);

        a.filter((e)=>{
            e.amountB === item.amountB && e.materialB === item.materialB 
            ? console.log('같은거 발견!', e, item)
            : b.push(e);
        })
        setAddList(b);

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
    const [addList, setAddList] = useState([]);
    const materialAdd = () => {
        const materialB = inputsA.materialA;
        const amountB = inputsA.amountA;
        const recipe = { materialB, amountB };
        setInputsA({ materialA: '', amountA: '' });
        setAddList([...addList, recipe]);
        console.log('addList', addList);
        console.log(materialA, amountA);
        console.log(material, amount);
        InputSave();
    };
    const [inputsA, setInputsA] = useState({ materialA: '', amountA: '' });
    const { materialA, amountA } = inputsA;
    const onUpdateMaterial = (text) => {
        setInputsA({
            ...inputsA,
            materialA: text,
        });
        console.log(inputsA);
    };
    const onUpdateAmount = (value) => {
        const text = value;
        setInputsA({
            ...inputsA,
            amountA: text,
        });
    };
    const BtnList = ({ value, name, e }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    setVisibleModal(false),
                        pressSave(value, name),
                        console.log('pressSave', value, name);
                }}
            >
                <View
                    style={{
                        padding: width * 10,
                        paddingLeft: width * 30,
                        borderColor: '#999999',
                    }}
                >
                    <Text
                        style={{
                            fontSize: height * 16,
                            fontFamily: 'PretendardRegular',
                        }}
                    >
                        {name} {e}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };
    const ModalList = ({ name, value, list, e }) => {
        return (
            <SafeAreaView>
                <Modal animationType="slide" transparent={true} visible={visibleModal}>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            backgroundColor: 'rgba(100, 100, 100, 0.5)',
                            bottom: Platform.OS !== 'android' ? height * 20 : 0,
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
                                    {modalName}
                                </Text>
                                <FlatList
                                    data={list}
                                    style={{ height: height * 200 }}
                                    keyExtractor={(item) => String(item)}
                                    renderItem={({ item }) => {
                                        return <BtnList value={value} name={item} e={e} />;
                                    }}
                                />
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
                                        borderColor: '#999999',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: '#8721be',
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: height * 16,
                                            fontFamily: 'PretendardSemiBold',
                                            color: '#ffffff',
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
            <View style={styles.TopBar}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={styles.TopBtn}
                        onPress={() => {
                            navigation.goBack();
                        }}
                    >
                        <Feather name="chevron-left" size={26} color="black" />
                    </TouchableOpacity>
                    <Text
                        style={{
                            fontSize: height * 20,
                            fontFamily: 'PretendardBold',
                            color: '#222222',
                            marginLeft: width * 4,
                        }}
                    >
                        레시피 글쓰기
                    </Text>
                    <View style={styles.TopBtn} />
                </View>
                <View style={styles.TopBtn} />
            </View>
            <ScrollView style={{ width: '100%' }}>
                <ModalList name={modalName} value={modalValue} list={modalList} e={modalE} />
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: height * 6,
                    }}
                >
                    <TouchableOpacity
                        style={{
                            marginTop: height * 4,
                            marginBottom: height * 4,
                        }}
                        onPress={uploadImage}
                    >
                        {!imageUrl ? (
                            <View
                                style={{
                                    padding: 20,
                                    borderWidth: 1,
                                    borderRadius: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderColor: '#999999',
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
                                    width: width * 320,
                                    height: width * 320,
                                    borderRadius: 10,
                                }}
                            />
                        )}
                    </TouchableOpacity>
                    <TextInput
                        onChange={(e) => onChange('title', e)}
                        value={title}
                        style={styles.TitleInput}
                        placeholder={'레시피 제목'}
                        placeholderTextColor={'#999999'}
                    />
                    <TouchableOpacity
                        style={styles.TypeInput}
                        onPress={() => {
                            setVisibleModal(true);
                            setModalName('음식 종류');
                            setModalValue('type');
                            setModalList(['한식', '일식', '중식', '양식']);
                            setModalUnit('');
                        }}
                    >
                        {inputs.type ? (
                            <Text style={styles.TextRecipe}> {inputs.type} </Text>
                        ) : (
                            <Text style={styles.TextRecipe}>음식 종류</Text>
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.TypeInput}
                        onPress={() => {
                            setVisibleModal(true);
                            setModalName('난이도');
                            setModalValue('difficulty');
                            setModalList(['1', '2', '3', '4', '5']);
                            setModalUnit('단계');
                        }}
                    >
                        {inputs.difficulty ? (
                            <Text style={styles.TextRecipe}> {inputs.difficulty} 단계</Text>
                        ) : (
                            <Text style={styles.TextRecipe}>난이도</Text>
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.TypeInput}
                        onPress={() => {
                            setVisibleModal(true);
                            setModalName('인분');
                            setModalValue('serving');
                            setModalList(['1', '2', '3', '4', '5', '6']);
                            setModalUnit('인분');
                        }}
                    >
                        {inputs.serving ? (
                            <Text style={styles.TextRecipe}> {inputs.serving} 인분 </Text>
                        ) : (
                            <Text style={styles.TextRecipe}>인분</Text>
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.TypeInput}
                        onPress={() => {
                            setVisibleModal(true);
                            setModalName('소요시간');
                            setModalValue('time');
                            setModalUnit('분');
                            setModalList(timeset());
                        }}
                    >
                        {inputs.time ? (
                            <Text style={styles.TextRecipe}> {inputs.time} 분 </Text>
                        ) : (
                            <Text style={styles.TextRecipe}>소요시간</Text>
                        )}
                    </TouchableOpacity>

                    <View style={styles.materialTypeInput}>
                        {addList.map((item) => {
                            return (
                                <View
                                    key={String(item.materialB + item.amountB)}
                                    style={{
                                        flexDirection: 'row',
                                        width: '100%',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <View style={styles.materialList}>
                                        <Text style={styles.materialListText}>
                                            {item.materialB}
                                        </Text>
                                    </View>
                                    <View style={styles.materialList}>
                                        <Text style={styles.materialListText}>{item.amountB}</Text>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => {
                                            addListRemove(item);
                                        }}
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Feather name="minus" size={20} color="black" />
                                    </TouchableOpacity>
                                </View>
                            );
                        })}
                        <View
                            style={{
                                flexDirection: 'row',
                                width: '100%',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            <TextInput
                                onChangeText={(text) => onUpdateMaterial(text)}
                                value={materialA}
                                style={styles.materialInputText}
                                placeholder={'재료'}
                                placeholderTextColor={'#999999'}
                            />
                            <TextInput
                                onChangeText={(text) => onUpdateAmount(text)}
                                value={amountA}
                                style={styles.materialInputText}
                                placeholder={'재료 양'}
                                placeholderTextColor={'#999999'}
                            />
                            <TouchableOpacity
                                onPress={() => {
                                    !materialA && !amountA
                                        ? null
                                        : (materialAdd(), console.log('재료 추가 Press'));
                                }}
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Feather name="plus" size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TextInput
                        multiline
                        numberOfLines={10}
                        onChange={(e) => onChange('detail', e)}
                        value={detail}
                        style={styles.TextInputBox}
                        placeholder={'레시피 내용'}
                        placeholderTextColor={'#999999'}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => {
                        materialA.length > 0 || amountA.length > 0
                            ? showToast('재료 항목 옆 플러스 버튼을 눌러주세요!')
                            : null,
                            inputs.id != '' &&
                            inputs.title !== '' &&
                            inputs.type != '' &&
                            inputs.difficulty != '' &&
                            inputs.material != '' &&
                            inputs.time != '' &&
                            inputs.material != '' &&
                            inputs.detail != '' &&
                            inputs.amount != ''
                                ? (navigation.navigate('MainScreen'),
                                  Save(inputs),
                                  console.log(inputs, '저장성공'))
                                : (console.log('저장 실패'),
                                  showToast('모든 항목을 입력해주세요!'));
                    }}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: height * 40,
                        backgroundColor: '#8721be',
                        marginBottom: height * 30,
                        borderRadius: 10,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 30,
                            fontFamily: 'PretendardSemiBold',
                            color: 'rgb(255,255,255)',
                        }}
                    >
                        저장
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center',
        paddingTop: Platform.OS === 'android' ? height * 40 : 0,
        marginLeft: width * 20,
        marginRight: width * 20,
    },
    TopBar: {
        height: height * 40, //높이
        width: width * 360, //너비
        flexDirection: 'row', //정렬방향
        alignItems: 'center', //가로정렬
        justifyContent: 'space-between', //세로정렬
        paddingTop: height * 4,
        paddingBottom: height * 4,
        paddingRight: width * 20,
        paddingLeft: width * 20,
        borderColor: 'gray',
    },
    TopBtn: {
        width: width * 30,
        padding: 4,
    },
    TitleInput: {
        width: '100%',
        paddingLeft: width * 8,
        paddingRight: width * 8,
        paddingTop: height * 8,
        paddingBottom: height * 8,
        marginBottom: height * 10,
        fontSize: height * 14,
        color: '#333333',
        borderColor: '#999999',
        borderBottomWidth: 1,
    },
    materialTypeInput: {
        width: '100%',
        paddingLeft: width * 8,
        paddingRight: width * 8,
        paddingTop: height * 14,
        paddingBottom: height * 14,
        borderColor: '#999999',
    },
    TypeInput: {
        width: '100%',
        paddingLeft: width * 8,
        paddingRight: width * 8,
        paddingTop: height * 14,
        paddingBottom: height * 14,
        borderColor: '#999999',
        borderBottomWidth: 1,
    },
    TextRecipe: {
        fontSize: height * 14,
        fontFamily: 'PretendardRegular',
    },
    materialList: {
        width: width * 130,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: width * 2,
        paddingRight: width * 2,
        paddingTop: height * 2,
        paddingBottom: height * 2,
        borderColor: '#999999',
    },
    materialListText: {
        fontSize: height * 14,
        fontFamily: 'PretendardRegular',
        color: '#333333',
    },
    materialInputText: {
        width: width * 130,
        paddingLeft: width * 8,
        paddingRight: width * 8,
        paddingTop: height * 8,
        paddingBottom: height * 8,
        marginTop: height * 6,
        marginBottom: height * 6,
        fontSize: height * 14,
        color: '#333333',
        borderColor: '#999999',
        borderBottomWidth: 1,
    },
    TextInputBox: {
        width: '100%',
        height: height * 200,
        paddingLeft: width * 8,
        paddingRight: width * 8,
        paddingTop: height * 8,
        paddingBottom: height * 8,
        marginBottom: height * 10,
        textAlignVertical: 'top',
        borderColor: '#999999',
        borderWidth: 1,
        borderRadius: 10,
        fontFamily: 'PretendardRegular',
        color: '#333333',
        fontSize: height * 14,
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
