import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Header = () => {
  return (
    <View>
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
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Image
            source={require('../../image/luffy.jpg')}
            style={{
              width: 49,
              height: 49,
              marginLeft: 40,
              borderRadius: 100,
              marginTop: -10,
            }}
          />
          <View
            style={{
              flexDirection: 'column',
              marginRight: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: -10,
            }}>
            <Text>Your Location</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="map-marker-alt" size={20} color={'#4A43EC'} />
              <Text style={{fontWeight: 'bold', fontSize: 15, marginLeft: 6}}>
                Indonesia, Makassar
              </Text>
            </View>
          </View>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 30,
              borderWidth: 0.2,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 20,
              marginTop: -10,
            }}>
            <Icon name="bell" size={20} color={'black'} />
          </View>
        </View>
        <TextInput
          style={{
            width: 347,
            height: 60,
            borderRadius: 100,
            backgroundColor: '#4A43EC',
            elevation: 4,
            justifyContent: 'center',
            alignItems: 'flex-start',
            position: 'absolute',
            top: 125,
            left: 25,
            flexDirection: 'row',
            paddingLeft: 70,
            alignItems: 'center',
          }}
          placeholder="Search Your Food"
          placeholderTextColor={'white'}
          keyboardType="default"
        />
        <Icon
          name="search"
          size={20}
          color={'white'}
          style={{marginLeft: 60, position: 'absolute', top: 145}}
        />
        <TouchableOpacity
          style={{marginLeft: 320, position: 'absolute', top: 145}}>
          <Icon name="sliders-h" size={20} color={'white'} />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default Header;
const style = StyleSheet.create({
  header: {
    borderBottomLeftRadius: 33,
    borderBottomRightRadius: 33,
    elevation: 2,
  },
});
