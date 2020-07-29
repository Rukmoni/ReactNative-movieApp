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
import ModalAddProfile from '../../screens/ModalAddProfile';
import ModalEditProfile from '../../screens/ModalEditProfile';

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
const ProfileStack = createStackNavigator();
const ModelStack=createStackNavigator();
function ProfileScreenStack(){
  return(
    <ProfileStack.Navigator
    screenOptions={{
      headerShown: false
      
    }}>
    <ProfileStack.Screen name="Profile" component={ScreenProfile}/>
    <ProfileStack.Screen name="ProfileAppSettings" component={ScreenProfileSettings}/>
    <ProfileStack.Screen name="ProfileWatchlist" component={ScreenProfileWatchlist}/>

    </ProfileStack.Navigator>
  )
}
function ModelsScreenStack(){
  <ModelStack.Navigator>
    <ModelStack.Screen name="AddProfile" component={ModalAddProfile}/>
    <ModelStack.Screen name="EditProfile" component={ModalEditProfile}/>
  </ModelStack.Navigator>
}
function StackProfile(){
  return(
    
  <Stack.Navigator mode="modal"
  screenOptions={{
    headerShown: false
    
  }}>
    <Stack.Screen name="Profile" component={ProfileScreenStack}/>
    <Stack.Screen name="AddProfile" component={ModalAddProfile}/>
    <Stack.Screen name="EditProfile" component={ModalEditProfile}/>
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
