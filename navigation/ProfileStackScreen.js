import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {View, Text} from 'react-native';
const ProfileStack = createNativeStackNavigator();
import React from 'react';
import Profile from '../screens/Profile';
import ChangePassword from '../screens/ChangePassword';
import MyVoucher from '../screens/MyVoucher';
import PaymentStackScreen from './PaymentStackScreen';
import DropDown from '../screens/DropDown';
import MyProfile from '../screens/MyProfile';
import EditProfile from '../screens/EditProfile';

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="MainProfile"
      screenOptions={{
        headerShown: false,
      }}>
      <ProfileStack.Screen name="MainProfile" component={Profile} />
      <ProfileStack.Screen
        name="My Profile"
        component={MyProfile}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerBackImageSource: require('../assets/back.png'),
          headerBackTitleVisible: true,
          headerShadowVisible: false,
          headerTitle: 'My Profile',
          headerStyle: {},
        }}
      />
      <ProfileStack.Screen
        name="Edit Profile"
        component={EditProfile}
        tabBarOptions={{
          keyboardHidesTabBar: true,
        }}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerBackImageSource: require('../assets/back.png'),
          headerBackTitleVisible: true,
          headerShadowVisible: false,
          headerTitle: 'Edit Profile',
          headerStyle: {},
        }}
      />
      <ProfileStack.Screen name="Drop Down" component={DropDown} />
      <ProfileStack.Screen name="Change Password" component={ChangePassword} />
      <ProfileStack.Screen name="My Voucher" component={MyVoucher} />
      <ProfileStack.Screen
        name="Payment Settings"
        component={PaymentStackScreen}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackScreen;
