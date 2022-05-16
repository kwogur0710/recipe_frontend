export const GetId = () => {
    Math.floor(Math.random() * 10000);
};

export const RecipeData = [
    {
        id: 1001,
        type: '한식',
        title: '설렁탕',
        img: require('../image/korean_food/image_1.jpeg'),
        difficulty: 3,
        serving: 1,
        time: 30,
        material: [
            '소 사골',
            '소주(소주잔)',
            '소고기사태',
            '쌀뜨물',
            '파뿌리',
            '통후추',
            '파',
            '소금',
        ],
        detail: '1. 소주를 희석시킨물에 소사골을 담궈놓습니다.\n2. 사태도 적당한 크기로 잘라 물에 담궈 핏물을 뺍니다.\n3. 사골을 넣고 한소끔 끓입니다.\n4. 한소끔 끓인 사골은 찬물에 헹궈 놓습니다.\n5. 냄비에 쌀뜨물을 붓고 끓입니다.\n6. 다시망 두개를 만듭니다.\n7. 물이 끓으면 다시망을 넣고 사골을 넣어 푹 고아냅니다.\n8. 사태도 기호에 맞게 삶아 냅니다.\n9. 삶아낸 사태는 식이후 썰어줍니다.\n10. 뚝배기에 불린당면 육수 사태를 넣고 끓입니다.\n11. 파를 넣고 식탁에 냅니다.',
    },
    {
        id: '1002',
        type: '한식',
        title: '김치찌개',
        img: require('../image/korean_food/image_2.jpeg'),
        difficulty: 2,
        serving: 1,
        time: 40,
        material: ['돼지고기 항정살', '신김치', '김치국물', '물', '대파', '설탕', '후춧가루'],
        detail: '1. 먼저 항정살을 먹기좋은 크기로 썰어줍니다.\n2. 김치도 먹기좋은 크기로 잘라주세요 250g 정도 준비했는데 밥공기로 하나정도 담아주시면 돼요.\n3. 대파는 약간만 쫑쫑 썰어둡니다.\n4. 뚝배기나 냄비에 항정살을 넣고 불은 중약불로 두고 타지 않게 잘 볶아줍니다.\n5. 고기에서 기름이 나오고 겉면이 어느정도 익었으면 김치를 넣고 같이 볶아줍니다.\n6. 김치에 숨이 살짝 줄을때까지 2~3분정도 볶아주세요.\n7. 김치국물 150ml 물 300~350ml 정도 넣어주세요.\n8. 중약불에서 10분정도 끓여줍니다.\n9. 10분정도 끓인후 설탕 1/3스푼 정도 넣어줍니다.\n10. 후춧가루도 살짝 뿌려줍니다.\n11. 마무리로 썰어놓은 대파를 넣고 약불에서 10분정도 더 끓여주면 완성입니다.',
    },
    {
        id: '1003',
        type: '한식',
        title: '김밥',
        img: require('../image/korean_food/image_3.jpeg'),
        difficulty: 2,
        serving: 1,
        time: 60,
        material: ['김밥용김', '밥', '맛살', '당근', '햄', '어묵', '단무지', '시금치', '달걀'],
        detail: '1. 맛살을 길게 반으로 잘라줍니다.\n2. 당근을 채썰어줍니다.\n3. 햄을 길게 잘라줍니다.\n4. 어묵을 3등분 또는 4등분으로 길게 잘라줍니다.\n5. 시금치는 살짝 데쳐줍니다.\n6. 데쳐진 시금치를 찬물에 헹궈줍니다.\n7. 시금치에 맛소금 조금 , 참기름 조금 참깨 조금 넣고 조물조물 해주세요.\n8. 달걀지단을 만들게요.\n9. 계란에 소금 후추 한꼬집씩 넣고 달걀을 풀어줍니다.\n10. 팬에 기름을 넉넉히 두룬 후 달걀을 천천히 팬에 둘러줍니다. 그 후에 양 옆면을 접어 자르기 좋게 해줍니다.\n11. 기름을 둘러 당근도 볶아줍니다. 햄도 볶아주세요.\n12. 어묵은 간장소스 ( 간장 1T , 미림1/2T , 올리고당 1/2 t , 식용유 1/2T )와 함께 볶아줍니다.)\n13. 밥에 참기름과 맛소금 참깨를 넣고 간을 해줍니다.\n14. 김밥용 김에 밥을 얇게 깔아줍니다.\n15. 어묵 달걀지단, 맛살 당근, 시금치, 단무지, 햄 순서로 올려줍니다.\n16. 돌돌돌 말아준뒤에 참기름을 김밥에 발라 완성 해줍니다.',
    },
    {
        id: '1004',
        type: '한식',
        title: '미역국',
        img: require('../image/korean_food/image_4.jpeg'),
        difficulty: 2,
        serving: 1,
        time: 20,
        material: [
            '소고기(국거리용)',
            '미역',
            '쌀뜨물(혹은 물)',
            '다진마늘',
            '참기름',
            '국간장',
            '소금',
        ],
        detail: '1. 키친타올을 이용해 소고기 핏물을 닦아주세요.\n2. 미역은 물 500ml(약 2.5컵)에 10분간 불려주세요.\n3. 미역은 물 500ml(약 2.5컵)에 10분간 불려주세요.\n4. 불린 미역은 가위를 이용해 먹기 좋은 크기로 잘라주세요.\n5. 미역은 체를 이용해 건져주세요.\n6. 이때 미역 불린 물은 버리지 않고 미역국 끓일 때 물 대신 사용해주세요.\n7. 중불로 달군 냄비에 참기름 1큰술을 두른 뒤 다진마늘 1큰술과 소고기를 넣고 볶아주세요.\n8. 소고기 겉면이 절반 정도 익을 때쯤 국간장 1큰술을 넣어 볶아주세요.\n9. 미역을 넣고 푸른색을 띨 때까지 달달 볶아주세요.\n10. 쌀뜨물 혹은 미역 불린 물 400mL(약 2컵)를 붓고 강불로 올려주세요.\n11. 국물이 끓기 시작하면 물 1L(약 5컵)를 넣어주세요.\n12. 다시 끓어오르면 중약불로 줄인 뒤 15분간 끓여주세요.\n13. 국간장 1큰술을 넣고 부족한 간은 소금으로 더해주세요.',
    },
    {
        id: '1005',
        type: '한식',
        title: '닭백숙',
        img: require('../image/korean_food/image_5.jpeg'),
        difficulty: 5,
        serving: 1,
        time: 30,
        material: ['생닭', '대추', '통마늘', '약재', '물', '찹쌀', '소금 '],
        detail: '1. 찹쌀을 충분히 불려주세요.(찹쌀은 찬 물에 2시간 이상 불려야 해요.)\n2. 찹쌀을 불리는 동안, 닭을 손질하고 씻어주세요.\n3. 기름 덩어리, 잡내 제거를 위해 닭의 꽁지, 목덜미 비계, 뼈 주변에 붙은 내장을 제거해줍니다.\n4. 넣고 끓일 재료를 냄비에 모두 넣어주세요.(불린 찹쌀, 대추, 마늘, 약재(인삼이 없을 경우 황기만 들어가도 괜찮습니다)\n5. 닭을 넣고 물 2L를 부어주세요.\n6. 강불에서 7분간 끓여주세요.\n7. 약불로 줄이고 30분간 푹 끓여주시면 완성!\n8. 마지막에 냄비에 소금 1숟갈을 넣어주셔도 좋고 덜어 드시면서 원하는 만큼의 소금간을 따로 하셔도 좋습니다.',
    },
    {
        id: '1006',
        type: '한식',
        title: '비빔밥',
        img: require('../image/korean_food/image_6.jpeg'),
        difficulty: 2,
        serving: 1,
        time: 30,
        material: [
            '돼지고기',
            '애호박',
            '양파',
            '당근',
            '고추장',
            '간장',
            '설탕',
            '깨소금',
            '참기름',
            '식초',
        ],
        detail: '1. 양파, 당근, 애호박을 채썰어서 준비합니다.\n2. 비빔밥에 비벼먹을 양념장을 준비합니다.(고추장 2T +간장 2T+설탕 1.5T+깨소금, 참기름 +식초 1T)\n3. 먼저 당근을 소금 1꼬집 넣고 색깔이 나게 볶아줍니다.\n4. 애호박도 소금 1꼬집 넣고 볶아줍니다.\n5. 양파는 간장 1T 넣고 중불에 볶아줍니다. 꽤 오래 볶아서 단맛이 나게 볶아줍니다.\n6. 소금, 후추로 밑간해 놓은 채썰어준 돼지고기를 볶아줍니다.\n7. 익은 돼지고기를 아까 만들어 놓은 양념장과 섞어 줍니다.\n8. 따뜻한 밥위에 볶아 놓은 야채를 올리고 반숙 계란 후라이, 양념장을 크게 1T 떠서 셋팅하면 비빔밥 완성!',
    },
    {
        id: '1007',
        type: '한식',
        title: '갈치조림',
        img: require('../image/korean_food/image_7.jpeg'),
        difficulty: 3,
        serving: 1,
        time: 55,
        material: [
            '갈치',
            '무',
            '양파',
            '대파',
            '홍고추',
            '청양고추',
            '고춧가루',
            '다진마늘',
            '다진생강',
            '간장',
            '맛술',
            '후춧가루',
            '참기름',
            '올리고당',
        ],
        detail: '1. 갈치 1마리의 지느러미와 창자 제거하시고 갈치의 비늘을 칼로 긁어서 제거해줍니다.\n2. 비늘을 긁을후 찬물에 씻어서 소쿠리에 받쳐 물기를 빼고 굵은소금 1/2T정도를 골고루 뿌려줍니다.\n3. 무를 1cm두께로 반달모양으로 썰어줍니다.\n4. 대파1개는 큼직하게 어슷썰고 홍고추1개 청양고추3개도 어슷썰어서 준비합니다.양파1/2개도 큼직하게 채썰어준비합니다.\n5. 양념장 : (고추가루7T. 다진마늘1T. 다진생강1/3T. 진간장9T. 맛술4T. 후추가루약간. 참기름1T 올리고당1T을 섞어 양념장을 만들어준비합니다.\n6. 넓은냄비에 무를 깔고 무위에 준비한 양념장의 1/2를 골고루 올려준후 물 1컵반을 넣고 졸여줍니다.\n7. 처음엔 센불로 했다가 끓어오르면 중불로 줄이고 냄비뚜껑을 닫은채 10분동안 졸여줍니다.무를 10분동안 졸인후 가스불을 끈뒤 졸여진 무위에 채썬양파를 올리고 준비한 갈치를 올려주세요.\n8. 그 위에 대파. 청양고추.홍고추를 올린후 물을 1컵 더 넣은후 가스불을 센불로 켜주세요.\n9. 끓어오르면 중불로 줄인후 냄비뚜껑은 완전히 닫지 말고 졸여주세요.\n10. 20분정도 졸여 양념이 거의 줄고 갈치가 익으면 완성입니다.',
    },
    {
        id: '1008',
        type: '한식',
        title: '불고기',
        img: require('../image/korean_food/image_8.jpeg'),
        difficulty: 3,
        serving: 1,
        time: 35,
        material: [
            '돼지고기',
            '다진마늘',
            '대파',
            '다진생강',
            '깻잎',
            '진간장',
            '설탕',
            '맛술',
            '청주',
            '참기름',
            '후춧가루',
        ],
        detail: '1. 돼지고기 앞다리살은 키친타월에 올려 핏물제거해 준비합니다.\n2. 대파 줄기 부분은 곱게 다져주었어요.\n3. 다진 마늘 다진 생강 약간을 준비해요.\n4. 핏물 뺀 돼지고기는 볼에 담아 분량의 양념을 넣어주세요.\n5. 단음식을 좋아하지 않아 보통 단맛으로 했어요 단맛은 가감하세요.\n6. 조물조물 버무려 맛있는 양념이 배이도록 10분간 재웁니다.(양념 : 진간장, 설탕, 맛술, 청주, 참기름, 후춧가루)\n7. 팬은 센불에서 뜨겁게 달군 다음 양념한 고기를 넣어 주세요 (센불).\n8. 센불로 유지하고 볶아 주는데요 한 번 볶고 잠시 두었다 볶고를 반복해줍니다.\n9. 깻잎은 돌돌말아 채썰어 올려주면 바싹 돼지불고기 완성.',
    },
    {
        id: '1009',
        type: '한식',
        title: '부추무침',
        img: require('../image/korean_food/boochoo.jpg'),
        difficulty: 1,
        serving: 1,
        time: 15,
        material: ['부추', '양파', '간장', '고추가루', '식초', '설탕', '들기름', '다진마늘', '깨'],
        detail: '1. 양파는 얇게썰어 물에담가(30분정도) 매운기를 빼고 준비해 둡니다.\n2. 부추는 3-4등분 하여 주세요.\n3. 간장,고추가루,식초,설탕,마늘,들기름을 잘 섞어 양념장을 만들어줍니다.\n4. 부추, 양파에 양념장을 잘 무쳐주어 깨를 뿌리면 완성.',
    },
    {
        id: '1010',
        type: '한식',
        title: '참치주먹밥',
        img: require('../image/korean_food/joomukbob.jpg'),
        difficulty: 1,
        serving: 1,
        time: 15,
        material: [
            '밥',
            '참치통조림',
            '김가루',
            '맛소금',
            '참기름',
            '통깨',
            '마요네즈',
            '소금',
            '후춧가루',
        ],
        detail: '1. 참치캔은 기름기를 제거하고 준비합니다.\n2. 볼에 참치 넣고 마요네즈 5, 소금 두꼬집, 후춧가루 조금 뿌려 버무려 줍니다.\n3. 밥은 넉넉히 준비한다음 맛소금과 참기름, 통깨 넣고 섞어서 밥을 준비합니다.\n4. 비닐봉지 안에 김가루 넣어준다음 밥 떠서 그 안에 참치 마요 한큰술 정도 넣어 동그랗게 주먹밥을 만들어 줍니다.\n5. 안 부서지게 단단하게 말아주면 됩니다.\n6. 김가루 안에 넣어 굴려주면 주먹밥 완성입니다.',
    },
    {
        id: '2001',
        type: '일식',
        title: '덴푸라',
        img: require('../image/japanese_food/denpura.jpg'),
        difficulty: 2, //난이도
        serving: 1, //인분
        time: 35,
        material: [
            '튀김가루 5스푼',
            '중력분 5스푼',
            '얼음물 8스푼',
            '계란 노른자 1개',
            '새우 5마리',
        ],
        detail: '1. 새우껍질을 제거후 배쪽에 칼집 두세번을 넣고 새우의 물주머니를 제거한다. \n 2. 튀김가루와 밀가루를 믹싱볼에 넣고 얼음물 8스푼과 노른자를 넣고 반죽을 만든다. \n 3. 새우에 밀가루를 뭍힌 후 반죽을 뭍힌다. \n 4. 튀김기름에 반죽을 조금 넣었을때 반죽이 위로 올라오면 튀기기 시작한다 \n 5. 키친타올에 올려 기름을 빼준다\n',
    },
    {
        id: '2002',
        type: '일식',
        title: '돈코츠 라멘',
        img: require('../image/japanese_food/donkoturamen.jpg'),
        difficulty: 5,
        serving: 3,
        time: 55,
        material: [
            '돼지등뼈사골 1팩',
            '영계 1마리',
            '황기 1뿌리',
            '대추 6알',
            '미소된장 1스푼',
            '다시마 1장',
            '다진마늘 1톨',
            '반숙달걀 3개',
            '숙주나물 3컵',
            '부추 1공기',
            '고춧가루 1스푼',
            '멸치액젓 1스푼',
            '깨 1스푼',
            '마른김 3장',
            '생라멘면사리 3개',
            '돼지고기 다짐육 200g',
            '맛간장 1스푼',
            '참기름 1스푼',
            '양파요리당 1스푼',
            '설탕 1스푼',
            '후추',
        ],
        detail: '1. 돼지등뼈는 찬물에 담궈서 핏물 빼기.(하룻밤) 핏물 뺀 돼지등뼈랑 영계를 같이 넣고 끓이기.한소끔하면 첫물을 버리고 찬물을 부어 다시 중불에서 끓이기.\n 2. 대추,황기는 한소끔 한 뒤 넣고 약불로 교체하고 난뒤 국물이 뽀얗게 우러 날 때까지 끓이기. 닭이 익으면 살코기는 발라서 따로 사용하셔요. 뼈만 넣어서 푹 고아요. 3~4시간소요. \n 3. 푹 고운 육수를 고운체에 받쳐서 육수만 따로 식혀서 기름띠를 제거해요. \n 4. 3인분~ 육수에 된장(미소)1T를 고운 체망에 풀고 다시마 한장을 넣어요. 15분후에 끓여요.\n 5. 양파,흰파,마늘(2:1:0.5)비율로 간 향신채 OR 양파요리당을 준비해요. \n 6.달궈진 세라믹(뚝배기)에 참기름1t를 두르고 돼지고기다짐육과 양파요리당1T(향신채)를 넣어서 볶아 주어요. \n 7. 고기가 반쯤 익었을때 맛간장1t를 넣어서 볶아 주어요. \n 8. 단맛을 위해 설탕 1t을 넣어 주셔요. 돼지고기에 고소한 단맛을 주는 비밀병기입니다. \n 9. 돼지고기가 익고 난 뒤 설탕 1t를 넣어 주셔요. 마지막에 후추 톡톡 \n 10. 고명으로 올라가는 볶은돼지고기의 맛을 꼭 확인 하셔요 \n 11. 달걀은 찬물을 붓고 소금1t를 넣어서 ~7분만 삶아요. 젓가락으로 저어 주면 노른자가 중심에 가요. 찬물에 달걀을 넣고 식힐 때 식초1t를 넣으면 껍질이 잘 분리 되어요. \n 12. 숙주,부추를 잘 씻어서 체반에 두어요. 영양부추말고 일반부추를 사용하셔요. \n 13. 돈코츠라멘은 다진마늘이 큰 역할을 합니다. 살짝 느끼 할 수 있는 돼지육수를 칼칼한 맛을 유도 하면서 국물맛에 풍미를 더해 주어요. 1인당 1톨 \n 14. 마늘 빻은 절구통에 멸치액젓1t,고춧가루,깨소금을 넣고 부추 1공기를 넣고 무쳤어요. 약식 부추겉절이가 완성 \n 15. 실파(쪽파)는 잘게 썰어서 준비하고 반숙 달걀은 반으로 잘라 주어요. 볶은돼지고기,부추겉절이,다진마늘...고명으로 들어갈 재료가 셋팅 되었어요. \n 16. 면이 정말 중요 해요. 전 생 칼국수 면을 준비했는데 면이 별로 였어요. 일본 생라멘이 가장 좋구요. 아니면 일본 인스턴트라멘을 준비하셔요. \n 17. 칼국수 삶을 물이 끓고 있을 때...칼국수 면을 체반에 넣어요. 그리고 흐르는 물에 재빨리 씻어 주었어요. \n 18. 팔팔 끓는 물에 칼국수 면을 삶아요. \n 19. 옆불에 육수를 끓이고 있어요. 한소끔하면 다시마를 건져내요. \n 20. 익힌 칼국수 면을 체반에 1인분씩 넣고 육수에 토렴을 해요. 육수맛이 면에 잘 배이도록. 넣었다 뺐다를 2번만 해요. \n 21.숙주도 살짝 육수에 토렴을 해요. \n 22. 대접에 면을 중간에 넣고 고명을 빙 둘러 넣어요. 마른김도 한장 올렸네요. \n 23. 팔팔 끓는 육수를 대접에 부어요. 다진마늘은 육수맛을 일단 보고 난 뒤 추가로 넣으셔요.',
    },
    {
        id: '2003',
        type: '일식',
        title: '두부유부초밥',
        img: require('../image/japanese_food/dubuyubu.jpg'),
        difficulty: 1,
        serving: 1,
        time: 45,
        material: ['두부 1모', '초밥용 유부 1PK', '파프리카 100g '],
        detail: '1. 두부를 으깬 뒤 물기 제거 \n 2. 초밥용 유부에 들어있는 소스 두부에 넣기 \n 3. 두부에 파프리카 넣고 섞어주기 \n 4. 유부에 두부 채워 넣기 \n 5. 두부유부초밥 완성',
    },
    {
        id: '2004',
        type: '일식',
        title: '어묵우동',
        img: require('../image/japanese_food/emukudong.jpg'),
        difficulty: 2,
        serving: 1,
        time: 45,
        material: [
            //1인분
            '어묵 1봉',
            '파 약간',
            '표고 버섯 1개',
            '맛살 1개',
            '쯔유 6큰술',
            '소금',
            '물 3컵',
            '다시마',
        ],
        detail: '1. 다시마육수를 낸다. \n 2. 물 3컵,쯔유 6큰술, 소금을 약간 넣어준다 \n 3. 썰어놓은 어묵을 넣어주세요 \n 4. 꼬치어묵, 표고버섯,파,맛살을 넣어주세요 \n 5. 우동면을 넣어주세요 \n 6. 보글복글 끓여주세요 \n 7. 맛있게 드시면 됩니다',
    },
    {
        id: '2005',
        type: '일식',
        title: '가라아게',
        img: require('../image/japanese_food/karaage.jpg'),
        difficulty: 3,
        serving: 4,
        time: 40,
        material: [
            '닭 다리살 1kg',
            '간장 4큰술',
            '설탕 3/2 큰술',
            '청주 2큰술',
            '다진 마늘 1큰술',
            '생강가루 1/2큰술',
            '전분가루 조금',
            '밀가루 조금',
        ],
        detail: '1. 닭 다리살 1kg은 찬물에 깨끗하게 씻어 먹기 좋은 크기로 잘라주세요. \n 2. 겉은 바삭하고 속은 육즙 촉촉한 식감을 위해 전분가루와 밀가루를 1대1 비율로 섞어서 준비해줍니다. \n 3. 튀김옷 가루류는 비닐봉지에 담아서 살살 흔들어가며 옷을 입혀주시면됩니다 \n 4. 튀김옷을 입은 닭다리살은 5분 정도 시간을 두고 기다려줍니다. \n 5. 1차로 튀기는 치킨 가라아게는 살짝은 낮은 온도에서 겉 튀김옷을 입혀준다는 느낌으로 가볍게 튀겨줍니다. \n 6. 튀겨낸 닭다리살은 기름을 빼주면서 잔열로 속살이 익을 수 있도록 해줍니다. \n 7. 기름이 빠지고, 어느 정도 식으면 튀김 온도를 살짝 올려한번 더 튀겨내줍니다 \n 8. 바삭바삭한 튀김옷 속에 육즙 풍부한 가라아게 완성',
    },
    {
        id: '2006',
        type: '일식',
        title: '규동',
        img: require('../image/japanese_food/kudong.jpg'),
        difficulty: 3,
        serving: 2,
        time: 30,
        material: [
            //2인분
            '소고기(불고기용) 150g',
            '마늘 3쪽',
            '양파 1/2개',
            '쪽파 5대',
            '쌀밥 2그릇',
            '물 180ml',
            '진간장 2스푼',
            '물엿 1스푼',
            '백설탕 1/2스푼',
            '굴소스 1/2스푼',
            '후추 약간',
            '생강 1조각',
        ],
        detail: '1. 소불고기용 고기를 키친타올에 톡톡 두드려 핏물을 제거를 해주고 먹기 좋은 크기로 찢어서 준비합니다 \n 2. 쪽파는 송송 썰어 준비하고 양파는 채 썰어 준비합니다. \n 3. 물2컵 가량에 통마늘을 저며 넣고 끓인뒤 손질해 놓은 소불고기감을 넣어 가볍게 데쳐냅니다 \n 4. 규동 소스 재료를 모두 넣고 바글바글 끓여준뒤 생강편은 꺼내주고 양파를 넣어 한소끔 잘 끓여주고 데친 소불고기를 넣어 끓여 줍니다. \n 5. 일본식 소불고기가 완성됬습니다 \n 6. 따뜻한 밥을 그릇에 담고 밥위에 일본식 불고기를 고루 올려준 뒤 규동 소스 국물까지 촉촉하게 잘 넣어주고 소고기 가운데를 수저로 살짝 갈라서 공간을 만들고 계란 노른자를 올립니다. \n 7. 마지막으로 송송 썰어놓은 쪽파를 듬뿍 올려주면 규동 완성입니다.',
    },
    {
        id: '2007',
        type: '일식',
        title: '모츠나베',
        img: require('../image/japanese_food/mochunabe.jpg'),
        difficulty: 2,
        serving: 2,
        time: 50,
        material: [
            //2인분
            '양배추 1/2',
            '팽이버섯 1봉지',
            '양파 1/2개',
            '숙주나물',
            '찌개 두부 한모',
            '대창 400g',
            '부추 적당량',
            '물 1L',
            '토리가라스프 3큰술',
            '오이스터소스 1큰술',
            '청주 2작은술',
            '미림 2작은술',
            '쯔유 2작은술',
            '소금 적당량',
        ],
        detail: '1. 준비한 야채들을 손질한다 \n 2. 대창은 한번 삶아 준다. \n 3. 물1L,토리가라스프 3큰술,오이스터소스 1큰술,청주 2작은술,미림 2작은술,쯔유 2작은술,소금 적당량을 한곳에 넣고 섞어준다 \n 4. 육수에 재료를 전부 넣고 바글바글 끓인다 \n 5. 완성',
    },
    {
        id: '2008',
        type: '일식',
        title: '오니기리',
        img: require('../image/japanese_food/onigiri.jpg'),
        difficulty: 1,
        serving: 2,
        time: 40,
        material: [
            //2인분
            '쌀밥 2공기',
            '김',
            '소금',
            '물',
        ],
        detail: '1. 김은 작게 잘라서 준비합니다 \n 2. 손에 물을 좀 묻힌 후 손 전체에 소금을 약간 발라줍니다. \n 3. 밥을 손바닥에 얹어서 두손으로 쥐고 뭉친 다음에 삼각모양으로 밥을 세워서 눌러주고 세로로 밥을 한번씩 돌려가며 눌러주고 돌리고 눌러주고 하면서 삼각형 모양으로 만들어 줍니다 \n 4. 마지막으로 김을 밑에 붙여주면 완성입니다.',
    },
    {
        id: '2009',
        type: '일식',
        title: '야끼우동',
        img: require('../image/japanese_food/yakiudong.jpg'),
        difficulty: 3,
        serving: 1,
        time: 40,
        material: [
            //1인분
            '진간장 2큰술',
            '식초 2/3큰술',
            '황설탕 1큰술',
            '물 1/2컵',
            '식용유 3큰술',
            '양배추 1/2컵',
            '양파 1/4개',
            '당근 20g',
            '돼지고기(등심) 50g',
            '대파 30g',
            '우동면 1개',
            '흔얀멸치가루 적당량',
            '쪽파 적당량',
            '마요네즈 적당량',
        ],
        detail: '1. 양파, 당근은 채 썰고 대파, 쪽파는 송송 썰어 준비한다. \n 2. 양배추는 1cm 정도 두께로 먹기 좋게 썬다. \n 3. 훈연멸치는 내장을 제거하고 마른 팬에 볶아 믹서에 갈아준다. \n 4. 팬에 기름, 대파를 넣고 열이 오르면 고기를 넣어 볶아준다. \n 5. 고기가 노릇하게 익으면 양파, 당근, 양배추를 넣어 볶는다. \n 6. 진간장, 황설탕, 식초, 물을 섞어 양념장을 만든다. \n 7. 채소가 볶아지면 가운데에 면을 넣고 가장자리에 양념장을 둘러 중불에서 끓인다. \n 8. 면이 풀어지면 불을 세게 켜고 볶아준다. \n 9. 완성그릇에 볶음우동을 담고 마요네즈를 뿌려준다. \n 10. 훈연멸치가루, 쪽파를 올려 마무리한다.',
    },
    {
        id: '2010',
        type: '일식',
        title: '연어초밥',
        img: require('../image/japanese_food/yenususi.jpg'),
        difficulty: 2,
        serving: 3,
        time: 30,
        material: [
            //3인분
            '생연어 400g',
            '밥 3인분',
            '다시마 1장',
            '양파 1/2개',
            '무순',
            '케이퍼',
            '홀스래디쉬소스',
            '생와사비',
            '식초',
            '설탕',
            '소금',
        ],
        detail: '1. 우선 초밥단촛물을 만듭니다 비율은 식초:설탕:소금 2:1:0.3 으로 만들고 전자레인지에 30초 돌려줍니다. \n 2. 양파는 가늘게 채썬 후 찬물에 10분 담가두었다가 채망에 담아 물기를 빼줍니다 \n 3. 연어는 좀 길면서 얇게 썰어줍니다. \n 4. 따뜻한 밥에 초밥단촛물 일부를 넣어 잘 섞어주고 간을 보신후 싱거우면 더 추가해 줍니다. \n 5. 밥은 초밥모양으로 만들어 주고 밥 위에 생와사비를 올려 줍니다. \n 6. 밥위에 연어를 올려주고 양파와 케이퍼,홀스래디쉬소스를 올려주고 무순을 올려줍니다.',
    },
    {
        id: '3001',
        type: '중식',
        title: '짜장면',
        img: require('../image/chinese_food/jajang.jpg'),
        difficulty: 2,
        serving: 2,
        time: 30,
        material: [
            '양파 1개 ',
            '양배추 1/5개 ',
            '돼지고기 200g ',
            '오이 1/3개 ',
            '파 2줄기 ',
            '파스타면 2인분 ',
            '춘장 ',
            '설탕 ',
            '물전분 ',
            '식용유 ',
        ],
        detail: '1. 후라이팬에 식용유 2컵을 붓고 춘장 1봉지를 넣고 기름에 춘장을 튀겨줍니다. \n 2. 짜장면 야채를 준비합니다.오이는 돌려깎이해서 채썰고(고명용 )양배추와 양파는 큼직큼직 썰어주고 파는 잘게 잘게 썰어서 준비합니다. \n 3. 불을 켜지 않은 후라이팬에 식용유를 붓고 파를 넣고 볶아서 파기름을 내줍니다. \n 4. 파기름이 얼추 나면 잘게 썰어 놓은 돼지고기를 넣고 볶아줍니다. \n 5. 고기가 익으면 오이를 제외한 양배추와 양파를 넣고 볶아줍니다. 6. 튀긴 춘장을 1/3컵 정도 넣고 설탕 1T를 넣고 볶아줍니다. \n 7. 춘장이 야채와 고루 섞이게 볶아줍니다. 이때 먹으면 흔히보던 간짜장이 됩니다. \n 8. 물을 재료가 자박자박 할때까지 넣어줍니다.끓여 주다가 물 : 전분 = 3 : 1로 타준 전분물로 짜장의 농도를 걸쭉하게 만들어 줍니다. \n 9. 중화면을 대체하기 위한 파스타 면을 소금 1T를 넣고 2인분 정도 13분 삶아 줍니다.면이 익으면 그릇에 면을 셋팅하고 위에 짜장을 부어주고 오이 고명을 올려주면 완성입니다. ',
    },
    {
        id: '3002',
        type: '중식',
        title: '짬뽕',
        img: require('../image/chinese_food/jjambbong.jpg'),
        difficulty: 3,
        serving: 1,
        time: 60,
        material: [
            '칼국수 생면 1개 ',
            '양파 라면용기1컵 ',
            '양배추 라면용기1컵 ',
            '식용류 종이컵 1/2컵 ',
            '호박 라면용기 1컵 ',
            '당근 종이컵 1컵',
            '돼지고기(앞다리살) 종이컵 1컵',
            '부추 종이컵 1컵 ',
            '잘게 썬 파 1컵 ',
            '오징어 종이컵 2컵 ',
            '청양고추 소주컵 1컵',
            '진간장 1/2컵',
            '고춧가루 종이컵 1컵',
            '홍합 2줌',
        ],
        detail: '1. 짬뽕에 들어가는 재료들은 채썰어 주세요 \n 2. 파 종이컵 1컵과 식용류 종이컵 1/2컵을 넣고 파기름을 만듭니다 \n 3. 파기름이 나오면 돼지고기 종이컵 1컵을 넣어서 함께 볶아줍니다. \n 4. 고기를 살짝 볶으면 바로 오징어 2컵을 넣어서 볶아줍니다. \n 5. 간장 소주잔 1/2컵을 둘러서 다시 볶아줍니다. \n 6. 양파, 양배추, 호박 라면용기 1컵과 당근을 넣어서 볶아줍니다. \n 7. 마지막으로 청양고추 소주잔 1컵을 넣어줍니다. \n 8. 고춧가루 종이컵 1컵을 넣어주고 타기전에 물을 넣어줍니다. \n 9. 물은 재료들이 적당히 잠길 때 까지 넣어줍니다 \n 10. 한참 끓이고 나서 잘 다듬은 홍합을 원하는 만큼 넣어줍니다. \n 11. 짬뽕의 매웃맛은 후추 살짝을 넣어 더 내주고 소금 1/2소주컵 만큼 넣어줍니다. \n 12. 마지막으로 부추를 넣고 팔팔 끓여줍니다',
    },
    {
        id: '3003',
        type: '중식',
        title: '깐풍기',
        img: require('../image/chinese_food/kkanpungki.jpg'),
        difficulty: 3,
        serving: 1,
        time: 30,
        material: [
            '순살 닭고기 500g ',
            '올리브 오일 2T ',
            '마른 고추 2개 ',
            '대파 1/2대 ',
            '다진 마늘 1.5T ',
            '다진 생강 1t ',
            '청주 1T',
            '소금 ',
            '후추 ',
            '계란 흰자 1~2개 ',
            '전분가루 3/4컵 ',
            '양조간장 1T ',
            '토마토케찹 2T ',
            '맛술 1T ',
            '설탕 1T',
            '참기름 1t ',
        ],
        detail: '1. 닭 순살에 청주1T 소금, 후추 약간을 더하여 밑간을 해놓습니다. \n 2. 양조간장 1T,토마토케찹 2T,맛술 1T,설탕 1T, 후추 약간과 참기름 1t를 모두 섞어 깐풍기 소스를 만들어 줍니다 \n 3. 대파와 건고추는 가로세로 0.5cm길이로 썰어 준비를 해줍니다 \n 4. 튀김용 계란 흰자와 전분가루를 재워놓은 순살 닭고기에 넣어 버무려 주세요 \n 5. 170도로 예열한 기름에 닭고기를 튀겨주세요 튀겨낸 닭고기를 식힌후 다시 한번 튀기면 더욱 바삭해 집니다 \n 6. 팬에 다진 마른고추 2개 다진 대파 1/2대를 볶다가 다진마늘 1.5T와 다진 생강 1t를 넣어 볶아 주세요 \n 7. 여기에 만들어 놓은 소스를 부어 끓여주세요. 소스가 끓어 오르면 튀긴 닭고기를 모두 넣어준후 10초 내에 잽싸게 섞듯이 볶아 완성합니다',
    },
    {
        id: '3004',
        type: '중식',
        title: '마라탕',
        img: require('../image/chinese_food/mara.jpg'),
        difficulty: 1,
        serving: 2,
        time: 40,
        material: [
            '시판용 마라탕소스 ',
            '물 1컵 ',
            '올리브유 ',
            '건두부 ',
            '닭가슴살 1덩어리 ',
            '닭가슴살 큐브 1팩 ',
            '사골곰탕 육수 350ml ',
            '대파 1/2줌 ',
            '청경채 150g ',
            '표고보섯 반 ',
            '소세지 2개 ',
            '고수 ',
        ],
        detail: '1. 먼저 청경채를 잘라서 씻어주고 건두부도 먹을만큼 면처럼 썰어주세요 \n 2. 달궈진 팬에 기름을 두르고 대파로 파기름을 낸 뒤 시판용 마라소스를 넣고 으깨주세요 \n 3. 사골곰탕육수 한 팩과 물을 넣고 팔팔 끓여주세요 \n 4. 국물이 충분히 베일 수 있게 건두부를 먼저 넣어주세요 \n 5. 청경채, 표고버섯도 넣어주세요. \n 6. 약불에 살짝 올려두고 닭가슴살. 소세지를 썰어주세요 \n 7. 닭가슴살, 소세지, 닭가슴살 큐브를 넣고 푹 끓여주면 됩니다 \n 8. 그릇에 담아내고 고수 좋아하시는 분은 먹을만큼 고수를 올려주면 완성',
    },
    {
        id: '3005',
        type: '중식',
        title: '난자완스',
        img: require('../image/chinese_food/nanja.jpg'),
        difficulty: 2,
        serving: 2,
        time: 60,
        material: [
            '돼지고기 다짐육 600g ',
            '생강 가루 1t ',
            '미림 3T ',
            '후추 ',
            '계란 1개 ',
            '소금 ',
            '전분가루 4T',
            '굴소스 1T',
            '진간장 1T ',
            '치킨스톡 1T ',
            '설탕 1T ',
            '물 200ml',
            '청경채 2개 ',
            '청피망 1/2개 ',
            '홍피망 1/2개 ',
            '양파 1/2개 ',
            '양송이 버섯 4개 ',
            '표고버섯 2개 ',
            '대파 1/2개 ',
            '슬라이스 마늘 1줌 ',
        ],
        detail: '1. 먼저 돼지고기는 생강가루 1 작은 술, 미림 2 큰 술, 후추 적당량, 계란 1개, 소금 적당량, 전분가루 3 큰 술을 넣고 조물조물 잘 치대준 뒤 냉장고에서 15분 정도 재워줍니다. \n 2. 그동안 야채를 손질해요.버섯을 제외한 나머지 야채는 흐르는 물에 깨끗이 씻어주고요. 먹기 좋은 크기로 썰어줍니다. (청경채 제외)양송이버섯과 표고버섯은 물로 씻지 않고 가볍게 한 번 털어줬고요. 양송이는 머리 부분 껍데기를 한 겹 벗긴 다음 밑동을 조금 잘라내 4등분 하고, 표고버섯은 밑동 제거 후 4등분 해주었답니다. \n 3. 냉장고에서 15분간 재워둔 돼지고기 반죽은 동그랑땡 만들 듯이 빚어주시고요. \n 4. 파기름 만들기! 팬에 기름을 넉넉히 부은 다음 대파 두 덩어리를 넣고 노릇노릇해질 때까지 튀겨줍니다. (대파 제거) \n 5. 대파 향이 은은하게 나는 기름에 돼지고기 반죽을 올려 노릇노릇하게 튀겨주세요. \n 6. 맛있게 튀긴 돼지고기는 식힘망에 잠시 올려 기름을 좀 빼주시고요. \n 7. 전분가루 1 큰 술과 물 2 큰 술을 넣고 잘 섞어 전분물을 만들어요. \n 8. 중불로 예열한 팬에 식용유를 넉넉히 부어준 뒤 어슷 썬 대파 1/2대와 슬라이스 마늘 한 줌을 넣고 충분히 볶아주세요. 그리고 나서 양파와 홍피망, 청피망을 넣고 잘 볶아줍니다. \n 9. 양송이버섯과 표고버섯도 넣어주시고요. 이어서 튀긴 돼지고기도 넣고 가볍게 볶아준 뒤 굴 소스 1 큰 술, 진간장 1/2 ~ 1 큰 술, 치킨스톡 1 큰 술, 참기름 1 큰 술, 미림 1 큰 술, 설탕 1 큰 술, 물 200ml를 넣고 바글바글 끓여주세요. \n 10. 청경채를 넣어주시고요. 마지막으로 전분물을 넣고 재빠르게 섞어 마무리해주세요.',
    },
    {
        id: '3006',
        type: '중식',
        title: '팔보채',
        img: require('../image/chinese_food/palbo.jpg'),
        difficulty: 3,
        serving: 2,
        time: 20,
        material: [
            '새우 120g ',
            '오징어 100g ',
            '청경채 30g ',
            '표고버섯 30g ',
            '죽숙 60g ',
            '청피망 40g ',
            '홍피망 40g ',
            '굴소스 30g ',
            '물 1/2컵 ',
            '다시다 요리수 치킨스톡 ',
            '물전분 2작은술 ',
            '파 ',
            '마늘 ',
        ],
        detail: '1. 표고버섯과 죽순은 편썰고, 청피망과 홍피망은 듬성듬성 자른다. 청경채는 한 장씩 떼어낸다. \n 2. 채소는 끓는 물에 살짝 데친다. \n 3. 새우는 껍질과 머리를 제거하여 등에 세로로 칼집을 넣고, 오징어는 안쪽에 칼집을 깊이 넣은 후 한입크기로 잘라 끓는 물에 살짝 데친다. \n 4. 오일을 두른 달군 팬에 마늘, 파를 넣고 볶아 향을 낸 후 데친 채소, 새우, 오징어를 넣고 재빨리 볶는다. \n 5. 굴소스를 넣고 볶다가 치킨스톡, 물을 넣고 끓인다. 물전분을 넣어 걸쭉하게 만든 후 참기름을 뿌려 마무리 한다',
    },
    {
        id: '3007',
        type: '중식',
        title: '탕수육',
        img: require('../image/chinese_food/tangsu.jpg'),
        difficulty: 3,
        serving: 1,
        time: 60,
        material: [
            '돼지고기 등심 200g ',
            '소금 약간 ',
            '후추 약간 ',
            '간장 1t ',
            '계란 흰자 1/2개 ',
            '맛술 1T ',
            '다진 마늘 1T ',
            '식용유 3컵 ',
            '감자 전분가루 1/2T ',
            '물적당량 ',
            '양파 1/4개 ',
            '당근 2cm ',
            '파인애플 슬라이스 1개 ',
            '설탕 5T ',
            '식초 5T ',
            '소금 1t ',
            '전분물(물과 전분을 1:1로 혼합) 3T',
        ],
        detail: '1. 소금,후추,간장,계란흰자,맛술,다진마늘,식용유2T와 돼지고기를 넣고 버무려 주세요 \n 2. 전분가루에 물을 조금씩 넣어서 걸쭉하게 만든 후 밑간한 재료를 넣어 버무립니다. \n 3. 탕수육 소스는 물 1컵, 감자전분가루, 양파, 당근, 파인애플 슬라이스, 설탕,식초,소금을 넣고 끓이다가 끓으면 전분물을 넣어서 걸쭉하게 만들어 주세요 \n 4. 끓는 기름에 옷을 입힌 돼지고기를 넣어서 2분 가량 튀겨 줍니다. \n 5. 튀김을 한번 건져내고 식힌후 다시 한번 튀겨 주세요 \n  6. 탕수육에 소스를 부어 완성합니다',
    },
    {
        id: '3008',
        type: '중식',
        title: '양장피',
        img: require('../image/chinese_food/yangjangpi.jpg'),
        difficulty: 5,
        serving: 4,
        time: 60,
        material: [
            '양자피 70g ',
            '돼지고기(잡채용) 150g ',
            '오징어(몸통) 1마리',
            '새우 8마리',
            '크래미 2줄 ',
            '홍고추 1개 ',
            '계란 2개 ',
            '오이 1/2개 ',
            '양파 1/2개 ',
            '표고버섯 2개 ',
            '대파 1/4대 ',
            '참기름 1큰술 ',
            '고추기름 2큰술 ',
            '통깨 약간 ',
            '맛술 1큰술 ',
            '간장 1큰술 ',
            '소금 조금 ',
            '후춧가루 조금',
            '생강가루 조금 ',
            '참기름 3/2큰술 ',
            '간장 1/2 큰술 ',
            '설탕 1/2작은큰술 ',
            '다진마늘 1작은술 ',
            '연겨자 1큰술 ',
            '설탕 2큰술 ',
            '식초 3큰술 ',
        ],
        detail: '1. 돼지고기에 맛술 1큰술,간장 1큰술,생강가루 한꼬집,소금,후추가루를 넣어 10분간 밑간을 해주세요. \n 2. 달걀은 약간의 소금을 넣고 잘 섞은 후 체에 내리고 지단을 부쳐 돌돌 말은 후 채를 썰어주세요. \n 3. 오이는 길이로 4등분하고 씨부분을 포를 떠서 제거하고 어슷하게 얇게 썰어주세요. 피망과 홍고추, 양파, 표고버섯, 대파는 얇게 채를 썰고 크래미는 먹기 좋게 찢어주세요. \n 4. 찬물에 30분 정도 불린 양장피를 끓는 물에 3분 정도 데친 후 찬물에 헹구고 먹기 좋게 채썰고, 참기름 1큰술, 간장 1/2큰술, 설탕 1/2작은술, 다진마늘1/4작으술을 넣고 버무려 밑간해주세요. \n 5. 새우는 내장과 껍질을 벗긴 후 끓는 물에 약간의 소금을 넣고 데친 후 반으로 포를 떠주세요. 오징어는 껍질을 벗겨 몸통 안쪽에 칼집을 낸 후 끓는 물에 약간의 소금을 넣어 데쳐주세요. \n 6. 접시에 달걀지단, 크래미, 오이, 오징어, 새우를 돌려 담고 가운데 양념한 양장피를 올려주세요. \n 7. 달군 팬에 고추기름을 넣고 대파 채를 볶다가 밑간한 돼지고기와 양파를 넣어 볶아주세요. 돼지고기가 익으면 표고버섯, 피망, 홍고추를 넣어 볶고 굴소스와 약간의 소금과 후춧가루로 밑간하고 참기름을 넣어주세요. \n 8. 연겨자, 설탕 2큰술, 식초 3큰술, 간장 1/2큰술,다진마늘 1/2작은술,참기름 1/2작은술, 소금 한꼬집을 넣어 겨자소스를 완성합니다 \n 9. 양장피 위에 볶은 돼지고기와 채소를 올리고 통깨를 뿌리고 먹기직전에 겨자소스를 곁들여주세요.',
    },
    {
        id: '3009',
        type: '중식',
        title: '고추잡채',
        img: require('../image/chinese_food/gocu.jpg'),
        difficulty: 2,
        serving: 3,
        time: 60,
        material: [
            '아삭이 고추 10개',
            '돼지고기(잡채용) 300g',
            '전분가루 2큰술',
            '계란흰자 1개',
            '대파 1/2개',
            '양파 1/2개',
            '청주 조금',
            '굴소스 2큰술',
            '후춧가루 조금',
            '생강가루 조금',
        ],
        detail: '1. 먼저 팬에 기름을 넉넉하게 두르고 대파넣고 파기름을 내어줍니다. \n 2. 아삭이고추는 안에 씨를 모두 빼서 채썰어 준비해 놓습니다 \n 3. 돼지고기를 전분가루에 계란흰자 한개 풀어주고서 전분옷을 돼지고기에 입혀 준 다음에 볶아줍니다 \n 4. 전분옷을 입힌 채썬 돼지고기를 파기름에 달달 볶아서 먼저 익혀 줍니다. \n 5. 어느정도 익었다면 이제 고추와 양파를 넣고 같이 잘 섞어가면서 볶아 줍니다. \n 6. 굴소스로 간을 해줍니다 \n 7. 고추잡채 완성입니다',
    },
    {
        id: '3010',
        type: '중식',
        title: '딤섬',
        img: require('../image/chinese_food/dimsum.jpg'),
        difficulty: 2,
        serving: 1,
        time: 30,
        material: ['새우', '만두피', '돼지고기', '치킨파우더', '생강', '소금', '청주', '후추가루'],
        detail: '1. 새우는 껍질을 까고 내장을 제거한 후 잘 다집니다 \n 2. 돼지고기는 핏물제거 후 잘 다집니다 \n 3. 다진새우와 돼지고기를 볼에 넣고 치킨파우더, 다진생강, 청주, 소금, 후추가루를 넣고 잘 치대 속을 만듭니다 \n 4. 만두피에 속 재료를 넣고 만두피를 젓가락으로 눌러 주름을 잡은 후 새우를 가장 위에 얹어주세요 \n 5. 김이 오른 찜통에 딤섬을 얹어 10여분간 쪄서 완성합니다',
    },
    {
        id: '4001',
        type: '양식',
        title: '치킨 또띠아',
        img: require('../image/western_food/chikin.jpg'),
        difficulty: 1,
        serving: 1,
        time: 30,
        material: [
            '텐더치킨 3개 ',
            '양상추 4장 ',
            '토마토 1/2개 ',
            '머스터드 ',
            '파마산치즈가루 ',
            '식용유 ',
            '양파 1/2개',
            '마요네즈 ',
            '또띠아 2장',
        ],
        detail: '1. 양상추는 큼직하게 뜯어 흐르는 물에 씻어 물기를 털어놓고 양파와 토마토는 적당한 크기로 썰어줍니다 \n 2. 팬에 기름을 두르고 치킨을 노릇하게 튀겨줍니다\n 3. 또띠아를 팬에 살짝 구운 후 양상추를 깔고 마요네즈를 뿌리고 양파와 토마토 그 위에 썰어놓은 치킨을 얹어줍니다. \n 4. 머스터드소스와 파마산치즈를 뿌려 속이 빠지지 않게 잘 말아주면 완성입니다!',
    },
    {
        id: '4002',
        type: '양식',
        title: '크림 파스타',
        img: require('../image/western_food/creampasta.jpg'),
        difficulty: 3,
        serving: 1,
        time: 30,
        material: [
            '정수물 (1.5L) ',
            '스파게티면 90g ',
            '꽃소금 1큰술 ',
            '올리브유 약간 ',
            '베이컨 2줄 ',
            '양파 1/2개 ',
            '양송이 버섯 30g ',
            '밀가루 1/2큰술 ',
            '우유 200ml ',
            '버터 1큰술 ',
            '올리브유 2큰술 ',
            '파르메산 치즈2큰술 ',
            '꽃소금 1/6큰술 ',
            '후춧가루 ',
            '파슬리 가루 ',
        ],
        detail: '1. 냄비에 정수물, 꽃소금, 올리브유를 넣고 스파게티면 삶을 물을 끓인다. \n 2. 물이 끓어오르면 면을 돌려서 펼쳐 넣고 붙지않도록 저어주면서 약 6분 정도 삶아 준비한다. \n 3. 삶아진 스파게티면은 체에 밭쳐 건져낸다. \n 4. 베이컨은 두께 1cm 정도로 자르고, 양파는 가로, 세로 0.5cm 정도로 다져 준비한다. \n 5. 양송이 한 개는 가로,세로 0.5cm 정도로 다지고, 반 개는 두께 0.5cm로 편 썰어 준비한다. \n 6. 프라이팬에 베이컨, 다진양파, 다진 양송이 버섯, 올리브유를 넣고 중 불에 볶는다.  \n 7. 양파가 노릇해 질 때까지 충분히 볶는다. \n 8. 양파에 색이 나면 버터를 넣어 볶고, 버터가 녹으면 우유, 편 썰은 양송이 버섯, 스파게티 면을 넣어 졸인다. \n 9. 밀가루를 넣고 잘 풀어 주어 농도 조절을 한다. \n 10. 불을 약 불로 줄인 후 꽃소금으로 간을 한다. \n 11. 불을 끄고 파르메산 치즈를 골고루 뿌려 섞는다. \n 12. 후춧가루를 뿌려준 후 접시에 담고 파슬리 가루를 뿌려 완성한다.',
    },
    {
        id: '4003',
        type: '양식',
        title: '사과 고르곤졸라 피자',
        img: require('../image/western_food/gorgon.jpg'),
        difficulty: 2,
        serving: 1,
        time: 30,
        material: [
            '또띠아(20cm) 1장 ',
            '사과조림 1컵 ',
            '믈 2큰술 ',
            '고르곤졸라치즈 ',
            '파슬리가루 ',
        ],
        detail: ' 1. 프라이팬은 약불에서 예열한다. \n 2. 또띠아에 사과조림을 넓게 펼친다. \n 3. 모짜렐라치즈를 사과조림 위에 골고루 뿌려준다. \n 4. 고르곤졸라 치즈를 잘게 잘라 모짜렐라치즈 위에 올려준다 \n 5. 예열 된 프라이팬에 물을 2큰술을 넣는다 \n 6. 토핑 한 피자를 프라이팬에 넣는다 \n 7. 가장 약한 불에서 뚜껑을 덮고 치즈가 녹을 정도까지 구워준다 \n 8. 완성 접시에 꺼내 파슬리가루를 뿌려 완성한다',
    },
    {
        id: '4004',
        type: '양식',
        title: '햄버거',
        img: require('../image/western_food/hambuk.jpg'),
        difficulty: 2,
        serving: 1,
        time: 30,
        material: [
            '양지다짐육 250g ',
            '목심다직육 250g ',
            '진간장 4큰술 ',
            '활설탕 5큰술 ',
            '감자전분 2큰술 ',
            '후추 1/2큰술 ',
            '참기름 3큰술 ',
            '식용유 ',
            '햄버거빵 1개 ',
            '상추 1/6개 ',
            '체다슬라이스치즈 ',
            '스틱버터 10g ',
            '케첩 ',
            '마요네즈 ',
        ],
        detail: '1. 큰 볼에 고기, 진간장, 황설탕, 감자전분, 간마늘, 후추를 넣어 치대어 준다. \n 2. 골고루 섞이면 참기름을 넣고 섞어준다. \n 3. 탁구공 크기로 고기 반죽을 성형하여 넓적하게 눌러준다. \n 4. 햄버거 빵을 반으로 갈라 프라이팬에 버터를 두르고 약불에서 노릇하게 구워준다. \n 5. 양파는 가늘게 채 썰어 준비한다. \n 6. 프라이팬에 식용유를 두르고 떡갈비 반죽을 펼쳐 굽는다. \n 7. 구워진 빵 위에 상추를 깔고 패티를 올린다. \n 8. 그 위에 케첩, 떡갈비 패티, 치즈, 떡갈비 패티 순으로 올려준다. \n 9. 채 썬 양파를 올리고 마요네즈를 뿌려 빵으로 덮어 완성한다.',
    },
    {
        id: '4005',
        type: '양식',
        title: '로제 파스타',
        img: require('../image/western_food/lojepasta.jpg'),
        difficulty: 3,
        serving: 1,
        time: 30,
        material: [
            '정수물 (1.5L) ',
            '스파게티면 90g ',
            '꽃소금 1큰술 ',
            '올리브유 약간 ',
            '베이컨 2줄 ',
            '양파 1/2개 ',
            '양송이 버섯 30g ',
            '밀가루 1/2큰술 ',
            '우유 200ml ',
            '버터 1큰술 ',
            '올리브유 2큰술 ',
            '파르메산 치즈2큰술 ',
            '꽃소금 1/6큰술 ',
            '후춧가루 ',
            '파슬리 가루 ',
            '토마토스파게티용 소스',
        ],
        detail: '1. 냄비에 정수물, 꽃소금, 올리브유를 넣고 스파게티면 삶을 물을 끓인다. \n 2. 물이 끓어오르면 면을 돌려서 펼쳐 넣고 붙지않도록 저어주면서 약 6분 정도 삶아 준비한다. \n 3. 삶아진 스파게티면은 체에 밭쳐 건져낸다. \n 4. 베이컨은 두께 1cm 정도로 자르고, 양파는 가로, 세로 0.5cm 정도로 다져 준비한다. \n 5. 양송이 한 개는 가로,세로 0.5cm 정도로 다지고, 반 개는 두께 0.5cm로 편 썰어 준비한다. \n 6. 프라이팬에 베이컨, 다진양파, 다진 양송이 버섯, 올리브유를 넣고 중 불에 볶는다.  \n 7. 양파가 노릇해 질 때까지 충분히 볶는다. \n 8. 양파에 색이 나면 버터를 넣어 볶고, 버터가 녹으면 우유, 편 썰은 양송이 버섯, 스파게티 면을 넣어 졸인다. \n 9. 밀가루를 넣고 잘 풀어 주어 농도 조절을 한다. \n 10. 토마토스파게티용 소스를 넣어줍니다.  \n 11. 불을 약 불로 줄인 후 꽃소금으로 간을 한다. \n 12. 불을 끄고 파르메산 치즈를 골고루 뿌려 섞는다. \n 13. 후춧가루를 뿌려준 후 접시에 담고 파슬리 가루를 뿌려 완성한다.',
    },
    {
        id: '4006',
        type: '양식',
        title: '티본 스테이크',
        img: require('../image/western_food/tibon.jpg'),
        difficulty: 3,
        serving: 2,
        time: 30,
        material: [
            '티본 500g ',
            '아스파라거스 3개 ',
            '양송이 7개 ',
            '굵은 소금 ',
            '통후추 ',
            '올리브유 ',
        ],
        detail: '1. 티본에 소금,통후추로 밑간을 해둡니다. \n2. 팬에 올리브유 3큰술정도를 넣고 달궈 줍니다. 기름에서 연기가 올라올 때 고기를 올려주세요 \n3. 고기가 1/2정도 익었을때 뒤집어 줍니다.\n4. T자 모양의 뼈를 기준으로 고기가 넓게 달리부분을 기름을 끼얹져 가며 익힙니다. \n5. 다 구우면 도마위에 5분정도 레스팅을 합니다 \n6. 레스팅 되는 동안에 양송이와 아스파라거스를 구워줍니다 \n7. 접시에 버섯,아스파라거스,고기를 담아줍니다',
    },
    {
        id: '4007',
        type: '양식',
        title: '토마호크 스테이크',
        img: require('../image/western_food/tomahork.jpg'),
        difficulty: 3,
        serving: 2,
        time: 30,
        material: [
            '토마호크스테이크 500g ',
            '후추 ',
            '양파 ',
            '소금 ',
            '올리브오일 ',
            '새송이버섯 1개',
        ],
        detail: '1. 토마호크 스테이크를 키친타올로 핏물을 닦습니다. \n2. 소금,후추를 뿌리고 올리브오일를 발라 시즈닝 합니다. 그리고 랩으로 싸서 냉장고에 2시간정도 숙성시킵니다 \n3. 겉들일 채소는 버터오일에 소금, 후추뿌려 구워줍니다 \n4. 후추는 굵직하게 갈아줍니다 \n5. 달군팬에 고기를 올려 구워줍니다. 한면이 누룽지가 생길 정도로 센 불로 구워줍니다. \n6. 뒤집어서 구워주고 버터 한쪽 녹여서 구워줍니다 \n7. 맛있게 구워진 고기는 레스팅 시켜 줍니다',
    },
    {
        id: '4008',
        type: '양식',
        title: '토마토 파스타',
        img: require('../image/western_food/tomatopasta.jpg'),
        difficulty: 2,
        serving: 2,
        time: 30,
        material: [
            '스파게티면 180g ',
            '베이컨 3줄',
            '방울토마토 ５개',
            '양송이 버섯 ４개',
            '양파 1/2개 ',
            '마늘 4쪽 ',
            '바질 ',
            '토마토 소스 ',
            '올리브유 ',
            '호박 ',
        ],
        detail: '1. 팬에 올리브유를 두르고 마늘넣고 볶다가 양파,버섯,호박,베이컨을 순서대로 모든 재료를 넣어주고 잘 익혀주고 소금 후추를 살짝 뿌려줍니다 \n 2. 재료가 잘 익었으면 마지막으로 토마토 소스를 넣고 중볼로 약 3분을 잘 저어가며 재료와 소스를 섞어줍니다 \n 3. 스파게티 면을 삶는데 끓는물에 면과 푸실리를 넣고 약 8분간 삶은 면을 건집니다 \n 4. 토마토소스에 면을 넣고 중불로 2~3분 정도 면에 소스가 잘 베이게 잘 섞어주면 완성입니다',
    },
    {
        id: '4009',
        type: '양식',
        title: '토마토 스프',
        img: require('../image/western_food/tomatosupe.jpg'),
        difficulty: 1,
        serving: 1,
        time: 40,
        material: [
            '완숙토마토 4개 ',
            '양파 1/2개 ',
            '당근 1/4개 ',
            '다진마늘 1/2큰술 ',
            '바질가루 ',
            '월계수잎 1장 ',
            '버터 2큰술 ',
            '물 400ml ',
            '파슬리 ',
            '소금 ',
            '후춧가루 ',
            '파르메산 치즈 ',
            '올리브오일 ',
        ],
        detail: '1. 깨끗이 씻은 토마토는 4~6등분으로 자르고, 양파는 채썰고 당근은 깍뚝 썰어주세요. 파슬리는 잘게 다져주세요. \n2. 달군 냄비에 버터를 녹인 후 다진마늘과 양파를 넣어 양파가 투명해질 때까지 3~5분 정도 볶아주세요. \n3. 토마토와 당근을 넣어 3~4분 볶다가 뜨거운 물에 치킨스톡을 넣어 녹이고, 월계수잎과 바질가루를 함께 넣어 끓여주세요. \n4. 중약불에서 뭉근하게 10~15분을 끓인 후, 불을 끄고 월계수잎을 건져내주세요. 핸드블렌더로 수프를 곱게 갈아 5~10분 정도 더 끓여주세요. 바질가루와 소금, 후춧가루를 넣어 간을 맞춰주세요. \n5. 바게트와 크루통을 프라이팬에 바삭하게 구워주세요. \n6. 그릇에 수프를 담아 후추와 다진 파슬리를 수프에 골고루 뿌려주고 치즈그라인더로 치즈를 갈아서 수프위에 뿌리고 크루통을 올려주세요 7. ',
    },
    {
        id: '4010',
        type: '양식',
        title: '또띠아 피자',
        img: require('../image/western_food/ttotiapija.jpg'),
        difficulty: 2,
        serving: 2,
        time: 30,
        material: ['또띠아 2장 ', '청양고추 2개 ', '양파 1/2개 ', '피자치즈 '],
        detail: '1. 또띠아를 준비해 줍니다. \n2. 양파와 청양고추는 잘게 다져줍니다. \n3. 마른팬에 약불로 또띠아를 한장 올려줍니다. \n4. 피자치즈를 또띠아위에 골고루 올려주세요 \n5. 다져놓은 양파랑 고추를 올려줍니다 \n6. 또띠아를 한장 위에 이불처럼 덮어줍니다. \n7. 손으로 꾸욱 눌러서 또띠아가 치즈에 잘 달라붙도록 해주세요 \n8. 뒤집개로 꾹꾹 눌러가며 약불에서 치즈가 녹고, 또띠아가 노릇노릇 해지도록 구워주세요. 앞뒤로 뒤집어가며 치즈가 잘 녹도록 익혀주세요 \n9. 치즈가 녹고 또띠아가 구워지면 끄집어내어 가위로 먹기 좋게 잘라주면 완성입니다. ',
    },
];

