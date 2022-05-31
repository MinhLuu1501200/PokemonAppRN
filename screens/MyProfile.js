import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Avatar from '../assets/avatar.svg';
import ButtonCommon from '../components/ButtonCommon';
import AsyncStorage from '@react-native-async-storage/async-storage';
const MyProfile = ({route, navigation}) => {
  const [userInfor, setUserInfor] = useState({});
  let getInforExist = () => {
    let username = '';
    AsyncStorage.getItem('user').then(user => {
      console.log(JSON.parse(user));
      username = JSON.parse(user);
    });
    AsyncStorage.getItem('account').then(accounts => {
      const listAccount = JSON.parse(accounts);
      listAccount.forEach(item => {
        if (item.username === username) {
          setUserInfor(item);
        }
      });
    });
  };
  useEffect(() => {
    getInforExist();
  }, [route]);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          alignItems: 'center',
          marginVertical: 20,
          flex: 3,
        }}>
        <Avatar />
        <Text
          style={{
            fontWeight: '700',
            color: 'black',
            marginVertical: 6,
            fontSize: 20,
          }}>
          {userInfor.firstName}
        </Text>
        <Text> +8ss4 s</Text>
      </View>
      <View style={{flex: 6, marginTop: 86}}>
        <View style={styles.rowFlex}>
          <View style={{flex: 2}}>
            <Text style={{lineHeight: 40}}>First Name</Text>
          </View>
          <View style={{flex: 3}}>
            <Text style={[styles.rightInfor, {color: '#000000'}]}>
              {userInfor.firstName}
            </Text>
          </View>
        </View>
        <View style={styles.rowFlex}>
          <View style={{flex: 2}}>
            <Text style={{lineHeight: 40}}>Last Name</Text>
          </View>
          <View style={{flex: 3}}>
            <Text style={[styles.rightInfor, {color: '#000000'}]}>
              {' '}
              {userInfor.lastName}
            </Text>
          </View>
        </View>
        <View style={styles.rowFlex}>
          <View style={{flex: 2}}>
            <Text style={{lineHeight: 40}}>Birthday</Text>
          </View>
          <View style={{flex: 3}}>
            <Text style={[styles.rightInfor, {color: '#000000'}]}>
              {' '}
              {userInfor.birthday}
            </Text>
          </View>
        </View>
        <View style={styles.rowFlex}>
          <View style={{flex: 2}}>
            <Text style={{lineHeight: 40}}>Gender</Text>
          </View>
          <View style={{flex: 3}}>
            <Text style={[styles.rightInfor, {color: '#000000'}]}>
              {' '}
              {userInfor.gender}
            </Text>
          </View>
        </View>
        <View style={styles.rowFlex}>
          <View style={{flex: 2}}>
            <Text style={{lineHeight: 40}}>Email</Text>
          </View>
          <View style={{flex: 3}}>
            <Text style={[styles.rightInfor, {color: '#000000'}]}>
              {userInfor.email}
            </Text>
          </View>
        </View>
        <View style={styles.rowFlex}>
          <View style={{flex: 2}}>
            <Text style={{lineHeight: 40}}>Location</Text>
          </View>
          <View style={{flex: 3}}>
            <Text style={[styles.rightInfor, {color: '#000000'}]}>
              {' '}
              {userInfor.location}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 2,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <ButtonCommon
          text={'Edit Profile'}
          customStyle={styles.customEditBtn}
          onPress={() => navigation.navigate('Edit Profile', userInfor)}
        />
      </View>
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  rowFlex: {
    justifyContent: 'center',
    alignContent: 'center',

    flexDirection: 'row',
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',

    height: 40,
  },
  rightInfor: {
    fontWeight: '600',
    lineHeight: 40,
  },
  customEditBtn: {},
});
