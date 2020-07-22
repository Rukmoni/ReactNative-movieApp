import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenHome from '../screens/ScreenHome';
import ScreenDownloads from '../screens/ScreenDownloads';
import ScreenProfile from '../screens/ScreenProfile';
import StackProfile from './stacks/StackProfile';
import  colors  from '../constants/colors';
import { Entypo,Feather,MaterialCommunityIcons} from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export default function RootNavigator(){
    return(
        <NavigationContainer>
        <Tab.Navigator
        tabBarOptions={{
            activeTintColor: colors.white,
            inactiveTintColor: colors.inactiveGrey,
            showLabel:false,
            style: {
                backgroundColor: colors.tabBackground,
                borderTopWidth: 0
              }
          }}>
           <Tab.Screen name="Home" component={ScreenHome} 
           options={{
               tabBarIcon:({color,size})=>(
                <Entypo name="home" size={24} color="white" />
               )}}/>
             <Tab.Screen name="Search" component={ScreenDownloads} options={{
               tabBarIcon:({color,size})=>(
                <Feather name="search" size={24} color="white" />
               )}}/>
             <Tab.Screen name="Downloads" component={ScreenHome} options={{
               tabBarIcon:({color,size})=>(
                <MaterialCommunityIcons name="download" size={24} color="white" />
               )}}/>
             <Tab.Screen name="Profile" component={StackProfile} options={{
               tabBarIcon:({color,size})=>(
                <MaterialCommunityIcons name="face-profile" size={24} color="white" />
               )}}/>
        </Tab.Navigator>
        </NavigationContainer>
    )
}