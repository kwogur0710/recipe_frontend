import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';

const [Data, setData] = useState('');
const [Loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const loadingRecipe = async () => {
    try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setData(null);

        // loading 상태를 true 로 바꿉니다.
        setLoading(true);

        const response = await axios.get(
            'https://openapi.foodsafetykorea.go.kr/api/b7b0efafdbdc41c79730/COOKRCP01/json/1/2'
        );

        // 데이터는 response.data.data 안에 들어있다.
        setData(response.data.COOKRCP01);
    } catch (e) {
        setError(e);
        return error;
    }
    // loading 끄기
    setLoading(false);
    console.log('APILoading', Data.row[0].RCP_NM);
    return Loading;
    console.log(Data.row[0].RCP_NM);
};

const APILoading = () => {
    return Loading;
};
export default APILoading;
