import { ReactElement } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { App } from './App';

export default function Root(): ReactElement {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
}
