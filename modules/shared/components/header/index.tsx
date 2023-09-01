import { ReactElement } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { headerStyles as styles } from './styles';

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
