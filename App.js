//import 'react-native-gesture-handler';
import React, { useState, useEffect, Component } from 'react';
import { LogBox, Text } from 'react-native';
import { colors, width, height } from './config/globalStyles';
import { useFonts } from 'expo-font';
//import SplashScreen from 'expo-splash-screen';
import RootStack from './src/route/RootStack';
import { APILoading } from './src/components/MainComponents/APILoading';

//LogBox.ignoreLogs(['Remote debugger']);
//SplashScreen.preventAutoHideAsync();

const App = () => {
    let RecipeData;
    useEffect(async () => {
      RecipeData = await APILoading();
      console.log(RecipeData);
    }, []);

    let [fontsLoading] = useFonts({
      PretendardBlack: require('./assets/fonts/Pretendard-Black.ttf'),
      PretendardBold: require('./assets/fonts/Pretendard-Bold.ttf'),
      PretendardExtraBold: require('./assets/fonts/Pretendard-ExtraBold.ttf'),
      PretendardExtraLight: require('./assets/fonts/Pretendard-ExtraLight.ttf'),
      PretendardLight: require('./assets/fonts/Pretendard-Light.ttf'),
      PretendardMedium: require('./assets/fonts/Pretendard-Medium.ttf'),
      PretendardRegular: require('./assets/fonts/Pretendard-Regular.ttf'),
      PretendardSemiBold: require('./assets/fonts/Pretendard-SemiBold.ttf'),
      PretendardThin: require('./assets/fonts/Pretendard-Thin.ttf'),
      PretendardVariable: require('./assets/fonts/PretendardVariable.ttf'),
    });
    console.log('Font Ready :', fontsLoading);
    //console.log('RecipeData : ', RecipeData);

    return fontsLoading ? <RootStack />  : null;
  };
export default App;