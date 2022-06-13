import { StyleSheet } from 'react-native';
import { height, width } from '../../../config/globalStyles';

const styles = StyleSheet.create({
    container: {
        //바탕
        flex: 1,
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center',
        paddingTop: Platform.OS === 'android' ? height * 40 : 0,
        marginLeft: width * 20,
        marginRight: width * 20,
    },

    TopBar: {
        height: height * 40, //높이
        width: width * 360, //너비
        flexDirection: 'row', //정렬방향
        alignItems: 'center', //가로정렬
        justifyContent: 'center', //세로정렬
        paddingTop: height * 4,
        paddingBottom: height * 4,
        paddingRight: width * 20,
        paddingLeft: width * 20,
        borderColor: 'gray',
    },

    weekRecipeFrame: {
        //금주의 레시피 프레임
        width: '100%', //너비
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },
    weekRecipe: {
        //금주의 레시피 이미지
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center',
        flexDirection: 'row',
    },
    recipeTypeFrame: {
        //음식 종류 프레임
        height: height * 124, //높이
        width: '100%', //너비 : '100%'
        alignItems: 'flex-start', //가로정렬
        justifyContent: 'center', //세로정렬 : 중앙
    },
    recipeTypeText: {
        //음식 종류 글자
        alignItems: 'flex-start', //가로정렬
        justifyContent: 'center', //세로정렬
        width: '100%', //너비 : '100%'
    },
    recipeTypeButtonwidthFrame: {
        //음식 종류 버튼 폭 프레임
        width: '100%', //너비 : '100%'
        marginTop: height * 4, //위쪽 마진 : 5%
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
        justifyContent: 'space-between',
        paddingLeft: width * 4,
        paddingRight: width * 4,
    },
    recipeVideoFrame: {
        //음식 영상 프레임
        height: height * 230, //높이
        width: '100%', //너비
        alignItems: 'flex-start', //가로정렬
        justifyContent: 'center', //세로정렬
    },
    recipeVideoYoutubeFrame: {
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        height: height * 144, //높이 : '30%'
        width: width * 256, //너비 : '100%'
    },
    recipeVideoYoutube: {
        borderRadius: 10, //테두리 둥글게 하는 수치
        height: height * 200, //높이 : '30%'
        width: width * 256, //너비 : '100%'
        alignItems: 'flex-start', //가로정렬 : 중앙
        justifyContent: 'flex-start', //세로정렬 : 중앙
    },
});

export default styles;
