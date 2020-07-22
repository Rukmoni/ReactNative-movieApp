import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { colors, device, fonts } from '../constants';

import SvgArrowLeft from '../assets/svg/Svg.ArrowLeft';

const Header = ({ close, closeText, navigation, showBack, title }) => (
  <View style={styles.container}>
    {showBack && (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.goBack(null)}
        style={styles.back}
      >
        <SvgArrowLeft />
      </TouchableOpacity>
    )}

    {title && (
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{title}</Text>
      </View>
    )}

    {showBack && !close && <View style={{ flex: 1 }} />}

    {close && (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.goBack(null)}
        style={styles.close}
      >
        <Text style={styles.closeText}>{closeText}</Text>
      </TouchableOpacity>
    )}
  </View>
);

Header.defaultProps = {
  close: false,
  closeText: 'Cancel',
  showBack: false,
  title: null
};

Header.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,

  // optional
  close: PropTypes.bool,
  closeText: PropTypes.string,
  showBack: PropTypes.bool,
  title: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 4,
    paddingHorizontal: 16,
    paddingTop: device.iPhoneX ? 54 : 30
  },
  back: {
    alignSelf: 'center',
    flex: 1
  },
  containerTitle: {
    flex: 4,
    height: 35,
    justifyContent: 'flex-end'
  },
  title: {
    color: colors.white,
    fontSize: 18,
    paddingBottom: 4,
    textAlign: 'center'
  },
  close: {
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'center',
    height: 35
  },
  closeText: {
    color: colors.white,
    fontFamily: fonts.light,
    fontSize: 16
  }
});

export default Header;
