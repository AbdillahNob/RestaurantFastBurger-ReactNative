import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Address = () => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            width: 230,
            height: 67,
            backgroundColor: '#91DDCF',
            borderRadius: 8,
            marginTop: 40,
            marginLeft: 30,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Icon name="map-marker-alt" size={25} color={'black'} />
          <View style={{flexDirection: 'column'}}>
            <Text style={{marginLeft: 16}}>Delivery Address</Text>
            <Text style={{marginLeft: 16}}>Makassar, Indonesia</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 40,
            marginLeft: 10,
            width: 52,
            height: 67,
            backgroundColor: '#A9A6FF',
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="search-location" size={25} color={'white'} />
        </View>
      </View>
    </View>
  );
};

export default Address;
