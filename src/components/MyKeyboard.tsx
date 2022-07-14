import React, { useState } from "react";
import Button from "./Button";
import { View, Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import { myColors } from "../styles/Colors";

export default function MyKeyboard() {
  const [firstNumber, setFirstNumber] = React.useState("");
  const [secondNumber, setSecondNumber] = React.useState("");
  const [operation, setOperation] = React.useState("");
  const [result, setResult] = React.useState<Number | null>(null);

  const handleNumberPress = (buttonValue: string) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };

  const handleOperationPress = (buttonValue: string) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber("");
  };

  const operationsqrt = () => {
    setResult((Math.pow(Number(firstNumber), 1 / 2)).toFixed(2))
  }

  const operationsqrtcube = () => {
    setResult((Math.pow(Number(firstNumber), 1 / 3)).toFixed(2))
  }

  const operationsquare = () => {
    setResult(Math.pow(Number(firstNumber), 2))
  }

  const operationsin = () => {
    setResult((Math.sin(firstNumber)).toFixed(2))
  }

  const operationcos = () => {
    setResult((Math.cos(firstNumber)).toFixed(2))
  }

  const operationtan = () => {
    setResult((Math.tan(firstNumber)).toFixed(2))
  }


  const handleOperationexpo = () => {
    setResult((Math.exp(Number(firstNumber))).toFixed(2))
  }

  const handleNumberPresssinh = () => {
    setResult((Math.sinh(firstNumber)).toFixed(2))
  }

  const handleNumberPresscosh = () => {
    setResult((Math.cosh(firstNumber)).toFixed(2))
  }

  const handleNumberPresstanh = () => {
    setResult((Math.tanh(firstNumber)).toFixed(2))
  }

  const handleNumberPressexpocube = () => {
    setResult(Math.pow(Number(firstNumber), 3))
  }
  
  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult(null);
  };


  const firstNumberDisplay = () => {
    if (result !== null) {
      return <Text style={result < 99999 ? [Styles.screenFirstNumber, { color: myColors.result }] : [Styles.screenFirstNumber, { fontSize: 10, color: myColors.result }]}>{result?.toString()}</Text>;
    }
    if (firstNumber && firstNumber.length < 6) {
      return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
    }
    if (firstNumber === "") {
      return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
    }
    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
          {firstNumber}
        </Text>
      );
    }
    if (firstNumber.length > 7) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
          {firstNumber}
        </Text>
      );
    }
  };

  const getResult = () => {
    switch (operation) {
      case "+":
        clear();
        setResult(parseInt(secondNumber) + parseInt(firstNumber));
        break;
      case "-":
        clear();
        setResult(parseInt(secondNumber) - parseInt(firstNumber));
        break;
      case "*":
        clear();
        setResult(parseInt(secondNumber) * parseInt(firstNumber));
        break;
      case "/":
        clear();
        setResult(parseInt(secondNumber) / parseInt(firstNumber));
        break;
      default:
        clear();
        setResult(0);
        break;
    }
  };

  return (
    <View style={Styles.viewBottom}>
      <View
        style={{
          height: 120,
          width: "90%",
          justifyContent: "flex-end",
          alignSelf: "center",
        }}
      >
        <Text style={Styles.screenSecondNumber}>
          {secondNumber}
          <Text style={{ color: "purple", fontSize: 50, fontWeight: '500' }}>{operation}</Text>
        </Text>
        {firstNumberDisplay()}
      </View>

      <View style={Styles.row}>
        <Button title="7" onPress={() => handleNumberPress("7")} />
        <Button title="8" onPress={() => handleNumberPress("8")} />
        <Button title="9" onPress={() => handleNumberPress("9")} />
        <Button title="C" isGray onPress={clear} />
        <Button title="×" isBlue onPress={() => handleOperationPress("*")} />

        <Button title="sin" onPress={() => operationsin()} />
        <Button title="cos" onPress={() => operationcos()} />
        <Button title="tan" onPress={() => operationtan()} />
      </View>
      <View style={Styles.row}>
        <Button title="4" onPress={() => handleNumberPress("4")} />
        <Button title="5" onPress={() => handleNumberPress("5")} />
        <Button title="6" onPress={() => handleNumberPress("6")} />
        <Button title="+/-" isGray onPress={() => handleOperationPress("+/-")} />
        <Button title="-" isBlue onPress={() => handleOperationPress("-")} />

        <Button title="π" onPress={() => handleNumberPress("3.14")} />
        <Button title=" √" onPress={() => operationsqrt()} />
        <Button title="x^2" onPress={() => operationsquare()} />
      </View>
      <View style={Styles.row}>
        <Button title="1" onPress={() => handleNumberPress("1")} />
        <Button title="2" onPress={() => handleNumberPress("2")} />
        <Button title="3" onPress={() => handleNumberPress("3")} />
        <Button title="％" isGray onPress={() => handleOperationPress("％")} />
        <Button title="+" isBlue onPress={() => handleOperationPress("+")} />

        <Button title="x^3" onPress={() => handleNumberPressexpocube()} />
        <Button title="e" onPress={() => handleOperationexpo()} />
        <Button title="√3" onPress={() => operationsqrtcube()} />
      </View>
      <View style={Styles.row}>
        <Button title="." onPress={() => handleNumberPress(".")} />
        <Button title="0" onPress={() => handleNumberPress("0")} />
        <Button title="⌫" onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
        <Button title="÷" onPress={() => handleOperationPress("/")} />
        <Button title="=" isBlue onPress={() => getResult()} />

        <Button title="sinh" onPress={() => handleNumberPresssinh()} />
        <Button title="cosh" onPress={() => handleNumberPresscosh()} />
        <Button title="tanh" onPress={() => handleNumberPresstanh()} />
      </View>
    </View>
  );
}

