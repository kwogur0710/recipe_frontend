import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RecipeData } from '../../../config/RecipeData';
import { height, marginWidth, width } from '../../../config/globalStyles';

export const RecipeList = (props) => {
    console.log('list', props.item);
    return (
        <View style={styles.container}>
            <Image style={styles.titleimg} source={{ uri: props.item.ATT_FILE_NO_MAIN }} />
            <View style={{ marginLeft: 10 }}>
                <Text style={{ fontFamily: 'PretendardSemiBold', fontSize: 18, marginBottom: 4 }}>
                    {props.item.RCP_NM}
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <View
                        style={{
                            borderRadius: 50,
                            backgroundColor: '#E4E4E4',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: height * 4,
                            marginRight: width * 4,
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: 'PretendardMedium',
                                fontSize: height * 12,
                            }}
                        >
                            {props.item.RCP_WAY2}
                        </Text>
                    </View>
                    <View
                        style={{
                            borderRadius: 50,
                            backgroundColor: '#E4E4E4',
                            paddingLeft:width*4,
                            paddingRight:width*4,
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
                            {props.item.RCP_PAT2}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: width * 330,
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
