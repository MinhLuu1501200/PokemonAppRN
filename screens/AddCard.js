import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import HeaderNavigator from '../components/HeaderNavigator';
import PayPayLogo from '../assets/paypal.svg';
import CreditLogo from '../assets/credit.svg';
import MoreThan from '../assets/MoreThan.svg';
import AddCardIcon from '../assets/addCard.svg';
const AddCard = ({route, navigation}) => {
  const [newCard, setNewCard] = useState('');
  React.useEffect(() => {
    if (route.params?.cardNumber) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      setNewCard(route.params.cardNumber);
    }
  }, [route.params?.cardNumber]);
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
      {newCard !== '' && (
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
            <Text style={{marginRight: 7}}>{newCard}</Text>
            <MoreThan />
          </View>
        </TouchableOpacity>
      )}
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
