import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
  Switch,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import Dashboard from '../components/Dashboard';
import {SafeAreaView} from 'react-native-safe-area-context';

const User = () => {
  const navigation = useNavigation();

  const tampilMenu = () => {
    const menu = [
      {icon: 'home', text: 'Home'},
      {icon: 'wallet', text: 'My Card'},
      {icon: 'moon', text: 'Dark Mood'},
      {icon: 'map-marker-alt', text: 'Truck Your Order'},
      {icon: 'cog', text: 'Setting'},
      {icon: 'question-circle', text: 'Help Center'},
    ];
    return menu.map((item, key) => {
      return (
        <View
          key={key}
          style={{
            flexDirection: 'row',
            paddingBottom: 40,
            alignItems: 'center',
            justifyContent: 'space-between',
            width: 390,
          }}>
          <TouchableOpacity style={{marginLeft: 45}}>
            <Icon name={item.icon} size={20} color={'black'}></Icon>
          </TouchableOpacity>
          <Text style={{color: 'black', marginRight: 'auto', paddingLeft: 40}}>
            {item.text}
          </Text>

          <TouchableOpacity>
            <Icon name="chevron-right" size={16} style={{marginRight: 40}} />
          </TouchableOpacity>
        </View>
      );
    });
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent={true}
      />
      <ScrollView>
        <LinearGradient colors={['#E6E6E6', '#FEFFBF']} style={style.header}>
          <View
            style={{
              height: 129,
              flexDirection: 'row',
              paddingTop: 20,
            }}>
            <TouchableOpacity
              style={{marginLeft: 20}}
              onPress={() => navigation.navigate('Main')}>
              <Icon name="arrow-left" size={20} color={'black'} />
            </TouchableOpacity>
            <Text
              style={{
                marginLeft: 140,
                fontWeight: 'bold',
                color: 'black',
                fontSize: 16,
              }}>
              Profile
            </Text>
          </View>
        </LinearGradient>

        <LinearGradient colors={['#FEFFCC', '#E6E6E6']} style={style.body}>
          <View
            style={{
              height: 630,
              paddingTop: 45,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../image/people/SadieSink.jpg')}
              style={{
                borderRadius: 60,
                width: 110,
                height: 110,
                position: 'absolute',
                top: -70,
              }}
              resizeMode="cover"
            />
            <View
              style={{
                borderWidth: 0.2,
                width: 150,
                height: 150,
                borderRadius: 80,
                position: 'absolute',
                top: -90,
              }}
            />
            <View
              style={{
                borderWidth: 0.5,
                width: 130,
                height: 130,
                borderRadius: 80,
                position: 'absolute',
                top: -80,
              }}
            />
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: 50,
                marginTop: -100,
              }}>
              <Text
                style={{fontWeight: 'bold', color: '#242424', fontSize: 20}}>
                Sadie Sink
              </Text>
              <Text style={{fontSize: 12}}>sadieSink@gmail.com</Text>
            </View>
            <View
              style={{
                marginTop: -20,
                paddingHorizontal: 120,
              }}>
              {tampilMenu()}
            </View>
          </View>
          <TouchableOpacity>
            <View
              style={{
                width: 24,
                height: 24,
                borderWidth: 2,
                borderColor: 'white',
                backgroundColor: '#4A43EC',
                borderRadius: 20,
                position: 'absolute',
                top: -625,
                right: 145,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="pencil-alt" color={'white'} size={10} />
            </View>
          </TouchableOpacity>
        </LinearGradient>
        <TouchableOpacity
          style={{
            width: 327,
            height: 56,
            backgroundColor: '#4A43EC',
            borderRadius: 16,
            position: 'absolute',
            bottom: 65,
            left: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
            Log Out
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <Dashboard></Dashboard>
    </SafeAreaView>
  );
};

export default User;
const style = StyleSheet.create({
  header: {
    borderBottomLeftRadius: 33,
    borderBottomRightRadius: 33,
    elevation: 1,
  },
  body: {
    borderTopRightRadius: 33,
    borderTopLeftRadius: 33,
    marginTop: 35,
    elevation: 1,
  },
});
