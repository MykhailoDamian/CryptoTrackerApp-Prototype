import React, { useRef } from 'react';
import { Image, Dimensions, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import DashboardScreen from './components/DashboardScreen';
import PortfolioScreen from './components/PortfolioScreen';
import DetailsScreen from './components/DetailsScreen';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

const App = () => {
  const tabPosition = useSharedValue(0);
  const screenWidth = Dimensions.get('window').width;
  const tabWidth = screenWidth / 3;

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: 50,
      height: 50,
      backgroundColor: '#0057FF',
      borderRadius: 25,
      position: 'absolute',
      bottom: 23, // Adjust this value as needed
      left: withTiming(tabPosition.value * tabWidth + tabWidth / 2 - 25, {
        duration: 250,
      }),
    };
  });

  const navigationRef = useRef();

  const navigate = (name, index) => {
    navigationRef.current?.navigate(name);
    tabPosition.value = withTiming(index, { duration: 5 });
  };

  const CustomTabBar = (props) => {
  // ... other code ...

  return (
    <View style={{ position: 'absolute', width: '100%', bottom: 0, alignItems: 'center', backgroundColor: '#0E0F18', height: 80 }}>
      {/* BottomTabBar should be at the bottom */}
      <BottomTabBar {...props} style={{ height: 60, width: '100%', bottom: 0, zIndex: 0 }} />
      
      {/* Animated circle view */}
      <Animated.View style={[animatedStyle, { zIndex: 1 }]} />
      
      {/* Icons container */}
      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around', position: 'absolute', zIndex: 2, marginTop: 20 }}>
        {props.state.routes.map((route, index) => {
          const isFocused = props.state.index === index;

          const onPress = () => {
            if (route.name === 'Portfolio' && isFocused) {
              // Perform a different action instead of navigation
              // For example, open a modal or change the state
            } else {
              const event = props.navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigate(route.name, index);
              }
            }
          };

          // Conditionally render the icon
          const iconSource = route.name === 'Portfolio' && isFocused
            ? require('./assets/plus_icon.png') // Active portfolio icon
            : getIconSource(route.name);

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={props.descriptors[route.key].options.tabBarAccessibilityLabel}
              testID={props.descriptors[route.key].options.tabBarTestID}
              onPress={onPress}
              style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            >
              <Image
                source={iconSource}
                style={{
                  width: isFocused ? 26 : 22,
                  height: isFocused ? 26 : 22,
                  tintColor: isFocused ? '#FFFFFF' : '#A9A9A9',
                }}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};





  const getIconSource = (name) => {
    switch (name) {
      case 'Dashboard':
        return require('./assets/dashboard.png');
      case 'Portfolio':
        return require('./assets/portfolio.png');
      case 'Details':
        return require('./assets/details.png');
    }
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#0E0F18',
            borderTopWidth: 0,
          },
          tabBarLabelStyle: {
            display: 'none',
          },
          tabBarIconStyle: {
            display: 'none', // Hide the default icons
          },
          headerShown: false,
        }}
        tabBar={(props) => <CustomTabBar {...props} />}
      >
        <Tab.Screen
          name="Dashboard"
          component={DashboardScreen}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              navigate('Dashboard', 0);
            },
          }}
        />
        <Tab.Screen
          name="Portfolio"
          component={PortfolioScreen}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              navigate('Portfolio', 1);
            },
          }}
        />
        <Tab.Screen
          name="Details"
          component={DetailsScreen}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              navigate('Details', 2);
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
