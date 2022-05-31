import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React, {useState, useEffect} from 'react';
import Avatar from '../assets/avatar.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonCommon from '../components/ButtonCommon';
import DatePicker from 'react-native-date-picker';

const heightScreen = Dimensions.get('screen').height;
var moment = require('moment'); // require
const EditProfile = ({route, navigation}) => {
  console.log(route.params);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [isSelectedMale, setIsSelectedMale] = useState(false);
  const [isSelectedFemale, setIsSelectedFemale] = useState(false);
  useEffect(() => {
    setFirstName(route.params.firstName);
    setLastName(route.params.lastName);
    setLocation(route.params.location);
    setEmail(route.params.email);
    var dateMomentObject = moment(route.params.birthday, 'DD/MM/YYYY'); // 1st argument - string, 2nd argument - format
    var dateObject = dateMomentObject.toDate();
    setDate(dateObject);
    route.params.gender === 'Male' && setIsSelectedMale(true);
    route.params.gender === 'Female' && setIsSelectedFemale(true);
  }, [route]);
  let saveInforUser = () => {
    let username = '';
    AsyncStorage.getItem('user').then(user => {
      console.log(JSON.parse(user));
      username = JSON.parse(user);
    });
    console.log(username);
    AsyncStorage.getItem('account').then(accounts => {
      const listAccount = JSON.parse(accounts);
      listAccount.forEach(item => {
        if (item.username === username) {
          item.firstName = firstName;
          item.lastName = lastName;
          item.location = location;
          item.email = email;
          item.birthday = moment(date).format('DD/MM/YYYY');
          item.gender = isSelectedFemale ? 'Female' : isSelectedMale && 'Male';
          Alert.alert('Edit infor successfull');
          navigation.navigate('My Profile', {isChange: true});
        }
      });
      AsyncStorage.setItem('account', JSON.stringify(listAccount));
      console.log(listAccount);
    });
  };
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          alignItems: 'center',
          marginVertical: 10,
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
          Itoh
        </Text>
        <Text> +84 34412312321</Text>
      </View>
      <View style={{zIndex: 5000, flex: 6}}>
        <View style={styles.rowFlex}>
          <View style={{flex: 2}}>
            <Text style={{lineHeight: 40}}>First Name</Text>
          </View>
          <View style={{flex: 3}}>
            <TextInput
              value={firstName}
              placeholder="Your first name"
              onChangeText={text => {
                setFirstName(text);
              }}
            />
          </View>
        </View>
        <View style={styles.rowFlex}>
          <View style={{flex: 2}}>
            <Text style={{lineHeight: 40}}>Last Name</Text>
          </View>
          <View style={{flex: 3}}>
            <TextInput
              value={lastName}
              placeholder="Your last name"
              onChangeText={setLastName}
            />
          </View>
        </View>
        <View style={styles.rowFlex}>
          <View style={{flex: 2}}>
            <Text style={{lineHeight: 40}}>Birthday</Text>
          </View>
          <View style={{flex: 3}}>
            <Text style={{lineHeight: 40}} onPress={() => setOpen(true)}>
              {moment(date).format('DD/MM/YYYY')}
            </Text>
            <DatePicker
              modal
              mode="date"
              open={open}
              date={date}
              onConfirm={date => {
                setOpen(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>
        </View>
        <View style={styles.rowFlex}>
          <View style={{flex: 2}}>
            <Text style={{lineHeight: 40}}>Gender</Text>
          </View>
          <View style={{flex: 3, flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text> Male</Text>
              <CheckBox
                value={isSelectedMale}
                onValueChange={setIsSelectedMale}
                style={styles.checkbox}
                disabled={isSelectedFemale && true}
              />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text> Female</Text>
              <CheckBox
                value={isSelectedFemale}
                onValueChange={setIsSelectedFemale}
                style={styles.checkbox}
                disabled={isSelectedMale && true}
              />
            </View>
          </View>
        </View>
        <View style={styles.rowFlex}>
          <View style={{flex: 2}}>
            <Text style={{lineHeight: 40}}>Email</Text>
          </View>
          <View style={{flex: 3}}>
            <TextInput
              value={email}
              placeholder="Example@gmail.com"
              onChangeText={text => {
                setEmail(text);
              }}
            />
          </View>
        </View>
        <View style={styles.rowFlex}>
          <View style={{flex: 2}}>
            <Text style={{lineHeight: 40}}>Location</Text>
          </View>
          <View style={{flex: 3, zIndex: 5000}}>
            <TextInput
              value={location}
              placeholder="Your address"
              onChangeText={text => {
                setLocation(text);
              }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          zIndex: 1000,
          flex: 2,
        }}>
        <ButtonCommon
          text={'Save'}
          customStyle={styles.customEditBtn}
          onPress={() => saveInforUser()}
        />
      </View>
    </ScrollView>
  );
};

export default EditProfile;

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
  customEditBtn: {
    marginVertical: 15,
    width: 300,
  },
});
