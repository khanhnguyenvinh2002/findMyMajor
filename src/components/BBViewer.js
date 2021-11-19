import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, View, FlatList, StyleSheet, Text, Button, StatusBar, Image,TextInput,TouchableOpacity } from 'react-native';
import Axios from 'axios'
const appURL = "https://glacial-hamlet-05511.herokuapp.com";

const Post = ({ text, title}) => (
      <View style={styles.item_post}>
        <Text style={styles.title_post}>{title}</Text>
        <Text style={styles.text_post}>{text}</Text>
      </View>
);

const BBViewer = () => {
   const [showReps,setShowReps] = useState(false)
  const [posts,setPosts] = useState([]);
  const [data,setData] = useState([]);
  const [bb,setBB] = useState([]);
  const [clicked,setClicked] = useState(false);
  const [bboard,setBboard] = useState("");

  const getBB = async () => {
    let res = {data:[]}
    res = await Axios.get(appURL+"/bboardNames")
    setBB(res.data)
    console.log("refreshed")
  }
  useEffect(()=>{
    getBB()
  },[])
  useEffect(() => {
    // go out to the server and get the posts for the current bboard
    if(clicked){
    const getPosts = async () => {
      let result = {data:[]}
      result =
        await Axios.post(
          appURL+"/posts",
          {bboard:bboard}
        )
        console.log(result)
      setPosts(result.data)
      return result.data
    }

    const ps = getPosts()
    }
  },[bboard])


const Item = ({ name}) => (
      <TouchableOpacity onPress={() => {setBboard(name) 
      setClicked(true)}}>
      <View style={styles.item}>

        <Text style={styles.title}>{name}</Text>
      </View>
      </TouchableOpacity>
);
  const renderPost = ({ item }) => (
    <View>
      <Post
          title={item.title}
          text={item.text}/>
    </View>
  );

  const renderItem = ({ item }) => (
    <View>
      <Item
          name={item}/>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
                    backgroundColor:'black', alignItems:'center', justifyContent:'space-between'}}>
          <Text style={{fontSize:32,
                color:'#be523e', paddingTop: 25,paddingBottom: 25}}>
                BBViewer
          </Text>
         
      </View>
      <View style={{flexDirection:'row'}} >
       <TouchableOpacity style={{
      backgroundColor: 'blue'}}
         onPress={()=>{getBB()
            }}>
            <View>
            <Text
            style={{fontSize:11,color:"white",padding: 10}} >
            REFRESH BBOARDS
            </Text>
            </View>
        </TouchableOpacity>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}style={{flex:1.5}}>
          <FlatList
          horizontal={true}showsHorizontalScrollIndicator={false}
          data={bb}
          renderItem={renderItem}
          keyExtractor={(x, i) => i.toString()}
        /> 
      </ScrollView>
      </View>
       <View style={{flexDirection:'row'}} >
        < View> 
          <Text style={{fontSize:20,flex:1}}>
          
          {"Selected bboard:"}
          </Text>
        </View>
        {clicked && 
        <View>
          <View style={styles.item_current}>
            <Text style={styles.title_current}>{bboard}</Text>
          </View>
        </View>}
      </View>
      <ScrollView>
      {clicked && 
      <FlatList
          data={posts}
          renderItem={renderPost}
          keyExtractor={item => item._id}
        /> }
      </ScrollView>
      <View>
        <Text>DEBUGGING</Text>
        <Text>bb: {bboard}</Text>
        <Text>bbs.length = {bb.length}</Text>
        <Text>posts = {JSON.stringify(posts)}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flex:4,
    backgroundColor: 'black',
    padding: 6,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 10,
    color: '#be523e',
  },
  item_current: {
    backgroundColor: 'black',
    padding: 1,
  },
  title_current: {
    fontSize: 20,
    color: '#be523e',
  },
  item_post: {
    flex:4,
    backgroundColor: '#d4d3d5',
    padding: 20,
    marginVertical: 16,
    marginHorizontal: 16,
  },
  title_post: {
    fontSize: 24,
  },
  text_post: {
    fontSize: 12,
  }
});

export default BBViewer;