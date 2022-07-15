import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  text: string;
  color?: string;
  textColor?: string;
  widthBtn?: boolean;
  action: (numberText: string) => void;
}

export const Btn = ({
  text,
  color = '#2D2D2D',
  textColor = 'white',
  widthBtn = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
     
        style={{
          ...styles.btn,
          backgroundColor: color,
          width: widthBtn ? 60 : 60,
        }}>
        <Text style={{...styles.btnText, color: textColor}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  btn: {
    height: 60,
    width: 50,
    borderRadius: 70,
    justifyContent: 'center',
    marginHorizontal: 5,
    marginVertical:5
  },
  btnText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
});