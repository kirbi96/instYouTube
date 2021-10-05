import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {AppStack} from "./stack/AppStack";

export const Navigator = () =>{
    return(
        <NavigationContainer>
            <AppStack/>
        </NavigationContainer>
    )
}
