import React,{Component} from 'react';
import {  ScrollView,Image,StatusBar,Platform,TouchableNativeFeedback,FlatList, StyleSheet, Text ,View,TouchableWithoutFeedback} from 'react-native';



const D1 = [
  {
    id: 'a1',
    post: 'Sports Secretary',
      img:require('./images/mayank.jpg'),
      name:'Mayank Dubey',
      mobile:'8503936914',
      email:'nilgiri.20@gmail.com',
      color1:'#0047b3',
      color2:'white',
  },
  {id: 'a2',
      post: 'Mess Secretary',
      img:require('./images/icon.jpg'),
      name:'Name',
      mobile:'9876543210',
      email:'nilgiri.20@gmail.com',
      color1:'#0047b3',
      color2:'white',

  },
    {
        id: 'a3',
        post: 'House Secretary',
        img:require('./images/icon.jpg'),
        name:'Name',
        mobile:'9876543210',
        email:'nilgiri.20@gmail.com',
        color1:'#0047b3',
        color2:'white',

    },
  {
    id: 'a4',
      post: 'Maintainance Secretary',
      img:require('./images/icon.jpg'),
      name:'Name',
      mobile:'9876543210',
      email:'nilgiri.20@gmail.com',
      color1:'#0047b3',
      color2:'white',

  },
    {
        id: 'a5',
        post: 'Cultural Secretary',
        img:require('./images/icon.jpg'),
        name:'Name',
        mobile:'9876543210',
        email:'nilgiri.20@gmail.com',
        color1:'#0047b3',
        color2:'white',

    },
];

const D3 = [
    {
        id: 'b1',
        post: 'BSW rep',
        img:require('./images/icon.jpg'),
        name:'Name',
        mobile:'9876543210',
        email:'nilgiri.20@gmail.com',
        color1:'#0047b3',
        color2:'white',

    },
    {
        id: 'b2',
        post: 'BSW rep',
        img:require('./images/icon.jpg'),
        name:'Name',
        mobile:'9876543210',
        email:'nilgiri.20@gmail.com',
        color1:'#0047b3',
        color2:'white',
    },
    {
        id: 'b3',
        post: 'Debating Rep',
        img:require('./images/icon.jpg'),
        name:'Name',
        mobile:'9876543210',
        email:'nilgiri.20@gmail.com',
        color1:'#0047b3',
        color2:'white',

    },
    {
        id: 'b4',
        post: 'Dance Rep',
        img:require('./images/icon.jpg'),
        name:'Name',
        mobile:'9876543210',
        email:'nilgiri.20@gmail.com',
        color1:'#0047b3',
        color2:'white',

    },{
        id: 'b5',
        post: 'Music Rep',
        img:require('./images/icon.jpg'),
        name:'Name',
        mobile:'9876543210',
        email:'nilgiri.20@gmail.com',
        color1:'#0047b3',
        color2:'white',

    },
    {
        id: 'b6',
        post: 'Literature Rep',
        img:require('./images/icon.jpg'),
        name:'Name',
        mobile:'9876543210',
        email:'nilgiri.20@gmail.com',
        color1:'#0047b3',
        color2:'white',

    },
    {
        id: 'b7',
        post: 'Quiz Rep',
        img:require('./images/icon.jpg'),
        name:'Name',
        mobile:'9876543210',
        email:'nilgiri.20@gmail.com',
        color1:'#0047b3',
        color2:'white',

    },
];
const D4 = [
    {
        id: 'c1',
        post: 'Cricket Captain',
        img:require('./images/icon.jpg'),
        name:'Name',
        mobile:'9876543210',
        email:'nilgiri.20@gmail.com',
        color1:'#0047b3',
        color2:'white',
    },
    {
        id: 'c2',
        post: 'Cricket Vice-Captain',
        img:require('./images/icon.jpg'),
        name:'Name',
        mobile:'9876543210',
        email:'nilgiri.20@gmail.com',
        color1:'#0047b3',
        color2:'white',

    },
    {
        id: 'c3',
        post: 'Football Captain',
        img:require('./images/icon.jpg'),
        name:'Name',
        mobile:'9876543210',
        email:'nilgiri.20@gmail.com',
        color1:'#0047b3',
        color2:'white',
    },
    {
        id: 'c4',
        post: 'Football Vice-Captain',
        img:require('./images/icon.jpg'),
        name:'Name',
        mobile:'9876543210',
        email:'nilgiri.20@gmail.com',
        color1:'#0047b3',
        color2:'white',
    },
];
const D2= [
    {
        id: 'B1',
        post: 'Warden',
        img:require('./images/icon.jpg'),
        name:'Name',
        mobile:'9876543210',
        email:'nilgiri.20@gmail.com',
        color1:'#0047b3',
        color2:'white',
    },
    {
        id: 'B2',
        post: 'Caretaker',
        img:require('./images/icon.jpg'),
        name:'Name',
        mobile:'9876543210',
        email:'nilgiri.20@gmail.com',
        color1:'#0047b3',
        color2:'white',
    },
    {
        id: 'B3',
        post: 'Staff',
        img:require('./images/icon.jpg'),
        name:'Name',
        mobile:'9876543210',
        email:'nilgiri.20@gmail.com',
        color1:'#0047b3',
        color2:'white',
    },
];
const D5= [
    {
        id: 'd1',
        post: 'Mentor',
        img:require('./images/icon.jpg'),
        name:'Viraj Singh',
        mobile:'9876543210',
        email:'nilgiri.20@gmail.com',
        color1:'#0047b3',
        color2:'white',
    },
    {
        id: 'd2',
        post: 'Mentor',
        img:require('./images/icon.jpg'),
        name:'Hardik',
        mobile:'9876543210',
        email:'nilgiri.20@gmail.com',
        color1:'#0047b3',
        color2:'white',
    },
    {
        id: 'd3',
        post: 'Mentor',
        img:require('./images/icon.jpg'),
        name:'Name',
        mobile:'9876543210',
        email:'nilgiri.20@gmail.com',
        color1:'#0047b3',
        color2:'white',
    },
];
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    item: {
        marginVertical: 8,
        marginHorizontal: 8,height:150

    },

});

