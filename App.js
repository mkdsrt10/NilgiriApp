/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  PixelRatio,
  ImageBackground
} from 'react-native';
import { Appbar, Badge, IconButton, Button, AppbarBottom } from 'material-bread';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import A from 'react-native-a'
import {NavigationContainer} from '@react-navigation/native'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const Tab = createBottomTabNavigator();
const Device = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
}
const styles = {
  appbar: {
    flexDirection: 'row',
    backgroundColor: 'blue', 
    alignItems: 'center', 
    paddingVertical: 0, 
    paddingHorizontal: 8,
    paddingBottom: 0,
    position: 'absolute',
    height: Device.height/10 
  }
}

class FrontImage extends Component{
  constructor(props) {
    super(props);
    this.state = { count: 1, uri: "https://images.shiksha.com/mediadata/images/1504610950phpzuhaTW.jpeg"};
  }
  update_pos() {
    var c = this.state.count + 1;
    var str = new String
    if(c > 4)
      c = 1;
    switch(c){
      case 1: str = "https://images.shiksha.com/mediadata/images/1504610950phpzuhaTW.jpeg";
              break;
      case 2: str = "https://i2.wp.com/nilbest.org/activity/wp-content/uploads/2018/07/Dream_Team.jpg?resize=700%2C300&ssl=1";
              break;
      case 3: str = "https://upload.wikimedia.org/wikipedia/en/a/a4/Indian_Institute_of_Technology_Delhi_logo.png";
              break;
      case 4: str = "https://c.ndtvimg.com/2019-09/j7m1g8r8_iit-delhi_625x300_28_September_19.jpg";     
              break ;                  
    }   
    this.setState({count: c, uri: str});
  }
  update_neg() {
    var c = this.state.count - 1;
    if(c < 1)
      c = 4;
    var str = new String  
    switch(c){
      case 1: str = "https://images.shiksha.com/mediadata/images/1504610950phpzuhaTW.jpeg";
              break;
      case 2: str = "https://i2.wp.com/nilbest.org/activity/wp-content/uploads/2018/07/Dream_Team.jpg?resize=700%2C300&ssl=1";
              break;
      case 3: str = "https://upload.wikimedia.org/wikipedia/en/a/a4/Indian_Institute_of_Technology_Delhi_logo.png";
              break;
      case 4: str = "https://c.ndtvimg.com/2019-09/j7m1g8r8_iit-delhi_625x300_28_September_19.jpg";     
              break ;                  
    }   
    this.setState({count: c, uri: str});
  }
  
