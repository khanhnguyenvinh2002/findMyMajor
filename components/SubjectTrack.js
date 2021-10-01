import React, { useState, useEffect }  from 'react';
import { View, Button,
         FlatList, StyleSheet,
         Text, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StarRating from 'react-native-star-rating-widget';
export const uuidv4 = () => {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}


const SubjectTrack = ({ navigation, route }) => {
  const [course,setCourse] = useState("")
  const [lectureNumber,setLectureNumber] = useState("")
  const [id,setId] = useState("")
  const [topic,setTopic] = useState("")
  const [rating,setRating] = useState("")
  const [feedback,setFeedback] = useState("")
  const [majorRating,setMajorRating]= useState([])
  const [allMajorRating,setAllMajorRating]= useState([])
  const [major, setMajor] = useState(route.params.subject)

  // this loads in the data after the app has been rendered
  useEffect(() => {getData()}
           ,[])

  const getData = async () => {
        try {
          // the '@profile_info' can be any string
          const jsonValue = await AsyncStorage.getItem('@MajorRating')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            setAllMajorRating(data)
            setMajorRating(data.filter(x => x.embeddedMajor == major))
            console.log('just set Info, Name and Email')
          } else {
            console.log('just read a null value from Storage')
            // this happens the first time the app is loaded
            // as there is nothing in storage...
            setMajorRating([])
            setLectureNumber("")
            setCourse("")
            setRating("")
            setFeedback("")
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
        let alteredUsers = usersArray.filter(function(e){
            return e.id !== id

        })
        AsyncStorage.setItem('@MajorRating', JSON.stringify(alteredUsers));
        setMajorRating(alteredUsers.filter(x=> x.embeddedMajor == major))
    }
    catch(error){
        console.log(error)
    }
};

  const clearAll = async () => {
        try {
          console.log('in clearData')
          await AsyncStorage.clear()
        } catch(e) {
          console.log("error in clearData ")
          console.dir(e)
          // clear error
        }
  }


// Each Pomorodo in the FlatList will be rendered as follows:
  const renderPomodoro = ({item}) => {
    return (
      <View style={styles.pomodoro}>
           <Text>Course: {item.course} </Text>
           <Text>Lecture Number: {item.lectureNumber}</Text>
           <Text>Topic: {item.lectureNumber}</Text>
           <Text>Rating: {item.rating} </Text>
           <Text>Feedback: {item.feedback} </Text>
           <Button title='Delete' onPress={()=>{
              remove_user(item.id)
            }}/>
      </View>
    )
  }

// We can set debug to true if we want to see all of the state variables
  let debug=false
  const debugView =
    (<View>
      <Text style={styles.headerText}>
        DEBUGGING INFO
      </Text>
      <Text>
         id is ({id})
      </Text>
      <Text>
         course is ({course})
      </Text>
      <Text>
         lectureNumber is ({lectureNumber})
      </Text>
      <Text>
         rating is ({rating})
      </Text>
      <Text>
         feedback is ({feedback})
      </Text>
      <Text>
         MajorRating is {JSON.stringify(majorRating)}
      </Text>
  </View>);

  // here is where we render the app
  return (

    <View style={styles.container}>
      <Text style={styles.headerText}>Major rating for {major}</Text>
      <Text style={{fontSize:12}}>
          Enter the feedback for your current related course below
      </Text>

      <View style={{flexDirection:'column',
                    margin:20,
                    justifyContent:'space-around'}}>
            <TextInput // for the course
              style={{fontSize:24}}
              placeholder="Course"
              onChangeText={text => {
                   setCourse(text);
                 }}
              value = {course}
            />
            <TextInput // for the date/time
              style={{fontSize:24}}
              placeholder="Lecture Number"
              onChangeText={text => {
                   setLectureNumber(text);
                 }}
              value = {lectureNumber}
            />

            <TextInput // for the topic
              style={{fontSize:24}}
              placeholder="Topic"
              onChangeText={text => {
                   setTopic(text);
                 }}
              value = {topic}
            />
            <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:24}}> Rating:</Text>
              <StarRating
                rating={rating}
                onChange={setRating}
              />
            </View>
            {/* <TextInput // for the rating
              style={{fontSize:24}}
              placeholder="Rating"
              keyboardType='number-pad'
              maxLength={1} 
              onChangeText={text => {
                   setRating(text);
                 }}
              value = {rating}
            /> */}
            <TextInput // for the rating
              style={{fontSize:24}}
              placeholder="Feedback"
              onChangeText={text => {
                   setFeedback(text);
                 }}
              value = {feedback}
            />
        </View>
        <View style={{flexDirection:'row',
                      justifyContent:'space-around'}}>
        <Button
               title={"Record"}
               color="blue"
               onPress = {() => {
                
                 const newAllMajorRating =
                  allMajorRating.concat(
                     {'lectureNumber':lectureNumber,
                      'id': uuidv4(),
                      'course':course,
                      'rating':rating,
                      'feedback':feedback,
                      'embeddedMajor':major,
                      'topic':topic,
                      'completed':new Date()
                   })
                   const newMajorRating =
                    majorRating.concat(
                       {'lectureNumber':lectureNumber,
                        'id': uuidv4(),
                        'course':course,
                        'rating':rating,
                        'feedback':feedback,
                        'embeddedMajor':major,
                        'topic':topic,
                        'completed':new Date()
                     })
                 setMajorRating(newMajorRating)
                 setAllMajorRating(newAllMajorRating)
                 storeData(newAllMajorRating)

                 setLectureNumber("")
                 setCourse("")
                 setRating("")
                 setFeedback("")
                 setTopic("")
               }}
               />
        <Button
                title={"Clear"}
                color="red"
                onPress = {() => {
                  clearAll()
                  setMajorRating([])
                }}
                />

      </View>
      <View style={{flexDirection:'row',
                    justifyContent:'center',
                    backgroundColor:'lightgray'}}>
        <Text style={{fontSize:20,
                      color:'green',backgroundColor:'lightgray'}}>
              History of Ratings
         </Text>
      </View>

      <FlatList
        data={majorRating.reverse()}
        renderItem={renderPomodoro}
        keyExtractor={item => item.id}
      />

      {debug?debugView: <Text></Text>}
      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#eee',
    justifyContent: 'center',
    textAlign:'left',
    marginTop:20,
    padding:20,
  },
  pomodoro:{
    flexDirection: 'column',
    margin:"25px",
    border:"thick solid black",
    padding:'10px',
    justifyContent: 'space-around'
  },
  headerText: {
    textAlign:'center',
    backgroundColor:'#aaa',
    fontSize: 32,
    padding:10,
    color: 'blue'
  },

});


export default SubjectTrack;
