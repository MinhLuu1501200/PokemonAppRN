import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import MoreThan from '../assets/MoreThan.svg';
import Like from '../assets/line.svg';
import Unlike from '../assets/unline.svg';

import HeaderNavigator from '../components/HeaderNavigator';
import ButtonCommon from '../components/ButtonCommon';
import Avatar from '../assets/avatar.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
const windowWidth = Dimensions.get('window').width;
const itemWidth = windowWidth - 60;
// import HamburgerItem from '../assets/hamburger-item.png';
const food2 = require('../assets/food1.png');
const Profile = ({navigation}) => {
  const [listNearMe, setListNearMe] = useState([
    {
      name: 'My Profile',
    },
    {
      name: 'Change Password',
    },
    {
      name: 'Payment Settings',
    },
    {
      name: 'My Voucher',
    },
    {
      name: 'Notification',
    },
    {
      name: 'Drop Down',
    },
    {
      name: 'Contact At',
    },
  ]);
  const ItemMenu = ({item, index}) => {
    // console.log('dsasdd', item);
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(item.name)}
        style={{
          flexDirection: 'row',
          width: itemWidth,
          marginBottom: 20,
          alignItems: 'center',
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <Text style={{color: '#000000'}}>{item.name}</Text>
        <MoreThan />
      </TouchableOpacity>
    );
  };
  return (
    <>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: 'white',
        }}>
        <FlatList
          ListHeaderComponent={() => {
            return (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 20,
                }}>
                <Avatar />
                <Text
                  style={{
                    fontWeight: '700',
                    color: 'black',
                    marginVertical: 6,
                    fontSize: 20,
                  }}>
                  Itoh
                </Text>
                <Text> +84 34412312321</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          data={listNearMe}
          renderItem={ItemMenu}
          scrollEnabled={true}
          style={{paddingHorizontal: 20}}
        />
        <ButtonCommon
          text="Sign Out"
          customStyle={styles.SignUp}
          colorText={styles.colorText}
          onPress={async () => {
            await AsyncStorage.removeItem('user');
            navigation.navigate('Login');
          }}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  SignUp: {
    backgroundColor: '#ccc',
    marginTop: 20,
    marginBottom: 20,
  },
  colorText: {
    color: '#000000',
  },
});
export default Profile;
