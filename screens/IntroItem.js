import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import '../assets/chicken.png';
import Chicken from '../assets/intro/chicken.svg';
import Shipping from '../assets/intro/shipping.svg';
import Certificate from '../assets/intro/certificate.svg';
import Payment from '../assets/intro/payment.svg';
let heightScreen = Dimensions.get('window').height;
let widthScreen = Dimensions.get('window').width;

const IntroItem = ({numberItem}) => {
  let [currentItem, setCurrentItem] = useState([]);
  let [images, setImages] = useState([
    {
      id: 1,
      src: <Chicken />,
      title: 'Delicious Food',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      src: <Shipping />,
      title: 'Fast Shipping',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum rhoncus nulla.',
    },
    {
      id: 3,
      src: <Certificate />,
      title: 'Certificate Food',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies mauris a id.',
    },
    {
      id: 4,
      src: <Payment />,
      title: 'Payment Online',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui ultricies sit massa.',
    },
  ]);

  useEffect(() => {
    setCurrentItem(
      images.filter(item => {
        return item.id === numberItem;
      }),
    );
  }, [numberItem, images]);
  console.log(currentItem);
  return (
    <View
      style={{
        flex: 1,
        height: heightScreen,
        backgroundColor: '#D35400',
        justifyContent: 'center',
      }}>
      <View style={{width: widthScreen}}>
        <View style={{alignSelf: 'center'}}>{currentItem[0]?.src}</View>

        <Text style={[styles.textColor, styles.fontW]}>
          {currentItem[0]?.title}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            width: 270,
            alignSelf: 'center',
            color: 'white',
          }}>
          {currentItem[0]?.des}
        </Text>
      </View>
    </View>
  );
};

export default IntroItem;

const styles = StyleSheet.create({
  textColor: {
    color: 'white',
    textAlign: 'center',
  },
  fontW: {
    fontWeight: '700',
    fontSize: 25,
    marginTop: 50,
    marginBottom: 15,
  },
});
