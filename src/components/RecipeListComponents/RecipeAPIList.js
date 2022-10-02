import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RecipeData } from '../../../config/RecipeData';
import { height, marginWidth, width } from '../../../config/globalStyles';

export const RecipeAPIList = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.titleimg} source={props.item.img} />
            <View style={{ marginLeft: 10 }}>
                <Text style={{ fontFamily: 'PretendardSemiBold', fontSize: 18, marginBottom: 4 }}>
                    {props.item.title}
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        height: 18,
                        alignItems: 'center',
                        marginBottom: 6,
                    }}
                >
                    <Image
                        resizeMode="contain"
                        style={styles.iconImg}
                        source={require('../../../image/icon/difficulty.png')}
                    />
                    <Text style={styles.text}> {props.item.difficulty}단계 </Text>
                    <Image
                        resizeMode="contain"
                        style={styles.iconImg}
                        source={require('../../../image/icon/time.png')}
                    />
                    <Text style={styles.text}> {props.item.time}분 </Text>
                    <Image
                        resizeMode="contain"
                        style={styles.iconImg}
                        source={require('../../../image/icon/serving.png')}
                    />
                    <Text style={styles.text}> {props.item.serving}인분 </Text>
                </View>
                <View
                    style={{
                        borderRadius: 50,
                        backgroundColor: '#E4E4E4',
                        width: width * 34,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: width * 4,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'PretendardMedium',
                            fontSize: height * 12,
                        }}
                    >
                        {props.item.type}
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: width*330,
        height: height * 100,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 4,
        borderBottomWidth: 1,
        borderColor: '#E4E4E4',
    },
    titleimg: {
        width: width * 100,
        height: height * 90,
        borderRadius: 10,
    },
    iconImg: {
        height: height * 18,
        width: height * 18,
    },
    text: {
        fontFamily: 'PretendardMedium',
        fontSize: height * 12,
        marginRight: 4,
    },
});
