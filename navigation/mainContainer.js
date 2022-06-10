import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

{/* For Screen */}
import homeS from './screens/homeScreen';
import finishScreen from './screens/finishScreen';
import userSettingScreen from './screens/userSettingScreen';



const homeName = 'home';
const settingName = 'setting';
const finishName = 'finnish';

const tab = createBottomTabNavigator();

function mainContainer(){
    return (
        <NavigationContainer>
            <tab.Navigator 
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color , size}) => {
                    let iconName;
                    let rn = route.name;
                    
                    if (rn === homeName){
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn === settingName){
                        iconName = focused ? 'settings' : 'settings-outline';
                    } else if (rn === finishName){
                        iconName = focused ? 'list' : 'list-outline';
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

            <tab.Screen name = {homeName} components={homeS}/>
            <tab.Screen name = {finishName} components={finishScreen}/>
            <tab.Screen name = {settingName} components={userSettingScreen}/>

 
            </tab.Navigator>

        </NavigationContainer>
    );
}

export default mainContainer;