import {View, Text} from 'react-native';
import React from 'react';

const HeaderItem = ({title}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 30,
        marginVertical: 10,
      }}>
      <Text style={{fontSize: 20, fontWeight: '700', color: 'black'}}>
        {title}
      </Text>
      <Text style={{fontSize: 14}}> View all</Text>
    </View>
  );
};

export default HeaderItem;
