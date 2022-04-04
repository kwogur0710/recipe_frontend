import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Alert } from 'react-native-web';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.title}>
    <View style={styles.border}>
      <Text>검색바</Text>

    </View>
    <View style={styles.title}>
    <Text style={styles.border}>Test</Text>
      <Button
      title="검색"
      color="#841584"
      />
      
      <StatusBar style="auto" />
    </View>
    <View style={styles.test1}>
      <Text style={{ fontSize: 20, color: 'red' }}> 테스트 </Text>
    </View>
    </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height:60,
    borderWidth: 1, //테두리 굵기
    alignItems: 'center', //가로정렬 : 중앙
    justifyContent: 'center', //
    backgroundColor: 'white',
    marginTop:40,
  },
  title: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    backgroundColor: 'white',
  },
  border: {
    borderWidth: 1, //테두리 굵기
    borderColor: 'red', //테두리 색깔
    borderRadius: 1, //테두리 둥글게 하는 수치
  },

  background: {
    backgroundColor: '#6524FF',
  },
  test1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});