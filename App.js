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

var a1

async function main(){
const {GoogleSpreadsheet} = require('google-spreadsheet')
const doc = new GoogleSpreadsheet('1BtzptxQARvcTmY8M1OilCnciqD1JBEJkQ_--L5T1Ols')
await doc.useServiceAccountAuth({
    client_email: 'mydata@mydata-272704.iam.gserviceaccount.com',
    private_key: 'MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCviPqWCV7WNZnA\nhVJTVMvAemOj5Fo151VQ1nH21eUDxZOnkuCyzEPpT4FTvQtkUZPBt0Yu4RYHoUTs\nwan+sguwWRSiTN9eS5ISJy54YdBAKB3mq/Rrdm3LK1qqh5IMZLIVars28xFOCXor\nDa8z7h9Lnq/Cl8z2M/2juJy1HNn7g5t8UPlKeM7EYsvG7rucpuSudavpBMCTWYID\nvOMc/FBZC3V8qnXnRs0/wrGNohnUrM+jq4I/SVXufmWTZdnXaHwdkrgAzTrZWFR6\nwAVxgmxdCd9EybDQu7SeZqBwE3oeEtfc2OqRa9Ef5XJEGRoWC6CxbXFOganDbGzE\nMqBbPQf1AgMBAAECggEADtmaHCVQy53J6G/0UK5vdP96/HuDZ49ZjWGG+f3gcQWU\nV0Hla9rnXTk8/1Y9PNBrR/Z2+TJQ8yD2kXJU16znsOnoWqQBkEWjvDtqWAQrt7HC\neH2loOMU/hzTKnLBAqFmMMpQakv9SR/OIQ74T9QI+78XWXFkL+lNaj4NAS7JVi4J\nL32F7Ug9Xz2rEQ05ZUvt65HhusVCyaNI3FpEpIbYltqoLWIH0+7iqqv+4SGyEyrw\ngqePe5g4lxB8d8wO50YuqcxgA0DL1+c2Y7NScjQDiYc/RHep1FVRPZr0AAfhbW0y\nSCEZhdURk/xpZvIgJDTrC8KIqlosL6iqM6q32CFTZQKBgQDgqTChVw8XMBPlAr66\nHVAGQoY1ef8DRjeSfKGypoLAG92E1mnYns5PJHGWFrUWFPIrxuGo/hI2teBtCvPW\nmpVaG3iLbij7fDvuqZfRNxSWkvXK3RLUW8+m6pZSdflZ6R7LXIggLNXiY+EZ4vH6\noeJsnjdKQDc+MSMVC6UYPQh1twKBgQDIBXf5/0mE/1YDaB63ZWPtBSW/omX4NSpQ\n8He4g5yWlBzDGvgFMKSjKHn154gCPzZ57NKdf9cG3+optbeQPERGkB0zEdO1jOXO\nsihGMjhBXQrioM2UgOer3WQ3PryG3dtr0ZAcNw/zFmy5non13fjRS2SdMA0EAzfB\nz8//Y/sPswKBgQCpqJuE/A31YOVlSNFoE8LfN1XLBLpEar6E7YHfPEf5dBGxw4pj\ngGok8kylH7jZWDAaRzMbP+PZVTiKoH7MTikDx0MdaK+iW4uXDJQN9x6hJ5JfBNy3\nai5Cy12CIH2SHK6YvORACBvtv6e6uNwsfhxUEpeGh0Aww0LPHeArkcvVuQKBgBwN\n6E4AKGenCIFh0S0X43QTDMBcHsE5c732fFQ84XGdRIt49OCFehIIU1LSLpliFFn1\nhXThwV8NeOJwwlZQnaLoA7BuB6unH3RmOI/f61P/oM84jp0Nl3DblHrLKdYgt+3f\nbr8GWg5WTtmaCu+ZOpTgZjRF0Q2HBgMBCsNfWo9RAoGBAJVSDI6p9pMUwP37Vt89\nLD/A3YWCdbfPThPgHqFaBCUZ5Ay1pFZh3KZ8dn9RSPrMAWCedySlsf6Il9W7QDNG\nss0DsX9RFwpDQaaScrD9Wt7EkTGs57L1g+gj9gxx/WF652W68NUFzkBzhupspICO\n0aNfAtuaskfmDbRYy2R59/wk'
  })
await doc.loadInfo()
const sheet = doc.sheetsById['1BtzptxQARvcTmY8M1OilCnciqD1JBEJkQ_--L5T1Ols']
await sheet.loadCells('A1:B2')
const cellA1 = sheet.getCell(0,0)
const cellB2 = sheet.getCellByA1('B2')
a1 = cellB2.value
}

