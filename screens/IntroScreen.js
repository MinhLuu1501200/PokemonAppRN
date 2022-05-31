import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
import Carousel from 'react-native-reanimated-carousel';
import IntroItem from './IntroItem';

let widthScreen = Dimensions.get('window').width;
let heightScreen = Dimensions.get('screen').height;
const IntroScreen = ({navigation}) => {
  const [currentDot, setCurrentDot] = useState(0);
  const [data, setData] = useState([0, 1, 2, 3]);
  useEffect(() => {
    if (currentDot === 3) {
      navigation.replace('LoadingScreen');
    }
  }, [currentDot, navigation]);
  return (
    <View style={{flex: 1, position: 'relative'}}>
      <Carousel
        width={widthScreen}
        autoPlay={true}
        onScrollEnd={item => setCurrentDot(item)}
        autoPlayInterval={2000}
        height={heightScreen}
        pagingEnabled={true}
        snapEnabled={true}
        scrollAnimationDuration={600}
        enabled={true}
        data={data}
        renderItem={({item}) => <IntroItem numberItem={item} />}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 30,
          alignSelf: 'center',
          flexDirection: 'row',
        }}>
        {data.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                width: 10,
                height: 10,
                backgroundColor: 'white',
                opacity: item === currentDot ? 1 : 0.5,
                borderRadius: 6,
                marginRight: 8,
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({});
