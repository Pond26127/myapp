import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task,setTask] = useState();
  const [taskItems , setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems,task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemCopy = [...taskItems];
    itemCopy.splice(index,1);
    setTaskItems(itemCopy);
  }

  return (
    <View style = {styles.container}>

      {/* Today's Task */}
      <View style = {styles.taskWrapper}>
        <Text style = {styles.sectionTitle}>Today's todo</Text>

        <View style={styles.items}>
          {/* Today's task list work from here*/}
          {
            taskItems.map((item , index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item}/>
                </TouchableOpacity>
              )
            })
          }
        </View>

      </View>

      {/* Input section */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height" }
        style={styles.writeTaskWrapper}>

        <TextInput style={styles.input} placeholder = {'Write your task'} value={task} onChangeText={text => setTask(text)}/>

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>Ok</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D2691E',
  },
  taskWrapper: {
    padding: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    jsutifyContent: 'space-around',
    alignItem: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 540,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderCOlor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});
