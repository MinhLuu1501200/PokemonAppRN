import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import Back from '../assets/back.svg';
const windowWidth = Dimensions.get('window').width;
const HeaderNavigator = ({navigation, title, moveScreen}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 30,
        // marginTop: 20,
        // marginBottom: 30,
        height: 60,
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <TouchableOpacity onPress={() => navigation.navigate(moveScreen)}>
        <Back />
      </TouchableOpacity>

      <View style={{marginLeft: windowWidth / 4, alignSelf: 'center'}}>
        <Text style={{fontWeight: '700', fontSize: 18, color: 'black'}}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default HeaderNavigator;