    render(){
    return(
      <View style = {{height: Device.height/2.8, width: Device.width, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', top: Device.height/45, left: 0}}>
        <IconButton name = "chevron-left" size = {Device.height/24} onPress = {() => this.update_neg()}/>
        <Image source = {{uri: this.state.uri}} style = {{height: Device.height/2.7, width: Device.width/1.3}} borderBottomRightRadius = {Device.height/30} borderBottomLeftRadius = {Device.height/30} borderTopRightRadius = {Device.height/30} borderTopLeftRadius = {Device.height/30}/>
        <IconButton name = "chevron-right" size = {Device.height/24} onPress = {() => this.update_pos()}/>
      </View>  
    )
  }
}
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
class Announcement extends Component{
  constructor(props){
    super(props);
    this.state = {isOutline: true, name: 'alert-decagram-outline'}
  }
  componentDidMount(){
    setInterval(() => {
    if(this.state.isOutline)
      this.setState({isOutline: false, name: 'alert-decagram'})
    else 
      this.setState({isOutline: true, name: 'alert-decagram-outline'})}, 1000)
  }

  render(){
    return(
      <View style = {{alignItems: 'center', justifyContent: 'center'}}>
        <Icon name = {this.state.name} size = {Device.height/25}></Icon>
      </View>
    )
  }

}
function NilgiriHome(){
  return(
     <ImageBackground source = {{uri: "https://cdn57.androidauthority.net/wp-content/uploads/2019/05/OnePlus-7-Pro-wallpaper-1.jpg"}} style = {{height: '100%', width: '100%', flex: 1}}>
       <View style={{flex: 1, flexDirection: 'column', alignItems: "center"}}>
         <View style = {{left: -Device.width/2}}>
          <Appbar style = {styles.appbar} barType = {"prominent dense"}>
             <View style = {{flex: 1, backgroundColor: "blue", left: -Device.width/100}}>
               <IconButton name = 'list' color = 'white' size = {Device.height/23} onPress = {() => console.log('onPress!')}/>
             </View>
             <View style = {{flex: 8, backgroundColor: "blue", justifyContent: 'center', alignItems: 'center'}}>
               <Text style = {{justifyContent: 'center', alignItems: 'center', fontSize: Device.height/27, color: "white", fontFamily: "Exo-ExtraBold", left: -Device.width/48}}>NILGIRI HOSTEL</Text>  
             </View>
          </Appbar>
         </View>
         <View style = {{height: Device.height, width: Device.width, flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", position: 'absolute'}}>
           <FrontImage/>
           <View style = {{flexDirection: 'column', alignItems: 'stretch', padding: Device.height/60, top:-Device.height/25}}>
             <View style = {{width: Device.width/1.2, height: Device.height/23, backgroundColor: 'red', flexDirection: 'row', alignItems: 'center', borderRadius: Device.height/30}}>
               <Announcement/>
               <View style = {{flex: 8, alignItems: 'center', justifyContent: 'center', left: -Device.width/30}}>
                 <Text style = {{color: 'yellow', fontFamily: 'FontAwesome', fontSize: Device.height/28}}>ANNOUNCEMENTS</Text>
               </View>
              </View>
              <View style = {{backgroundColor: 'white',flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-evenly', width: Device.width/1.4, left: Device.width/16, height: Device.height/4.2, borderBottomLeftRadius: Device.height/33, borderBottomRightRadius: Device.height/33, borderRightWidth: Device.width/70, borderBottomWidth: Device.width/70, borderLeftWidth: Device.width/70, borderBottomColor: 'red', borderLeftColor: 'red', borderRightColor: 'red'}}>
                <A href = "" style = {{fontSize: Device.height/42, fontWeight: 'bold', padding: Device.width/80}}>Announcement 1</A>
                <A href = "" style = {{fontSize: Device.height/42, fontWeight: 'bold', padding: Device.width/80}}>Announcement 2</A>
                <A href = "" style = {{fontSize: Device.height/42, fontWeight: 'bold', padding: Device.width/80}}>Announcement 3</A>
                <A href = "" style = {{fontSize: Device.height/42, fontWeight: 'bold', padding: Device.width/80}}>...</A>
                <A href = "" style = {{fontSize: Device.height/42, fontWeight: 'bold', padding: Device.width/80}}>...</A>
              </View>
           </View> 
         </View>
        </View>
      </ImageBackground>  
    )
  }

export default function App() {
  return(
    <SafeAreaProvider>
    <NavigationContainer>
      <Tab.Navigator screenOptions = {({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if(route.name === 'Home'){
            iconName = focused ? 'home-city' : 'home-city-outline';}
            else if(route.name === 'Info'){
              iconName = focused ? 'information' : 'information-outline';
            } else if(route.name === 'Menu'){
              iconName = focused ? 'file-document' : 'file-document-outline';
            }
            return <Icon name = {iconName} size ={size} color = {color}/>
          } 
        }
      )} 
        tabBarOptions = {{
          activeBackgroundColor: 'blue',
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray'
        }}>
        <Tab.Screen name = "Home" component = {NilgiriHome} />
        <Tab.Screen name = "Menu" component = {SettingsScreen}/>
        <Tab.Screen name = "Info" component = {SettingsScreen}/>
      </Tab.Navigator>  
    </NavigationContainer>
    </SafeAreaProvider>
  )
}
