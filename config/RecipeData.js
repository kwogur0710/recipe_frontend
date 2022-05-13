export const GetId = () => {
    Math.floor(Math.random() * 10000);
}

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
            '쌀뜨물 ',
            '파뿌리 ',
            '통후추 ',
            '파 ',
            '소금 ',
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
        material: [
            '돼지고기 항정살 ',
            '신김치 ',
            '김치국물 ',
            '물 ',
            '대파 ',
            '설탕 ',
            '후춧가루 ',
        ],
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
        material: [
            '김밥용김 ',
            '밥 ',
            '맛살 ',
            '당근 ',
            '햄 ',
            '어묵 ',
            '단무지 ',
            '시금치 ',
            '달걀 ',
        ],
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
            '소고기(국거리용) ',
            '미역 ',
            '쌀뜨물(혹은 물) ',
            '다진마늘 ',
            '참기름 ',
            '국간장 ',
            '소금 약간 ',
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
        material: ['생닭 ', '대추 ', '통마늘 ', '약재 ', '물 ', '찹쌀 ', '소금 '],
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
            '돼지고기 ',
            '애호박 ',
            '양파 ',
            '당근 ',
            '고추장 ',
            '간장 ',
            '설탕 ',
            '깨소금 ',
            '참기름 ',
            '식초 ',
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
            '갈치 ',
            '무 ',
            '양파 ',
            '대파 ',
            '홍고추 ',
            '청양고추 ',
            '고춧가루 ',
            '다진마늘 ',
            '다진생강 ',
            '간장 ',
            '맛술 ',
            '후춧가루 ',
            '참기름 ',
            '올리고당 ',
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
            '돼지고기 ',
            '다진마늘 ',
            '대파 ',
            '다진생강 ',
            '깻잎 ',
            '진간장 ',
            '설탕 ',
            '맛술 ',
            '청주 ',
            '참기름 ',
            '후춧가루 ',
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
        material: [
            '부추 ',
            '양파 ',
            '간장 ',
            '고추가루 ',
            '식초 ',
            '설탕 ',
            '들기름 ',
            '다진마늘 ',
            '깨 ',
        ],
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
            '밥 ',
            '참치통조림 ',
            '김가루 ',
            '맛소금 ',
            '참기름 ',
            '통깨 ',
            '마요네즈 ',
            '소금 ',
            '후춧가루 ',
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
            '튀김가루 5스푼 ',
            '중력분 5스푼 ',
            '얼음물 8스푼 ',
            '계란 노른자 1개 ',
            '새우 5마리 ',
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
            '돼지등뼈사골 1팩 ',
            '영계 1마리 ',
            '황기 1뿌리 ',
            '대추 6알 ',
            '미소된장 1스푼 ',
            '다시마 1장 ',
            '다진마늘 1톨 ',
            '반숙달걀 3개 ',
            '숙주나물 3컵 ',
            '부추 1공기 ',
            '고춧가루 1스푼 ',
            '멸치액젓 1스푼 ',
            '깨 1스푼 ',
            '마른김 3장 ',
            '생라멘면사리 3개 ',
            '돼지고기 다짐육 200g ',
            '맛간장 1스푼 ',
            '참기름 1스푼 ',
            '양파요리당 1스푼 ',
            '설탕 1스푼 ',
            '후추 ',
        ],
        detail: '1. 돼지등뼈는 찬물에 담궈서 핏물 빼기.(하룻밤) 핏물 뺀 돼지등뼈랑 영계를 같이 넣고 끓이기.한소끔하면 첫물을 버리고 찬물을 부어 다시 중불에서 끓이기.\n 2. 대추,황기는 한소끔 한 뒤 넣고 약불로 교체하고 난뒤 국물이 뽀얗게 우러 날 때까지 끓이기. 닭이 익으면 살코기는 발라서 따로 사용하셔요. 뼈만 넣어서 푹 고아요. 3~4시간소요. \n 3. 푹 고운 육수를 고운체에 받쳐서 육수만 따로 식혀서 기름띠를 제거해요. \n 4. 3인분~ 육수에 된장(미소)1T를 고운 체망에 풀고 다시마 한장을 넣어요. 15분후에 끓여요.\n 5. 양파,흰파,마늘(2:1:0.5)비율로 간 향신채 OR 양파요리당을 준비해요. \n 6.달궈진 세라믹(뚝배기)에 참기름1t를 두르고 돼지고기다짐육과 양파요리당1T(향신채)를 넣어서 볶아 주어요. \n 7. 고기가 반쯤 익었을때 맛간장1t를 넣어서 볶아 주어요. \n 8. 단맛을 위해 설탕 1t을 넣어 주셔요. 돼지고기에 고소한 단맛을 주는 비밀병기입니다. \n 9. 돼지고기가 익고 난 뒤 설탕 1t를 넣어 주셔요. 마지막에 후추 톡톡 \n 10. 고명으로 올라가는 볶은돼지고기의 맛을 꼭 확인 하셔요 \n 11. 달걀은 찬물을 붓고 소금1t를 넣어서 ~7분만 삶아요. 젓가락으로 저어 주면 노른자가 중심에 가요. 찬물에 달걀을 넣고 식힐 때 식초1t를 넣으면 껍질이 잘 분리 되어요. \n 12. 숙주,부추를 잘 씻어서 체반에 두어요. 영양부추말고 일반부추를 사용하셔요. \n 13. 돈코츠라멘은 다진마늘이 큰 역할을 합니다. 살짝 느끼 할 수 있는 돼지육수를 칼칼한 맛을 유도 하면서 국물맛에 풍미를 더해 주어요. 1인당 1톨 \n 14. 마늘 빻은 절구통에 멸치액젓1t,고춧가루,깨소금을 넣고 부추 1공기를 넣고 무쳤어요. 약식 부추겉절이가 완성 \n 15. 실파(쪽파)는 잘게 썰어서 준비하고 반숙 달걀은 반으로 잘라 주어요. 볶은돼지고기,부추겉절이,다진마늘...고명으로 들어갈 재료가 셋팅 되었어요. \n 16. 면이 정말 중요 해요. 전 생 칼국수 면을 준비했는데 면이 별로 였어요. 일본 생라멘이 가장 좋구요. 아니면 일본 인스턴트라멘을 준비하셔요. \n 17. 칼국수 삶을 물이 끓고 있을 때...칼국수 면을 체반에 넣어요. 그리고 흐르는 물에 재빨리 씻어 주었어요. \n 18. 팔팔 끓는 물에 칼국수 면을 삶아요. \n 19. 옆불에 육수를 끓이고 있어요. 한소끔하면 다시마를 건져내요. \n 20. 익힌 칼국수 면을 체반에 1인분씩 넣고 육수에 토렴을 해요. 육수맛이 면에 잘 배이도록. 넣었다 뺐다를 2번만 해요. \n 21.숙주도 살짝 육수에 토렴을 해요. \n 22. 대접에 면을 중간에 넣고 고명을 빙 둘러 넣어요. 마른김도 한장 올렸네요. \n 23. 팔팔 끓는 육수를 대접에 부어요. 다진마늘은 육수맛을 일단 보고 난 뒤 추가로 넣으셔요. ',
    },
    {
        id: '2003',
        type: '일식',
        title: '두부유부초밥',
        img: require('../image/japanese_food/dubuyubu.jpg'),
        difficulty: 1,
        serving: 1,
        time: 45,
        material: ['두부 1모 ', '초밥용 유부 1PK ', '파프리카 100g '],
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
            '어묵 1봉 ',
            '파 약간 ',
            '표고 버섯 1개 ',
            '맛살 1개 ',
            '쯔유 6큰술 ',
            '소금 ',
            '물 3컵 ',
            '다시마 ',
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
            '닭 다리살 1kg ',
            '간장 4큰술 ',
            '설탕 3/2 큰술 ',
            '청주 2큰술 ',
            '다진 마늘 1큰술 ',
            '생강가루 1/2큰술 ',
            '전분가루 조금 ',
            '밀가루 조금 ',
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
            '소고기(불고기용) 150g ',
            '마늘 3쪽 ',
            '양파 1/2개 ',
            '쪽파 5대 ',
            '쌀밥 2그릇 ',
            '물 180ml ',
            '진간장 2스푼 ',
            '물엿 1스푼 ',
            '백설탕 1/2스푼 ',
            '굴소스 1/2스푼 ',
            '후추 약간 ',
            '생강 1조각 ',
        ],
        detail: '1. 소불고기용 고기를 키친타올에 톡톡 두드려 핏물을 제거를 해주고 먹기 좋은 크기로 찢어서 준비합니다 \n 2. 쪽파는 송송 썰어 준비하고 양파는 채 썰어 준비합니다. \n 3. 물2컵 가량에 통마늘을 저며 넣고 끓인뒤 손질해 놓은 소불고기감을 넣어 가볍게 데쳐냅니다 \n 4. 규동 소스 재료를 모두 넣고 바글바글 끓여준뒤 생강편은 꺼내주고 양파를 넣어 한소끔 잘 끓여주고 데친 소불고기를 넣어 끓여 줍니다. \n 5. 일본식 소불고기가 완성됬습니다 \n 6. 따뜻한 밥을 그릇에 담고 밥위에 일본식 불고기를 고루 올려준 뒤 규동 소스 국물까지 촉촉하게 잘 넣어주고 소고기 가운데를 수저로 살짝 갈라서 공간을 만들고 계란 노른자를 올립니다. \n 7. 마지막으로 송송 썰어놓은 쪽파를 듬뿍 올려주면 규동 완성입니다. ',
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
            '양배추 1/2 ',
            '팽이버섯 1봉지 ',
            '양파 1/2개 ',
            '숙주나물 ',
            '찌개 두부 한모 ',
            '대창 400g ',
            '부추 적당량',
            '물 1L ',
            '토리가라스프 3큰술 ',
            '오이스터소스 1큰술 ',
            '청주 2작은술 ',
            '미림 2작은술 ',
            '쯔유 2작은술 ',
            '소금 적당량 ',
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
            '쌀밥 2공기 ',
            '김 ',
            '소금 ',
            '물 ',
        ],
        detail: '1. 김은 작게 잘라서 준비합니다 \n 2. 손에 물을 좀 묻힌 후 손 전체에 소금을 약간 발라줍니다. \n 3. 밥을 손바닥에 얹어서 두손으로 쥐고 뭉친 다음에 삼각모양으로 밥을 세워서 눌러주고 세로로 밥을 한번씩 돌려가며 눌러주고 돌리고 눌러주고 하면서 삼각형 모양으로 만들어 줍니다 \n 4. 마지막으로 김을 밑에 붙여주면 완성입니다. ',
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
            '진간장 2큰술 ',
            '식초 2/3큰술 ',
            '황설탕 1큰술 ',
            '물 1/2컵 ',
            '식용유 3큰술 ',
            '양배추 1/2컵 ',
            '양파 1/4개 ',
            '당근 20g ',
            '돼지고기(등심) 50g',
            '대파 30g ',
            '우동면 1개 ',
            '흔얀멸치가루 적당량 ',
            '쪽파 적당량 ',
            '마요네즈 적당량 ',
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
            '생연어 400g ',
            '밥 3인분 ',
            '다시마 1장 ',
            '양파 1/2개 ',
            '무순 ',
            '케이퍼 ',
            '홀스래디쉬소스 ',
            '생와사비 ',
            '식초 ',
            '설탕 ',
            '소금 ',
        ],
        detail: '1. 우선 초밥단촛물을 만듭니다 비율은 식초:설탕:소금 2:1:0.3 으로 만들고 전자레인지에 30초 돌려줍니다. \n 2. 양파는 가늘게 채썬 후 찬물에 10분 담가두었다가 채망에 담아 물기를 빼줍니다 \n 3. 연어는 좀 길면서 얇게 썰어줍니다. \n 4. 따뜻한 밥에 초밥단촛물 일부를 넣어 잘 섞어주고 간을 보신후 싱거우면 더 추가해 줍니다. \n 5. 밥은 초밥모양으로 만들어 주고 밥 위에 생와사비를 올려 줍니다. \n 6. 밥위에 연어를 올려주고 양파와 케이퍼,홀스래디쉬소스를 올려주고 무순을 올려줍니다.',
    },
    {
        id: '3001',
        type: '중식',
        title: '짜장면',
        img: require('../image/chinese_food/jajang.jpg'),
    },
    {
        id: '3002',
        type: '중식',
        title: '짬뽕',
        img: require('../image/chinese_food/jjambbong.jpg'),
    },
    {
        id: '3003',
        type: '중식',
        title: '깐풍기',
        img: require('../image/chinese_food/kkanpungki.jpg'),
    },
    {
        id: '3004',
        type: '중식',
        title: '마라탕',
        img: require('../image/chinese_food/mara.jpg'),
    },
    {
        id: '3005',
        type: '중식',
        title: '난자완스',
        img: require('../image/chinese_food/nanja.jpg'),
    },
    {
        id: '3006',
        type: '중식',
        title: '팔보채',
        img: require('../image/chinese_food/palbo.jpg'),
    },
    {
        id: '3007',
        type: '중식',
        title: '탕수육',
        img: require('../image/chinese_food/tangsu.jpg'),
    },
    {
        id: '3008',
        type: '중식',
        title: '양장피',
        img: require('../image/chinese_food/yangjangpi.jpg'),
    },
    {
        id: '3009',
        type: '중식',
        title: '고추잡채',
        img: require('../image/chinese_food/gocu.jpg'),
    },
    {
        id: '3010',
        type: '중식',
        title: '딤섬',
        img: require('../image/chinese_food/dimsum.jpg'),
    },
    {
        id: '4001',
        type: '양식',
        title: '치킨 또띠아',
        img: require('../image/western_food/chikin.jpg'),
    },
    {
        id: '4002',
        type: '양식',
        title: '크림 파스타',
        img: require('../image/western_food/creampasta.jpg'),
    },
    {
        id: '4003',
        type: '양식',
        title: '고르곤졸라 피자',
        img: require('../image/western_food/gorgon.jpg'),
    },
    {
        id: '4004',
        type: '양식',
        title: '햄버거',
        img: require('../image/western_food/hambuk.jpg'),
    },
    {
        id: '4005',
        type: '양식',
        title: '로제 파스타',
        img: require('../image/western_food/lojepasta.jpg'),
    },
    {
        id: '4006',
        type: '양식',
        title: '티본 스테이크',
        img: require('../image/western_food/tibon.jpg'),
    },
    {
        id: '4007',
        type: '양식',
        title: '토마호크 스테이크',
        img: require('../image/western_food/tomahork.jpg'),
    },
    {
        id: '4008',
        type: '양식',
        title: '토마토 파스타',
        img: require('../image/western_food/tomatopasta.jpg'),
    },
    {
        id: '4009',
        type: '양식',
        title: '토마토 스프',
        img: require('../image/western_food/tomatosupe.jpg'),
    },
    {
        id: '4010',
        type: '양식',
        title: '또띠아 피자',
        img: require('../image/western_food/ttotiapija.jpg'),
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