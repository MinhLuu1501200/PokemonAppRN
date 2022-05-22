import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ImgFooter from '../assets/imgFooter.svg';
import Facebook from '../assets/facebook 1.svg';
import Google from '../assets/google-plus 1.svg';

export default function Footer() {
  return (
    <View>
      <View style={{height: 143, backgroundColor: 'white'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 1, backgroundColor: '#ccc'}} />
          <View>
            <Text style={{width: 150, marginLeft: 10, textAlign: 'left'}}>
              Or connect with
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <ImgFooter
              style={[
                styles.imgFooter,
                {
                  transform: [{rotateY: '180deg'}],
                },
              ]}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              alignSelf: 'flex-start',
              marginTop: 20,
            }}>
            <Facebook />
            <Google style={{marginRight: 30, marginLeft: 20}} />
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  imgFooter: {
    width: 200,
    height: 150,
  },
});
