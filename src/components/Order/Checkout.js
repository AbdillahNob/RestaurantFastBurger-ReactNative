import {View, Text} from 'react-native';
import React from 'react';

const Checkout = () => {
  const checkout = () => {
    const nilaiCheckout = [
      {
        text1: 'Checkout Pesanan',
        text2: '',
        color: 'black',
        color2: '',
        weight: 'bold',
        weight2: '',
      },
      {
        text1: 'Subtotal (2)',
        text2: '$56',
        color: '',
        color2: 'black',
        weight: 'normal',
        weight2: 'bold',
      },
      {
        text1: 'Delivery Free',
        text2: '$6.20',
        color: '',
        color2: 'black',
        weight: 'normal',
        weight2: 'bold',
      },
      {
        text1: 'Payment Total',
        text2: '$6.2',
        color: 'black',
        color2: '#4A43EC',
        weight: 'bold',
        weight2: 'bold',
      },
    ];

    return nilaiCheckout.map((item, key) => {
      return (
        <View
          key={key}
          style={{
            borderBottomWidth: 0.5,
            width: 286,
            marginLeft: 34,
            marginTop: 18,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{fontWeight: item.weight, color: item.color, fontSize: 14}}>
            {item.text1}
          </Text>
          <Text style={{color: item.color2, fontWeight: item.weight2}}>
            {item.text2}
          </Text>
        </View>
      );
    });
  };
  return <View>{checkout()}</View>;
};

export default Checkout;
