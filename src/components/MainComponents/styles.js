import { StyleSheet } from 'react-native';
import { height, width } from '../../../config/globalStyles';

const styles = StyleSheet.create({
    container: {
        //바탕
        flex: 1,
        width: width * 360,
        alignItems: 'center', //가로정렬 : 중앙
        paddingTop: Platform.OS === 'android' ? height * 40 : 0,
        paddingLeft: width * 20,
        paddingRight: width * 20,
    },
    weekRecipe: {
        //금주의 레시피 이미지
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center',
        flexDirection: 'row',
        width: width * 320,
    },
    recipeTypeFrame: {
        //음식 종류 프레임
        height: height * 100, //높이
        width: '100%', //너비 : '100%'
        alignItems: 'flex-start', //가로정렬
        justifyContent: 'center', //세로정렬 : 중앙
        top:-height*10
    },
    recipeTypeText: {
        //음식 종류 글자
        width: '100%', 
        alignItems: 'flex-start', 
        justifyContent: 'center', 
    },
    recipeTypeButtonwidthFrame: {
        width: '100%',
        marginTop: height * 4,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingLeft: width * 10,
        paddingRight: width * 10,
    },
    recipeVideoFrame: {
        //음식 영상 프레임
        height: height * 180, //높이
        width: '100%', //너비
        marginTop: height * 20,
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
        height: height * 150, //높이 : '30%'
        width: width * 256, //너비 : '100%'
        alignItems: 'flex-start', //가로정렬 : 중앙
        justifyContent: 'flex-start', //세로정렬 : 중앙
    },
});

export default styles;
