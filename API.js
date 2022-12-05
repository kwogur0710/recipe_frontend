import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const API = async () => {
    const [RecipeData, setRecipeData] = useState('');
    const [Loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setRecipeData(null);

        // loading 상태를 true 로 바꿉니다.
        setLoading(true);

        const response = await axios.get(
            'https://openapi.foodsafetykorea.go.kr/api/b7b0efafdbdc41c79730/COOKRCP01/json/1/100'
        );

        // 데이터는 response.data.data 안에 들어있다.
        setRecipeData(response.data.COOKRCP01.row);
    } catch (e) {
        setError(e);
        // loading 끄기
        setLoading(false);
    }
};
export default API;
