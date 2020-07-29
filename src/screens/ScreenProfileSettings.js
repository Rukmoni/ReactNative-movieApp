import React from 'react';
import PropTypes from 'prop-types';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { colors, fonts, gStyle } from '../constants';

import Header from '../components/Header';
import TouchLineItemApp from '../components/TouchLineItemApp';
import TouchLineItemElement from '../components/TouchLineItemElement';

import SvgBackground from '../assets/svg/Svg.Background';
import SvgTrash from '../assets/svg/Svg.Trash';
const ScreenProfileSettings = ({ navigation }) => { 
  const { platform } = Constants;
  let deviceType = 'Unknown Device';

  // is iOS?
  if (typeof platform.ios !== 'undefined') {
    deviceType = platform.ios.model;
  }

return(
    <View style={gStyle.container}>
      <View style={gStyle.posAbsolute}>
        <SvgBackground />
      </View>
      <ScrollView>
      <Header showBack title="App Settings" navigation={navigation} />
      <View style={styles.containerHeading}>
          <Text style={styles.heading}>Video Playback</Text>
        </View>

        <TouchLineItemApp
          onPress={() => null}
          tagline="Automatic"
          text="Cellular Data Usage"
        />

        <View style={styles.containerHeading}>
          <Text style={styles.heading}>Downloads</Text>
        </View>

        <TouchLineItemApp
          onPress={() => null}
          tagline="Standard"
          text="Video Quality"
        />

        <TouchLineItemElement
          onPress={() => alertDeleteDownloads()}
          element={<SvgTrash size={20} />}
          text="Delete All Downloads"
        />

        <View style={styles.containerDevice}>
          <Text style={styles.deviceText}>{deviceType}</Text>
          <View style={styles.containerStorage}>
            <View style={styles.storageUsed} />
            <View style={styles.storageDisneyPlus} />
          </View>
          <View style={styles.containerIndex}>
            <View style={styles.containerIndexBlock}>
              <View style={[styles.indexBlock, styles.used]} />
              <Text style={styles.deviceText}>Used</Text>
            </View>
            <View style={styles.containerIndexBlock}>
              <View style={[styles.indexBlock, styles.disneyPlus]} />
              <Text style={styles.deviceText}>Disney+</Text>
            </View>
            <View style={styles.containerIndexBlock}>
              <View style={[styles.indexBlock, styles.storage]} />
              <Text style={styles.deviceText}>Free</Text>
            </View>
          </View>
        </View>
      </ScrollView>
     
    </View>
  );
}
  
  ScreenProfileSettings.propTypes = {
    // required
    navigation: PropTypes.object.isRequired
  };

  const styles = StyleSheet.create({
    containerHeading: {
      borderBottomColor: colors.moreSectionBorder,
      borderBottomWidth: 1,
      paddingHorizontal: 8,
      paddingVertical: 16
    },
    heading: {
      color: colors.moreSectionText,
      fontFamily: fonts.light,
      fontSize: 16,
      textTransform: 'uppercase'
    },
    containerDevice: {
      borderBottomColor: colors.moreSectionBorder,
      borderBottomWidth: StyleSheet.hairlineWidth,
      marginHorizontal: 8,
      paddingVertical: 8
    },
    deviceText: {
      color: colors.white
    },
    containerStorage: {
      backgroundColor: colors.moreFree,
      flexDirection: 'row',
      height: 10,
      marginVertical: 8,
      width: '100%'
    },
    storageUsed: {
      backgroundColor: colors.moreUsed,
      height: '100%',
      width: '24%'
    },
    storageDisneyPlus: {
      backgroundColor: colors.storageBlue,
      height: '100%',
      width: '4%'
    },
    containerIndex: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    containerIndexBlock: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    indexBlock: {
      borderRadius: 3,
      height: 14,
      marginRight: 10,
      width: 14
    },
    storage: {
      backgroundColor: colors.moreFree
    },
    used: {
      backgroundColor: colors.moreUsed
    },
    disneyPlus: {
      backgroundColor: colors.storageBlue
    }
  });
  
  export default ScreenProfileSettings;