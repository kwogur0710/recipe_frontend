import { StyleSheet } from 'react-native';
import { height, width } from '../../../config/globalStyles';

const styles = StyleSheet.create({
    container: {
        //바탕
        flex: 1,
        borderWidth:1,
        width: width * 360,
        alignItems: 'center', 
        paddingTop: Platform.OS === 'android' ? height * 40 : 0,
        paddingLeft: width * 20,
        paddingRight: width * 20,
        backgroundColor:'#FFFFFF'
    },
    weekRecipe: {
        width: width * 360,
        alignItems: 'center', 
        justifyContent: 'center',
        flexDirection: 'row',
    },
    recipeTypeFrame: {
        width: width * 360,
        alignItems: 'flex-start', 
        justifyContent: 'center', 
        borderRadius:10,
        marginTop:height*10,
        marginBottom:height*10,
    },
    recipeTypeButtonwidthFrame: {
        width: width * 360,
        marginTop: height * 4,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingLeft: width * 10,
        paddingRight: width * 10,
    },
});

export default styles;
