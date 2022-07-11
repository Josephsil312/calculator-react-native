import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import Button from "./Button";
import useOrientation from './hooks/UseOrientation'
import * as ScreenOrientation from 'expo-screen-orientation'


export default function MyKeyboard() {
  const Orientation = useOrientation()
  return (
    <View style={Styles.viewBottom}>

    
      <View style={Styles.row}>
    
        <Button title="7" />
        <Button title="8" />
        <Button title="9" />
        
        <Button title="×" isBlue />
        <Button title="1/x"  />
        <Button title="10^x" />
        <Button title="x^y" />
        <Button title="x!" />
      </View>
      <View style={Styles.row}>
        <Button title="4" />
        <Button title="5" />
        <Button title="6" />
        <Button title="-" isBlue />
        <Button title="sin" />
        <Button title="cos" />
        <Button title="tan" />
        <Button title="e" />

      </View>
      <View style={Styles.row}>
        <Button title="1" />
        <Button title="2" />
        <Button title="3" />
        <Button title="+" isBlue />
        <Button title="Rad" />
        <Button title="sinh" />
        <Button title="cosh" />
        <Button title="tanh" />
      </View>
      <View style={Styles.row}>
        <Button title="." />
        <Button title="0" />
        <Button title="⌫" />
        <Button title="=" isBlue />
        <Button title="e^x" />
        <Button title="EE" />
        <Button title="Log" />
        <Button title="Ln" />
      </View>
    </View>

  );
}
