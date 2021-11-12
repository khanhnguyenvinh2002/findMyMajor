import React, { useState, useContext, createContext, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ValueContext = createContext(null)

const ValueProvider = ({children}) => {
  const [allMajorRating,setAllMajorRating]= useState([])
  // this loads in the data after the app has been rendered

  useEffect(() => {getData()}
           ,[])
  useEffect(()=>{storeData(allMajorRating)}
          ,[allMajorRating])

  const getData = async (major) => {
        try {
          // the '@profile_info' can be any string
          const jsonValue = await AsyncStorage.getItem('@MajorRating')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            setAllMajorRating(data)
            console.log('just set Info, Name and Email')
          } else {
          }
        } catch(e) {
          console.log("error in getData ")
          // this shouldn't happen, but its good practice
          // to check for errors!
          console.dir(e)
          // error reading value
        }
  }

  const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@MajorRating', jsonValue)
          console.log('just stored '+jsonValue)
        } catch (e) {
          console.log("error in storeData ")
          console.dir(e)
          // saving error
        }
  }
  const remove_user = async(id) => {
    try{
        let usersJSON= await AsyncStorage.getItem('@MajorRating');
        let usersArray = JSON.parse(usersJSON);
        console.log(id)
        console.log(usersArray)
        let alteredUsers = usersArray.filter(function(e){
            return e.id !== id
        })
        await AsyncStorage.setItem('@MajorRating', JSON.stringify(alteredUsers));
        setAllMajorRating(alteredUsers)
        console.log(alteredUsers)
    }
    catch(error){
        console.log(error)
    }
};

  const clearAll = async () => {
        try {
          console.log('in clearData')
          await AsyncStorage.clear()
          setAllMajorRating([])
        } catch(e) {
          console.log("error in clearData ")
          console.dir(e)
          // clear error
        }
  }


  return (
    <ValueContext.Provider
        value={{allMajorRating,setAllMajorRating, getData, storeData, remove_user, clearAll}} >
      {children}
    </ValueContext.Provider>
   )
}
export default ValueProvider
export const useValue = () => useContext(ValueContext)