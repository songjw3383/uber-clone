import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { store } from './store';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

// 손 동작/ 터치 모션 등등

import {createStackNavigator} from "@react-navigation/stack";
// 화면 선택시 전 화면을 덮어씌우게 되는데, 그것을 스택이라 함
// 스와이프해서 뒤로 가면 전 화면을 띄울 수 있게 stack으로 관리

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"} // 아이폰 전용 behavior 설정(키보드 가림 현상)
          keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0} 
          style={{ flex: 1}}>
            <Stack.Navigator>
              <Stack.Screen 
                name='HomeScreen'
                component={HomeScreen}
                options={{
                  headerShown: false, // removing name of Stack.Screen(=HomeScreen)
                }}
              />  
              <Stack.Screen 
                name='MapScreen'
                component={MapScreen}
                options={{
                  headerShown: false, // removing name of Stack.Screen(=HomeScreen)
                }}
              />  
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
