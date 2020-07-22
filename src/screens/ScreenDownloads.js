import React from 'react'
import { Text, View } from 'react-native';
import SvgBackground from "../../assets/svg/Svg.Background";
import { gStyle, device } from "../constants";

export default function ScreenDownloads(){
    return (
      <View style={gStyle.container}>
      <View style={gStyle.posAbsolute}>
        <SvgBackground />
      </View>
      </View>
      );

}