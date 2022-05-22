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

import Like from '../assets/line.svg';
import Unlike from '../assets/unline.svg';

import HeaderNavigator from '../components/HeaderNavigator';
import ButtonCommon from '../components/ButtonCommon';

const windowWidth = Dimensions.get('window').width;
const itemWidth = windowWidth - 60;
// import HamburgerItem from '../assets/hamburger-item.png';
const food2 = require('../assets/food1.png');
const Order = ({navigation}) => {
  const [listNearMe, setListNearMe] = useState([
    {
      id: 1,
      name: 'Dapur Ijah Restaurant',
      img: food2,
      address: '123, Đường số 1, Quận 1, TP. Hồ Chí Minh',
      distance: '3 min - 1.1 km',
      star: 5,
    },
    {
      id: 2,
      name: 'Biển Restaurant',
      img: food2,
      address: '123, Đường số 2, Quận 3, TP. Hồ Chí Minh',
      distance: '15 min -3 km',
      star: 4,
    },
    {
      id: 3,
      name: 'Biển Restaurant',
      img: food2,
      address: '123, Đường số 2, Quận 3, TP. Hồ Chí Minh',
      distance: '15 min -3 km',
      star: 4,
    },
    {
      id: 4,
      name: 'Biển Restaurant',
      img: food2,
      address: '123, Đường số 2, Quận 3, TP. Hồ Chí Minh',
      distance: '15 min -3 km',
      star: 4,
    },
    {
      id: 5,
      name: 'Biển Restaurant',
      img: food2,
      address: '123, Đường số 2, Quận 3, TP. Hồ Chí Minh',
      distance: '15 min -3 km',
      star: 4,
    },
    {
      id: 6,
      name: 'Biển Restaurant',
      img: food2,
      address: '123, Đường số 2, Quận 3, TP. Hồ Chí Minh',
      distance: '15 min -3 km',
      star: 4,
    },
    {
      id: 7,
      name: 'Biển Restaurant',
      img: food2,
      address: '123, Đường số 2, Quận 3, TP. Hồ Chí Minh',
      distance: '15 min -3 km',
      star: 4,
    },
  ]);
  const ItemRestaurant = ({item, index}) => {
    // console.log(item);
    return (
      <View
        style={{
          flexDirection: 'row',
          width: itemWidth,
          marginBottom: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <Image style={{width: 80, height: 80}} source={item.img} />
        <View style={{marginLeft: 20, flexDirection: 'column'}}>
          <Text style={{fontSize: 14, marginBottom: 10, fontWeight: '700'}}>
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginBottom: 10,
              fontWeight: '700',
              alignItems: 'center',
            }}>
            <Like /> 999+ | <Unlike /> 93+
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '700',
              color: '#2ECC71',
            }}>
            $99.99
          </Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            flex: 2,
            alignSelf: 'center',
          }}>
          <Text style={{textAlign: 'right'}}>
            <Unlike /> <Like />
          </Text>
        </View>
      </View>
    );
  };
  return (
    <>
      <HeaderNavigator
        title={'ReviewFood'}
        navigation={navigation}
        moveScreen={'Home'}
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: 'white',
        }}>
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={listNearMe}
          renderItem={ItemRestaurant}
          scrollEnabled={true}
          style={{paddingHorizontal: 20}}
        />
        <ButtonCommon
          text="Send"
          customStyle={styles.SignUp}
          colorText={styles.colorText}
          onPress={() => navigation.navigate('SignUp')}
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
export default Order;
