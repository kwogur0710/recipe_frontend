import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text,
    ScrollView,
} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { height, width } from '../../config/globalStyles';
import { JumpingTransition } from 'react-native-reanimated';
import { TopBar } from '../components/MainComponents/TopBar';

export const CommentScreen = ({ route }) => {
    const navigation = useNavigation();
    const [postNum, setPostNum] = useState(route.params?.postNum);
    const [user, setUser] = useState(route.params?.user);
    const [inputContents, setInputContents] = useState();
    const [comments, setComments] = useState();
    const [save, setSave] = useState(false);
    //const [refresh, setRefresh] = useState(false);
    const CommentRefresh = () => {
        CommentGet();
    };

    // 첫 렌더링 때 CommentGet() 실행
    useEffect(() => {
        CommentGet();
    }, []);
    // 저장버튼 누를때 때 CommentGet() 실행
    useEffect(() => {
        CommentGet();
        setSave(false);
    }, [save]);
    const CommentDelete = async (commentNum) => {
        const commentNumber = commentNum;
        const serverURL = 'https://recipe.loca.lt/';
        const localserverURL = 'http://localhost:4000/';
        return axios
            .post(`${serverURL}/post/comment/delete`, {
                postNum: postNum,
                commentNum: commentNumber,
            })
            .then((response) => {
                setComments(response.data);
                CommentGet();
            })
            .catch((err) => {
                console.log('err : ', err);
                return err.response;
            });
    };
    const CommentSave = async () => {
        const postNumber = postNum;
        const id = user.id;
        const nickname = user.nickname;
        const contents = inputContents;
        const serverURL = 'https://recipe.loca.lt/';
        const localserverURL = 'http://localhost:4000/';
        return axios
            .post(`${serverURL}/post/comment/save`, {
                postNum: postNumber,
                id: id,
                nickname: nickname,
                contents: contents,
            })
            .then((response) => {
                return response;
            })
            .catch((err) => {
                console.log('err : ', err);
                return err.response;
            });
    };
    const CommentGet = async () => {
        const serverURL = 'https://recipe.loca.lt/';
        const localserverURL = 'http://localhost:4000/';
        try {
            const response = await axios.get(`${serverURL}/post/comment/get/postnum=${postNum}`);
            setComments(response.data);
        } catch (err) {
            console.log(err);
        }
    };
    const dateToStr = (dateTo) => {
        const week = new Array('일', '월', '화', '수', '목', '금', '토');
        const date = new Date(dateTo);
        const localTime = date.toLocaleTimeString();

        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const dayName = week[date.getDay()];
        const hours = date.getHours();
        const minute = date.getMinutes();
        return (
            year +
            '년 ' +
            month +
            '월 ' +
            day +
            '일 ' +
            dayName +
            '요일 ' +
            hours +
            '시 ' +
            minute +
            '분'
        );
    };
    const CommentList = () => {
        return (
            <View>
                {comments.map((item) => {
                    return (
                        <View key={item.commentNum} style={{ width: '100%' }}>
                            <View
                                style={{
                                    marginTop: height * 10,
                                    marginBottom: height * 10,
                                    marginLeft: width * 10,
                                    marginRight: width * 10,
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        height: height * 20,
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontFamily: 'PretendardMedium',
                                            fontSize: height * 14,
                                        }}
                                    >
                                        {item.nickname}
                                    </Text>
                                    {item.id == user.id ? (
                                        <TouchableOpacity
                                            onPress={() => {
                                                CommentDelete(item.commentNum);
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontFamily: 'PretendardLight',
                                                    fontSize: height * 12,
                                                }}
                                            >
                                                삭제
                                            </Text>
                                        </TouchableOpacity>
                                    ) : null}
                                </View>
                                <Text
                                    style={{
                                        fontFamily: 'PretendardLight',
                                        fontSize: height * 12,
                                        width: width * 200,
                                    }}
                                >
                                    {dateToStr(item.makedate)}
                                </Text>
                                <Text
                                    style={{ fontFamily: 'PretendardLight', fontSize: height * 12 }}
                                >
                                    {item.contents}
                                </Text>
                            </View>
                        </View>
                    );
                })}
            </View>
        );
    };

    if (comments) {
        return (
            <SafeAreaView style={style.container}>
                <TopBar
                    screen="Comment"
                    title="댓글"
                    CommentRefresh={CommentRefresh}
                    refresh={true}
                />
                <ScrollView style={{width:'100%'}}>
                    <CommentList />
                    <View style={{ flexDirection: 'row' }}></View>
                </ScrollView>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        placeholder={'댓글입력'}
                        placeholderTextColor={'#959595'}
                        style={{
                            fontSize: width * 14,
                            height: width * 50,
                            width: width * 310,
                            padding: width * 10,
                        }}
                        value={inputContents}
                        multiline={true}
                        onChangeText={(e) => {
                            setInputContents(e);
                        }}
                    />
                    <TouchableOpacity
                        style={{
                            width: width * 50,
                            height: height * 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={async () => {
                            CommentSave();
                            await CommentGet();
                            setSave(true);
                            setInputContents('');
                        }}
                    >
                        <Text>저장</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
};
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', //가로정렬 : 중앙
        paddingTop: Platform.OS === 'android' ? height * 40 : 0,
        backgroundColor: '#FFFFFF',
    },
});
export default CommentScreen;
