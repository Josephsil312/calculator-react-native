import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
  },

  calcContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },

  result: {
    color: 'white',
    fontSize: 50,
    textAlign: 'right',
    marginBottom: 5,
    position: 'relative',
    left: 8,
    top: 15
  },

  smallResult: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 30,
    textAlign: 'right',
    position: 'relative',
    top: 30
  },

  row: {
    flexDirection: 'row',
    paddingHorizontal: 1,
    position: 'relative',
    left: 17
  },

  btn: {
    height: 30,
    width: 40,
    borderRadius: 40,
    marginVertical: 10,
    justifyContent: 'center',
  },
  
  btnText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
});