import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenHome from '../screens/ScreenHome';
import ScreenDownloads from '../screens/ScreenDownloads';
import ScreenSearch from '../screens/ScreenSearch';
import StackProfile from './stacks/StackProfile';
import  colors  from '../constants/colors';
import { Entypo,Feather,MaterialCommunityIcons} from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export default function RootNavigator(){
    return(
        <NavigationContainer>
        <Tab.Navigator
        tabBarOptions={{
            activeTintColor: colors.activeTintColor,
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
                <Entypo name="home" size={24} color={color} />
               )}}/>
             <Tab.Screen name="Search" component={ScreenSearch} options={{
               tabBarIcon:({color,size})=>(
                <Feather name="search" size={24} color={color} />
               )}}/>
             <Tab.Screen name="Downloads" component={ScreenDownloads} options={{
               tabBarIcon:({color,size})=>(
                <MaterialCommunityIcons name="download" size={24} color={color} />
               )}}/>
             <Tab.Screen name="Profile" component={StackProfile} options={{
               tabBarIcon:({color,size})=>(
                <MaterialCommunityIcons name="face-profile" size={24} color={color} />
               )}}/>
        </Tab.Navigator>
        </NavigationContainer>
    )
}