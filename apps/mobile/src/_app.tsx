import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { TRPCProvider } from './utils/trpc';
import { ChatScreen } from './screens/chat/chat';
import { HomeScreen } from './screens/home/home';

// Rest of the import statements

export const App = () => {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('../src/fonts/Roboto-Regular.ttf'),
    PPNeueBit: require('../src/fonts/PPNeueBit-Regular.otf'),
    'neubit-bold': require('../src/fonts/PPNeueBit-Bold.otf'),
    PPNeueBitBold: require('../src/fonts/PPNeueBit-Bold.otf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    // <TRPCProvider>
    <SafeAreaProvider>
      <GestureHandlerRootView>
        {/* <OverlayProvider> */}
        {/* <Text>it works</Text> */}
        {/* <HomeScreen /> */}
        <ChatScreen />
        {/* <StatusBar /> */}
        {/* </OverlayProvider> */}
      </GestureHandlerRootView>
    </SafeAreaProvider>
    // </TRPCProvider>
  );
};
