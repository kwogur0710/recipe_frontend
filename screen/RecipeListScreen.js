import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { height, marginWidth, width } from '../config/globalStyles';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Button,
    Colors,
    FlatList,
    SafeAreaView,
    Image,
    TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';

const RecipeListScreen = ({ route }) => {
    const navigation = useNavigation();
    const TypeName = route.params?.type;
    const [parts, setParts] = useState(route.params?.parts);
    const RecipeData = [
        {
            id: '1001',
            type: '한식',
            title: '설렁탕',
            love: 650,
            follow: 340,
            img: require('../image/korean_food/image_1.jpeg'),
            recipeInMaterial: '1. 소 사골 2Kg 2. 소주(소주잔) 2컵 3. 소고기사태 816g 4. 쌀뜨물 적당량 5. 파뿌리 1+1/2컵 6. 통후추 3t  7. 파 적당량 8. 소금 적당량',
            recipeDetail: '1. 소주를 희석시킨물에 소사골을 담궈놓습니다. 2. 사태도 적당한 크기로 잘라 물에 담궈 핏물을 뺍니다. 3. 사골을 넣고 한소끔 끓입니다. 4. 한소끔 끓인 사골은 찬물에 헹궈 놓습니다. 5. 냄비에 쌀뜨물을 붓고 끓입니다. 6. 다시망 두개를 만듭니다. 7. 물이 끓으면 다시망을 넣고 사골을 넣어 푹 고아냅니다. 8. 사태도 기호에 맞게 삶아 냅니다. 9. 삶아낸 사태는 식이후 썰어줍니다. 10. 뚝배기에 불린당면 육수 사태를 넣고 끓입니다. 11. 파를 넣고 식탁에 냅니다.',
        },
        {
            id: '1002',
            type: '한식',
            title: '김치찌개',
            love: 592,
            follow: 234,
            img: require('../image/korean_food/image_2.jpeg'),
            recipeInMaterial: '1. 돼지고기 항정살 200g 2. 신김치 250g 3. 김치국물 150ml 4. 물 300ml 5. 대파 약간 6. 설탕 1/3T 7. 후춧가루 약간',
            recipeDetail: '1. 먼저 항정살을 먹기좋은 크기로 썰어줍니다. 2. 김치도 먹기좋은 크기로 잘라주세요 250g 정도 준비했는데 밥공기로 하나정도 담아주시면 돼요. 3. 대파는 약간만 쫑쫑 썰어둡니다. 4. 뚝배기나 냄비에 항정살을 넣고 불은 중약불로 두고 타지 않게 잘 볶아줍니다. 5. 고기에서 기름이 나오고 겉면이 어느정도 익었으면 김치를 넣고 같이 볶아줍니다. 6. 김치에 숨이 살짝 줄을때까지 2~3분정도 볶아주세요. 7. 김치국물 150ml 물 300~350ml 정도 넣어주세요. 8. 중약불에서 10분정도 끓여줍니다. 9. 10분정도 끓인후 설탕 1/3스푼 정도 넣어줍니다. 10. 후춧가루도 살짝 뿌려줍니다. 11. 마무리로 썰어놓은 대파를 넣고 약불에서 10분정도 더 끓여주면 완성입니다.',
        },
        {
            id: '1003',
            type: '한식',
            title: '김밥',
            love: 312,
            follow: 364,
            img: require('../image/korean_food/image_3.jpeg'),
            recipeInMaterial: '1. 김밥용김 2. 밥 3. 맛살 4. 당근 5. 햄 6. 어묵 7. 단무지 8. 시금치 9. 달걀 4알',
            recipeDetail: '1. 맛살을 길게 반으로 잘라줍니다. 2. 당근을 채썰어줍니다.3. 햄을 길게 잘라줍니다. 4. 어묵을 3등분 또는 4등분으로 길게 잘라줍니다. 5. 시금치는 살짝 데쳐줍니다. 6. 데쳐진 시금치를 찬물에 헹궈줍니다. 7. 시금치에 맛소금 조금 , 참기름 조금 참깨 조금 넣고 조물조물 해주세요. 8. 달걀지단을 만들게요. 9. 계란에 소금 후추 한꼬집씩 넣고 달걀을 풀어줍니다. 10. 팬에 기름을 넉넉히 두룬 후 달걀을 천천히 팬에 둘러줍니다. 그 후에 양 옆면을 접어 자르기 좋게 해줍니다. 11. 기름을 둘러 당근도 볶아줍니다. 햄도 볶아주세요. 12. 어묵은 간장소스 ( 간장 1T , 미림1/2T , 올리고당 1/2 t , 식용유 1/2T )와 함께 볶아줍니다.) 13. 밥에 참기름과 맛소금 참깨를 넣고 간을 해줍니다. 14. 김밥용 김에 밥을 얇게 깔아줍니다. 15. 어묵 달걀지단, 맛살 당근, 시금치, 단무지, 햄 순서로 올려줍니다. 16. 돌돌돌 말아준뒤에 참기름을 김밥에 발라 완성 해줍니다.',
        },
        {
            id: '1004',
            type: '한식',
            title: '미역국',
            love: 342,
            follow: 754,
            img: require('../image/korean_food/image_4.jpeg'),
            recipeInMaterial: '1. 소고기(국거리용) 180g 2. 미역 1줌(20g) 3. 쌀뜨물(혹은 물) 1.4L(종이컵 기준 약7컵) 4. 다진마늘 1큰술 5. 참기름 1큰술 6. 국간장 2큰술 7. 소금 약간',
            recipeDetail: '1. 키친타올을 이용해 소고기 핏물을 닦아주세요. 2. 미역은 물 500ml(약 2.5컵)에 10분간 불려주세요. 3. 미역은 물 500ml(약 2.5컵)에 10분간 불려주세요. 4. 불린 미역은 가위를 이용해 먹기 좋은 크기로 잘라주세요. 5. 미역은 체를 이용해 건져주세요. 6. 이때 미역 불린 물은 버리지 않고 미역국 끓일 때 물 대신 사용해주세요. 7. 중불로 달군 냄비에 참기름 1큰술을 두른 뒤 다진마늘 1큰술과 소고기를 넣고 볶아주세요. 8. 소고기 겉면이 절반 정도 익을 때쯤 국간장 1큰술을 넣어 볶아주세요. 9. 미역을 넣고 푸른색을 띨 때까지 달달 볶아주세요. 10. 쌀뜨물 혹은 미역 불린 물 400mL(약 2컵)를 붓고 강불로 올려주세요. 11. 국물이 끓기 시작하면 물 1L(약 5컵)를 넣어주세요. 12. 다시 끓어오르면 중약불로 줄인 뒤 15분간 끓여주세요. 13. 국간장 1큰술을 넣고 부족한 간은 소금으로 더해주세요.',
        },
        {
            id: '1005',
            type: '한식',
            title: '닭백숙',
            love: 123,
            follow: 343,
            img: require('../image/korean_food/image_5.jpeg'),
            recipeInMaterial: '1. 생닭 850g (1마리) 2. 대추 7개 3. 통마늘 6쪽 4. 약재40g 5. 물 2L 6. 찹쌀 1컵 7. 소금 1숟갈',
            recipeDetail: '1. 찹쌀을 충분히 불려주세요.(찹쌀은 찬 물에 2시간 이상 불려야 해요.) 2. 찹쌀을 불리는 동안, 닭을 손질하고 씻어주세요. 3. 기름 덩어리, 잡내 제거를 위해 닭의 꽁지, 목덜미 비계, 뼈 주변에 붙은 내장을 제거해줍니다. 4. 넣고 끓일 재료를 냄비에 모두 넣어주세요.(불린 찹쌀, 대추, 마늘, 약재(인삼이 없을 경우 황기만 들어가도 괜찮습니다) 5. 닭을 넣고 물 2L를 부어주세요. 6. 강불에서 7분간 끓여주세요, 7. 약불로 줄이고 30분간 푹 끓여주시면 완성! 8. 마지막에 냄비에 소금 1숟갈을 넣어주셔도 좋고 덜어 드시면서 원하는 만큼의 소금간을 따로 하셔도 좋습니다.',
        },
        {
            id: '1006',
            type: '한식',
            title: '비빔밥',
            love: 234,
            follow: 263,
            img: require('../image/korean_food/image_6.jpeg'),
            recipeInMaterial: '1. 돼지고기 100g 2. 애호박 1/5개 3. 양파 1/2개 4. 당근 1/3개 5. 고추장 2T 6. 간장 2T7. 설탕 1.5T 8. 깨소금 1t 9. 참기름 1t 10. 식초 1T',
            recipeDetail: '1. 양파, 당근, 애호박을 채썰어서 준비합니다. 2. 비빔밥에 비벼먹을 양념장을 준비합니다.(고추장 2T +간장 2T+설탕 1.5T+깨소금, 참기름 +식초 1T) 3. 먼저 당근을 소금 1꼬집 넣고 색깔이 나게 볶아줍니다. 4. 애호박도 소금 1꼬집 넣고 볶아줍니다. 5. 양파는 간장 1T 넣고 중불에 볶아줍니다. 꽤 오래 볶아서 단맛이 나게 볶아줍니다. 6. 소금, 후추로 밑간해 놓은 채썰어준 돼지고기를 볶아줍니다. 7. 익은 돼지고기를 아까 만들어 놓은 양념장과 섞어 줍니다. 8. 따뜻한 밥위에 볶아 놓은 야채를 올리고 반숙 계란 후라이, 양념장을 크게 1T 떠서 셋팅하면 비빔밥 완성!',
        },
        {
            id: '1007',
            type: '한식',
            title: '갈치조림',
            love: 435,
            follow: 642,
            img: require('../image/korean_food/image_7.jpeg'),
            recipeInMaterial: '1. 갈치 1마리 2. 무 10cm길이로 1토막 3. 양파 1/2개 4. 대파 1개 5. 홍고추 1개 6. 청양고추 3개  7. 고춧가루 7T 8. 다진마늘 1T 9. 다진생강 1/3T 10. 간장 9T 11. 맛술 4T 12. 후춧가루 약간 13. 참기름 1T 14. 올리고당 1+1/2T',
            recipeDetail: '1. 갈치 1마리의 지느러미와 창자 제거하시고 갈치의 비늘을 칼로 긁어서 제거해줍니다. 2. 비늘을 긁을후 찬물에 씻어서 소쿠리에 받쳐 물기를 빼고 굵은소금 1/2T정도를 골고루 뿌려줍니다. 3. 무를 1cm두께로 반달모양으로 썰어줍니다. 4. 대파1개는 큼직하게 어슷썰고 홍고추1개 청양고추3개도 어슷썰어서 준비합니다.양파1/2개도 큼직하게 채썰어준비합니다. 5. 양념장 : (고추가루7T. 다진마늘1T. 다진생강1/3T. 진간장9T. 맛술4T. 후추가루약간. 참기름1T 올리고당1T을 섞어 양념장을 만들어준비합니다. 6. 넓은냄비에 무를 깔고 무위에 준비한 양념장의 1/2를 골고루 올려준후 물 1컵반을 넣고 졸여줍니다. 7. 처음엔 센불로 했다가 끓어오르면 중불로 줄이고 냄비뚜껑을 닫은채 10분동안 졸여줍니다.무를 10분동안 졸인후 가스불을 끈뒤 졸여진 무위에 채썬양파를 올리고 준비한 갈치를 올려주세요. 8. 그 위에 대파. 청양고추.홍고추를 올린후 물을 1컵 더 넣은후 가스불을 센불로 켜주세요. 9. 끓어오르면 중불로 줄인후 냄비뚜껑은 완전히 닫지 말고 졸여주세요. 10. 20분정도 졸여 양념이 거의 줄고 갈치가 익으면 완성입니다.',
        },
        {
            id: '1008',
            type: '한식',
            title: '불고기',
            love: 765,
            follow: 432,
            img: require('../image/korean_food/image_8.jpeg'),
            recipeInMaterial: '1. 돼지고기 (앞다리살) 400g 2. 다진마늘 1큰술 3. 대파 1/3대 (줄기) 4. 다진생강 (즙) 약간5. 깻잎 (선택)  6. 진간장 4큰술 7. 설탕 1큰술 8. 맛술 1큰술 9. 청주 1큰술 10. 참기름 2큰술11. 후춧가루 약간',
            recipeDetail: '1. 돼지고기 앞다리살은 키친타월에 올려 핏물제거해 준비합니다. 2. 대파 줄기 부분은 곱게 다져주었어요. 3. 다진 마늘 다진 생강 약간을 준비해요. 4. 핏물 뺀 돼지고기는 볼에 담아 분량의 양념을 넣어주세요. 5. 단음식을 좋아하지 않아 보통 단맛으로 했어요 단맛은 가감하세요. 6. 조물조물 버무려 맛있는 양념이 배이도록 10분간 재웁니다.(양념 : 진간장, 설탕, 맛술, 청주, 참기름, 후춧가루) 7. 팬은 센불에서 뜨겁게 달군 다음 양념한 고기를 넣어 주세요 (센불). 8. 센불로 유지하고 볶아 주는데요 한 번 볶고 잠시 두었다 볶고를 반복해줍니다. 9. 깻잎은 돌돌말아 채썰어 올려주면 바싹 돼지불고기 완성.',
        },
        {
            id: '1009',
            type: '한식',
            title: '부추무침',
            love: 95,
            follow: 42,
            img: require('../image/korean_food/boochoo.jpg'),
            recipeInMaterial: '1. 부추 1줌 2. 양파 1개 3. 간장 6T 4. 고추가루 4T 5. 식초 2T 6. 설탕 2T7. 들기름 2T 8. 다진마늘 1T 9. 깨 약간',
            recipeDetail: '1. 양파는 얇게썰어 물에담가(30분정도) 매운기를 빼고 준비해 둡니다. 2. 부추는 3-4등분 하여 주세요. 3. 간장,고추가루,식초,설탕,마늘,들기름을 잘 섞어 양념장을 만들어줍니다. 4. 부추, 양파에 양념장을 잘 무쳐주어 깨를 뿌리면 완성.',
        },
        {
            id: '1010',
            type: '한식',
            title: '참치주먹밥',
            love: 999,
            follow: 999,
            img: require('../image/korean_food/joomukbob.jpg'),
            recipeInMaterial: '1. 밥 3인분 2. 참치통조림 1캔 3. 김가루 넉넉히  4. 맛소금 조금 5. 참기름 1큰술 6. 통깨 조금  7. 마요네즈 5큰술 8. 소금 2꼬집 9. 후춧가루 조금',
            recipeDetail: '1. 참치캔은 기름기를 제거하고 준비합니다. 2. 볼에 참치 넣고 마요네즈 5, 소금 두꼬집, 후춧가루 조금 뿌려 버무려 줍니다. 3. 밥은 넉넉히 준비한다음 맛소금과 참기름, 통깨 넣고 섞어서 밥을 준비합니다. 4. 비닐봉지 안에 김가루 넣어준다음 밥 떠서 그 안에 참치 마요 한큰술 정도 넣어 동그랗게 주먹밥을 만들어 줍니다. 5. 안 부서지게 단단하게 말아주면 됩니다. 6. 김가루 안에 넣어 굴려주면 주먹밥 완성입니다.',
        },
        {
            id: '2001',
            type: '일식',
            title: '덴푸라',
            love: 122,
            follow: 43,
            img: require('../image/japanese_food/denpura.jpg'),
        },
        {
            id: '2002',
            type: '일식',
            title: '돈코츠 라멘',
            love: 425,
            follow: 243,
            img: require('../image/japanese_food/donkoturamen.jpg'),
        },
        {
            id: '2003',
            type: '일식',
            title: '두부유부초밥',
            love: 522,
            follow: 153,
            img: require('../image/japanese_food/dubuyubu.jpg'),
        },
        {
            id: '2004',
            type: '일식',
            title: '어묵우동',
            love: 52,
            follow: 0,
            img: require('../image/japanese_food/emukudong.jpg'),
        },
        {
            id: '2005',
            type: '일식',
            title: '가라아게',
            love: 22,
            follow: 4,
            img: require('../image/japanese_food/karaage.jpg'),
        },
        {
            id: '2006',
            type: '일식',
            title: '규동',
            love: 12,
            follow: 3,
            img: require('../image/japanese_food/kudong.jpg'),
        },
        {
            id: '2007',
            type: '일식',
            title: '모츠나베',
            love: 0,
            follow: 0,
            img: require('../image/japanese_food/mochunabe.jpg'),
        },
        {
            id: '2008',
            type: '일식',
            title: '오니기리',
            love: 333,
            follow: 43,
            img: require('../image/japanese_food/onigiri.jpg'),
        },
        {
            id: '2009',
            type: '일식',
            title: '야끼우동',
            love: 149,
            follow: 111,
            img: require('../image/japanese_food/yakiudong.jpg'),
        },
        {
            id: '2010',
            type: '일식',
            title: '연어초밥',
            love: 367,
            follow: 13,
            img: require('../image/japanese_food/yenususi.jpg'),
        },
        {
            id: '3001',
            type: '중식',
            title: '짜장면',
            love: 882,
            follow: 522,
            img: require('../image/chinese_food/jajang.jpg'),
        },
        {
            id: '3002',
            type: '중식',
            title: '짬뽕',
            love: 672,
            follow: 323,
            img: require('../image/chinese_food/jjambbong.jpg'),
        },
        {
            id: '3003',
            type: '중식',
            title: '깐풍기',
            love: 623,
            follow: 113,
            img: require('../image/chinese_food/kkanpungki.jpg'),
        },
        {
            id: '3004',
            type: '중식',
            title: '마라탕',
            love: 1,
            follow: 1,
            img: require('../image/chinese_food/mara.jpg'),
        },
        {
            id: '3005',
            type: '중식',
            title: '난자완스',
            love: 65,
            follow: 3,
            img: require('../image/chinese_food/nanja.jpg'),
        },
        {
            id: '3006',
            type: '중식',
            title: '팔보채',
            love: 82,
            follow: 31,
            img: require('../image/chinese_food/palbo.jpg'),
        },
        {
            id: '3007',
            type: '중식',
            title: '탕수육',
            love: 777,
            follow: 555,
            img: require('../image/chinese_food/tangsu.jpg'),
        },
        {
            id: '3008',
            type: '중식',
            title: '양장피',
            love: 61,
            follow: 21,
            img: require('../image/chinese_food/yangjangpi.jpg'),
        },
        {
            id: '3009',
            type: '중식',
            title: '고추잡채',
            love: 72,
            follow: 23,
            img: require('../image/chinese_food/gocu.jpg'),
        },
        {
            id: '3010',
            type: '중식',
            title: '딤섬',
            love: 11,
            follow: 3,
            img: require('../image/chinese_food/dimsum.jpg'),
        },
        {
            id: '4001',
            type: '양식',
            title: '치킨 또띠아',
            love: 110,
            follow: 32,
            img: require('../image/western_food/chikin.jpg'),
        },
        {
            id: '4002',
            type: '양식',
            title: '크림 파스타',
            love: 999,
            follow: 262,
            img: require('../image/western_food/creampasta.jpg'),
        },
        {
            id: '4003',
            type: '양식',
            title: '고르곤졸라 피자',
            love: 683,
            follow: 435,
            img: require('../image/western_food/gorgon.jpg'),
        },
        {
            id: '4004',
            type: '양식',
            title: '햄버거',
            love: 829,
            follow: 145,
            img: require('../image/western_food/hambuk.jpg'),
        },
        {
            id: '4005',
            type: '양식',
            title: '로제 파스타',
            love: 999,
            follow: 255,
            img: require('../image/western_food/lojepasta.jpg'),
        },
        {
            id: '4006',
            type: '양식',
            title: '티본 스테이크',
            love: 760,
            follow: 562,
            img: require('../image/western_food/tibon.jpg'),
        },
        {
            id: '4007',
            type: '양식',
            title: '토마호크 스테이크',
            love: 321,
            follow: 33,
            img: require('../image/western_food/tomahork.jpg'),
        },
        {
            id: '4008',
            type: '양식',
            title: '토마토 파스타',
            love: 120,
            follow: 11,
            img: require('../image/western_food/tomatopasta.jpg'),
        },
        {
            id: '4009',
            type: '양식',
            title: '토마토 스프',
            love: 110,
            follow: 32,
            img: require('../image/western_food/tomatosupe.jpg'),
        },
        {
            id: '4010',
            type: '양식',
            title: '또띠아 피자',
            love: 150,
            follow: 2,
            img: require('../image/western_food/ttotiapija.jpg'),
        },
    ];


    console.log(TypeName, parts, route.params?.parts);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchFrame}>
                <View style={styles.backButton}>
                    <Image
                        source={require('../image/icon/back.png')}
                        style={{ width: width * 34, height: width * 34 }}
                    />
                </View>
                <View style={styles.search}>
                    <TextInput style={{ width: '100%', height: '100%', fontSize: 20 }} />
                </View>
                <View style={styles.searchButton}>
                    <Image
                        source={require('../image/icon/search.png')}
                        style={{ width: width * 32, height: width * 32 }}
                    />
                </View>
            </View>
            <View style={styles.arrayFrame}>
                <View style={styles.array}>
                    <View>
                        <Text style={styles.arrayFont}>추천순</Text>
                    </View>
                </View>
                <View style={styles.array}>
                    <Text style={styles.arrayFont}> {TypeName} </Text>
                </View>
                <View style={styles.array}>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('RecipeIngredientsScreen', {
                                parts: route.params?.parts,
                                type: TypeName,
                            })
                        }
                    >
                        <Text style={styles.arrayFont}>재료선택</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.recipeList}>
                <FlatList
                    data={RecipeData.filter((value) => value.type == TypeName)}
                    numColumns={2}
                    keyExtractor={(item) => String(item.id)}
                    style={{ margin: 5, width: 354 }}
                    columnWrapperStyle={{ flex: 1 }}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.recipeListFrame}>
                                <View>
                                    <Image
                                        source={item.img}
                                        style={{ width: width * 158, height: width * 158 }}
                                    />
                                </View>
                                <View style={styles.recipeListFrameTitle}>
                                    <Text style={styles.titleFont}>{item.title}</Text>
                                </View>
                                <View style={styles.recipeListFrameReaction}>
                                    <View style={styles.recipeListFrameReactionFrame}>
                                        <View style={styles.recipeListFrameReactionImage}>
                                            <Image
                                                source={require('../image/icon/heart.png')}
                                                style={{
                                                    width: width * 22,
                                                    height: width * 22,
                                                }}
                                            />
                                        </View>
                                        <View style={styles.recipeListFrameReactionText}>
                                            <Text style={styles.reactionFont}>{item.love}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.recipeListFrameReactionFrame}>
                                        <View style={styles.recipeListFrameReactionImage}>
                                            <Image
                                                source={require('../image/icon/share.png')}
                                                style={{
                                                    width: width * 22,
                                                    height: width * 22,
                                                }}
                                            />
                                        </View>
                                        <View style={styles.recipeListFrameReactionText}>
                                            <Text style={styles.reactionFont}>{item.follow}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        );
                    }}
                />
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
        marginLeft: width * 20,
        marginRight: width * 20,
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
    backButton: {
        //메뉴 아이콘
        //borderWidth: 1, //테두리 굵기
        height: height * 35, //높이
        width: width * 35, //너비
        marginLeft: width * 10, //왼쪽 마진
        justifyContent: 'center', //세로정렬 : 중앙
        alignItems: 'center', //가로정렬 : 중앙
    },
    search: {
        //검색창
        //borderWidth: 1, //테두리 굵기
        flex: 1,
        height: height * 35, //높이
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },
    searchButton: {
        //검색버튼
        //borderWidth: 1, //테두리 굵기
        height: height * 35, //높이
        width: width * 35, //너비
        marginRight: width * 10, //왼쪽 마진
        justifyContent: 'center', //세로정렬 : 중앙
        alignItems: 'center', //가로정렬 : 중앙
    },

    arrayFrame: {
        //정렬 프레임
        borderWidth: 1, //테두리 굵기
        height: height * 26, //높이
        width: '100%', //너비
        marginTop: height * 6, //위쪽 마진
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
    },
    array: {
        //정렬 버튼
        borderWidth: 1, //테두리 굵기
        flex: 1,
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },

    recipeList: {
        //레시피 리스트 프레임
        //borderWidth: 1, //테두리 굵기
        justifyContent: 'center', //세로정렬 : 중앙
        alignItems: 'center', //가로정렬 : 중앙
        flex: 1,
        marginTop: height * 10,
    },
    recipeListFrame: {
        //레시피 리스트 프레임(위 아래 나누는 프레임)
        borderWidth: 1, //테두리 굵기
        alignItems: 'center', //가로정렬 : 중앙
        marginBottom: height * 4, //마진 : 5%
    },
    recipeListFrameTitle: {
        //레시피 리스트 프레임(제목)
        borderBottomWidth: 1, //테두리 굵기
        width: width * 160, //너비
        height: height * 28, //높이
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },
    recipeListFrameReaction: {
        //레시피 리스트 리액션
        width: width * 160, //너비
        height: height * 22, //높이
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
    },
    recipeListFrameReactionFrame: {
        //레시피 리스트 리액션 프레임(이미지 + 텍스트)
        flex: 1,
        height: '100%', //높이
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
        flexDirection: 'row', //정렬방향 : row(가로), column(세로)
    },
    recipeListFrameReactionImage: {
        //레시피 리스트 리액션 이미지
        flex: 2,
        height: '100%', //높이 : '100%'
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },
    recipeListFrameReactionText: {
        //레시피 리스트 리액션 텍스트
        flex: 3,
        height: '100%', //높이 : '100%'
        alignItems: 'center', //가로정렬 : 중앙
        justifyContent: 'center', //세로정렬 : 중앙
    },

    arrayFont: {
        //필터 폰트
        fontSize: width * 20,
    },
    titleFont: {
        //레시피 이름 폰트
        fontSize: width * 20,
    },
    reactionFont: {
        //반응 숫자 폰트
        fontSize: width * 14,
    },
});

export default RecipeListScreen;
