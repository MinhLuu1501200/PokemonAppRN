/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
  LogBox,
} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import React, {useState, useEffect} from 'react';
import InputCommon from '../components/InputCommon';
import Search from '../assets/search.svg';
import CoffeeCup from '../assets/coffee-cup.svg';
import Map from '../assets/map.svg';
import Star from '../assets/star.svg';
import Clock from '../assets/clock.svg';
import Marker from '../assets/marker.svg';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import food1 from '../assets/hamburger-item.png';
import Burger from '../assets/burger1.svg';
import Cake from '../assets/piece-of-cake.svg';
import Potato from '../assets/potato-chips.svg';
const windowWidth = Dimensions.get('window').width;
const itemWidth = windowWidth - 60;
// import HamburgerItem from '../assets/hamburger-item.png';
const food2 = require('../assets/food1.png');
import HeaderItem from '../components/HeaderItem';
import {Snackbar} from 'react-native-paper';
const DataMenu = [
  {
    id: '1',
    title: 'Drink',
    image: <CoffeeCup color="white" />,
    selected: false,
  },
  {
    id: '2',
    title: 'Food',
    image: <Burger />,
    selected: true,
  },
  {
    id: '3',
    title: 'Cake',
    image: <Cake />,
    selected: false,
  },
  {
    id: '4',
    title: 'Snack',
    image: <Potato />,
    selected: false,
  },
  {
    id: '5',
    title: 'Fine',
    image: <CoffeeCup />,
    selected: false,
  },
];
const DataFoods = [
  [{title: 'Burgers'}, {title: 'Fruit'}],
  [{title: 'Pizza'}, {title: 'Sushi'}],
  [{title: 'BBQ'}, {title: 'Noodle'}],
  [{title: 'Hotpot'}, {title: 'Noodle'}],
];
const Item = ({title, image, selected}) => (
  <>
    <View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={[styles.item, selected && styles.active]}>
          <View>{image}</View>
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  </>
);
const Foods = ({title, image}) => (
  <>
    {/* {console.log(image)} */}
    <View>
      <View style={{alignItems: 'center'}}>
        {/* <TouchableOpacity style={[styles.item]}>
          <View>{image}</View>
        </TouchableOpacity> */}
        <View>
          <Text style={styles.title}>{title}</Text>
          <Image source={require('../assets/hamburger-item.png')} />
        </View>
      </View>
    </View>
  </>
);
const ItemRestaurant = ({item, index}) => {
  // console.log(item);
  return (
    <View
      style={{
        flexDirection: 'row',
        width: itemWidth,
        marginBottom: 10,
      }}>
      <Image style={{width: 130, height: 130}} source={item.img} />
      <View style={{marginLeft: 20, flexDirection: 'column'}}>
        <Text style={{fontSize: 14, marginBottom: 10, fontWeight: '700'}}>
          {item.name}
        </Text>
        <Text
          style={{
            color: '#34495E',
            marginBottom: 10,
            fontSize: 12,
            maxWidth: '80%',
          }}>
          <Marker /> {item.address}
        </Text>
        <Text style={{color: '#34495E', marginBottom: 10, fontSize: 12}}>
          <Clock /> {item.distance}
        </Text>
        <View style={{flexDirection: 'row'}}>
          {Array.from(Array(item.star)).map((item, index) => (
            <Star key={index} />
          ))}
        </View>
      </View>
    </View>
  );
};
const HomeScreen = ({navigation}) => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  const renderItem = ({item}) => {
    return (
      <Item title={item.title} image={item.image} selected={item.selected} />
    );
  };
  const renderFoods = ({item}) => {
    return <Foods title={item.title} image={item.image} />;
  };
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
  ]);
  return (
    <ScrollView>
      <View style={{alignItems: 'center', backgroundColor: 'white'}}>
        <View style={{position: 'relative', marginTop: 30}}>
          <InputCommon placeholder={'Search'} customStyle={styles.search} />
          <View
            style={{
              position: 'absolute',
              top: 17,
              left: 20,
            }}>
            <Search />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'flex-start',
            marginHorizontal: 34,
            marginTop: 15,
          }}>
          <Map />
          <Text style={{marginLeft: 10}}>
            9 West 46 The Street, New York City
          </Text>
        </View>
        <FlatList
          data={DataMenu}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          scrollEnabled={true}
          style={{
            flexDirection: 'row',
            marginTop: 30,
            // backgroundColor: 'red',
            height: 110,
          }}
        />
        <HeaderItem title={'Food Menu'} />
        <FlatList
          data={DataFoods}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            marginTop: 20,
            flexGrow: 0,
            marginLeft: 25,
          }}
          renderItem={({item, index}) => {
            const purple = 'rgba(155, 89, 182, 0.3)';
            const lightBlue = 'rgba(52, 152, 219, 0.3)';
            return (
              <View
                style={{
                  flexDirection: 'column',
                  marginLeft: index != 0 ? 20 : 0,
                }}>
                <FontAwesomeIcon name="bacteria" />
                <TouchableOpacity
                  style={{
                    width: itemWidth / 3,
                    borderRadius: 20,
                    paddingTop: 10,
                    paddingLeft: 15,
                    backgroundColor: index % 2 == 0 ? lightBlue : purple,
                    height: itemWidth / 3,
                    marginBottom: 20,
                    position: 'relative',
                  }}
                  onPress={() => {
                    navigation.navigate('FoodDetailScreen', {
                      item: item[0],
                    });
                  }}>
                  <Text
                    style={{fontWeight: '700', fontSize: 14, color: '#FFFFFF'}}>
                    {item[0].title}
                  </Text>
                  <Image
                    source={food1}
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      width: itemWidth / 3 - 20,
                      height: itemWidth / 6,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    width: itemWidth / 3,
                    paddingTop: 10,
                    paddingLeft: 15,
                    borderRadius: 20,
                    backgroundColor: index % 2 === 0 ? purple : lightBlue,
                    height: itemWidth / 3,
                    position: 'relative',
                  }}
                  onPress={() => {
                    //NOTES: Chuyển màn hình kèm theo biến - Cái tên giống với name khai báo trong MainNavigation
                    navigation.navigate('FoodDetailScreen', {
                      item: item[1],
                    });
                    // setFood(item[1].title)
                  }}>
                  <Text
                    style={{fontWeight: '700', fontSize: 14, color: '#FFFFFF'}}>
                    {item[1].title}
                  </Text>
                  <Image
                    source={food1}
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      width: itemWidth / 3 - 20,
                      height: itemWidth / 6,
                    }}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
        />
        <HeaderItem title={'Near Me'} />
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={listNearMe}
          renderItem={ItemRestaurant}
          scrollEnabled={true}
          // style={{flex: 1}}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  search: {
    backgroundColor: '#ccc',
    height: 50,
    width: 354,
    paddingLeft: 50,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#ccc',
    borderRadius: 20,
    marginLeft: 40,
  },
  active: {
    backgroundColor: '#D35400',
    color: '#ffffffff',
  },
  title: {
    textAlign: 'center',
    marginLeft: 30,
  },
});
export default HomeScreen;
