import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import { height, marginWidth, width } from '../config/globalStyles';

const TestScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
                <View style={styles.View1}>
                    <Text style={styles.Text1}> 설정 </Text>
                </View>
                <View style={styles.View1}>
                    <Text style={styles.Text1}> 설정 </Text>
                </View>
                <View style={styles.View1}>
                    <Text style={styles.Text1}> 설정 </Text>
                </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    View1: {
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
    },
    Text1: {
        fontSize: 20,
    },
});

export default TestScreen;
