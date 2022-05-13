import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, Image } from 'react-native';
import { height, marginWidth, width } from '../config/globalStyles';

const TestScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.View1}>
                <Text style={styles.Text1}> 레시피 </Text>
            </View>
            <View style={styles.container2}>
                <View style={styles.View2}>
                    <Text style={styles.Text3}> 방문한 레시피 </Text>
                </View>
                <View style={styles.View2}>
                    <Text style={styles.Text3}> 스크랩 </Text>
                </View>
                <View style={styles.View2}>
                    <Text style={styles.Text3}> 노트 </Text>
                </View>
                <View style={styles.View2}>
                    <Text style={styles.Text3}> 레시피 리뷰 </Text>
                </View>
            </View>

            <View style={styles.View6}>
                <Text style={styles.Text1}> </Text>
            </View>
            <View style={styles.View1}>
                <Text style={styles.Text1}> 재료 </Text>
            </View>
            <View style={styles.container2}>
                <View style={styles.View2}>
                    <Text style={styles.Text3}> 최근에 사용한 재료 </Text>
                </View>
                <View style={styles.View2}>
                    <Text style={styles.Text3}> 즐겨찾는 재료 </Text>
                </View>
                <View style={styles.View2}>
                    <Text style={styles.Text3}> 재료구매 </Text>
                </View>
                <View style={styles.View2}>
                    <Text style={styles.Text3}> 구매내역 </Text>
                </View>
            </View>

            <View style={styles.View7}>
                <Image
                    source={require('../image/icon/setting.png')}
                    style={{ width: 40, height: 40, marginBottom: 6, marginRight: 20, marginLeft:10 }}
                />
                <Text style={styles.Text2}> 알림 </Text>
            </View>
            <View style={styles.View7}>
                <Image
                    source={require('../image/icon/setting.png')}
                    style={{ width: 40, height: 40, marginBottom: 6, marginRight: 20, marginLeft:10 }}
                />
                <Text style={styles.Text2}> 문의하기 </Text>
            </View>
            <View style={styles.View7}>
                <Image
                    source={require('../image/icon/setting.png')}
                    style={{ width: 40, height: 40, marginBottom: 6, marginRight: 20, marginLeft:10 }}
                />
                <Text style={styles.Text2}> 앱 추천하기 </Text>
            </View>
            <View style={styles.View7}>
                <Image
                    source={require('../image/icon/setting.png')}
                    style={{ width: 40, height: 40, marginBottom: 6, marginRight: 20, marginLeft:10 }}
                />
                <Text style={styles.Text2}> 설정 </Text>
            </View>

            <View style={styles.View6}>
                <Text style={styles.Text1}> </Text>
            </View>

            <View style={styles.container2}>
                <View style={styles.View2}>
                    <Image
                        source={require('../image/icon/setting.png')}
                        style={{ width: 40, height: 40, marginBottom: 6 }}
                    />
                    <Text style={styles.Text3}> 이벤트 </Text>
                </View>
                <View style={styles.View2}>
                    <Text style={styles.Text3}> 공지사항 </Text>
                </View>
                <View style={styles.View2}>
                    <Text style={styles.Text3}> 광고문의 </Text>
                </View>
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
    View1: {
        justifyContent: 'center',
        height: height * 40,
        width: '100%',
        borderBottomWidth: 1,
    },
    container2: {
        height: height * 84,
        width: '100%',
        flexDirection: 'row',
    },
    View2: {
        flex: 1,
        borderLeftWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    View6: {
        borderBottomWidth: 1,
        justifyContent: 'center',
        backgroundColor: 'gray',
        width: '100%',
    },
    View7: {
        height: height * 70,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'
    },

    Text1: {
        fontSize: 20,
    },
    Text2: {
        fontSize: 30,
    },
    Text3: {
        fontSize: 15,
    },
    searchFrame: {
        //검색창 프레임
        borderWidth: 3, //테두리 굵기
        height: height * 40, //높이
        width: '100%', //너비
        borderRadius: 15, //테두리 둥글게 하는 수치
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },
});

export default TestScreen;
