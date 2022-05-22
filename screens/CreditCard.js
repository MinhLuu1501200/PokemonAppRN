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
import React, {useState, useRef} from 'react';

import Card from '../assets/card1.svg';

import HeaderNavigator from '../components/HeaderNavigator';
import ButtonCommon from '../components/ButtonCommon';
import {useEffect} from 'react/cjs/react.production.min';

const windowWidth = Dimensions.get('window').width;
const itemWidth = windowWidth - 60;
// import HamburgerItem from '../assets/hamburger-item.png';

const CreditCard = ({navigation}) => {
  // const inputEl = useRef();
  // useEffect(() => {
  //   inputEl.current.focus();
  // }, []);
  const [blankName, setBlankName] = useState('');
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  function cc_format(value) {
    var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    var matches = v.match(/\d{4,16}/g);
    var match = (matches && matches[0]) || '';
    var parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  }
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
              {name}
            </Text>
            <Text style={{color: 'white'}}> {blankName}</Text>
          </View>
          <View
            style={{
              paddingHorizontal: 35,
              position: 'absolute',
              top: 108,
              width: 354,
            }}>
            <Text style={styles.colorText}> No {blankName} Bank</Text>
            <Text style={styles.colorText}> {cardNumber}</Text>
            <Text style={[styles.colorText, styles.fontW]}>
              {' '}
              $12.999.999.99
            </Text>
          </View>
        </View>

        <View>
          <View style={styles.row}>
            <Text> Bank name</Text>
            <TextInput
              // ref={inputEl}
              value={blankName}
              style={styles.titleRight}
              placeholder={'Enter the bank name...'}
              onChangeText={text => {
                setBlankName(text);
              }}
            />
          </View>
        </View>
        <View>
          <View style={styles.row}>
            <Text>Your name</Text>
            <TextInput
              value={name}
              style={styles.titleRight}
              placeholder={'Enter the your name...'}
              onChangeText={text => {
                setName(text);
              }}
            />
          </View>
        </View>
        <View>
          <View style={styles.row}>
            <Text>Card number</Text>
            <TextInput
              onChangeText={text => {
                setCardNumber(cc_format(text));
              }}
              value={cardNumber}
              style={styles.titleRight}
              placeholder={'Enter the card number...'}
            />
          </View>
        </View>
        <View>
          <View style={styles.row}>
            <Text>CVV</Text>
            <TextInput
              style={styles.titleRight}
              placeholder={'Enter the CVV...'}
            />
          </View>
        </View>

        <ButtonCommon
          text="Add"
          customStyle={styles.SignUp}
          colorText={styles.colorText}
          onPress={() => {
            navigation.navigate({
              name: 'MainPayment',
              params: {
                cardNumber: cardNumber,
              },
            });
          }}
        />
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
export default CreditCard;
