import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, View, FlatList, StyleSheet, Text, Button, StatusBar, Image,TextInput,TouchableOpacity } from 'react-native';

const Item = ({ name}) => (
      <View style={styles.item}>
        <Text style={styles.title}>{name}</Text>
      </View>
);

const Quiz4 = () => {
   const [showReps,setShowReps] = useState(false)
  const [id, setId] = useState('');
  const [text, setText] = useState('');
  const [data,setData] = useState([]);
  

  const getGithubData = async (id) => {
    try{
      let result = await fetch(`https://api.github.com/users/${id}/repos`)
      let cdata = await result.json()
      setData(cdata)
    await console.log(cdata);
    }catch(e){
      console.log(`error in getCovidData: ${JSON.stringify(e)}`)
    }

  }

  useEffect(() => {
    getGithubData(id);
  }, [id]);


  const renderItem = ({ item }) => (
    <View>
      <Item
          name={item.name}/>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
                    backgroundColor:'black', alignItems:'center', justifyContent:'space-between'}}>
          <Text style={{fontSize:32,
                color:'red', paddingTop: 10,paddingBottom: 10}}>
                Github Viewer
          </Text>
         
      </View>
      <View style={{flexDirection:'row'}} >
        < View> 
          <Text style={{fontSize:32,flex:1}}>
          
          {"github Id:"}
          </Text>
        </View>
        <TextInput 
          style={{fontSize:32, width: 220}} 
          placeholder="id"
          onChangeText={text => {setText(text)}}/>
      </View>
      <View>
      <TouchableOpacity onPress={() => {setId(text);setShowReps(!showReps) }}>
          {!showReps && <Text style={{color:"blue"}}>show responsitories</Text>}
          {showReps && <Text style={{color:"blue"}}>hide responsitories</Text>}
      </TouchableOpacity>
      </View>
      <ScrollView>
        {showReps&&<View>
        {data && data.length > 0 ?<FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        /> : <Item name="None"/>}
        </View>}
      </ScrollView>
      <View>
        <Text>Debugging</Text>
        <Text>userId: {id}</Text>
        <Text>showReps: {!showReps?"false":"true"}</Text>
        <Text>repos.length: {data && data.length > 0 ? data.length : 0}</Text>
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
    backgroundColor: '#d4d3d5',
    padding: 20,
    marginVertical: 16,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
});

export default Quiz4;