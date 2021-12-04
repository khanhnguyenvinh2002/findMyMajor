import React , { useState, useEffect }from 'react';
import { SafeAreaView, ScrollView, View, FlatList, StyleSheet, Text, Button,StatusBar, Image } from 'react-native';
import BrandeisMajor from '../assets/BrandeisMajor'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useValue} from './ValueContext';

const brandeisMajor = BrandeisMajor()

const DATA = brandeisMajor.map((x) => {
  x.id = x.embeddedMajor
  return(x)
})


const Item = ({ title,navigation,children}) => {
  const [rating,setRating] = useState(0)
  useEffect(() => {getData()}
           ,[])

  const getData = async () => {
        try {
            let count = children.length;
            let data = count == 0 ? 0: children.map(x=> parseInt(x.rating, 10)).reduce((a, b) => a + b, 0)/count;
            setRating(data)
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
        <Text>Average rating: {rating}</Text>
      </View>
  );
};
const BrandeisMajorScreen = ({navigation}) => {

  const {allMajorRating} = useValue();
  const renderItem = ({ item }) => (
    <View >

      <Item navigation={navigation} 
          title={item.title}>
           { allMajorRating.filter(x=> x.embeddedMajor == item.title)}
          </Item>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize:32}}>
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