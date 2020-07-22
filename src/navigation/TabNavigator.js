import { createBottomTabNavigator } from 'react-navigation';
import { colors } from '../constants';
import {BottomTabBarOptions} from './defaultOptions'

// grabs stacks
import StackHome from './StackHome';
import StackSearch from './StackSearch';
import StackDownloads from './StackDownloads';
import StackProfile from './StackProfile';

export default createBottomTabNavigator(
  {
    StackHome,
    StackSearch,
    StackDownloads,
    StackProfile
  },
  {
    initialRouteName: 'StackHome',
    tabBarOptions: {BottomTabBarOptions   
    }
  }
);
