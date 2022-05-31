import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
import InputCommon from '../components/InputCommon';
import ButtonCommon from '../components/ButtonCommon';
import Footer from './Footer';
const windowHeight = Dimensions.get('window').height;
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderNavigator from '../components/HeaderNavigator';
const screenWidth = Dimensions.get('screen').width;
export default function Login({navigation}) {
  const [errorContent, setErrorContent] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checkButtonLogin, setCheckButtonLogin] = useState(true);
  const [isError, setIsError] = useState(false);
  const [authen, setAuthen] = useState(false);
  useEffect(() => {
    setUsername('');
  }, []);
  useEffect(() => {
    if (username.length > 5 && password.length > 5) {
      setCheckButtonLogin(false);
    } else {
      setCheckButtonLogin(true);
    }
  }, [username, password]);

  let checkAuthen = async () => {
    let accountExist = await AsyncStorage.getItem('user');
    if (accountExist !== null) {
      return true;
    } else {
      return false;
    }
  };
  useEffect(() => {
    const checkUserLogin = checkAuthen();
    console.log(checkUserLogin);
  }, [setAuthen]);

  return (
    <>
      <View>
        <View
          style={{
            height: windowHeight / 1.5,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <Text
            style={{
              alignSelf: 'flex-start',
              marginLeft: 30,
              fontWeight: '700',
              fontSize: 20,
              color: '#000000',
            }}>
            Sign In
          </Text>
          <InputCommon
            value={username}
            placeholder={'Username'}
            customStyle={styles.input}
            onChangeText={text => setUsername(text)}
          />
          <InputCommon
            value={password}
            placeholder={'Password'}
            secureTextEntry={true}
            customStyle={styles.input}
            onChangeText={text => setPassword(text)}
          />
          {isError && (
            <Text style={[styles.textErr, styles.styleMB30]}>
              Username or password is not correct
            </Text>
          )}
          <ButtonCommon
            disabled={checkButtonLogin}
            text={'Sign In'}
            // onPress={() => navigation.navigate('HomeScreen')}
            onPress={() => {
              AsyncStorage.getItem('account').then(async accounts => {
                // console.log('axx', accounts);
                const listAccount = JSON.parse(accounts);
                console.log('adas', listAccount);
                const check = listAccount.some(
                  item =>
                    item.username === username && item.password === password,
                );
                // check login dung hay sai
                // console.log(listAccount);
                if (check) {
                  console.log(username);
                  await AsyncStorage.setItem('user', JSON.stringify(username));
                  await AsyncStorage.getItem('user').then(user => {
                    console.log(JSON.parse(user));
                  });
                  setUsername('');
                  setPassword('');
                  setErrorContent('');
                  setCheckButtonLogin(true);
                  setIsError(false);
                  navigation.navigate('TabBar');
                } else {
                  setIsError(true);
                  setErrorContent('Username or password is not correct');
                }
              });
            }}
          />
          <Text style={{alignSelf: 'flex-end', marginRight: 30}}>
            Forgot Password ?
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
    marginVertical: 20,
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
  textErr: {
    fontSize: 14,
    color: 'red',
  },
});
