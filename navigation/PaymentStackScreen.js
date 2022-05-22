import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {View, Text} from 'react-native';
const Payment = createNativeStackNavigator();
import React from 'react';

import Back from '../assets/back.svg';
import Profile from '../screens/Profile';
import ChangePassword from '../screens/ChangePassword';
import MyVoucher from '../screens/MyVoucher';
import AddCard from '../screens/AddCard';
import PayPay from '../screens/PayPay';
import CreditCard from '../screens/CreditCard';

const PaymentStackScreen = () => {
  return (
    <Payment.Navigator
      initialRouteName="MainPayment"
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerBackImageSource: require('../assets/back.png'),
        headerBackTitleVisible: true,
        headerShadowVisible: false,
        headerTitle: 'Add Credit Card',
        headerStyle: {},
      }}>
      <Payment.Screen
        name="MainPayment"
        component={AddCard}
        options={{
          headerTitle: 'Review Food',
        }}
      />
      <Payment.Screen name="PayPay" component={PayPay} />
      <Payment.Screen
        name="CreditCard"
        component={CreditCard}
        options={{
          headerTitle: 'Add Credit Card',
        }}
      />
    </Payment.Navigator>
  );
};

export default PaymentStackScreen;
