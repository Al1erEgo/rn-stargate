import { ReactElement } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function App(): ReactElement {
  return (
    <SafeAreaView>
      <Text>123</Text>
    </SafeAreaView>
  );
}
