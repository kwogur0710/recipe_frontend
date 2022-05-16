import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, Image } from 'react-native';
import { height, marginWidth, width } from '../../config/globalStyles';
import { Feather } from '@expo/vector-icons';

const SettingScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profileFrame}>
                <Image source={require('../../image/icon/profile.png')} style={styles.profileImage} />
                <Text style={styles.profileText}> SAU Recipe </Text>
            </View>

            <View style={styles.settingFrame}>
                <Image source={require('../../image/icon/heart.png')} style={styles.SettingImage} />
                <Text style={styles.SettingText}> 좋아요 </Text>
            </View>

            <View style={styles.settingFrame}>
                <Image source={require('../../image/icon/help.png')} style={styles.SettingImage} />
                <Text style={styles.SettingText}> 도움말 </Text>
            </View>

            <View style={styles.settingFrame}>
                <Image source={require('../../image/icon/megaphone.png')} style={styles.SettingImage} />
                <Text style={styles.SettingText}> 공지사항 </Text>
            </View>

            <View style={styles.settingFrame}>
                <Image source={require('../../image/icon/setting.png')} style={styles.SettingImage} />
                <Text style={styles.SettingText}> 설정 </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        //바탕
        flex: 1,
        alignItems: 'center', //가로정렬 : 중앙
        paddingTop: Platform.OS === 'android' ? 40 : 0,
        marginBottom: height * 20, //마진 : 10%
    },
    profileFrame: {
        flexDirection: 'row',
        borderColor: 'gray',
        paddingLeft: width * 14,
        height: height * 70,
        width: width * 360,
        alignItems: 'center',
    },
    settingFrame: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: 'gray',
        paddingLeft: width * 20,
        height: height * 50,
        width: width * 360,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    SettingImage: {
        width: width * 20,
        height: width * 20,
    },
    profileImage: {
        marginRight: width * 10,
        width: width * 60,
        height: width * 60,
        borderRadius: 100,
    },    
    profileText: {
        fontSize: 30,
        fontFamily: 'PretendardSemiBold' 
    },
    SettingText: {
        marginLeft: width * 10,
        fontSize: 15,
        fontFamily: 'PretendardRegular' 
    },

});

export default SettingScreen;
