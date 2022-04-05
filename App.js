import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Alert } from 'react-native-web';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.searchFrame}>
                <View style={styles.BackButton}></View>
                <View style={styles.search}>
                    <Text style={{ fontSize: 30 }}></Text>
                </View>
                <View style={styles.searchButton}></View>
            </View>
            <View style={styles.arrayFrame}>
                <View style={styles.array}><Text style={styles.arrayFont}>최신순</Text></View>
                <View style={styles.array}><Text style={styles.arrayFont}>추천순</Text></View>
                <View style={styles.array}><Text style={styles.arrayFont}>정확도순</Text></View>
            </View>
            <View style={styles.goodwordFrame}>
                <View style={styles.goodword}>
                    <Text style={styles.goodwordFont}>돼지고기 김치찌개</Text>
                </View>
                <View style={styles.goodword}>
                    <Text style={styles.goodwordFont}>순두부 김치찌개</Text>
                </View>
                <View style={styles.goodword}>
                    <Text style={styles.goodwordFont}>스팸 김치찌개</Text>
                </View>
            </View>
            <View style={styles.recipeList}>
                <View style={styles.recipeListFrame}>
                    <View style={styles.recipeListFrameImage}></View>
                    <View style={styles.recipeListFrameData}>
                        <View style={styles.recipeListFrameDataTitle}><Text style={styles.titleFont}>레시피 이름</Text></View>
                        <View style={styles.recipeListFrameDataReaction}>
                            <View style={styles.recipeListFrameDataReactionFrame}>
                                <View style={styles.recipeListFrameDataReactionImage}></View>
                                <View style={styles.recipeListFrameDataReactionText}><Text style={styles.reactionFont}>좋아요 수</Text></View>
                            </View>
                            <View style={styles.recipeListFrameDataReactionFrame}>
                                <View style={styles.recipeListFrameDataReactionImage}></View>
                                <View style={styles.recipeListFrameDataReactionText}><Text style={styles.reactionFont}>공유 수</Text></View>
                            </View>
                            <View style={styles.recipeListFrameDataReactionFrame}>
                                <View style={styles.recipeListFrameDataReactionImage}></View>
                                <View style={styles.recipeListFrameDataReactionText}><Text style={styles.reactionFont}>조회수</Text></View>
                            </View>
                        </View>
                        <View style={styles.recipeListFrameDataData}>
                        <View style={styles.recipeListFrameDataDataName}><Text style={styles.dataFont}>작성자 닉네임</Text></View>
                        <View style={styles.recipeListFrameDataDataFollower}><Text style={styles.dataFont}>팔로워 수</Text></View>
                            </View>
                    </View>
                </View>
                <View style={styles.recipeListFrame}>
                    <View style={styles.recipeListFrameImage}></View>
                    <View style={styles.recipeListFrameData}>
                        <View style={styles.recipeListFrameDataTitle}><Text style={styles.titleFont}>레시피 이름</Text></View>
                        <View style={styles.recipeListFrameDataReaction}>
                            <View style={styles.recipeListFrameDataReactionFrame}>
                                <View style={styles.recipeListFrameDataReactionImage}></View>
                                <View style={styles.recipeListFrameDataReactionText}><Text style={styles.reactionFont}>좋아요 수</Text></View>
                            </View>
                            <View style={styles.recipeListFrameDataReactionFrame}>
                                <View style={styles.recipeListFrameDataReactionImage}></View>
                                <View style={styles.recipeListFrameDataReactionText}><Text style={styles.reactionFont}>공유 수</Text></View>
                            </View>
                            <View style={styles.recipeListFrameDataReactionFrame}>
                                <View style={styles.recipeListFrameDataReactionImage}></View>
                                <View style={styles.recipeListFrameDataReactionText}><Text style={styles.reactionFont}>조회수</Text></View>
                            </View>
                        </View>
                        <View style={styles.recipeListFrameDataData}>
                        <View style={styles.recipeListFrameDataDataName}><Text style={styles.dataFont}>작성자 닉네임</Text></View>
                        <View style={styles.recipeListFrameDataDataFollower}><Text style={styles.dataFont}>팔로워 수</Text></View>
                            </View>
                    </View>
                </View>
                <View style={styles.recipeListFrame}>
                    <View style={styles.recipeListFrameImage}></View>
                    <View style={styles.recipeListFrameData}>
                        <View style={styles.recipeListFrameDataTitle}><Text style={styles.titleFont}>레시피 이름</Text></View>
                        <View style={styles.recipeListFrameDataReaction}>
                            <View style={styles.recipeListFrameDataReactionFrame}>
                                <View style={styles.recipeListFrameDataReactionImage}></View>
                                <View style={styles.recipeListFrameDataReactionText}><Text style={styles.reactionFont}>좋아요 수</Text></View>
                            </View>
                            <View style={styles.recipeListFrameDataReactionFrame}>
                                <View style={styles.recipeListFrameDataReactionImage}></View>
                                <View style={styles.recipeListFrameDataReactionText}><Text style={styles.reactionFont}>공유 수</Text></View>
                            </View>
                            <View style={styles.recipeListFrameDataReactionFrame}>
                                <View style={styles.recipeListFrameDataReactionImage}></View>
                                <View style={styles.recipeListFrameDataReactionText}><Text style={styles.reactionFont}>조회수</Text></View>
                            </View>
                        </View>
                        <View style={styles.recipeListFrameDataData}>
                        <View style={styles.recipeListFrameDataDataName}><Text style={styles.dataFont}>작성자 닉네임</Text></View>
                        <View style={styles.recipeListFrameDataDataFollower}><Text style={styles.dataFont}>팔로워 수</Text></View>
                            </View>
                    </View>
                </View>
                <View style={styles.recipeListFrame}>
                    <View style={styles.recipeListFrameImage}></View>
                    <View style={styles.recipeListFrameData}>
                        <View style={styles.recipeListFrameDataTitle}><Text style={styles.titleFont}>레시피 이름</Text></View>
                        <View style={styles.recipeListFrameDataReaction}>
                            <View style={styles.recipeListFrameDataReactionFrame}>
                                <View style={styles.recipeListFrameDataReactionImage}></View>
                                <View style={styles.recipeListFrameDataReactionText}><Text style={styles.reactionFont}>좋아요 수</Text></View>
                            </View>
                            <View style={styles.recipeListFrameDataReactionFrame}>
                                <View style={styles.recipeListFrameDataReactionImage}></View>
                                <View style={styles.recipeListFrameDataReactionText}><Text style={styles.reactionFont}>공유 수</Text></View>
                            </View>
                            <View style={styles.recipeListFrameDataReactionFrame}>
                                <View style={styles.recipeListFrameDataReactionImage}></View>
                                <View style={styles.recipeListFrameDataReactionText}><Text style={styles.reactionFont}>조회수</Text></View>
                            </View>
                        </View>
                        <View style={styles.recipeListFrameDataData}>
                        <View style={styles.recipeListFrameDataDataName}><Text style={styles.dataFont}>작성자 닉네임</Text></View>
                        <View style={styles.recipeListFrameDataDataFollower}><Text style={styles.dataFont}>팔로워 수</Text></View>
                            </View>
                    </View>
                </View>
                <View style={styles.recipeListFrame}>
                    <View style={styles.recipeListFrameImage}></View>
                    <View style={styles.recipeListFrameData}>
                        <View style={styles.recipeListFrameDataTitle}><Text style={styles.titleFont}>레시피 이름</Text></View>
                        <View style={styles.recipeListFrameDataReaction}>
                            <View style={styles.recipeListFrameDataReactionFrame}>
                                <View style={styles.recipeListFrameDataReactionImage}></View>
                                <View style={styles.recipeListFrameDataReactionText}><Text style={styles.reactionFont}>좋아요 수</Text></View>
                            </View>
                            <View style={styles.recipeListFrameDataReactionFrame}>
                                <View style={styles.recipeListFrameDataReactionImage}></View>
                                <View style={styles.recipeListFrameDataReactionText}><Text style={styles.reactionFont}>공유 수</Text></View>
                            </View>
                            <View style={styles.recipeListFrameDataReactionFrame}>
                                <View style={styles.recipeListFrameDataReactionImage}></View>
                                <View style={styles.recipeListFrameDataReactionText}><Text style={styles.reactionFont}>조회수</Text></View>
                            </View>
                        </View>
                        <View style={styles.recipeListFrameDataData}>
                        <View style={styles.recipeListFrameDataDataName}><Text style={styles.dataFont}>작성자 닉네임</Text></View>
                        <View style={styles.recipeListFrameDataDataFollower}><Text style={styles.dataFont}>팔로워 수</Text></View>
                            </View>
                    </View>
                </View>
                
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //바탕
        flex: 1,
        alignItems: 'center', //가로정렬 : 중앙
        marginTop: '15%', //위쪽 마진 : 10%
        marginBottom: '10%', //아래쪽 마진 : 10%
        marginLeft: '5%', //왼쪽 마진 : 10%
        marginRight: '5%', //오른쪽 마진 : 10%
    },

    searchFrame: {
        //검색창 프레임
        height: '6%', //높이 : '10%'
        borderWidth: 3, //테두리 굵기
        borderColor: '#6524FF', //테두리 색깔
        borderRadius: 100, //테두리 둥글게 하는 수치
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        backgroundColor: '#6524FF', // 바탕색
    },
    BackButton: {
        //이전버튼
        borderWidth: 1, //테두리 굵기
        height: '100%', //높이 : '100%'
        width: '12%', //너비 : '11%'
        marginLeft: '5%', //왼쪽 마진 : '5%'
        borderColor: 'white', //테두리 색깔
    },
    search: {
        //검색창
        //borderWidth: 1, //테두리 굵기
        height: '100%', //높이 : '100%'
        width: '60%', //너비 : '78%'
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },
    searchButton: {
        //검색버튼
        borderWidth: 1, //테두리 굵기
        height: '100%', //높이 : '100%'
        width: '12%', //너비 : '11%'
        marginRight: '5%', //오른쪽 마진 : '5%'
        borderColor: 'white', //테두리 색깔
    },

    arrayFrame: {
        //정렬 프레임
        borderWidth: 0, //테두리 굵기
        height: '5%', //높이 : '50%'
        width: '100%', //너비 : '100%'
        marginTop: '3%', //위쪽 마진 : 3%
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
    },
    array: {
        //정렬 버튼
        borderWidth: 1, //테두리 굵기
        flex: 1,
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },
    goodwordFrame: {
        //추천 단어 프레임
        borderWidth: 0, //테두리 굵기
        height: '4%', //높이 : '50%'
        width: '100%', //너비 : '100%'
        marginTop: '3%', //위쪽 마진 : 3%
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
    },
    goodword: {
        //추천 단어
        borderWidth: 1, //테두리 굵기
        borderRadius: 100, //테두리 둥글게 하는 수치
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        backgroundColor: '#6524FF', //바탕색 :
        height: '100%', //높이 : '100%'
        marginLeft: '5%', //왼쪽 마진 : '5%'
    },

    recipeList: {
        //레시피 리스트(아랫몸)
        borderWidth: 0, //테두리 굵기
        alignItems: 'center', //가로정렬 : 중앙
        width: '100%', //너비 : '100%'
        height: '100%', //높이 : '100%'
    },
    recipeListFrame: {
        //레시피 리스트 프레임(오른쪽 왼쪽 나누는 프레임)
        borderWidth: 0, //테두리 굵기
        alignItems: 'center', //가로정렬 : 중앙
        width: '100%', //너비 : '100%'
        height: '15%', //높이 : '10%'
        marginTop: '5%', //위쪽 마진 : 5%
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
    },
    recipeListFrameImage: {
        //레시피 리스트 프레임(왼쪽 이미지)
        borderWidth: 1, //테두리 굵기
        width: '35%', //너비 : '35%'
        height: '100%', //높이 : '100%'
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },
    recipeListFrameData: {
        //레시피 리스트 오른쪽 프레임(3줄)
        borderWidth: 0, //테두리 굵기
        flex:1,
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },
    recipeListFrameDataTitle: {
        //레시피 리스트 오른쪽 제목
        borderWidth: 1, //테두리 굵기
        flex:2,
        width: '100%', //너비 : '100%'
        alignItems: 'flex-start', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },
    recipeListFrameDataReaction: {
        //레시피 리스트 오른쪽 반응들
        borderWidth: 0, //테두리 굵기
        flex:1,
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
    },
    recipeListFrameDataReactionFrame: {
        //레시피 리스트 오른쪽 반응 프레임(이미지 + 텍스트)
        borderWidth: 0,
        flex:1,
        width: '100%', //너비 : '100%'
        height: '100%', //높이 : '100%'
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
    },
    recipeListFrameDataReactionImage: {
        //레시피 리스트 오른쪽 반응 이미지
        borderWidth: 1,
        width: '40%', //너비 : '100%'
        height: '100%', //높이 : '100%'
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },
    recipeListFrameDataReactionText: {
        //레시피 리스트 오른쪽 반응 텍스트
        borderWidth: 1,
        width: '60%', //너비 : '100%'
        height: '100%', //높이 : '100%'
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },
    recipeListFrameDataData: {
        //레시피 리스트 오른쪽 정보
        borderWidth: 0, //테두리 굵기
        flex: 1,
        width: '100%', //너비 : '100%'
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
    },
    recipeListFrameDataDataName: {
        //레시피 리스트 오른쪽 작성자 이름
        borderWidth: 1, //테두리 굵기
        flex: 1,
        height: '100%', //높이 : '100%'
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },
    recipeListFrameDataDataFollower: {
        //레시피 리스트 오른쪽 작성자 팔로워
        borderWidth: 1, //테두리 굵기
        flex: 1,
        height: '100%', //높이 : '100%'
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },
    goodwordFont: {
        //추천 단어 폰트
        color: 'white',
        marginLeft: '3%',
        marginRight: '3%',
        fontSize: 15,
    },
    arrayFont: {
        //필터 폰트
        fontSize:20,
    },
    titleFont: {
        //레시피 이름 폰트
        fontSize:20,
        marginLeft: '5%',
    },
    reactionFont: {
        //반응 숫자 폰트
        fontSize:10,
    },
    dataFont: {
        //레시피 작성자 폰트
        fontSize:15,
    },
});
