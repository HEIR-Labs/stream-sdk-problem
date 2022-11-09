import '@testing-library/jest-native/extend-expect';
import { cleanup } from '@testing-library/react-native';

jest.mock('expo-constants', () => '');
jest.mock('expo-status-bar', () => '');
jest.mock('expo-modules-core', () => '');
jest.mock('expo-font', () => {
  return {
    useFonts: () => {
      return [{ fontsLoaded: true }];
    },
  };
});

afterEach(() => {
  cleanup();
});
