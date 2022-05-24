import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';

export const Timer = () => {
    const [time, setTime] = useState(10);

    useEffect(() => {
        var intervalID = setInterval(() => {
            setTime((time) => {
                if (time > 0) {
                    return time - 1;
                }
                clearInterval(intervalID);
                return time;
            });
        }, 1000);

        return () => clearInterval(intervalID);
    }, []);

    return <Text> {time} </Text>;
};

export const Time = () => {
    return Timer();
};

export default Timer;
