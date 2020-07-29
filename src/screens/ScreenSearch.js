import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, gStyle,device } from '../constants';

// components
import Header from '../components/Header';


import SvgBackground from '../assets/svg/Svg.Background';;


const ScreenSearch = ({ navigation }) => (
  <View style={gStyle.container}>
    <View style={gStyle.posAbsolute}>
      <SvgBackground />
    </View>

    <Header title="Search" navigation={navigation}/>


  </View>
);

ScreenSearch.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
    containerSearchBar: {
        ...gStyle.pH3,
        backgroundColor: colors.blackBg,
        paddingBottom: 16,
        paddingTop: device.iPhoneX ? 64 : 24
      },
      searchPlaceholder: {
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 6,
        flexDirection: 'row',
        paddingLeft: 16,
        paddingVertical: 16
      },
      searchPlaceholderText: {
        ...gStyle.textSpotify16,
        color: colors.blackBg
      },
      sectionHeading: {
        ...gStyle.textSpotifyBold18,
        color: colors.white,
        marginBottom: 24,
        marginLeft: 24,
        marginTop: 16
      },
      containerRow: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 24
      },
      containerColumn: {
        width: '50%'
      },
      iconRight: {
        alignItems: 'center',
        height: 28,
        justifyContent: 'center',
        position: 'absolute',
        right: 24,
        top: device.web ? 40 : 78,
        width: 28
      }
});

export default ScreenSearch;
