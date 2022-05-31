import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderNavigator from '../components/HeaderNavigator';
import PayPayLogo from '../assets/paypal.svg';
import CreditLogo from '../assets/credit.svg';
import MoreThan from '../assets/MoreThan.svg';
import AddCardIcon from '../assets/addCard.svg';
const AddCard = ({route, navigation}) => {
  const [newCard, setNewCard] = useState({});
  const [listPayment, setListPayment] = useState([]);
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
  React.useEffect(() => {
    if (route.params) {
      setNewCard(route.params);
      console.log('rote', route.params);
    }
    let username = '';
    AsyncStorage.getItem('user').then(user => {
      console.log(JSON.parse(user));
      username = JSON.parse(user);
    });
    console.log(username);
    AsyncStorage.getItem('account').then(accounts => {
      const listAccount = JSON.parse(accounts);
      console.log('dsad', accounts.payments);
      listAccount.forEach(item => {
        if (item.username === username) {
          if (item.hasOwnProperty('payments')) {
            // delete item.payments;
            item.payments = [...item.payments, newCard];
            item.payments = [
              ...new Map(
                item.payments.map(item => [item['cardNumber'], item]),
              ).values(),
            ];
            setListPayment([...item.payments]);
          } else {
            item.payments = [];
          }
        }
      });
      AsyncStorage.setItem('account', JSON.stringify(listAccount));
      console.log(listAccount);
    });
  }, [route.params, navigation, newCard]);
  console.log('Hello', listPayment);
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('PayPay')}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 30,
          marginBottom: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
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
          }}>
          <Text style={{marginRight: 7}}>minhluu@gmail.com</Text>
          <MoreThan />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 30,
          marginBottom: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
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
            <CreditLogo />
          </View>

          <Text> Credit Card</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{marginRight: 7}}>4444 **** **** 6739</Text>
          <MoreThan />
        </View>
      </TouchableOpacity>
      {listPayment.map((item, index) => {
        if (
          item && // 👈 null and undefined check
          Object.keys(item).length === 0 &&
          Object.getPrototypeOf(item) === Object.prototype
        ) {
          return;
        } else {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                navigation.navigate('Detail Card', {
                  cardNumber1: item.cardNumber,
                  nameCard1: item.nameCard,
                  blankName1: item.blankName,
                  date1: item.date,
                });
              }}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 30,
                marginBottom: 20,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
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
                  <CreditLogo />
                </View>

                <Text> Credit Card</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{marginRight: 7}}>
                  {convertNumberCard(item.cardNumber)}
                </Text>
                <MoreThan />
              </View>
            </TouchableOpacity>
          );
        }
      })}
      <TouchableOpacity
        onPress={() => navigation.navigate('CreditCard')}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 30,
          marginBottom: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <AddCardIcon />
          </View>

          <Text> Add new payment method</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              marginRight: 7,
              backgroundColor: '#ccc',
              width: 30,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <Text
              style={{
                textAlignVertical: 'center',
                fontWeight: '700',
              }}>
              +
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AddCard;
