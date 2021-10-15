import React , { useState, useEffect }from 'react';
import { SafeAreaView, ScrollView, View, FlatList, StyleSheet, Text, Button,StatusBar, Image } from 'react-native';
import BrandeisMajor from '../assets/BrandeisMajor'
import AsyncStorage from '@react-native-async-storage/async-storage';

const brandeisMajor = BrandeisMajor()

const DATA = brandeisMajor.map((x) => {
  x.id = x.embeddedMajor
  return(x)
})


const Item = ({ title,navigation}) => {
  const [rating,setRating] = useState(0)
  useEffect(() => {getData()}
           ,[rating])

  const getData = async () => {
        try {
          // the '@profile_info' can be any string
          const jsonValue = await AsyncStorage.getItem('@MajorRating')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            console.log(data)
            data = data.filter(x=> x.embeddedMajor == title)
            let count = data.length;
            data = count == 0 ? 0: data.map(x=> parseInt(x.rating, 10)).reduce((a, b) => a + b, 0)/count;
            setRating(data)
          } else {
            console.log('just read a null value from Storage')
          }
        } catch(e) {
          console.log("error in getData ")
          // this shouldn't happen, but its good practice
          // to check for errors!
          console.dir(e)
          // error reading value
        }
  }
  return (
      <View style={styles.item}>

        <Button title={title}
          onPress={() =>
            navigation.navigate('SubjectTrack', { subject: title})
               // we're passing a parameter name:'Jane' to the Profile component!
          }>

        </Button>
        <Text>{rating}</Text>
      </View>
  );
};
const BrandeisMajorScreen = ({navigation}) => {
  const renderItem = ({ item }) => (
    <View >

      <Item navigation={navigation}
          title={item.title}/>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize:32,
                    backgroundColor:'red'}}>
         Choose your major
      </Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return index.toString();
      }}
      />
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
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default BrandeisMajorScreen;
