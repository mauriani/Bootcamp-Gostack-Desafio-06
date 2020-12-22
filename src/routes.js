import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

// importações das pages
import Main from './pages/Main';
import User from './pages/User';
import Repository from './pages/Repository';

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#7159c1',
          },
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{title: 'Usuários'}}
        />
        <Stack.Screen
          name="User"
          component={User}
          options={({route}) => ({title: route.params.user.name})}
        />

        <Stack.Screen
          name="Repository"
          component={Repository}
          options={({route}) => ({title: route.params.user.name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
