import {useRef, useState} from 'react';

enum Operators {
  divide,
  add,
  subtract,
  multiply,
  sin
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [numberBefore, setNumberBefore] = useState('0');
  const lastOperationRef = useRef<Operators>();

  const clean = () => {
    setNumber('0');
    setNumberBefore('0');
  };

  const buildNumber = (numberText: string) => {
    
    if (number.includes('.') && numberText === '.') {
      return;
    }

    if (number.includes('-0') || number.includes('0')) {
     
      if (numberText === '.') {
        setNumber(number + numberText);
     
      } else if (numberText === '0' && number.includes('.')) {
        setNumber(number + numberText);
   
      } else if (numberText !== '0' && !number.includes('.')) {
        setNumber(numberText);
   
      } else if (numberText === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + numberText);
      }
    } else {
      setNumber(number + numberText);
    }
  };

  const positiveNegative = () => {
    number.includes('-')
      ? setNumber(number.replace('-', ''))
      : setNumber('-' + number);
  };

  const deleteLastNumber = () => {
    let negative = '';
    let numberTemp = number;
    if (number.includes('-')) {
      negative = '-';
      numberTemp = number.substring(1);
    }

    if (numberTemp.length > 1) {
      setNumber(negative + numberTemp.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const changeNumbWithLastNumber = () => {
    if (number.endsWith('.')) {
      setNumberBefore(number.slice(0, -1));
    } else {
      setNumberBefore(number);
    }
    setNumber('0');
  };

  const btnDivide = () => {
    changeNumbWithLastNumber();
    lastOperationRef.current = Operators.divide;
  };

  const btnMultiply = () => {
    changeNumbWithLastNumber();
    lastOperationRef.current = Operators.multiply;
  };

  const btnSubtract = () => {
    changeNumbWithLastNumber();
    lastOperationRef.current = Operators.subtract;
  };

  const btnAdd = () => {
    changeNumbWithLastNumber();
    lastOperationRef.current = Operators.add;
  };

  const btnSin = () => {
    changeNumbWithLastNumber();
    lastOperationRef.current = Operators.sin;
    setNumber((Math.sin(Number(number))).toFixed(2))

  }

  const btnCos = () => {
    changeNumbWithLastNumber();
    lastOperationRef.current = Operators.sin;
    setNumber((Math.cos(Number(number))).toFixed(2))
  }

  const btnTan = () => {
    changeNumbWithLastNumber();
    lastOperationRef.current = Operators.sin;
    setNumber((Math.tan(Number(number))).toFixed(2))
  }

  const btnSinh = () => {
    changeNumbWithLastNumber();
    lastOperationRef.current = Operators.sin;
    setNumber((Math.sinh(Number(number))).toFixed(2))
  }

  const btnCosh = () => {
    changeNumbWithLastNumber();
    lastOperationRef.current = Operators.sin;
    setNumber((Math.cosh(Number(number))).toFixed(2))
  }

  const btnTanh = () => {
    changeNumbWithLastNumber();
    lastOperationRef.current = Operators.sin;
    setNumber((Math.tanh(Number(number))).toFixed(2))
  }

  const btnSqrt = () => {
    changeNumbWithLastNumber();
    lastOperationRef.current = Operators.sin;
    setNumber((Math.sqrt(Number(number))).toFixed(2))
  }

  const btncSqrt = () => {
    changeNumbWithLastNumber();
    lastOperationRef.current = Operators.sin;
    setNumber((Math.cbrt(Number(number))).toFixed(2))
  }

  const btnE = () => {
    changeNumbWithLastNumber();
    lastOperationRef.current = Operators.sin;
    setNumber((Math.exp(Number(number))).toFixed(2))
  }
  
  const btnResult = () => {
    const numberFirst = Number(number);
    const numberSecond = Number(numberBefore);

    switch (lastOperationRef.current) {
      case Operators.add:
        setNumber(`${numberFirst + numberSecond}`);
        break;
      case Operators.subtract:
        setNumber(`${numberSecond - numberFirst}`);
        break;
      case Operators.multiply:
        setNumber(`${numberFirst * numberSecond}`);
        break;
      case Operators.divide:
        setNumber(`${numberSecond / numberFirst}`);
        break;
     
    }
    setNumberBefore('0');
  }; 

  return {
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
  };
};