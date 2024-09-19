import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Rating = () => {
  return (
    <View>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 30,
          color: 'black',
          top: 45,
          left: 25,
        }}>
        BURGER
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 21,
          color: '#7D78F1',
          top: 15,
          left: 280,
        }}>
        $30
      </Text>
      <View
        style={{
          flexDirection: 'row',
          top: 20,
          left: 25,
          alignItems: 'center',
        }}>
        <Image
          source={require('../../image/Icon/starRate.png')}
          resizeMode="center"
          style={{width: 25, height: 20}}
        />
        <Text style={{color: 'black', fontSize: 12}}>4.9(3k + Rating)</Text>
        <View
          style={{
            flexDirection: 'row',
            left: 110,
            width: 70,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              borderRadius: 10,
              borderWidth: 0.6,
              width: 20,
              height: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="minus" />
          </TouchableOpacity>
          <Text>12</Text>
          <TouchableOpacity
            style={{
              borderRadius: 10,
              borderWidth: 0.6,
              width: 20,
              height: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="plus" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Rating;