export const IngredientsData = [
    {
        title: '기본 양념',
        data: [
            '식용유',
            '소금',
            '설탕',
            '후추',
            '참기름',
            '들기름',
            '식초',
            '맛술',
            '다진파',
            '다진마늘',
            '고춧가루',
            '깨소금',
            '건다시마',
            '진간장',
            '국간장',
            '된장',
            '고추장',
            '액젓',
            '새우젓',
            '꿀',
            '물엿',
            '올리브유',
            '올리고당',
            '검은께',
            '생강가루',
            '들깨가루',
            '겨자가루',
            '와사비가루',
            '감자전분',
            '파마산치즈가루',
            '황색설탕',
            '흑설탕',
            '전분가루',
            '찹쌀가루',
            '튀김가루',
            '미작',
            '미림',
            '청주',
            '소주',
            '치킨스톡',
            '다시다',
            '굴소스',
            '멸치장국',
        ],
    },
    {
        title: '육류',
        data: ['돼지고기', '소고기', '닭고기', '양고기', '오리고기'],
    },
    {
        title: '어패류',
        data: [
            '굴비',
            '조기',
            '고등어',
            '갈치',
            '꽁치',
            '전어',
            '명태',
            '노가리',
            '황태',
            '은어',
            '민물어종 가물치',
            '쏘가리',
            '메기',
            '붕어',
            '잉어',
            '임연수',
            '복어',
            '삼치',
            '조개',
            '굴',
            '전복',
            '골뱅이',
            '새우',
            '딱새우',
            '해삼',
            '게',
        ],
    },
    {
        title: '채소',
        data: [
            '콩나물',
            '당근',
            '오이',
            '상추',
            '깻잎',
            '피망',
            '양파',
            '대파',
            '토마토',
            '마늘',
            '고추',
            '가지',
            '배',
            '수박',
            '감',
            '딸기',
            '레몬',
            '브롤콜리',
            '고구마',
            '감자',
        ],
    },
    {
        title: '면류',
        data: [
            '스파게티',
            '펜네',
            '링귀니',
            '파르펠레',
            '토르텔리니',
            '로델레',
            '소면',
            '당면',
            '칼국수면',
            '밀면',
            '냉면',
            '쫄면',
            '메밀면',
            '컬러 소면',
            '중면',
            '대면',
            '쌀국수면',
            '라면사리',
            '중국당면',
            '우동면',
        ],
    },
];
