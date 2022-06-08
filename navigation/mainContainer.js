import * as React from 'react';
import { View , Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
{/* For Screen */}
import homeScreeen from './navigation/screens/homeScreeen';
import userSettingScreeen from './navigation/screens/userSettingScreen';
import finishScreeen from './navigation/screens/finishScreeen';


const homeName = 'Home';
const settingName = 'Setting';
const finishName = 'Finnish';

const tab = createBottomTabNavigator();

export default function mainContainer(){
    return (
        <NavigationContainer>
            <tab.Navigator initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color , size}) => {
                    let iconName;
                    let rn = route.name;
                    
                    if (rn === homeName){
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn === settingName){
                        iconName = focused ? 'setting' : 'setting-outline'
                    } else if (rn === finishName){
                        iconName = focused ? 'list' : 'list-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
            })}
            tabBarOption={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'grey',
                labelStyle: { paddingBottom: 10, fontSize:10} ,
                style: {padding: 10 , height: 70}
            }}
            >

            <tab.Screen name = {homeName} components={homeScreeen}/>
            <tab.Screen name = {finishName} components={finishScreeen}/>
            <tab.Screen name = {settingName} components={userSettingScreeen}/>


            </tab.Navigator>

        </NavigationContainer>
    )
}