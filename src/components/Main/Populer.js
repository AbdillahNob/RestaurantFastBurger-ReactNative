import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import React from 'react';

const Populer = ({jMakanan}) => {
  return (
    <View style={{marginTop: 30, bottom: 40}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              color: '#242424',
              marginLeft: 32,
            }}>
            Populer Items
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{fontSize: 15, marginRight: 32}}>View All</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 172,
          width: 342,
          marginLeft: 20,
          marginTop: 10,
        }}>
        <FlatList
          data={jMakanan}
          style={{marginBottom: 30}}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({item}) => (
            <TouchableOpacity>
              <Image
                source={item.gambar}
                style={{
                  width: 159,
                  borderRadius: 6,
                  height: 117,
                  marginLeft: 12,
                  marginTop: 5,
                }}
                resizeMode="cover"
              />
              <Text
                style={{
                  marginTop: 6,
                  marginLeft: 12,
                  fontWeight: 'bold',
                  fontSize: 16,
                  color: 'black',
                }}>
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Populer;
