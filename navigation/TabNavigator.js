
import React from 'react';
import { StyleSheet, TabBarIOS, Text, View } from 'react-native';
import { NavigationContainer}  from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feed from './screens/Feed.js'
import CreateStory from './screens/CreateStory.js';

const Tab=createBottomTabNavigator();

const BottomTabNavigator=()=>{
  return (
 
<Tab.Navigator
screenOptions={({route})=>({
  tabBarIcon:({focused,color,size})=>{
    let iconName;
    if(route.name==='Feed'){
      iconName=focused?'book':'book-outline'

    } else if(routeName==='CreateStory'){
      iconName=focused?'create':'create-outline'

    }
    return<Ionicons  name={iconName}size={size} color={color}/>   
  },

})}
tabBarOptions={{
  activeTintColor:'Tomato',
  inactiveTintColor:'grey'
}}>
  <Tab.screen name="Feed" component={Feed}/>
  <Tab.screen name="CreateStory" component={CreateStory}/>
</Tab.Navigator>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default BottomTabNavigator
