import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import MainScreen from '../screens/MainScreen';
// import FoodDetailScreen from '../screens/FoodDetailScreen';
// import LoginScreen from '../screens/LoginScreen';
// import SignUp from '../screens/SignUp';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from '../screens/MainScreen';
import Login from '../screens/Login';
import LoadingScreen from '../screens/LoadingScreen';
import SignUp from '../screens/SignUp';
import HomeScreen from '../screens/HomeScreen';
import Order from '../screens/Order';
import Profile from '../screens/Profile';
import MyList from '../screens/MyList';
import ProfileStackScreen from './ProfileStackScreen';
import Introduction from '../screens/Introduction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IntroScreen from '../screens/IntroScreen';
import FoodDetail from '../screens/FoodDetail';

// import FlexBox from '../screens/FlexBox';
//NOTES: File này là settings của navigation

const Tab = createBottomTabNavigator(); //NOTES: Khai báo tabbar
const Stack = createNativeStackNavigator(); //NOTES: Khai báo stack

const Tabbar = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          // console.log(route);
          //NOTES: HIển thị icon ở tabbar
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Order') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'My List') {
            iconName = focused ? 'bookmark' : 'bookmark-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarHideOnKeyboard: true,
        tabBarStyle: [{display: 'flex'}, null],
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="My List" component={MyList} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
};

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'IntroScreen'}>
        <Stack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="IntroScreen"
          component={IntroScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Main" component={Tabbar} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="FoodDetailScreen" component={FoodDetail} />
        <Stack.Screen
          name="TabBar"
          component={Tabbar}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
