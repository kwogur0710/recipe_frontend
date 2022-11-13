import React from 'react';
const idCh = /^[a-zA-Z0-9]{6,18}$/;
const pswdCh = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
const emailCh =
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
const nameCh = /^[가-힝a-zA-Z]{2,}$/;
export const checkID = (str) => {
    if (idCh.test(str)) return true;
    else false;
    //'6~18자의 영문 소문자, 숫자만 가능합니다.'
};
export const checkPW = (str) => {
    if (pswdCh.test(str)) return true;
    else false;
    //'숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.';
};
export const checkPW2 = (str1, str2) => {
    if(!str2)  return false;
    else if(str1 == str2)  return true;
    else  return false;
    //'비밀번호가 같지 않습니다.';
};
export const checkEmail = (str) => {
    if (emailCh.test(str)) return true;
    else return false;
    //'올바른 형식의 이메일을 입력해주세요.';
};
export const checkName = (str) => {
    if (nameCh.test(str)) return true;
    else return false;
    //'올바른 이름을 입력해주세요.';
};
export const checkNickname = (str) => {
    if (str.length >= 2 && str.length <= 20) return true;
    else return false;
    //'올바른 닉네임을 입력해주세요.';
};
export const checkBirth = (str1, str2, str3) => {
    if (str1 > 1900 && str1 < 2100 && str2 > 0 && str2 <= 12 && str3 > 0 && str3 <= 31) return true;
    else return false;
    //'올바른 생년월일을 입력해주세요.';
};
export const checkNumber = (str1, str2, str3) => {
    if (str1.length == 3 && (str2.length = 3,4 ) && str3.length == 4) return true;
    else return false;
    //'올바른 전화번호를 입력해주세요.';
};