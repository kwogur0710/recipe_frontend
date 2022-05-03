import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import { height, marginWidth, width } from '../config/globalStyles';

const TestScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.View1}>
                <TouchableOpacity>
                    <Text style={styles.Text1}>안녕하세요</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    View1: {
        backgroundColor: 'white',
        height: height * 230,
    },
    Text1: {
        fontSize: 40,
    },
});

export default TestScreen;
