import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import MoreThan from '../assets/MoreThan.svg';
import Like from '../assets/line.svg';
import Unlike from '../assets/unline.svg';

import HeaderNavigator from '../components/HeaderNavigator';
import ButtonCommon from '../components/ButtonCommon';
import Avatar from '../assets/avatar.svg';
import InputCommon from '../components/InputCommon';
import AsyncStorage from '@react-native-async-storage/async-storage';
const windowWidth = Dimensions.get('window').width;
const itemWidth = windowWidth - 60;
// import HamburgerItem from '../assets/hamburger-item.png';
const food2 = require('../assets/food1.png');
const ChangePassword = ({navigation}) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassWord] = useState('');
  const [reNewPassword, setReNewPassword] = useState('');

  // AsyncStorage.getItem('user').then(accounts => {
  //   console.log(accounts);
  // });

  let handleSavePassword = async () => {
    let user = await AsyncStorage.getItem('user');
    let accounts = await AsyncStorage.getItem('account');
    console.log(accounts);
    let listAccount = JSON.parse(accounts);
    let checkAccount = listAccount.some((account, index) => {
      if (account.username === user && account.password === oldPassword) {
        let changedAccount = {
          username: user,
          password: newPassword,
        };
        listAccount[index] = changedAccount;
        return true;
      } else {
        return false;
      }
    });
    if (checkAccount) {
      if (
        newPassword !== '' &&
        reNewPassword !== '' &&
        newPassword === reNewPassword
      ) {
        await AsyncStorage.setItem('account', JSON.stringify(listAccount));
        Alert.alert('Change password successfully!!!!');

        setOldPassword('');
        setNewPassWord('');
        setReNewPassword('');
        navigation.navigate('Login');
      } else {
        Alert.alert(
          'Change password failed. Please enter new password and re-password!!!!',
        );
        setNewPassWord('');
        setReNewPassword('');
      }
    } else {
      Alert.alert(
        ' The your old password is failed. Please enter pass again!!!!',
      );
      setOldPassword('');
      setNewPassWord('');
      setReNewPassword('');
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <HeaderNavigator
        title={'Review Food'}
        navigation={navigation}
        moveScreen={'MainProfile'}
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          marginTop: 20,
          backgroundColor: 'white',
        }}>
        <View style={{flex: 1}}>
          <Text>Enter Old Password</Text>
          <InputCommon
            value={oldPassword}
            placeholder={'Password'}
            customStyle={styles.input}
            onChangeText={text => setOldPassword(text)}
          />
          <Text>Enter New Password</Text>
          <InputCommon
            value={newPassword}
            placeholder={'Enter New Password'}
            customStyle={styles.input}
            secureTextEntry={true}
            onChangeText={text => setNewPassWord(text)}
          />
          <InputCommon
            value={reNewPassword}
            secureTextEntry={true}
            placeholder={'Re-enter New Password'}
            customStyle={styles.input}
            onChangeText={text => setReNewPassword(text)}
          />
        </View>
        <ButtonCommon
          text="Save"
          customStyle={styles.SignUp}
          colorText={styles.colorText}
          onPress={() => handleSavePassword()}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  SignUp: {
    backgroundColor: '#D35400',
    marginTop: 20,
    marginBottom: 20,
  },
  colorText: {
    color: '#ffffff',
  },
  input: {
    backgroundColor: '#cccc',
    width: 350,
    height: 50,
    marginVertical: 20,
  },
});
export default ChangePassword;
