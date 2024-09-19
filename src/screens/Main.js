import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Swiper from 'react-native-swiper';

import Header from '../components/Main/Header';
import Dashboard from '../components/Dashboard';
import Populer from '../components/Main/Populer';

const Main = () => {
  const [jMakanan, setJMakanan] = useState([
    {
      title: 'PIZZA',
      gambar: require('../../src/image/pizza.jpg'),
      icon: 'pizza-slice',
    },
    {
      title: 'BURGER',
      gambar: require('../../src/image/burger.jpg'),
      icon: 'hamburger',
    },
    {
      title: 'DRINK',
      gambar: require('../../src/image/drink.jpg'),
      icon: 'cocktail',
    },
    {
      title: 'CAKE',
      gambar: require('../../src/image/cake.jpg'),
      icon: 'birthday-cake',
    },
  ]);

  const [seleksiKategori, setSeleksiKategori] = useState({title: 'PIZZA'});

  const swiperImage = () => {
    const data = [
      {
        image: require('../image/burger.jpg'),
        title: 'Burger',
        rating: '4.9',
        off: '10%',
        color: '#FFD804',
      },
      {
        image: require('../image/pizza.jpg'),
        title: 'Pizza',
        rating: '5.1',
        off: '14%',
        color: '#EADFB4',
      },
      {
        image: require('../image/drink.jpg'),
        title: 'Drink',
        rating: '4.6',
        off: '0%',
        color: 'black',
      },
      {
        image: require('../image/cake.jpg'),
        title: 'Cake',
        rating: '4.2',
        off: '20%',
        color: 'black',
      },
    ];

    return data.map((item, key) => {
      return (
        <View
          key={key}
          style={{
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: 20,
          }}>
          <Image
            source={item.image}
            style={{width: 328, height: 180, borderRadius: 12}}
            resizeMode="cover"
          />
          <View
            style={{
              position: 'absolute',
              top: 25,
              left: 48,
            }}>
            <Text style={{color: item.color, fontWeight: 'bold', fontSize: 20}}>
              {item.title}
            </Text>
            <Text style={{color: 'white'}}>Today's Hot Offer</Text>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../image/people/people2.jpg')}
                resizeMode="cover"
                style={style.people2}
              />
              <Image
                source={require('../image/people/people1.jpg')}
                resizeMode="cover"
                style={style.people1}
              />
              <Image
                source={require('../image/people/SadieSink.jpg')}
                resizeMode="cover"
                style={style.peopleSadie}
              />
              <Image
                source={require('../image/Icon/starRate.png')}
                resizeMode="cover"
                style={{width: 18, height: 18, marginTop: 42, marginLeft: -26}}
              />
              <Text
                style={{
                  color: 'white',
                  marginTop: 42,
                  marginLeft: 2,
                }}>
                {item.rating}
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#4A43EC',
              width: 52,
              height: 52,
              borderRadius: 30,
              position: 'absolute',
              top: 45,
              right: 70,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 13, color: 'white'}}>{item.off}</Text>
            <Text style={{fontSize: 13, color: 'white'}}>OFF</Text>
          </View>
        </View>
      );
    });
  };
  return (
    <View style={style.container}>
      <Header></Header>
      <View
        style={{
          marginTop: 35,
          paddingTop: 6,
          marginLeft: 15,
          height: 100,
        }}>
        <FlatList
          style={{marginTop: 2}}
          data={jMakanan}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                width: 86,
                height: 86,
                backgroundColor:
                  seleksiKategori.title == item.title ? '#29D697' : '#f5f5f5',
                borderRadius: 6,
                marginLeft: 22,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 2,
              }}
              onPress={() => setSeleksiKategori(item)}>
              <Icon name={item.icon} size={22} />
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <Swiper autoplay={true}>{swiperImage()}</Swiper>
      <Populer jMakanan={jMakanan} />
      <Dashboard />
    </View>
  );
};

export default Main;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'f5f5f5',
  },
  header: {
    borderBottomLeftRadius: 33,
    borderBottomRightRadius: 33,
    elevation: 1,
  },
  peopleSadie: {
    width: 23,
    height: 23,
    borderRadius: 20,
    marginTop: 12,
    marginLeft: -40,
  },
  people1: {
    width: 23,
    height: 23,
    borderRadius: 20,
    marginTop: 12,
    marginLeft: -40,
  },
  people2: {
    width: 23,
    height: 23,
    borderRadius: 20,
    marginTop: 12,
    marginLeft: 40,
  },
});
