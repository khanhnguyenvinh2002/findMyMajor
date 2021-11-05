import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View, Button, Image, TextInput} from 'react-native';

import Constants from 'expo-constants';
import SubjectTrack from './SubjectTrack'
import MajorBrandeis from './MajorBrandeis'
import BrandeisMajorScreen from './BrandeisMajorScreen'


const Stack = createNativeStackNavigator();

const HomePage = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          //options={{ title: 'Welcome' }}
        />

        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="About" component={AboutScreen} />

        <Stack.Screen name="BrandeisMajorScreen" component={BrandeisMajorScreen} />

        <Stack.Screen name="Subject" component={SubjectScreen} />
        <Stack.Screen name="SubjectTrack" component={SubjectTrack} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};


const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View style={{flexDirection:'column',justifyContent:'space-around', alignItems:'center',backgroundColor:'lightblue'}}>
        <Text style={styles.smallText}>WELCOME TO FIND MY MAJOR</Text>
        <Text>You will start working towards your major in only few clicks! Start exploring!</Text>
      </View>
      <View style={{ flexDirection: 'row',
                     margin:25,
                     border:"thick solid black",
                     padding:10,
                     justifyContent: 'space-around', }}>

        <Button
          title="About"
          onPress={() =>
            navigation.navigate('About', { name: 'About', greeting:'This is the About Page' })
               // we're passing a parameter name:'Jane' to the Profile component!
          }
        />

        <Button
          title="BrandeisMajorScreen"
          onPress={() =>
            navigation.navigate('BrandeisMajorScreen')
          }
        />
    </View>
    </>
  );
};

// ProfileScreen function is called with a JSON object
//  {navigation:..., route:...,  otherstuff}
const ProfileScreen = ({ navigation, route }) => {
  return <Text>{route.params.greeting}, this is {route.params.name}'s profile</Text>;
       // we're using the parameter name passed in from the HomeScreen
};

const SubjectScreen = ({ navigation, route }) => {
  return <>
  <Text>{route.params.subject} </Text>
  <Text>
    Wow! You are here before we started! Thank you for choosing us!
  </Text>
  </>;
       // we're using the parameter name passed in from the HomeScreen
};
// ProfileScreen function is called with a JSON object
//  {navigation:..., route:...,  otherstuff}
const AboutScreen = ({ navigation, route }) => {
  return  <View style={styles.container}>



  <View style={{flex:3, flexDirection:'row',
                alignItems:'stretch',backgroundColor:'white',
                justifyContent:'stretch'}}>
      <Image style={{flex:1}} source={{uri:'https://scontent-bos3-1.xx.fbcdn.net/v/t1.6435-1/p480x480/242371482_1530766437259341_4480082175572169490_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=MuSAbqXSiHoAX_GLMUi&_nc_ht=scontent-bos3-1.xx&oh=a9af8186799e88de2052fe472bb9838b&oe=6177E1F6'}} />
      <View style={{flex:2,flexDirection:'column'}}>
        <div style={{margin:'auto',
              margin: '28px 70px',textAlign: 'center'}}>

                  <Text>Andrew Nguyen</Text>
                  <em><b></b></em>
                  <Text>Hi everyone, I'm Andrew and I'm currently a sophomore majoring in Computer Science and Business at Brandeis University, USA. Every day, I love what I do and I am motivated to achieve my final goals. I enjoy self-studying and learning new technology to apply to projects. Programming opens many opportunities where I can satisfy my curiosity and create solutions for the community.</Text>
                  
                <Text>This is my project for CS153a Fall21 </Text>
                <br/>
                <br/>
                <br/>
                <Text><b>CONTACT ME!</b></Text>
                  {/* <div style={{textAlign: 'center'}}>
                    <b>CONTACT ME!</b>
                </div> */}
                <br/>
                <br/>
                <View style={{flexDirection: 'row'}}>
                <div style={{flex:1}}>
                    <a href="https://www.facebook.com/andrewng2002/" target="_blank">
                        <Image style={styles.link} source={require("../assets/img/fb.png")}  alt="facebook logo"/>
                    </a>
                </div>
                <div style={{flex:1}}>
                    <a href="https://www.instagram.com/bebu.iw/" target="_blank">
                        <Image style={styles.link} source={require("../assets/img/ig.png")}  alt="instagram logo" />
                    </a>
                </div>
                <div style={{flex:1}}>
                    <a href="https://www.linkedin.com/in/andrew-nguyen-02/" target="_blank">
                        <Image style={styles.link} source={require("../assets/img/linkedin.png")} alt="LinkedIn logo"/>
                    </a>
                </div>
                </View>

                <br/>
                <br/>
                <Text> Check out <a href="https://coffee-venture.web.app" target="_blank">my previous project! </a> </Text>
      </div>
      </View>

  </View>

  <View style={{flex:1,flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-around'}}>
    <Text> Open your secret gift by pressing the button </Text>
    <TextInput></TextInput>
    <Button title="This is a big green useless button!" color="green"
      onPress={()=>{window.alert("Have a good day ")}}
    />


  </View>


</View>

;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  link : {
    width: 50,
    height: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  smallText:{
    fontSize: 32,
    color: 'black'
  }
});
export default HomePage;