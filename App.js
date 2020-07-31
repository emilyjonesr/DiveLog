import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, useState, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Map from './components/Screens/Map';
import Search from './components/Screens/Search';
import LogBook from './components/Screens/LogBook';
import Profile from './components/Screens/Profile';
import SignIn from './components/Screens/SignIn';
import SignUp from './components/Screens/SignUp';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Provider } from 'mobx-react';
import AppStore from './components/Screens/store';
import AsyncStorage from '@react-native-community/async-storage';
import { AuthContext } from './context';

Icon.loadFont();

if(!window.store){
  const store = window.store = new AppStore()
}

const App = () => {
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch(action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);
  
  const authContext = React.useMemo(() => ({
      signIn: async(userName, password) => {
        let userToken;
        userToken = null;
        //for some reason, userName and password are sent as objects, hence the hacky comparison
        if((JSON.stringify(userName) == "{\"username\":\"user\"}") && (JSON.stringify(password) == "{\"password\":\"pass\"}")) 
        {
          try {
            userToken = 'kbjhasf';
            await AsyncStorage.setItem('userToken', userToken);
          } catch (e) {
            console.log(e);
          }
        }
        else 
        {
            alert('Incorrect usernsame or password');
        }
        dispatch({ type: 'LOGIN', id: userName, token: userToken});
      },
      signOut: async() => {
        try {
          await AsyncStorage.removeItem('userToken'); 
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: 'LOGOUT'});
      },
      signUp: () => {
        setUserToken('hwejk');
        setIsLoading(false);
      }
  }), []);

    return (
      <>
      <AuthContext.Provider value={authContext}>
      <Provider store={store}>
        <SafeAreaView style={{ flex: 0, backgroundColor: '#151F2A' }} />
        <StatusBar backgroundColor= '#10161D' />
          <NavigationContainer>
            {loginState.userToken !== null ? (
              <TabsNav/>
            ) : (
              <StackNav/>
            )}
          </NavigationContainer>
        <SafeAreaView style={{ flex: 0, backgroundColor: '#151F2A' }} />
      </Provider>
      </AuthContext.Provider>
      </>
    );
}

const Tab = createBottomTabNavigator();
const TabsNav = () => {
  return(
    <Tab.Navigator 
      tabBarOptions={{
        activeBackgroundColor: '#151F2A',
        inactiveBackgroundColor: '#151F2A',
        activeTintColor: '#39A3F4',
        inactiveTintColor: '#555555',
        showLabel: false,
      }}
    >
      <Tab.Screen 
        options={{
          tabBarIcon: ({color}) => <Icon name='map-marker' size={30} color={color} />
        }}
        name='Map' 
        component={Map}
      />
      <Tab.Screen 
        options={{
          tabBarIcon: ({color}) => <Icon name='search' size={30} color={color} />
        }}
        name='Search' 
        component={Search}
      />
      <Tab.Screen 
        options={{
          tabBarIcon: ({color}) => <Icon name='book' size={30} color={color} />
        }}
        name='Log Book"'
        component={LogBook}
      />
      <Tab.Screen 
        options={{
          tabBarIcon: ({color}) => <Icon name='user' size={30} color={color} />
        }}
        name='Profile'
        component={Profile}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name= 'SignIn' component={SignIn} options={{headerShown: false}}/>
      <Stack.Screen name= 'SignUp' component={SignUp} />
    </Stack.Navigator>
  );
}

export default App;