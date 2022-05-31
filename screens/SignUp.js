import {View, Text, StyleSheet, Dimensions, Alert} from 'react-native';
import React, {useState} from 'react';
import InputCommon from '../components/InputCommon';
import ButtonCommon from '../components/ButtonCommon';
import Footer from './Footer';
const windowHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('screen').width;
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
export default function SignUp({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePwd, setRePwd] = useState('');
  const [errorContent, setErrorContent] = useState('');
  const screenWidth = Dimensions.get('screen').width;
  const pressAddNewAccount = () => {
    // console.log('username', username);
    // console.log('password', password);
    if (username.length < 6 && password.length < 6) {
      setErrorContent('Username and password must be at least 6 characters');
    } else if (password !== rePwd) {
      setErrorContent('Re Password does not match');
    } else {
      setErrorContent('');
      const newAccount = {
        username,
        password,
      };
      AsyncStorage.getItem('account').then(accounts => {
        const listAccount = JSON.parse(accounts);
        // console.log(listAccount);
        if (
          Array.isArray(listAccount) &&
          listAccount.some(account => account.username === username)
        ) {
          setErrorContent(`${username} already exists`);
          return;
        }
        if (accounts === null) {
          AsyncStorage.setItem('account', JSON.stringify([newAccount]));
        } else {
          listAccount.push(newAccount);
          AsyncStorage.setItem('account', JSON.stringify(listAccount));
        }
        Alert.alert('Success', 'Add new account success', [
          {
            text: 'Hoàn thành',
            onPress: () => {
              navigation.navigate('Login');
            },
          },
        ]);
      });
    }
  };

  return (
    <>
      <View>
        <View
          style={{
            height: windowHeight / 1.5,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              alignSelf: 'flex-start',
              marginLeft: 30,
              fontWeight: '700',
              color: '#000000',
              fontSize: 20,
            }}>
            Sign Up
          </Text>
          <InputCommon
            placeholder={'Username'}
            customStyle={styles.input}
            onChangeText={text => setUsername(text)}
          />
          <InputCommon
            placeholder={'Password'}
            customStyle={styles.input}
            secureTextEntry={true}
            onChangeText={setPassword}
          />
          <InputCommon
            placeholder={'Re-enter Password'}
            onChangeText={setRePwd}
            secureTextEntry={true}
            customStyle={styles.input}
          />
          {Boolean(errorContent) && (
            <Text style={styles.textErr}>{errorContent}</Text>
          )}
          <ButtonCommon
            text={'Sign In'}
            onPress={() => {
              pressAddNewAccount();
            }}
          />
          <Text style={{alignSelf: 'flex-end', marginRight: 30}}>
            Forgot Password?
          </Text>
        </View>
        <Footer />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  input: {
    backgroundColor: '#cccc',

    height: 50,
    marginVertical: 15,
  },
  textErr: {
    color: 'red',
    marginBottom: 30,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  styleMB30: {
    marginBottom: 30,
  },
  styleMB20: {
    marginBottom: 20,
  },
  body: {
    width: screenWidth - 60,
  },
  textSignIn: {
    fontWeight: '700',
    fontSize: 24,
    marginBottom: 30,
    color: 'black',
  },
  forgotWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
});
