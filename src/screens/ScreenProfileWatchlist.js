import React from 'react';
import PropTypes from 'prop-types';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { colors, fonts, gStyle } from '../constants';


import SvgBackground from '../assets/svg/Svg.Background';
const ScreenProfileWatchlist = ({ navigation }) => (
    <View style={gStyle.container}>
      <View style={gStyle.posAbsolute}>
        <SvgBackground />
      </View>
  
    
    </View>
  );
  
  ScreenProfileWatchlist.propTypes = {
    // required
    navigation: PropTypes.object.isRequired
  };
  
  export default ScreenProfileWatchlist;