const Tab = createBottomTabNavigator();
const Device = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
}
const styles = {
  appbar: {
    flexDirection: 'row', 
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
    this.state = { count: 1, uri: "https://images.shiksha.com/mediadata/images/1504610950phpzuhaTW.jpeg", icon1: 'checkbox-blank-circle', icon2: 'checkbox-blank-circle-outline', icon3: 'checkbox-blank-circle-outline', icon4: 'checkbox-blank-circle-outline'};
  }
  update_pos() {
    var c = this.state.count + 1;
    var str = new String
    var i = new String
    if(c > 4)
      c = 1;
    switch(c){
      case 1: str = "https://images.shiksha.com/mediadata/images/1504610950phpzuhaTW.jpeg";
              this.setState({count: c, uri: str, icon1: 'checkbox-blank-circle', icon2: 'checkbox-blank-circle-outline', icon3: 'checkbox-blank-circle-outline', icon4: 'checkbox-blank-circle-outline'})
              break;
      case 2: str = "https://i2.wp.com/nilbest.org/activity/wp-content/uploads/2018/07/Dream_Team.jpg?resize=700%2C300&ssl=1";
              this.setState({count: c, uri: str, icon1: 'checkbox-blank-circle-outline', icon2: 'checkbox-blank-circle', icon3: 'checkbox-blank-circle-outline', icon4: 'checkbox-blank-circle-outline'})
              break;
      case 3: str = "https://upload.wikimedia.org/wikipedia/en/a/a4/Indian_Institute_of_Technology_Delhi_logo.png";
              this.setState({count: c, uri: str, icon1: 'checkbox-blank-circle-outline', icon2: 'checkbox-blank-circle-outline', icon3: 'checkbox-blank-circle', icon4: 'checkbox-blank-circle-outline'})
              break;
      case 4: str = "https://c.ndtvimg.com/2019-09/j7m1g8r8_iit-delhi_625x300_28_September_19.jpg";     
              this.setState({count: c, uri: str, icon1: 'checkbox-blank-circle-outline', icon2: 'checkbox-blank-circle-outline', icon3: 'checkbox-blank-circle-outline', icon4: 'checkbox-blank-circle'})
              break ;                  
    }   
  }
  update_neg() {
    var c = this.state.count - 1;
    if(c < 1)
      c = 4;
    var str = new String  
    switch(c){
      case 1: str = "https://images.shiksha.com/mediadata/images/1504610950phpzuhaTW.jpeg";
              this.setState({count: c, uri: str, icon1: 'checkbox-blank-circle', icon2: 'checkbox-blank-circle-outline', icon3: 'checkbox-blank-circle-outline', icon4: 'checkbox-blank-circle-outline'})
              break;
      case 2: str = "https://i2.wp.com/nilbest.org/activity/wp-content/uploads/2018/07/Dream_Team.jpg?resize=700%2C300&ssl=1";
              this.setState({count: c, uri: str, icon1: 'checkbox-blank-circle-outline', icon2: 'checkbox-blank-circle', icon3: 'checkbox-blank-circle-outline', icon4: 'checkbox-blank-circle-outline'})
              break;
      case 3: str = "https://upload.wikimedia.org/wikipedia/en/a/a4/Indian_Institute_of_Technology_Delhi_logo.png";
              this.setState({count: c, uri: str, icon1: 'checkbox-blank-circle-outline', icon2: 'checkbox-blank-circle-outline', icon3: 'checkbox-blank-circle', icon4: 'checkbox-blank-circle-outline'})
              break;
      case 4: str = "https://c.ndtvimg.com/2019-09/j7m1g8r8_iit-delhi_625x300_28_September_19.jpg";     
              this.setState({count: c, uri: str, icon1: 'checkbox-blank-circle-outline', icon2: 'checkbox-blank-circle-outline', icon3: 'checkbox-blank-circle-outline', icon4: 'checkbox-blank-circle'})
              break ;                  
    }   
  }

  render(){
    return(
     <View style = {{flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}> 
      <View style = {{height: Device.height/2.8, width: Device.width, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', top: Device.height/45, left: 0}}>
        <IconButton name = "chevron-left" size = {Device.height/24} onPress = {() => this.update_neg()}/>
        <Image source = {{uri: this.state.uri}} style = {{height: Device.height/2.7, width: Device.width/1.3}} borderBottomRightRadius = {Device.height/30} borderBottomLeftRadius = {Device.height/30} borderTopRightRadius = {Device.height/30} borderTopLeftRadius = {Device.height/30}/>
        <IconButton name = "chevron-right" size = {Device.height/24} onPress = {() => this.update_pos()}/>
      <View style = {{flexDirection: 'row', alignItems: 'center'}}>
        <Icon name = {this.state.icon1} style = {{top: Device.height/5.0, left: -Device.width/1.725}}/>
        <Icon name = {this.state.icon2} style = {{top: Device.height/5.0, left: -Device.width/1.825}}/>
        <Icon name = {this.state.icon3} style = {{top: Device.height/5.0, left: -Device.width/1.925}}/>
        <Icon name = {this.state.icon4} style = {{top: Device.height/5.0, left: -Device.width/2.025}}/>
      </View>  
     </View>   
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
      <View style = {{alignItems: 'center', justifyContent: 'center', paddingLeft: Device.width/80, paddingRight: Device.width/80}}>
        <Icon name = {this.state.name} size = {Device.height/25}  color = 'yellow'></Icon>
      </View>
    )
  }

}
function NilgiriHome(){
  return(
     <ImageBackground source = {{uri: "https://i.pinimg.com/originals/f2/cb/31/f2cb313fe3f43a87d295d547b6bb03c0.jpg"}} style = {{height: Device.height, width: Device.width, flex: 1}}>
       <View style={{flex: 1, flexDirection: 'column', alignItems: "center"}}>
         <View style = {{left: -Device.width/2}}>
          <Appbar style = {styles.appbar} barType = {"prominent dense"} backgroundImage = {<Image source = {{uri: 'https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-02.jpg'}}/>}>
             <View style = {{flex: 1,left: -Device.width/100}}>
               <IconButton name = 'list' color = 'black' size = {Device.height/23} onPress = {() => console.log('onPress!')}/>
             </View>
             <View style = {{flex: 8, justifyContent: 'center', alignItems: 'center'}}>
               <Text style = {{justifyContent: 'center', alignItems: 'center', fontSize: Device.height/27, color: "black", fontFamily: "Exo-ExtraBold", left: -Device.width/48}}>NILGIRI HOSTEL</Text>  
             </View>
          </Appbar>
         </View>
         <View style = {{height: Device.height, width: Device.width, flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", position: 'absolute'}}>
           <FrontImage/>
           <View style = {{flexDirection: 'column', alignItems: 'stretch', padding: Device.height/60, top:-Device.height/25}}>
             <View style = {{width: Device.width/1.2, height: Device.height/23, backgroundColor: 'firebrick', flexDirection: 'row', alignItems: 'center', borderRadius: Device.height/30, justifyContent: 'space-evenly'}}>
               <Announcement/>
               <View style = {{flex: 6, alignItems: 'center', justifyContent: 'center', left: Device.width/500}}>
                 <Text style = {{color: 'yellow', fontFamily: 'Exo-Bold', fontSize: Device.height/30}}>ANNOUNCEMENTS</Text>
               </View>
               <Announcement/>
              </View>
              <View style = {{backgroundColor: 'white',flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-evenly', width: Device.width/1.4, left: Device.width/16, height: Device.height/4.2, borderBottomLeftRadius: Device.height/33, borderBottomRightRadius: Device.height/33, borderRightWidth: Device.width/70, borderBottomWidth: Device.width/70, borderLeftWidth: Device.width/70, borderBottomColor: 'firebrick', borderLeftColor: 'firebrick', borderRightColor: 'firebrick'}}>
                <A href = "" style = {{fontSize: Device.height/42, fontWeight: 'bold', padding: Device.width/80, color: 'blue'}}>Announcement 1</A>
                <A href = {a1} style = {{fontSize: Device.height/42, fontWeight: 'bold', padding: Device.width/80, color: 'blue'}}>Announcement 2</A>
                <A href = "" style = {{fontSize: Device.height/42, fontWeight: 'bold', padding: Device.width/80, color: 'blue'}}>Announcement 3</A>
                <A href = "" style = {{fontSize: Device.height/42, fontWeight: 'bold', padding: Device.width/80, color: 'black'}}>...</A>
                <A href = "" style = {{fontSize: Device.height/42, fontWeight: 'bold', padding: Device.width/80, color: 'black'}}>...</A>
              </View>
           </View> 
         </View>
        </View>
      </ImageBackground>  
    )
  }

export default class App extends Component{
  componentDidMount(){
    main()
  }
  render(){
  return(
    
    <SafeAreaProvider>
    <SafeAreaView style = {{ elevation: 0, flex: 1}}>
    <NavigationContainer>
      <Tab.Navigator screenOptions = {({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if(route.name === 'HOME'){
            iconName = focused ? 'home-city' : 'home-city-outline';}
            else if(route.name === 'INFO'){
              iconName = focused ? 'information' : 'information-outline';
            } else if(route.name === 'MENU'){
              iconName = focused ? 'file-document' : 'file-document-outline';
            }
            return <Icon name = {iconName} size ={size} color = {color}/>
          } 
        }
      )} 
        tabBarOptions = {{
          activeBackgroundColor: 'rgba(50,100,170,1.0)',
          inactiveBackgroundColor: 'rgba(50,100,170,1.0)',
          activeTintColor: 'yellow',
          inactiveTintColor: 'white'
        }}>
        <Tab.Screen name = "HOME" component = {NilgiriHome} />
        <Tab.Screen name = "MENU" component = {SettingsScreen}/>
        <Tab.Screen name = "INFO" component = {SettingsScreen}/>
      </Tab.Navigator>  
    </NavigationContainer>
    </SafeAreaView>
    </SafeAreaProvider>
  )
}
}
