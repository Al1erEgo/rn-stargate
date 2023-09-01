import { StackHeaderProps } from '@react-navigation/stack';
import { ReactElement } from 'react';
import { Text, View } from 'react-native';
import { headerStyles as styles } from './styles';

type Props = StackHeaderProps;

export function Header({ options, route }: Props): ReactElement {
  console.log(options);

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{options.title}</Text>
    </View>
  );
}
