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
// import HamburgerItem from '../assets/hamburger-item.png';

const CreditCard = ({navigation}) => {
  // const inputEl = useRef();
  // useEffect(() => {
  //   inputEl.current.focus();
  // }, []);
  const [date, setDate] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const banks = [
    {
      en_name: 'Visa',
      vn_name: 'Visa',
      bankId: '4',
      atmBin: '4',
      cardLength: 13,
      shortName: 'Visa',
      bankCode: '123',
      type: '',
      napasSupported: true,
    },
    {
      en_name: 'MasterCard',
      vn_name: 'MasterCard',
      bankId: '5',
      atmBin: '5',
      cardLength: 16,
      shortName: 'MasterCard',
      bankCode: '432',
      type: '',
      napasSupported: true,
    },
    {
      en_name: 'An Binh Commercial Joint stock  Bank',
      vn_name: 'Ngân hàng An Bình',
      bankId: '970425',
      atmBin: '970425',
      cardLength: 16,
      shortName: 'ABBank',
      bankCode: '323',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'Asia Commercial Bank',
      vn_name: 'Ngân hàng Á Châu',
      bankId: '970416',
      atmBin: '970416',
      cardLength: 0,
      shortName: 'ACB',
      bankCode: '307',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'Vienam Bank for Agriculture and Rural Development',
      vn_name: 'Ngân hàng NN & PTNT VN',
      bankId: '970405',
      atmBin: '970499',
      cardLength: 16,
      shortName: 'Agribank, VBARD',
      bankCode: '204',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'Baoviet Joint Stock Commercial Bank',
      vn_name: 'Ngân hàng TMCP Bảo Việt',
      bankId: '970438',
      atmBin: '970438',
      cardLength: 20,
      shortName: 'Baoviet',
      bankCode: '359',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'Bank for Investment and Development of Vietnam',
      vn_name: 'Ngân hàng Đầu tư và Phát triển Việt Nam',
      bankId: '970418',
      atmBin: '970418',
      cardLength: 16,
      shortName: 'BIDV',
      bankCode: '202',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'Dong A Commercial Joint stock Bank',
      vn_name: 'Ngân hàng Đông Á',
      bankId: '970406',
      atmBin: '970406',
      cardLength: 16,
      shortName: 'DAB',
      bankCode: '304',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'Vietnam Export Import Commercial Joint Stock Bank',
      vn_name: 'Ngân hàng Xuất nhập khẩu Việt Nam',
      bankId: '970431',
      atmBin: '970431',
      cardLength: 16,
      shortName: 'EIB',
      bankCode: '305',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'Global Petro Commercial Joint Stock Bank',
      vn_name: 'Ngân hàng Dầu khí Toàn cầu',
      bankId: '970408',
      atmBin: '970408',
      cardLength: 20,
      shortName: 'GP',
      bankCode: '320',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'Housing Development Bank',
      vn_name: 'Ngân hàng Phát triển TP HCM',
      bankId: '970437',
      atmBin: '970437',
      cardLength: 20,
      shortName: 'HDBank',
      bankCode: '321',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'Hong Leong Bank Viet Nam',
      vn_name: 'Ngân hàng Hong Leong Viet Nam',
      bankId: '970442',
      atmBin: '970442',
      cardLength: 20,
      shortName: 'HLO',
      bankCode: '603',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'Indovina Bank',
      vn_name: 'Indovina Bank',
      bankId: '970434',
      atmBin: '888999',
      cardLength: 0,
      shortName: 'IVB',
      bankCode: '502',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'Kien Long Commercial Joint Stock Bank',
      vn_name: 'Ngân hàng Kiên Long',
      bankId: '970452',
      atmBin: '970452',
      cardLength: 16,
      shortName: 'Kienlongbank',
      bankCode: '353',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'Lien Viet Post Bank',
      vn_name: 'Ngan hàng TMCP Bưu điện Liên Việt',
      bankId: '970449',
      atmBin: '970449',
      cardLength: 0,
      shortName: 'Lienvietbank,  LPB',
      bankCode: '357',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'Maritime Bank',
      vn_name: 'Ngân hàng Hàng Hải Việt Nam',
      bankId: '970426',
      atmBin: '970426',
      cardLength: 16,
      shortName: 'MSB',
      bankCode: '302',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'Military Commercial Joint stock Bank',
      vn_name: 'Ngân hàng Quân Đội',
      bankId: '970422',
      atmBin: '970422',
      cardLength: 16,
      shortName: 'MB',
      bankCode: '311',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'Nam A Commercial Joint stock Bank',
      vn_name: 'Ngân hàng Nam Á',
      bankId: '970428',
      atmBin: '970428',
      cardLength: 0,
      shortName: 'NAB',
      bankCode: '306',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'North Asia Commercial Joint Stock Bank',
      vn_name: 'Ngân hàng Bắc Á',
      bankId: '970409',
      atmBin: '970409',
      cardLength: 0,
      shortName: 'NASB',
      bankCode: '313',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'National Citizen Bank',
      vn_name: 'Ngân hàng Quoc Dan',
      bankId: '970419',
      atmBin: '970419',
      cardLength: 16,
      shortName: 'NCB',
      bankCode: '352',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'Ocean Bank',
      vn_name: 'Ngân hàng Đại Dương',
      bankId: '970414',
      atmBin: '970414',
      cardLength: 20,
      shortName: 'Ocean',
      bankCode: '319',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'Orient Commercial Joint Stock Bank',
      vn_name: 'Ngân hàng Phương Đông',
      bankId: '970448',
      atmBin: '970448',
      cardLength: 16,
      shortName: 'OCB',
      bankCode: '333',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'Petrolimex group commercial Joint stock Bank',
      vn_name: 'Ngân hàng Xăng dầu Petrolimex',
      bankId: '970430',
      atmBin: '970430',
      cardLength: 16,
      shortName: 'PG',
      bankCode: '341',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'PVcombank',
      vn_name: 'NH TMCP Đại Chúng Viet Nam',
      bankId: '970412',
      atmBin: '970412',
      cardLength: 16,
      shortName: 'PVcombank',
      bankCode: '360',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'Saigon Thuong Tin Commercial Joint Stock Bank',
      vn_name: 'Ngân hàng Sài Gòn Thương Tín',
      bankId: '970403',
      atmBin: '970403',
      cardLength: 16,
      shortName: 'Sacombank',
      bankCode: '303',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'Saigon Bank for Industry and Trade',
      vn_name: 'Ngân hàng Sài Gòn Công Thương',
      bankId: '970400',
      atmBin: '161087',
      cardLength: 16,
      shortName: 'Saigonbank',
      bankCode: '308',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'Saigon Commercial Joint Stock Bank',
      vn_name: 'Ngân hàng TMCP Sài Gòn',
      bankId: '970429',
      atmBin: '970429',
      cardLength: 16,
      shortName: 'SCB',
      bankCode: '334',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'South East Asia Commercial Joint stock  Bank',
      vn_name: 'Ngân hàng TMCP Đông Nam Á',
      bankId: '970440',
      atmBin: '970468',
      cardLength: 16,
      shortName: 'SeABank',
      bankCode: '317',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'Saigon - Hanoi Commercial Joint Stock Bank',
      vn_name: 'Ngân hàng Sài Gòn - Hà Nội',
      bankId: '970443',
      atmBin: '970443',
      cardLength: 16,
      shortName: 'SHB',
      bankCode: '348',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'Shinhan Bank',
      vn_name: 'Ngân hàng TNHH MTV Shinhan Việt Nam',
      bankId: '970424',
      atmBin: '970424',
      cardLength: 0,
      shortName: 'Shinhan Bank',
      bankCode: '616',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'Vietnam Technological and Commercial Joint stock Bank',
      vn_name: 'Ngân hàng Kỹ thương Việt Nam',
      bankId: '970407',
      atmBin: '970407',
      cardLength: 16,
      shortName: 'TCB',
      bankCode: '310',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'United Oversea Bank',
      vn_name: 'United Oversea Bank',
      bankId: '970458',
      atmBin: '970458',
      cardLength: 0,
      shortName: 'UOB',
      bankCode: '618',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'Vietnam International Commercial Joint Stock Bank',
      vn_name: 'Ngân hàng Quốc tế',
      bankId: '970441',
      atmBin: '970441',
      cardLength: 0,
      shortName: 'VIBank, VIB',
      bankCode: '314',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'VID public',
      vn_name: 'Ngân hàng VID Public',
      bankId: '970439',
      atmBin: '970439',
      cardLength: 16,
      shortName: 'VID',
      bankCode: '501',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'Viet A Commercial Joint Stock Bank',
      vn_name: 'Ngân hàng Việt Á',
      bankId: '970427',
      atmBin: '970427',
      cardLength: 0,
      shortName: 'VAB',
      bankCode: '355',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'Vietnam Thương tin Commercial Joint Stock Bank',
      vn_name: 'Ngân hàng Việt Nam Thương Tín',
      bankId: '970433',
      atmBin: '970433',
      cardLength: 16,
      shortName: 'Vietbank',
      bankCode: '356',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'BanViet Commercial Jont stock Bank',
      vn_name: 'NHTMCP Bản Việt',
      bankId: '970454',
      atmBin: '970454',
      cardLength: 16,
      shortName: 'VietCapital',
      bankCode: '327',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'Joint Stock Commercial Bank for Foreign Trade of Vietnam',
      vn_name: 'Ngân hàng TMCP Ngoại Thương',
      bankId: '970436',
      atmBin: '970436',
      cardLength: 0,
      shortName: 'VCB',
      bankCode: '203',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'Vietnam Joint Stock Commercial Bank for Industry and Trade',
      vn_name: 'Ngân hàng công thương Việt Nam',
      bankId: '970415',
      atmBin: '970415',
      cardLength: 16,
      shortName: 'Vietinbank',
      bankCode: '201',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'Vietnam prosperity Joint stock commercial Bank',
      vn_name: 'Ngân hàng Thương mại cổ phần Việt Nam Thịnh Vượng',
      bankId: '970432',
      atmBin: '970432',
      cardLength: 16,
      shortName: 'VPBank',
      bankCode: '309',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'Vietnam - Russia Bank',
      vn_name: 'Ngân hàng Liên doanh Việt Nga',
      bankId: '970421',
      atmBin: '970421',
      cardLength: 16,
      shortName: 'VRB',
      bankCode: '505',
      type: 'ACC',
      napasSupported: true,
    },
    {
      en_name: 'WOORI BANK Hanoi',
      vn_name: 'WOORI BANK Hà Nội',
      bankId: '970457',
      atmBin: '970457',
      cardLength: 0,
      shortName: 'WHHN',
      bankCode: '624',
      type: 'ACC',
      napasSupported: true,
    },
  ];
  const listBanks = banks.map(item => {
    return {
      label: item.shortName,
      value: item.bankCode,
    };
  });

  const [items, setItems] = useState(listBanks);
  const [blankName, setBlankName] = useState('');
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
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
            <Text style={styles.colorText}>
              {' '}
              {convertNumberCard(cardNumber)}
            </Text>
            <Text style={[styles.colorText, styles.fontW]}>
              {' '}
              $12.999.999.99
            </Text>
          </View>
        </View>

        <View>
          <View style={styles.row}>
            <Text> Bank name</Text>
            <DropDownPicker
              zIndex={5000}
              onSelectItem={item => setBlankName(item.label)}
              style={{
                alignSelf: 'center',
                borderWidth: 0,
              }}
              containerStyle={{
                width: 150,

                backgroundColor: 'yelllow',
              }}
              labelStyle={{
                fontWeight: 'bold',
              }}
              textStyle={{
                fontSize: 15,
              }}
              open={open}
              value={value}
              placeholder={'Select a blank'}
              placeholderStyle={{color: '#bec3c9'}}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
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
            <Text>Date</Text>
            <View>
              <Text style={{lineHeight: 40}} onPress={() => setOpenDate(true)}>
                {moment(date).format('MM/YY')}
              </Text>
              <DatePicker
                modal
                mode="date"
                open={openDate}
                date={date}
                onConfirm={date => {
                  setOpenDate(false);
                  setDate(date);
                }}
                onCancel={() => {
                  setOpenDate(false);
                }}
              />
            </View>
          </View>
        </View>
        <View>
          <View style={styles.row}>
            <Text>CVV</Text>
            <TextInput
              style={styles.titleRight}
              placeholder={'Enter the CVV...'}
              maxLength={3}
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
                nameCard: name,
                blankName: blankName,
                date: moment(date).format('MM/YY'),
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
