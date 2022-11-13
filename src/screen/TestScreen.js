import React,{Component} from "react";
import { Text } from "react-native";

const TestScreen = () => {
    const contextType = APIContext;
    return(
        <APIContext.Consumer>
            {value => <Text> APIContext : {value.test} </Text>}
        </APIContext.Consumer>
    )
}