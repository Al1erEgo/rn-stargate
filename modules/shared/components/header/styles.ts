import { StyleSheet } from 'react-native';

export const headerStyles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    backgroundColor: '#30d0fe',
    justifyContent: 'center',
    paddingLeft: 22,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    height: 90
  },
  textStyle: {
    color: '#fff',
    fontSize: 28
  }
});
