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
import React, {useState, useEffect} from 'react';

import Like from '../assets/line.svg';
import Unlike from '../assets/unline.svg';
import Clock from '../assets/clock.svg';
import HeaderNavigator from '../components/HeaderNavigator';
import ButtonCommon from '../components/ButtonCommon';
import Tick from '../assets/tick.svg';
import TickEmpty from '../assets/tickEm.svg';

const windowWidth = Dimensions.get('window').width;
const itemWidth = windowWidth - 60;
// import HamburgerItem from '../assets/hamburger-item.png';
const voucher = require('../assets/voucher.png');
const MyVoucher = ({navigation}) => {
  const [listNearMe, setListNearMe] = useState([
    {
      id: 0,
      name: 'Dapur Ijah Restaurant',
      img: voucher,
      address: '123, Đường số 1, Quận 1, TP. Hồ Chí Minh',
      distance: '3 min - 1.1 km',
      liked: true,
    },
    {
      id: 1,
      name: 'Biển Restaurant',
      img: voucher,
      address: '123, Đường số 2, Quận 3, TP. Hồ Chí Minh',
      distance: '15 min -3 km',
      liked: false,
    },
    {
      id: 2,
      name: 'Biển Restaurant',
      img: voucher,
      address: '123, Đường số 2, Quận 3, TP. Hồ Chí Minh',
      distance: '15 min -3 km',
      liked: true,
    },
    {
      id: 3,
      name: 'Biển Restaurant',
      img: voucher,
      address: '123, Đường số 2, Quận 3, TP. Hồ Chí Minh',
      distance: '15 min -3 km',
      liked: true,
    },
    {
      id: 4,
      name: 'Biển Restaurant',
      img: voucher,
      address: '123, Đường số 2, Quận 3, TP. Hồ Chí Minh',
      distance: '15 min -3 km',
      liked: true,
    },
    {
      id: 5,
      name: 'Biển Restaurant',
      img: voucher,
      address: '123, Đường số 2, Quận 3, TP. Hồ Chí Minh',
      distance: '15 min -3 km',
      liked: true,
    },
    {
      id: 6,
      name: 'Biển Restaurant',
      img: voucher,
      address: '123, Đường số 2, Quận 3, TP. Hồ Chí Minh',
      distance: '15 min -3 km',
      liked: false,
    },
  ]);
  useEffect(() => {
    console.log(listNearMe);
  }, [listNearMe]);
  const onPressTicked = item => {
    listNearMe.forEach(selected => {
      if (selected.id === item.id) {
        selected.liked = !selected.liked;
      }
    });
    setListNearMe([...listNearMe]);
  };

  return (
    <>
      <HeaderNavigator
        title={'My Voucher'}
        navigation={navigation}
        moveScreen={'MainProfile'}
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: 'white',
        }}>
        <FlatList
          keyExtractor={item => item.id}
          data={listNearMe}
          renderItem={({item, index}) => {
            return (
              <View
                // key={item.id}
                style={{
                  flexDirection: 'row',
                  width: itemWidth,
                  marginBottom: 10,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flex: 1,
                  backgroundColor: 'white',
                }}>
                <Image style={{width: 80, height: 80}} source={item.img} />
                <View style={{marginLeft: 20, flexDirection: 'column'}}>
                  <Text
                    style={{fontSize: 14, marginBottom: 10, fontWeight: '700'}}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      marginBottom: 10,
                      fontWeight: '700',
                      alignItems: 'center',
                    }}>
                    <Clock /> Apr 10 - Apr 30
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '700',
                      color: '#E74C3C',
                    }}>
                    11 days left
                  </Text>
                </View>
                <View
                  style={{
                    marginLeft: 20,
                    flex: 2,
                    alignSelf: 'center',
                  }}>
                  <TouchableOpacity
                    style={{
                      alignSelf: 'flex-end',
                    }}
                    onPress={() => {
                      onPressTicked(item);
                    }}>
                    {item.liked ? <Tick /> : <TickEmpty />}
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
          scrollEnabled={true}
          style={{paddingHorizontal: 20}}
          ListFooterComponent={
            <ButtonCommon
              text="Send"
              customStyle={styles.SignUp}
              colorText={styles.colorText}
              onPress={() => navigation.navigate('SignUp')}
            />
          }
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  SignUp: {
    backgroundColor: '#D35400',
    marginTop: 20,
    marginBottom: 20,
  },
  colorText: {
    color: '#FFFFFF',
  },
});
export default MyVoucher;
