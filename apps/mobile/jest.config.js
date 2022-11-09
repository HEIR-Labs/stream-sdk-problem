const stringToBoolean = (val) => {
  if (val == null) {
    return false;
  }

  if (typeof val !== 'string') {
    throw new Error(
      `Cannot parse value "${val}" (expected a string but received a ${typeof val})`
    );
  }

  switch (val.trim().toLowerCase()) {
    case '1':
    case 'true':
      return true;
    case '0':
    case 'false':
      return false;
  }

  throw new Error(`Could not parse unexpected value "${val}" as a boolean`);
};
/**
/**
 * Jest configuration for unit tests.
 *
 * Coverage reporting is enabled by default. Disable it by setting `COVERAGE=false`.
 */
module.exports = {
  clearMocks: true,
  preset: 'jest-expo',
  modulePathIgnorePatterns: ['./src/.*/__mocks__/*'],
  setupFilesAfterEnv: ['./test-utils/jest-setup-after-env.ts'],
  testMatch: ['**/?(*.)test.!(*.){js,jsx,ts,tsx}'],
  // https://jestjs.io/docs/en/tutorial-react-native#transformignorepatterns-customization
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
  /**
   * Jest's require algorithm adds .json to the list of extensions it can import, and it prioritizes .json over .tsx
   * We want to do it to avoid to import app.json instead App.tsx, for example, what was happening on the file App.test.tsx when ran jest tests.
   */
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
