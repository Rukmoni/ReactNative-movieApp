import React from "react";
import PropTypes from "prop-types";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import SvgBackground from "../../assets/svg/Svg.Background";
import SvgDisneyPlusLogo from "../../assets/svg/Svg.DisneyPlusLogo";
import { gStyle, device } from "../constants";
//components
import Categories from '../components/Categories';
import HorizontalScroller from '../components/HorizontalScroller';
import SlideShow from '../components/SlideShow'


export default function ScreenHome({ navigation }) {
  return (
    <View style={gStyle.container}>
      <View style={gStyle.posAbsolute}>
        <SvgBackground />
      </View>
      <ScrollView>
        <View style={styles.containerHeader}>
          <SvgDisneyPlusLogo />
        </View>
        <SlideShow/>
        <Categories />
        <Text style={gStyle.heading}>Recommended For You</Text>
      <HorizontalScroller dataset="recommended" />
      <Text style={gStyle.heading}>Trending</Text>
      <HorizontalScroller dataset="trending" />
      <Text style={gStyle.heading}>Ultra HD and HDR</Text>
      <HorizontalScroller dataset="hdr" />

      </ScrollView>
    </View>
  );
}

ScreenHome.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  containerHeader: {
    alignItems: "center",
    marginBottom: 8,
    paddingTop: device.iPhoneX ? 30 : 6,
  },
});
