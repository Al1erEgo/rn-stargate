import { StackHeaderProps } from '@react-navigation/stack';
import { ReactElement } from 'react';
import { Pressable, Text, View } from 'react-native';
import { headerStyles as styles } from './styles';

type Props = StackHeaderProps;

export function Header({ options, route, navigation }: Props): ReactElement {
  console.log(options);

  return (
    <View style={styles.viewStyle}>
      <Pressable onPress={() => navigation.goBack()}>
        <Text>&lt;</Text>
      </Pressable>
      <Text style={styles.textStyle}>{options.title}</Text>
    </View>
  );
}
