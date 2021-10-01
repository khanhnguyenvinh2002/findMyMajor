import React, { useState, useEffect } from "react";
import { Button, Text, TextInput, View, FlatList } from "react-native";

const MajorBrandeis = (props) => {
  const [loading,setLoading] = useState(true)
  const [state, setState] = useState('MA');
  const [text, setText] = useState('');
  const [data,setData] = useState([]);
  async function postData(url = 'https://brandeis.schdl.net/api/terms/brandeis/Fall_2021') {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    });
    window.alert(JSON.stringify(response))
    return response.json(); // parses JSON response into native JavaScript objects
  }
  useEffect(() => {
    fetch("https://brandeis.schdl.net/api/terms/brandeis/Fall_2021", {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
      .then(cdata => {
        console.log(cdata);
          setData(cdata);
        })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  } ,[data]);

  const renderItem = ({item}) => {
    return (
      <View style={{flexDirection:'row'}}>
        <Text style={{flex:1,backgroundColor:'#aaa'}}>{item['created_at'].slice(0,10)}</Text>
        <Text style={{flex:1,textAlign:'right'}}>{item.new_death}</Text>
        <Text style={{flex:1,textAlign:'right'}}>{item['new_case']}</Text>

     </View>
  )}

  return (
    <View style={{padding:40,margin:20,border: 'thick solid blue'}}>
      <Text style={{fontSize:30,color:'blue'}}>
        Covid19 Demo
      </Text>
      <View style={{flexDirection:'row'}}>
        <Text>Enter a state address </Text>
        <TextInput
          style={{height: 40}}
          placeholder="State Abbrev"
          onChangeText={text => {setText(text)}}
        />
      </View>
      <Button
        onPress={() => {
          setState(text)
        }}
        title="Get Covid Data Now"
      />
      <Text> Covid Data for is </Text>
      <View style={{flexDirection:'row'}}>
        <Text style={{flex:1,backgroundColor:'#eee'}}>date</Text>
        <Text style={{flex:1,textAlign:'right'}}>deaths</Text>
        <Text style={{flex:1,textAlign:'right'}}>cases</Text>
     </View>
      <FlatList
        data={data.slice(0,10)}
        renderItem={renderItem}
        keyExtractor={item => item.created_at}
      />

    </View>
  );
}

export default MajorBrandeis;
