import { Dimensions, StyleSheet } from 'react-native';

const w = Dimensions.get('window').width;
export const imageCardStyles = StyleSheet.create({
  container: {
    width: w / 2.4,
    height: w * 0.63 + 90,
    paddingVertical: 20,
  },
  sub: {
    shadowColor: '#000',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
  },
  h1: {
    paddingVertical: 10,
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
  },
  cover: {
    width: w / 2.4,
    height: w * 0.63,
    borderRadius: 10,
  },
});
