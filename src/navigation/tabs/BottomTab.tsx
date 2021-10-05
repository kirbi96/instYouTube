import React from "react";
import {Screens} from "../screens/Screens";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {HomeScreen} from "../../screens/HomeScreen";
import {SearchScreen} from "../../screens/SearchScreen";
import {IconSvgBottomHome} from "../../assets/bottomtab/IconSvgBottomHome";
import {IconSvgBottomSearch} from "../../assets/bottomtab/IconSvgBottomSearch";
import {IconSvgBottomHomeActive} from "../../assets/bottomtab/IconSvgBottomHomeActive";

export const BottomTab = () =>{
    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
            <Tab.Screen
                name={Screens.HOME}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({focused}) =>{
                        return focused ? <IconSvgBottomHomeActive/> : <IconSvgBottomHome/>
                    }
                }}
            />
            <Tab.Screen
                name={Screens.SEARCH}
                component={SearchScreen}
                options={{
                    tabBarIcon: ({focused}) =>{
                        return <IconSvgBottomSearch/>
                    }
                }}
            />
            <Tab.Screen
                name={Screens.VIDEO}
                component={SearchScreen}
                options={{
                    tabBarIcon: ({focused}) =>{
                        return <IconSvgBottomSearch/>
                    }
                }}
            />

            <Tab.Screen
                name={Screens.NOTIFICATION}
                component={SearchScreen}
                options={{
                    tabBarIcon: ({focused}) =>{
                        return <IconSvgBottomSearch/>
                    }
                }}
            />

            <Tab.Screen
                name={Screens.PROFILE}
                component={SearchScreen}
                options={{
                    tabBarIcon: ({focused}) =>{
                        return <IconSvgBottomSearch/>
                    }
                }}
            />


        </Tab.Navigator>
    )
}
