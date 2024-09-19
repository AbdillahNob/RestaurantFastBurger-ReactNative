import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

import Rating from '../components/Order/Rating';
import Address from '../components/Order/Address';
import Checkout from '../components/Order/Checkout';

const Order = () => {
  const navigation = useNavigation();
  const [burger, setBurger] = useState([
    {gambar: require('../../src/image/burger1.jpg')},
    {gambar: require('../../src/image/burger2.jpg')},
    {gambar: require('../../src/image/burger3.jpg')},
  ]);

  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={'dark-content'}
        translucent={true}
        backgroundColor={'transparent'}
      />
      <LinearGradient colors={['#E6E6E6', '#FEFFBF']} style={style.header}>
        <View
          style={{
            height: 159,
            flexDirection: 'row',
            paddingTop: 45,
            justifyContent: 'space-between',
            marginHorizontal: 18,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={20} color={'black'} />
          </TouchableOpacity>
          <Text style={{fontSize: 18, color: 'black'}}>Shopping Cart</Text>
          <TouchableOpacity>
            <Icon name="trash-alt" size={20} color={'black'}></Icon>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <View
        style={{
          top: -70,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../image/burger.jpg')}
          resizeMode="cover"
          style={{
            width: 347,
            height: 214,
            borderRadius: 16,
          }}
        />
        <View
          style={{
            backgroundColor: '#4A43EC',
            width: 52,
            height: 52,
            borderRadius: 30,
            position: 'absolute',
            top: 25,
            left: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 13, color: 'white'}}>10%</Text>
          <Text style={{fontSize: 13, color: 'white'}}>OFF</Text>
        </View>
        <View
          style={{
            width: 347,
            height: 508,
            backgroundColor: '#EADBC8',
            borderRadius: 16,
            elevation: 1,
            top: -20,
          }}>
          <View
            style={{
              position: 'absolute',
              top: -55,
              left: 10,
            }}>
            <FlatList
              data={burger}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <Image
                  source={item.gambar}
                  style={{
                    width: 95,
                    height: 72,
                    borderRadius: 12,
                    marginLeft: 10,
                    elevation: 4,
                  }}
                />
              )}
            />
          </View>
          <Rating />
          <Address />

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../image/Icon/paymentCard.png')}
              style={{width: 62, height: 37, marginLeft: 25, marginTop: 20}}
            />
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: 'black',
                marginTop: 20,
                marginLeft: 15,
              }}>
              Payment Method
            </Text>
            <TouchableOpacity
              style={{
                borderRadius: 12,
                width: 79,
                height: 30,
                borderWidth: 1,
                borderColor: '#4A43EC',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
                marginLeft: 30,
              }}>
              <Text style={{color: '#4A43EC'}}>Change</Text>
            </TouchableOpacity>
          </View>
          <Checkout />

          <TouchableOpacity
            style={{
              width: 271,
              height: 54,
              borderRadius: 100,
              elevation: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 25,
              marginLeft: 40,
              backgroundColor: '#4A43EC',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Confirm Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Order;
const style = StyleSheet.create({
  header: {
    borderBottomLeftRadius: 33,
    borderBottomRightRadius: 33,
    elevation: 1,
  },
});
