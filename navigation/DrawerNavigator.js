import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator"
import Profile from "../screens/profile"

const Drawer=createDrawerNavigator();

const DrawerNavigator=()=>{
    return(
        <Drawer.Navigator>
            <Drawer.screen name="Home" component={tabNavigator}/>
            <Drawer.screen name="Profile" component={Profile}/>
        </Drawer.Navigator>
    )
}
export default DrawerNavigator