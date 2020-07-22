import { gStyle,colors } from '../constants';



export default () => ({
  headerStyle: gStyle.navHeaderStyle
});

export const BottomTabBarOptions=()=>({
  activeTintColor: colors.white,
      inactiveTintColor: colors.inactiveGrey,
      showLabel: false,
      style: {
        backgroundColor: '#ff0000',
        borderTopWidth: 0
      }

})
