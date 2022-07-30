import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {Home, Scan, User} from '../screens';
import {COLORS, more, scan, user} from '../contants';
import Svg, {Path} from 'react-native-svg';
import {isIphoneX} from 'react-native-iphone-x-helper';

const Tab = createBottomTabNavigator();

const CustomTabBar = (props) => {
    if (isIphoneX()) {
        return (
            <View>
                <View
                    // style ={{
                    //     position: 'absolute',
                    //     bottom: 0,
                    //     left: 0,
                    //     right: 0,
                    //     height: 30,
                    //     backgroundColor: COLORS.white
                    // }}
                >
                    <BottomTabBar {...props.props} />
                </View>
            </View>
        )
    } else {
        return (
            <BottomTabBar {...props.props}/>
        )
    }
}

const TabBarCustomButon = ({accessibilityLabel, accessibilityState, children, onPress}) => {
  var isSelected = accessibilityState.selected;

  if (isSelected) {
      return (
        <View style ={{flex: 1, alignItems: 'center'}}>
          <View
            style ={{flexDirection: 'row', position: 'absolute', top: 0}}
          >
            <View style = {{flex: 1, backgroundColor: COLORS.white}}></View>
              <Svg
                width ={75}
                height ={61}
                viewBox ="0 0 75 61"
              >
                <Path
                    d= "M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                    fill={COLORS.white}
                />
              </Svg>
            <View style = {{flex: 1, backgroundColor: COLORS.white}}></View>
          </View>
          <TouchableOpacity
            style ={{
                top: -22.5,
                justifyContent: 'center',
                alignItems: 'center',
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: COLORS.primary,
                ...styles.shadow
            }}
            onPress = {onPress}
          >
            {children}
          </TouchableOpacity>
        </View>
      )
    } else {
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress ={onPress}
            style ={{flex: 1, justifyContent: 'center', alignItems: 'center', width: 50, height: 50, backgroundColor: COLORS.white}}
        >
            {children}
        </TouchableOpacity>
    )
  }
}
export const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="MainHome"
      tabBar={(props) => (
        <CustomTabBar props ={props} />
      )}
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'transparent',
          elevation: 0,
        },
      }}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarButton: props => (
          <TabBarCustomButon {...props} />
      ),
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? COLORS.white : COLORS.secondary;

          switch (route.name) {
            case 'MainHome':
              return (
                <Image
                  source={more}
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: tintColor,
                  }}
                />
              );
            case 'Scan':
              return (
                <Image
                  source={scan}
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: tintColor,
                  }}
                />
              );
            case 'User':
              return (
                <Image
                  source={user}
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: tintColor,
                  }}
                />
              );
          }
        },
      })}>
      <Tab.Screen name="MainHome" component={Home} />
      <Tab.Screen name="Scan" component={Scan} />
      <Tab.Screen name="User" component={User} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
