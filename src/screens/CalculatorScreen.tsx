import React from 'react';
import {Text, View} from 'react-native';
import {Btn} from '../components/Btn';
import {styles} from '../theme/appTheme';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    number,
    numberBefore,
    clean,
    buildNumber,
    positiveNegative,
    deleteLastNumber,
    btnDivide,
    btnMultiply,
    btnAdd,
    btnSubtract,
    btnResult,
    btnSin,
    btnCos,
    btnTan,
    btnSinh,
    btnCosh,
    btnTanh,
    btnSqrt,
    btncSqrt,
    btnE
  } = useCalculator();
  return (
    <View style={styles.calcContainer}>
      {numberBefore !== '0' && (
        <Text style={styles.smallResult}>{numberBefore}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>
      <View style={styles.row}>
        <Btn text="7" action={buildNumber} />
        <Btn text="8" action={buildNumber} />
        <Btn text="9" action={buildNumber} />
        <Btn text="×" color="#FF9427" action={btnMultiply} />
        <Btn text="÷"  action={btnDivide} />
        <Btn text="sin" action={btnSin} />
        <Btn text="cos" action={btnCos} />
      </View>
      <View style={styles.row}>
        <Btn text="4" action={buildNumber} />
        <Btn text="5" action={buildNumber} />
        <Btn text="6" action={buildNumber} />
        <Btn text="−" color="#FF9427" action={btnSubtract} />
        <Btn
          text="del"
          textColor="white"
          action={deleteLastNumber}
        />
        <Btn text="tan" action={btnTan} />
        <Btn text="sinh" action={btnSinh} />
      </View>
      <View style={styles.row}>
        <Btn text="1" action={buildNumber} />
        <Btn text="2" action={buildNumber} />
        <Btn text="3" action={buildNumber} />
        <Btn text="+" color="#FF9427" action={btnAdd} />
        <Btn text="C"  textColor="white" action={clean} />
        <Btn text="cosh" action={btnCosh} />
        <Btn text="tanh" action={btnTanh} />
      </View>
      <View style={styles.row}>
        <Btn text="0" widthBtn action={buildNumber} />
        <Btn text="." action={buildNumber} />
        <Btn
          text="+/-"
          textColor="white"
          action={positiveNegative}
        />
        <Btn text="=" color="#FF9427" action={btnResult} />
        <Btn text="√" action={btnSqrt} />
        <Btn text="3√" action={btncSqrt} />
        <Btn text="e" action={btnE} />
      </View>
    </View>
  );
};