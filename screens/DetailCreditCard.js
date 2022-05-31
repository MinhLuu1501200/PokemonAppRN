import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
var moment = require('moment'); // require
import DropDownPicker from 'react-native-dropdown-picker';
import React, {useState, useRef} from 'react';
import DatePicker from 'react-native-date-picker';
import Card from '../assets/card1.svg';

import HeaderNavigator from '../components/HeaderNavigator';
import ButtonCommon from '../components/ButtonCommon';
import {useEffect} from 'react/cjs/react.production.min';

const windowWidth = Dimensions.get('window').width;
const itemWidth = windowWidth - 60;

const DetailCreditCard = ({route, navigation}) => {
  let {cardNumber1, nameCard1, blankName1, date1} = route.params;
  console.log(cardNumber1, nameCard1, blankName1, date1);
  let convertNumberCard = numberCard => {
    return numberCard
      .split(' ')
      .map((item, index) => {
        if (index === 2 || index === 1) {
          return '*****';
        } else {
          return item;
        }
      })
      .join(' ');
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
        <View style={{position: 'relative'}}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/MaskGroup.png')}
          />
          <Image
            style={{position: 'absolute', bottom: 30, right: 42}}
            source={require('../assets/backCard.png')}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 35,
              position: 'absolute',
              top: 15,
              width: 354,
            }}>
            <Text style={{fontWeight: '700', fontSize: 20, color: 'white'}}>
              {nameCard1}
            </Text>
            <Text style={{color: 'white'}}> {blankName1}</Text>
          </View>
          <View
            style={{
              paddingHorizontal: 35,
              position: 'absolute',
              top: 108,
              width: 354,
            }}>
            <Text style={styles.colorText}> No {blankName1} Bank</Text>
            <Text style={styles.colorText}>
              {convertNumberCard(cardNumber1)}
            </Text>
            <Text style={[styles.colorText, styles.fontW]}>$12.999.999.99</Text>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: windowWidth - 60,
  },
  titleRight: {
    color: 'black',
    fontWeight: '700',
    textAlign: 'right',
    width: 200,
  },
  SignUp: {
    backgroundColor: '#D35400',
    marginTop: 20,
    marginBottom: 20,
  },
  colorText: {
    color: '#FFFFFF',
  },
  fontW: {
    fontSize: 17,
    fontWeight: '700',
  },
});
export default DetailCreditCard;
