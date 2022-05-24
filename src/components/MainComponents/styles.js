import { StyleSheet } from 'react-native';
import { height, width } from '../../../config/globalStyles';

const styles = StyleSheet.create({
    container: {
        //바탕
        flex: 1,
        alignItems: 'center', //가로정렬 : 중앙
        paddingTop: Platform.OS === 'android' ? height * 40 : 0,
        marginBottom: height * 20, //마진 : 10%
        marginLeft: width * 20,
        marginRight: width * 20,
    },

    searchFrame: {
        height: height * 40, //높이
        width: '100%', //너비
        flexDirection: 'row', //정렬방향
        alignItems: 'center', //가로정렬
        justifyContent: 'space-between', //세로정렬
        paddingTop: height * 4,
        paddingBottom: height * 4,
    },
    TopBtn: {
        alignItems: 'center', //가로정렬
        justifyContent: 'center', //세로정렬
        marginRight: width * 2,
        marginLeft: width * 2,
    },

    weekRecipeFrame: {
        //금주의 레시피 프레임
        width: '100%', //너비
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        marginTop: height * 10, //위쪽 마진
    },
    weekRecipe: {
        //금주의 레시피 이미지
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center',
    },
    recipeTypeFrame: {
        //음식 종류 프레임
        height: height * 124, //높이
        alignItems: 'flex-start', //가로정렬
        justifyContent: 'center', //세로정렬 : 중앙
        width: '100%', //너비 : '100%'
        marginTop: height * 10, //위쪽 마진
    },
    recipeTypeText: {
        //음식 종류 글자
        alignItems: 'flex-start', //가로정렬
        justifyContent: 'center', //세로정렬
        width: '100%', //너비 : '100%'
    },
    recipeTypeButtonwidthFrame: {
        //음식 종류 버튼 폭 프레임
        height: height * 90, //높이 : 100%
        width: '100%', //너비 : '100%'
        marginTop: height * 4, //위쪽 마진 : 5%
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
    },
    recipeTypeButtonFrame: {
        //음식 종류 버튼 프레임
        height: height * 88, //높이 : 100%
        width: width * 70, //너비 : 20%
        marginRight: width * 12,
        borderRadius: 10,
    },
    recipeTypeButtonImage: {
        //음식 종류 버튼 사진
        height: '75%', //높이
        width: '100%', //너비
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },
    recipeTypeButtonText: {
        //음식 종류 버튼 글자
        height: '25%', //높이 : 30%
        width: '100%', //너비 : 100%
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },

    recipeVideoFrame: {
        //음식 영상 프레임
        height: height * 230, //높이
        width: '100%', //너비
        alignItems: 'center', //가로정렬
        justifyContent: 'center', //세로정렬
        marginTop: height * 5, //위쪽 마진
    },
    recipeVideoText: {
        alignItems: 'flex-start', //가로정렬
        justifyContent: 'center', //세로정렬 : 끝지점
        height: height * 30, //높이 : '30%'
        width: '100%', //너비 : '100%'
    },
    recipeVideoYoutubeFrame: {
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        height: height * 144, //높이 : '30%'
        width: width * 256, //너비 : '100%'
        marginTop: height * 6, //위쪽 마진
    },
    recipeVideoYoutube: {
        borderRadius: 10, //테두리 둥글게 하는 수치
        height: height * 200, //높이 : '30%'
        width: width * 256, //너비 : '100%'
        alignItems: 'flex-start', //가로정렬 : 중앙
        justifyContent: 'flex-start', //세로정렬 : 중앙
    },
    recipeVideoYoutubeBlank: {
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        height: height * 10, //높이 : '100%'
        width: width * 5, //너비
    },
    recipeVideoYoutubeBlank2: {
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        height: height * 10, //높이 : '100%'
        width: width * 5, //너비
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
});

export default styles;
