import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

const Dashboard = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        elevation: 12,
        height: 55,
        width: 395,
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
      }}>
      <TouchableOpacity
        style={{alignItems: 'center'}}
        onPress={() => navigation.navigate('Main')}>
        <Icon name="home" size={20} color={'black'} />
        <Text
          style={{textTransform: 'uppercase', fontSize: 12, color: 'black'}}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{alignItems: 'center'}}
        onPress={() => navigation.navigate('Order')}>
        <Icon name="shopping-cart" size={20} color={'black'} />
        <Text
          style={{textTransform: 'uppercase', fontSize: 12, color: 'black'}}>
          Order
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{alignItems: 'center'}}>
        <Icon name="inbox" size={20} color={'black'} />
        <Text
          style={{textTransform: 'uppercase', fontSize: 12, color: 'black'}}>
          inbox
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{alignItems: 'center'}}
        onPress={() => navigation.navigate('User')}>
        <Icon name="user" size={20} color={'black'} />
        <Text
          style={{textTransform: 'uppercase', fontSize: 12, color: 'black'}}>
          profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
