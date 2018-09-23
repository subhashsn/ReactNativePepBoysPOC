import React from 'react';
import {TabNavigator,createMaterialTopTabNavigator, createBottomTabNavigator} from 'react-navigation';

import First from './tabScreens/AutoParts'
import Second from './tabScreens/TopBrands'

export const Tab =  TabNavigator({
    First:{
        screen: First,
    },
    Second:{
        screen: Second,
    }
},
{
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#ff0000',
        activeBackgroundColor: 'orange',
        inactiveTintColor: '#000',
        showLabel: true,
		showIcon: false,
        labelStyle: {
            fontSize: 12,
            padding: 10
        },
        style: {
			backgroundColor: '#ffffff',
			borderBottomWidth: 3,
            borderBottomColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center'
        },
        indicatorStyle: {
            backgroundColor: 'yellow',
            borderBottomWidth: 3,
			borderBottomColor: 'yellow'
        },
        tabBarSelectedItemStyle: {
            borderBottomWidth: 6,
            borderBottomColor: 'blue',
          },
        
    }
}
)



