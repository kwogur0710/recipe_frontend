import React,{useState} from "react";
import axios from "axios"

const CommentSave = async (postNum, id, nickname, contents) => {
    const serverURL = 'https://recipe.loca.lt/';
    const localserverURL = 'http://localhost:4000/';
    return axios
        .post(`${serverURL}/post/comment/save`, {
            postNum: postNum,
            id: id,
            nickname: nickname,
            contents: contents,
        })
        .then((response) => {
            console.log(response);
            return response;
        })
        .catch((err) => {
            console.log('err : ', err);
            return err.response;
        });
};
const CommentGet = async (postNum) => {
    const serverURL = 'https://recipe.loca.lt/';
    const localserverURL = 'http://localhost:4000/';
    return axios
        .post(`${serverURL}/post/comment/save`, {
            postNum: postNum,
            id: id,
            nickname: nickname,
            contents: contents,
        })
        .then((response) => {
            console.log(response);
            return response;
        })
        .catch((err) => {
            console.log('err : ', err);
            return err.response;
        });
};