import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Hamburger from '../assets/hamburger.svg';
import InputCommon from '../components/InputCommon';
import ButtonCommon from '../components/ButtonCommon';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Footer from './Footer';
const LoadingScreen = ({navigation}) => {
  let setAccounts = async () => {
    try {
      let value = await AsyncStorage.getItem('account');
      if (value != null) {
      } else {
        await AsyncStorage.setItem('account', JSON.stringify([]));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setAccounts();
  }, []);
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <View style={{marginBottom: 60}}>
          <Hamburger width="200" height="200" />
        </View>
        <View>
          <ButtonCommon
            text="Sign In"
            onPress={() => navigation.navigate('Login')}
          />
          <ButtonCommon
            text="Sign Up"
            customStyle={styles.SignUp}
            colorText={styles.colorText}
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
      </View>
      <Footer />
    </>
  );
};
const styles = StyleSheet.create({
  SignUp: {
    backgroundColor: '#DFDFDE',
    marginTop: 20,
  },
  colorText: {
    color: '#000000',
  },
});
export default LoadingScreen;
