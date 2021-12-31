import 'react-native-gesture-handler';
import React from 'react';
import AppNavContainer from './src/navigations';
import GlobalProvider from './src/context/Provider';

// ROOT
/**
 * navigation ? (React.useNavigation())
 * global state ? (context/redux)
 */
const App = () => {
  return (
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>
  );
};

export default App;
