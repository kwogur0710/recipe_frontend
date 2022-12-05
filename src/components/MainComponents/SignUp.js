import React from "react";


const SingUp = () => {
    let id = /[a-z0-9]/g;
    const CheckID = (str) => {
        if(id.test(str)){
            return true;
        }else{
            return false;
        }
    }
}

export default SingUp;