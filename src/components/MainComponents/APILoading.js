import React, { useState, useEffect } from 'react';

const APILoading = async() => {
    try {
        const response = await axios.get(
            'https://openapi.foodsafetykorea.go.kr/api/b7b0efafdbdc41c79730/COOKRCP01/json/1/1000'
        );
        return response.data.COOKRCP01.row;
    } catch (e) {
        return e;
    }
}
export default APILoading;