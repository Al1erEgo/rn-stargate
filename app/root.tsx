import { ReactElement } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { App } from '@app/App';

export default function Root(): ReactElement {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
}
