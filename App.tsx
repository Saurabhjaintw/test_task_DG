/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {MoviesList} from './src/screens';
import {Colors} from './src/theme';
import {moderateScale} from './src/utils';

export type StackParams = {
  MoviesList: String;
};

const Stack = createNativeStackNavigator<StackParams>();

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor={Colors.BLACK}
          barStyle={'light-content'}
        />
        <NavigationContainer>
          <Stack.Navigator initialRouteName={'MoviesList'}>
            <Stack.Screen
              name={'MoviesList'}
              component={MoviesList}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
  headerView: {
    justifyContent: 'space-between',
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: moderateScale(15),
  },
});

export default App;
