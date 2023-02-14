import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Primary from './pages/Primary';
import Secondary from './pages/Secondary';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';

import reducers from './context/reducers';
import initialState from './context/store';

const Tab = createBottomTabNavigator();

const Router = () => {

  const store = createStore(reducers, initialState);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='PrimaryScreen' component={Primary} />
          <Tab.Screen name='SecondaryScreen' component={Secondary} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default Router;