function Item({ title }) {
  return (
      <View style={styles.item}>
        <View style={{marginLeft:75,flexGrow:1,borderColor:'black',borderWidth:3,borderBottomRightRadius:15,borderTopRightRadius:15}}>
            <View style={{paddingVertical:3,paddingLeft:77,borderColor:'black',borderTopRightRadius:11,borderBottomWidth:3,backgroundColor:title.color1}}>
                <Text style={{color:'white'}}>{title.post}</Text>
            </View>
            <View style={{flexGrow:1,backgroundColor:title.color2,borderBottomRightRadius:15}}>
                <View style={{marginLeft:80,flexGrow:1}}>
                    <View style={{justifyContent:'center',flexGrow:1,paddingLeft:10}}>
                        <Text style={{textDecorationLine:'underline',textDecorationColor:'blue',textDecorationStyle:'solid',fontWeight:'bold'}}>
                            {title.name}
                        </Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',flexGrow:1}}>
                        <Image source={require('./images/mobile.jpg')} style={{borderRadius:12}}/>
                        <View style={{paddingLeft:10}}>
                            <Text>{title.mobile}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',flexGrow:1}}>
                        <Image source={require('./images/email.jpg')}/>
                        <View style={{paddingLeft:10}}>
                            <Text>{title.email}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
          <Image source = {title.img}  style={{position:'absolute',height:150,width:150,borderRadius:150/2,borderColor:'black',borderWidth:3,resizeMode:'cover'}}/>
      </View>
  );
}

