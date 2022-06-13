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
import { Feather } from '@expo/vector-icons';

const [materialA, setMaterialA] = useState('');
const [amountA, setAmountA] = useState('');
const onUpdateMaterial = ( text ) => {
    setMaterialA(text);
    console.log('materialA',materialA);
};
const onUpdateAmount = (text) => {
    setAmountA(text);
    console.log('setAmountA', amountA);
};

export const MaterialModal = ({ name, value, list }) => {
    let count = 1;
    return (
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
                        console.log(item);
                        return (
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-around',
                                }}
                            >
                                <TextInput
                                    onChangeText={(e) => onUpdateMaterial(e)}
                                    style={styles.materialInput}
                                    placeholder={'재료'}
                                    placeholderTextColor={'#959595'}
                                    value={materialA}
                                />
                                <TextInput
                                    onChange={(e) => onUpdateAmount(e)}
                                    style={styles.materialInput}
                                    placeholder={'양'}
                                    placeholderTextColor={'gray'}
                                />
                            </View>
                        );
                    }}
                />
                <TouchableOpacity
                    onPress={() => {
                        list.push((count += 1));
                        console.log(list, 'push');
                    }}
                    style={{
                        width: '100%',
                        height: height * 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Text
                        style={{
                            fontSize: height * 14,
                            fontFamily: 'PretendardSemiBold',
                            color: '#333333',
                        }}
                    >
                        재료 추가하기
                    </Text>
                </TouchableOpacity>
            </View>
            <View
                style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
            >
                <TouchableOpacity
                    style={{
                        width: width * 200,
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
                            width: '100%',
                            height: height * 50,
                            borderColor: 'gray',
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
                <TouchableOpacity
                    style={{
                        width: width * 200,
                        height: height * 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    onPress={() => {
                        materialSave();
                        setVisibleModal(false);
                    }}
                >
                    <View
                        style={{
                            width: '100%',
                            height: height * 50,
                            borderColor: 'gray',
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
                            저장
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export const ModalList = ({ name, value, list }) => {
    return (
        <SafeAreaView>
            <Modal animationType="slide" transparent={true} visible={visibleMoal}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        backgroundColor: 'rgba(100, 100, 100, 0.5)',
                        bottom: Platform.OS !== 'android' ? height * 20 : 0,
                    }}
                >
                    {modalName != '재료' ? (
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
                                        borderColor: 'gray',
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
                    ) : (
                        <MaterialModal name={name} value={value} list={list} />
                    )}
                </View>
            </Modal>
        </SafeAreaView>
    );
};


const BtnList = ({ value, name }) => {
    return (
        <TouchableOpacity
            onPress={() => {
                setVisibleModal(false),
                    onTouch(value, name),
                    console.log('onTouch', value, name);
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