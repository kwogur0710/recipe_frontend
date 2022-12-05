import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { height, marginWidth, width } from '../../../config/globalStyles';

export const RecipeList = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.titleimg} source={{ uri: props.item.ATT_FILE_NO_MAIN }} />
            <View style={{ marginLeft: 10 }}>
                <Text style={{ fontFamily: 'PretendardSemiBold', fontSize: 18, marginBottom: 4 }}>
                    {props.item.RCP_NM}
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.tagBox}>
                        <Text style={styles.tagText}>{props.item.RCP_WAY2}</Text>
                    </View>
                    <View style={styles.tagBox}>
                        <Text style={styles.tagText}>{props.item.RCP_PAT2}</Text>
                    </View>
                    {props.item.HASH_TAG ? (
                        <View style={styles.tagBox}>
                            <Text style={styles.tagText}>{props.item.HASH_TAG}</Text>
                        </View>
                    ) : null}
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
    tagBox: {
        borderRadius: 50,
        backgroundColor: '#E4E4E4',
        marginRight: width * 6,
        paddingLeft: width * 6,
        paddingRight: width * 6,
        marginBottom: width * 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tagText: {
        fontFamily: 'PretendardMedium',
        fontSize: height * 12,
    },
});
