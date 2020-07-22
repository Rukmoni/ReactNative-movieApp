import React from 'react';
import PropTypes from 'prop-types';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { colors, fonts, gStyle } from '../constants';

import Header from '../components/Header';


import SvgBackground from '../assets/svg/Svg.Background';
const ScreenProfileSettings = ({ navigation }) => (
    <View style={gStyle.container}>
      <View style={gStyle.posAbsolute}>
        <SvgBackground />
      </View>
      <ScrollView>
      <Header showBack title="App Settings" navigation={navigation} />
      </ScrollView>
     
    </View>
  );
  
  ScreenProfileSettings.propTypes = {
    // required
    navigation: PropTypes.object.isRequired
  };
  
  export default ScreenProfileSettings;