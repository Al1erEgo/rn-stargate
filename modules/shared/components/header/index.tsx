import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
import { headerStyles as styles } from './styles';
import { ReactElement } from 'react';

type Props = {
  title: string;
};

export function Header({ title }: Props): ReactElement {
  return (
    <SafeAreaView>
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{title}</Text>
      </View>
    </SafeAreaView>
  );
}
