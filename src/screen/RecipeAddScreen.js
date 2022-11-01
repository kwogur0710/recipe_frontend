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
import { TopBar } from '../components/MainComponents/TopBar';

const GetId = () => {
    return Math.floor(Math.random() * 10000);
};

const RecipeAddScreen = ({ route, navigation }) => {
    const RecipeData = route.params?.RecipeData;
    const [visibleModal, setVisibleModal] = useState(false);
    const showToast = (text) => {
        Platform.OS === 'android' ? ToastAndroid.show(text, ToastAndroid.SHORT) : null;
        console.log('showToast', text);
    };
    const [modalName, setModalName] = useState('');
    const [modalValue, setModalValue] = useState('');
    const [modalList, setModalList] = useState('');
    const [partsA, setPartsA] = useState('');
    const [partsB, setPartsB] = useState('');
    const [addList, setAddList] = useState([]);
    const [stage, setStage] = useState([{ index: 1, text: 'MANUAL01', image: 'MANUAL_IMG01' }]);
    const [textValue, setTextValue] = useState([]);
    const [stageNum, setStageNum] = useState(2);
    let name = '';
    let img = '';
    const [inputs, setInputs] = useState({
        ATT_FILE_NO_MAIN: '',
        ATT_FILE_NO_MK: '',
        HASH_TAG: '',
        INFO_CAR: '',
        INFO_ENG: '',
        INFO_FAT: '',
        INFO_NA: '',
        INFO_PRO: '',
        INFO_WGT: '',
        MANUAL01: '',
        MANUAL02: '',
        MANUAL03: '',
        MANUAL04: '',
        MANUAL05: '',
        MANUAL06: '',
        MANUAL07: '',
        MANUAL08: '',
        MANUAL09: '',
        MANUAL10: '',
        MANUAL11: '',
        MANUAL12: '',
        MANUAL13: '',
        MANUAL14: '',
        MANUAL15: '',
        MANUAL16: '',
        MANUAL17: '',
        MANUAL18: '',
        MANUAL19: '',
        MANUAL20: '',
        MANUAL_IMG01: '',
        MANUAL_IMG02: '',
        MANUAL_IMG03: '',
        MANUAL_IMG04: '',
        MANUAL_IMG05: '',
        MANUAL_IMG06: '',
        MANUAL_IMG07: '',
        MANUAL_IMG08: '',
        MANUAL_IMG09: '',
        MANUAL_IMG10: '',
        MANUAL_IMG11: '',
        MANUAL_IMG12: '',
        MANUAL_IMG13: '',
        MANUAL_IMG14: '',
        MANUAL_IMG15: '',
        MANUAL_IMG16: '',
        MANUAL_IMG17: '',
        MANUAL_IMG18: '',
        MANUAL_IMG19: '',
        MANUAL_IMG20: '',
        RCP_NM: '',
        RCP_PARTS_DTLS: '',
        RCP_PAT2: '',
        RCP_SEQ: '',
        RCP_WAY2: '',
    });
    const {
        ATT_FILE_NO_MAIN,
        ATT_FILE_NO_MK,
        HASH_TAG,
        INFO_CAR,
        INFO_ENG,
        INFO_FAT,
        INFO_NA,
        INFO_PRO,
        INFO_WGT,
        MANUAL01,
        MANUAL02,
        MANUAL03,
        MANUAL04,
        MANUAL05,
        MANUAL06,
        MANUAL07,
        MANUAL08,
        MANUAL09,
        MANUAL10,
        MANUAL11,
        MANUAL12,
        MANUAL13,
        MANUAL14,
        MANUAL15,
        MANUAL16,
        MANUAL17,
        MANUAL18,
        MANUAL19,
        MANUAL20,
        MANUAL_IMG01,
        MANUAL_IMG02,
        MANUAL_IMG03,
        MANUAL_IMG04,
        MANUAL_IMG05,
        MANUAL_IMG06,
        MANUAL_IMG07,
        MANUAL_IMG08,
        MANUAL_IMG09,
        MANUAL_IMG10,
        MANUAL_IMG11,
        MANUAL_IMG12,
        MANUAL_IMG13,
        MANUAL_IMG14,
        MANUAL_IMG15,
        MANUAL_IMG16,
        MANUAL_IMG17,
        MANUAL_IMG18,
        MANUAL_IMG19,
        MANUAL_IMG20,
        RCP_NM,
        RCP_PARTS_DTLS,
        RCP_PAT2,
        RCP_SEQ,
        RCP_WAY2,
    } = inputs;
    //textInput onChangeText 함수
    const onChange = (keyvalue, e) => {
        console.log(keyvalue, e);
        const text = e;
        setInputs({
            ...inputs,
            [keyvalue]: text,
        });
    };
    const TypeSet = (value, name) => {
        const text = name;
        setInputs({
            ...inputs,
            [value]: text,
        });
    };
    const SaveTextValue = () => {
        textValue.map((item) => {
            setInputs({ ...inputs, [String(item.image)]: textValue[item.index] });
        });
    };
    const Save = (value) => {
        let a;
        addList.map((item) => {
            let b = a;
            a = b + ', ' + item;
        });
        setInputs({
            ...inputs,
            RCP_PARTS_DTLS: a,
        });
        RecipeData.push(inputs);
        setInputs({
            RCP_SEQ: GetId(),
            ATT_FILE_NO_MAIN: '',
            RCP_NM: '',
            RCP_PARTS_DTLS: '',
            RCP_PAT2: '',
            RCP_WAY2: '',
            MANUAL01: '',
            MANUAL_IMG01: '',
            MANUAL02: '',
            MANUAL_IMG02: '',
            MANUAL03: '',
            MANUAL_IMG03: '',
            MANUAL04: '',
            MANUAL_IMG04: '',
            MANUAL05: '',
            MANUAL_IMG05: '',
            MANUAL06: '',
            MANUAL_IMG06: '',
            MANUAL07: '',
            MANUAL_IMG07: '',
            MANUAL08: '',
            MANUAL_IMG08: '',
            MANUAL09: '',
            MANUAL_IMG09: '',
            MANUAL10: '',
            MANUAL_IMG10: '',
            MANUAL11: '',
            MANUAL_IMG11: '',
            MANUAL12: '',
            MANUAL_IMG12: '',
            MANUAL13: '',
            MANUAL_IMG13: '',
            MANUAL14: '',
            MANUAL_IMG14: '',
            MANUAL15: '',
            MANUAL_IMG15: '',
            MANUAL16: '',
            MANUAL_IMG16: '',
            MANUAL17: '',
            MANUAL_IMG17: '',
            MANUAL18: '',
            MANUAL_IMG18: '',
            MANUAL19: '',
            MANUAL_IMG19: '',
            MANUAL20: '',
            MANUAL_IMG20: '',
        });
        setAddList([]);
    };
    const addListRemove = (item) => {
        const a = addList;
        const b = [];
        console.log(a);

        a.forEach((e) => {
            if (e.parts === item.parts) console.log('같은거 발견!', e, item);
            else b.push(e);
        });
        setAddList(b);
    };

    // 권한 요청을 위한 hooks
    const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

    const uploadImage = async (value) => {
        console.log('value : ', value);
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
            allowsEditing: true,
            quality: 1,
            aspect: [1, 1],
        });
        if (result.cancelled) {
            return null; // 이미지 업로드 취소한 경우
        }
        setInputs({
            ...inputs,
            [value]: result.uri,
        });
        console.log(inputs);
    };
    const partsAdd = () => {
        const parts = partsA + '(' + partsB + ')';
        setAddList([...addList, { parts: parts, partsA: partsA, partsB: partsB }]);
        console.log('addList', addList);
        setPartsA('');
        setPartsB('');
    };
    const onChangeParts = (keyvalues, e) => {
        const text = e;
        if (keyvalues == 'partsA') setPartsA(text);
        else if (keyvalues == 'partsB') setPartsB(text);
        console.log(keyvalues, e);
    };
    const ModalList = ({ name, value, list }) => {
        console.log('value :', value);
        console.log('name :', name);
        const BtnList = ({ value, name }) => {
            console.log(value, name);
            return (
                <TouchableOpacity
                    onPress={() => {
                        setVisibleModal(false),
                            TypeSet(value, name),
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
                            {name}
                        </Text>
                    </View>
                </TouchableOpacity>
            );
        };
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
                                        return <BtnList value={value} name={item} />;
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

    const TextImage = (item) => {
        console.log('테스트 ', String(item.item.image), inputs[String(item.item.image)]);
        const [text, setText] = useState('');
        const TextSave = () => {
            setInputs({
                ...inputs,
                [String(item.item.text)]: text,
            });
        };
        return (
            <View>
                <TouchableOpacity
                    style={{
                        marginTop: height * 4,
                        marginBottom: height * 4,
                    }}
                    onPress={() => {
                        uploadImage(String(item.item.image));
                    }}
                >
                    {inputs[String(item.item.image)] == '' ? (
                        <View
                            style={{
                                width: width * 320,
                                height: width * 320,
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
                            source={{ uri: inputs[String(item.item.image)] }}
                            resizeMode="cover"
                            style={{
                                width: width * 320,
                                height: width * 320,
                                borderRadius: 10,
                            }}
                        />
                    )}
                </TouchableOpacity>
                <TextInput
                    multiline
                    onChangeText={(e) => {
                        setInputs({ ...inputs, [String(item.item.text)]: e });
                    }}
                    value={inputs[String(item.item.text)]}
                    style={styles.TextInputBox}
                    placeholder={'레시피 내용'}
                    placeholderTextColor={'#999999'}
                />
            </View>
        );
    };
    return (
        <SafeAreaView style={styles.container}>
            <TopBar title="레시피 글쓰기" />
            <ScrollView style={{ width: '100%' }}>
                <ModalList name={modalName} value={modalValue} list={modalList} />
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
                        onPress={() => {
                            uploadImage('ATT_FILE_NO_MAIN');
                        }}
                    >
                        {!inputs.ATT_FILE_NO_MAIN ? (
                            <View
                                style={{
                                    width: width * 320,
                                    height: width * 320,
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
                                source={{ uri: inputs.ATT_FILE_NO_MAIN }}
                                ß
                                style={{
                                    width: width * 320,
                                    height: width * 320,
                                    borderRadius: 10,
                                }}
                            />
                        )}
                    </TouchableOpacity>
                    <TextInput
                        onChangeText={(e) => onChange('RCP_NM', e)}
                        value={RCP_NM}
                        style={styles.TitleInput}
                        placeholder={'레시피 제목'}
                        placeholderTextColor={'#999999'}
                    />
                    <TouchableOpacity
                        style={styles.TypeInput}
                        onPress={() => {
                            setVisibleModal(true);
                            setModalName('음식 종류');
                            setModalValue('RCP_PAT2');
                            setModalList(['밥', '일품', '국&찌개', '반찬', '후식']);
                        }}
                    >
                        {inputs.RCP_PAT2 ? (
                            <Text style={styles.TextRecipe}> {inputs.RCP_PAT2} </Text>
                        ) : (
                            <Text style={styles.TextRecipe}>음식 종류</Text>
                        )}
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.TypeInput}
                        onPress={() => {
                            setVisibleModal(true);
                            setModalName('음식 종류');
                            setModalValue('RCP_WAY2');
                            setModalList(['찌기', '끓이기', '굽기', '볶기', '튀기기', '기타']);
                        }}
                    >
                        {inputs.RCP_WAY2 ? (
                            <Text style={styles.TextRecipe}> {inputs.RCP_WAY2} </Text>
                        ) : (
                            <Text style={styles.TextRecipe}>음식 종류</Text>
                        )}
                    </TouchableOpacity>

                    <View style={styles.materialTypeInput}>
                        {addList.map((item) => {
                            return (
                                <View
                                    key={String(item.parts)}
                                    style={{
                                        flexDirection: 'row',
                                        width: '100%',
                                        alignItems: 'center',
                                        justifyContent: 'space-around',
                                    }}
                                >
                                    <View style={styles.materialList}>
                                        <Text style={styles.materialListText}>{item.partsA}</Text>
                                    </View>
                                    <View style={styles.materialList}>
                                        <Text style={styles.materialListText}>{item.partsB}</Text>
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
                                justifyContent: 'space-around',
                            }}
                        >
                            <TextInput
                                onChangeText={(e) => onChangeParts('partsA', e)}
                                value={partsA}
                                style={styles.materialInputText}
                                placeholder={'재료'}
                                placeholderTextColor={'#999999'}
                            />
                            <TextInput
                                onChangeText={(e) => onChangeParts('partsB', e)}
                                value={partsB}
                                style={styles.materialInputText}
                                placeholder={'재료 양'}
                                placeholderTextColor={'#999999'}
                            />
                            {partsA && partsB ? (
                                <TouchableOpacity
                                    onPress={() => {
                                        partsAdd(), console.log('재료 추가 Press');
                                    }}
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Feather name="plus" size={20} color="black" />
                                </TouchableOpacity>
                            ) : (
                                <Feather name="plus" size={20} color="white" />
                            )}
                        </View>
                    </View>
                    {stage.map((item) => {
                        return <TextImage item={item} />;
                    })}
                    <TouchableOpacity
                        onPress={() => {
                            setStage([
                                ...stage,
                                {
                                    index: stageNum,
                                    text: 'MANUAL' + String(stageNum).padStart(2, '0'),
                                    image: 'MANUAL_IMG' + String(stageNum).padStart(2, '0'),
                                },
                            ]);
                            //SaveTextValue();
                            setStageNum(stageNum + 1);
                        }}
                    >
                        <Feather name="plus" size={20} color="black" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        partsA.length > 0 || partsB.length > 0
                            ? showToast('재료추가 버튼을 눌러주세요!')
                            : inputs.RCP_NM &&
                              inputs.ATT_FILE_NO_MAIN &&
                              inputs.RCP_PAT2 &&
                              inputs.RCP_WAY2 &&
                              addList &&
                              inputs.MANUAL_IMG01 &&
                              inputs.MANUAL01
                            ? (Save(inputs),
                              console.log(RecipeData, '저장성공'),
                              navigation.navigate('MainScreen', { RecipeData: RecipeData }))
                            : (console.log('저장 실패'), showToast('모든 항목을 입력해주세요!'));
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
        paddingLeft: width * 20,
        paddingRight: width * 20,
        backgroundColor: '#FFFFFF',
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
        paddingTop: height * 14,
        paddingBottom: height * 14,
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
        width: width * 320,
        height: height * 100,
        paddingLeft: width * 8,
        paddingRight: width * 8,
        paddingTop: height * 8,
        paddingBottom: height * 8,
        marginBottom: height * 10,
        textAlignVertical: 'top',
        borderColor: '#999999',
        borderWidth: 1,
        borderRadius: 5,
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
