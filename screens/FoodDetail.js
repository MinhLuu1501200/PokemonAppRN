import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FoodDetail = ({route, navigation}) => {
  console.log(route.params);
  let {item} = route.params;
  return (
    <View
      style={{
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontWeight: '700', fontSize: 20}}>{item.title}</Text>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({});
