import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { colors, images } from '../../constants';

//import navigationOptions from '../defaultOptions';

// screens
import ScreenProfile from '../../screens/ScreenProfile';
import ScreenProfileSettings from '../../screens/ScreenProfileSettings';
import ScreenProfileWatchlist from '../../screens/ScreenProfileWatchlist';

/* const Icon = ({ focused }) => {
  const borderColor = focused ? { borderColor: colors.white } : {};

  return (
    <View style={[styles.containerProfile, borderColor]}>
      <Image source={images.stormtrooper} style={styles.avatar} />
    </View>
  );
};

Icon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
}; */
const Stack = createStackNavigator();
function StackProfile(){
  return(
    
  <Stack.Navigator
  screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen name="Profile" component={ScreenProfile}/>
    <Stack.Screen name="ProfileAppSettings" component={ScreenProfileSettings}/>
    <Stack.Screen name="ProfileWatchlist" component={ScreenProfileWatchlist}/>
  </Stack.Navigator>

  )

  };
export default StackProfile;
const styles = StyleSheet.create({
  containerProfile: {
    alignItems: 'center',
    borderColor: 'transparent',
    borderRadius: 20,
    borderWidth: 2,
    height: 40,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 40
  },
  avatar: {
    height: '100%',
    resizeMode: 'contain',
    width: '100%'
  }
});