function List({D}) {
  return (
      <FlatList
            data={D}
            renderItem={({ item }) => <Item title={item} />}
            keyExtractor={item => item.id}
         />

  );
}
class Student extends Component{
    constructor(props){
        super(props);
        this.state={
            Data:this.props.data,
            color1:'#0047b3',
            color2:'white',
            color3:'white',
            color4:'white'
        };
    }
    onpress1 = () => {this.setState({Data:D1,
        color1:'#0047b3',
        color2:'white',
        color3:'white',
        color4:'white'});}
    onpress2 = () => {this.setState({Data:D3,
        color1:'white',
        color2:'#0047b3',
        color3:'white',
        color4:'white'});}
    onpress3 = () => {this.setState({Data:D4,
        color1:'white',
        color2:'white',
        color3:'#0047b3',
        color4:'white'});}
    onpress4 = () => {this.setState({Data:D5,
        color1:'white',
        color2:'white',
        color3:'white',
        color4:'#0047b3'});}
        render(){
    if(this.props.data === D2){
        return(<List D={D2} />);}
    return(<View style={{flex:1}}>
        <View style={{marginVertical:50,marginHorizontal:15,borderColor:'#0047b3',borderRadius:35,borderWidth:4}}>
            <View style={{flexDirection:'row'}}>
                <TouchableNativeFeedback
                    onPress={this.onpress1}
                    background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
                >
                    <View style={{flexGrow:1,backgroundColor:this.state.color1,padding:20,justifyContent:'center',borderColor:'#0047b3',borderTopLeftRadius:31,borderBottomWidth:2,borderRightWidth:2}}><Text style={{textAlign:'center',fontWeight:'bold',color:this.state.color1 === '#0047b3' ? 'white' : '#0047b3'}}>Secretaries</Text>

                    </View></TouchableNativeFeedback>

                <TouchableNativeFeedback

                    onPress={this.onpress2}
                    background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
                >
                    <View style={{flexGrow:1,backgroundColor:this.state.color2,padding:20,justifyContent:'center',borderTopRightRadius:31}}><Text style={{textAlign:'center',color:this.state.color2 === '#0047b3' ? 'white' : '#0047b3',fontWeight:'bold'}}>BRCA Reps</Text>

                    </View>
                </TouchableNativeFeedback>

            </View>
            <View style={{flexDirection:'row'}}>
                <TouchableNativeFeedback
                    onPress={this.onpress3}
                    background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
                >
                    <View style={{flexGrow:1,backgroundColor:this.state.color3,padding:18,justifyContent:'center',borderBottomLeftRadius:31}}><Text style={{textAlign:'center',color:this.state.color3 === '#0047b3' ? 'white' : '#0047b3',fontWeight:'bold'}}>Captains</Text>

                    </View></TouchableNativeFeedback>

                <TouchableNativeFeedback

                    onPress={this.onpress4}
                    background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}
                >
                    <View style={{flexGrow:1,backgroundColor:this.state.color4,padding:20,justifyContent:'center',borderColor:'#0047b3',borderBottomRightRadius:31,borderTopWidth:2,borderLeftWidth:2}}><Text style={{textAlign:'center',color:this.state.color4 === '#0047b3' ? 'white' : '#0047b3',fontWeight:'bold'}}>Mentors</Text>

                    </View>
                </TouchableNativeFeedback>

            </View>
        </View>
            <List  D = {this.state.Data}/>
        </View>

    );
    }}


export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            Da:D1,
            color1:'bold',
            color2:'normal',
            color3:{borderColor:'white',borderBottomWidth:5}
        };
    }
    Onpress1 = () => {this.setState({Da:D1,color1:'bold',
        color2:'normal'});}
        Onpress2 = () => {this.setState({Da:D2,color1:'normal',color2:'bold'});}

    render()
    {return(<View style={{flex:1}}>
            <View>
            <StatusBar
                backgroundColor={'#006622'}
                barStyle={'light-content'}/>
        </View>

        <ScrollView style={styles.container}>

      <View style={{flexDirection:'row',justifyContent:'center'}}>
          <TouchableWithoutFeedback
              onPress={this.Onpress1}
              >
              <View style={[{flexGrow:1,backgroundColor:'#0047b3',padding:10},this.state.color1 === 'bold' ? this.state.color3 : {}]}><Text style={{textAlign:'center',color:'white',fontWeight:this.state.color1}}>Student</Text>
                  <Text style={{textAlign:'center',fontWeight:this.state.color1,color:'white'}}>Body</Text>
              </View></TouchableWithoutFeedback>

          <TouchableWithoutFeedback

              onPress={this.Onpress2}
              >
              <View style={[{flexGrow:1,backgroundColor:'#0047b3',padding:10},this.state.color2 === 'bold' ? this.state.color3 : {}]}><Text style={{textAlign:'center',fontWeight:this.state.color2,color:'white'}}>Administrative</Text>
                  <Text style={{textAlign:'center',fontWeight:this.state.color2,color:'white'}}>Staff</Text>
              </View>
          </TouchableWithoutFeedback>

      </View>
            <Student data = {this.state.Da}/>
    </ScrollView>
        </View>


);
}}

