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
import PayPayLogo from '../assets/paypal.svg';
import CreditLogo from '../assets/credit.svg';
import MoreThan from '../assets/MoreThan.svg';
import Card from '../assets/card1.svg';

import HeaderNavigator from '../components/HeaderNavigator';
import ButtonCommon from '../components/ButtonCommon';

const windowWidth = Dimensions.get('window').width;
const itemWidth = windowWidth - 60;
// import HamburgerItem from '../assets/hamburger-item.png';

const PayPay = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      {/* <HeaderNavigator
        title={'Add Credit Card'}
        navigation={navigation}
        moveScreen={'MainPayment'}
      /> */}

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: 'white',
          marginTop: 20,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('MainPayment')}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: itemWidth,

            flex: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              alignSelf: 'flex-start',
            }}>
            <View
              style={{
                backgroundColor: '#ccc',
                width: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
              }}>
              <PayPayLogo />
            </View>

            <Text> Paypal</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              alignSelf: 'flex-start',
            }}>
            <Text style={{marginRight: 7}}>minhluu@gmail.com</Text>
            <MoreThan />
          </View>
        </TouchableOpacity>

        <ButtonCommon
          text="Make as Default"
          customStyle={styles.SignUp}
          colorText={styles.colorText}
          onPress={() => navigation.navigate('SignUp')}
        />
        <ButtonCommon
          text="Remove"
          customStyle={styles.Remove}
          colorText={styles.RemoveText}
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: windowWidth - 60,
    marginVertical: 15,
  },
  titleRight: {
    color: 'black',
    fontWeight: '700',
  },
  SignUp: {
    backgroundColor: '#D35400',
    marginTop: 20,
    marginBottom: 20,
  },
  Remove: {
    backgroundColor: '#ccc',
    marginTop: 20,
    marginBottom: 20,
    color: 'black',
  },
  RemoveText: {
    color: 'black',
  },

  colorText: {
    color: '#FFFFFF',
  },
});
export default PayPay;
