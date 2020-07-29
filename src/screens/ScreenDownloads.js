import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts, gStyle } from '../constants';

// components
import Header from '../components/Header';


import SvgBackground from '../assets/svg/Svg.Background';;
import SvgDownloads from '../assets/svg/Svg.Downloads';

const ScreenDownloads = ({ navigation }) => (
  <View style={gStyle.container}>
    <View style={gStyle.posAbsolute}>
      <SvgBackground />
    </View>

    <Header title="Downloads" navigation={navigation}/>

    <View style={styles.containerContent}>
      <View style={styles.containerIcon}>
        <SvgDownloads fill={colors.profileBackground} size={48} />
      </View>

      <Text style={styles.heading}>You have no downloads</Text>

      <Text style={styles.description}>
        Movies and series you download will appear here.
      </Text>
    </View>
  </View>
);

ScreenDownloads.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  containerContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  containerIcon: {
    alignItems: 'center',
    borderColor: colors.profileBackground,
    borderRadius: 50,
    borderWidth: 2,
    height: 100,
    justifyContent: 'center',
    marginBottom: 32,
    marginTop: 48,
    width: 100
  },
  heading: {
    color: colors.white,
    fontFamily: fonts.medium,
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center',
    width: 300
  },
  description: {
    color: colors.heading,
    fontFamily: fonts.regular,
    fontSize: 16,
    marginBottom: 48,
    textAlign: 'center',
    width: 300
  }
});

export default ScreenDownloads;
