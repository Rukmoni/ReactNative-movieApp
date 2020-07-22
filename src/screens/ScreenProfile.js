import React from 'react';
import PropTypes from 'prop-types';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { colors, fonts, gStyle } from '../constants';

// components
import HeaderAccounts from '../components/HorizontalScroller';
import TouchLineItem from '../components/TouchLineItem';

// icons
import SvgBackground from '../assets/svg/Svg.Background';

const alertSignOut = () => {
  Alert.alert(
    'Sign Out',
    'Are you sure that you want to sign out?',
    [{ text: 'No' }, { text: 'Yes' }],
    { cancelable: false }
  );
};

const ScreenProfile = ({ navigation }) => (
  <View style={gStyle.container}>
    <View style={gStyle.posAbsolute}>
      <SvgBackground />
    </View>

    <HeaderAccounts />

    <ScrollView>
      <TouchLineItem
        onPress={() => navigation.navigate('ProfileWatchlist')}
        text="Watchlist"
      />
      <TouchLineItem
        onPress={() => navigation.navigate('ProfileAppSettings')}
        text="App Settings"
      />
      <TouchLineItem onPress={() => null} text="Account" />
      <TouchLineItem onPress={() => null} text="Legal" />
      <TouchLineItem onPress={() => null} text="Help" />
      <TouchLineItem onPress={() => alertSignOut()} text="Log Out" />

      <Text style={styles.versionText}>
        {`Version: ${Constants.manifest.version}`}
      </Text>
    </ScrollView>
  </View>
);

ScreenProfile.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  versionText: {
    color: colors.inactiveGrey,
    fontFamily: fonts.regular,
    fontSize: 18,
    marginLeft: 16,
    paddingVertical: 16
  }
});

export default ScreenProfile;
