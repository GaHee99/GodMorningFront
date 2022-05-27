import { StatusBar } from 'expo-status-bar'
import { useState, useEffect } from 'react'
import {
  parseISO,
  isSameDay,
  addDays,
  format,
  getDate,
  startOfWeek,
} from 'date-fns'
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Dimensions,
  Alert,
  TouchableOpacity,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Input from '../components/Input'
import Title from '../components/Title'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
//import WeekCalender from '../components/WeekCalender'
//import { images } from '../../assets/icons/images'
import Task from '../components/Task'
import TimePick from '../components/TimePick'

const MyRoutineScreen_save = () => {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState({})

  {
    /*title*/
  }
  const [title, setTitle] = useState('')

  {
    /*Date*/
  }
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [datePickerVisible, setDatePickerVisible] = useState(false)
  const showDatePicker = () => {
    setDatePickerVisible(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisible(false)
  }

  const handleConfirm = (date) => {
    setSelectedDate(date)
    hideDatePicker()
  }

  function printDate() {
    const today = selectedDate // 현재 날짜

    const month = today.toLocaleDateString('en-US', {
      month: '2-digit',
    })
    const day = today.toLocaleDateString('en-US', {
      day: '2-digit',
    })
    const dayName = today.toLocaleDateString('ko-KR', {
      weekday: 'long',
    })
    return `${month}.${day} ${dayName}`
  }

  const [hoursRange, setHoursRange] = useState({
    1: { id: '1', text: 'Start' },
    2: { id: '2', text: 'End' },
  })

  {
    /*task*/
  }

  const _deleteTask = (id) => {
    if (typeof todos[selectedDate] == 'undefined') {
      const currentTasks = Object.assign({}, tasks)
      delete currentTasks[id]
      setTasks(currentTasks)
    } else {
      const currenttodos = Object.assign({}, todos)
      delete currenttodos[selectedDate]['todo_list'][id]
      setTodos(currenttodos)
    }
  }
  const _updateTask = (item) => {
    //const currentTasks = Object.assign({}, tasks)
    // currentTasks[item.id] = item
    if (typeof todos[selectedDate] == 'undefined') {
      const currentTasks = Object.assign({}, tasks)
      currentTasks[item.id] = item
      setTasks(currentTasks)
    } else {
      const currenttodos = Object.assign({}, todos)
      currenttodos[selectedDate]['todo_list'][item.id] = item
      setTodos(currenttodos)
    }

    // console.log('item.id', item.id)
    //console.log('item', item)
    //  setTasks(currentTasks)
  }
  const _toggleTask = (id) => {
    if (typeof todos[selectedDate] == 'undefined') {
      const currentTasks = Object.assign({}, tasks)
      currentTasks[id]['completed'] = !currentTasks[id]['completed']
      setTasks(currentTasks)
    } else {
      const currenttodos = Object.assign({}, todos)
      delete currenttodos[selectedDate]['todo_list'][id]
      setTodos(currenttodos)
    }
  }
  const _addTask = () => {
    const ID = Date.now().toString()
    const newTaskObject = {
      [ID]: { id: ID, text: newTask, completed: false },
    }
    setNewTask('')
    setTasks({ ...tasks, ...newTaskObject })
  }
  useEffect(() => {}, [tasks])

  const _handleTextChange = (text) => {
    setNewTask(text)
  }
  /*week */
  const [week, setWeek] = useState([])
  useEffect(() => {
    const weekDays = getWeekDays(selectedDate)
    setWeek(weekDays)
  }, [selectedDate])
  const getWeekDays = (date) => {
    //  console.log(date, 'datee')
    const start = startOfWeek(date, { weekStartsOn: 1 })
    //  console.log(start)
    const weekOfLength = 7
    const final = []
    for (let i = 0; i < weekOfLength; i++) {
      const date = addDays(start, i)
      final.push({
        formatted: format(date, 'EEE'),
        date,
        day: getDate(date),
      })
    }
    return final
  }
  const onChange = (date) => {
    setSelectedDate(date)
  }

  const onPost = () => {
    Alert.alert('post')
  }

  const [todos, setTodos] = useState({})
  const onSave = () => {
    const today = selectedDate // 현재 날짜

    Alert.alert('Save')
    const saveTodoObject = {
      [selectedDate]: {
        id: selectedDate,
        title: title,
        create_date: selectedDate,
        startTime: hoursRange[1]['text'],
        endTime: hoursRange[2]['text'],
        todo_list: tasks,
      },
    }
    const newToDos = { ...todos, ...saveTodoObject }
    setTodos(newToDos)
    console.log(newToDos)
    setTasks({})
    setTitle('')
  }

  {
    /* 
    console.log('todos', typeof todos[selectedDate] == 'undefined')
    typeof todos[selectedDate] != 'undefined' &&
    Object.keys(todos[selectedDate]['todo_list']).length === 0
      ? console.log('emptytodo')
      : console.log('둘중하나 x ')
*/
  }
  useEffect(() => {
    console.log('useEffect todos', todos)
  }, [todos])
  console.log(tasks)

  return (
    <LinearGradient
      colors={[
        'rgba(184, 181, 255, 0.97) ',
        'rgba(210, 171, 217, 0.85) ',
        'rgba(248, 204, 187, 0.94) ',
        'rgba(255, 249, 179, 0.82) ',
      ]}
      style={{
        paddingTop: 120,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <StatusBar style="auto" />
      <View style={styles.datepicker}>
        <Text onPress={showDatePicker} style={{ fontSize: 24 }}>
          {selectedDate ? printDate() : 'No date selected'}
        </Text>

        <DateTimePickerModal
          date={selectedDate}
          isVisible={datePickerVisible}
          mode="date"
          display="inline"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>

      <View style={styles.weekpicker}>
        <View style={styles.weekcontainer}>
          {week.map((weekDay) => {
            const textStyles = [styles.dayText]
            const touchableStyles = [styles.touchableDay]
            const sameDay = isSameDay(weekDay.date, selectedDate)

            if (sameDay) {
              textStyles.push(styles.selectedDayText)
              touchableStyles.push(styles.selectedTouchableDay)
            }
            return (
              <View style={styles.weekDayItems} key={weekDay.formatted}>
                <Text style={styles.weekDayText}>{weekDay.formatted}</Text>

                <TouchableOpacity
                  onPress={() => onChange(weekDay.date)}
                  style={touchableStyles}
                >
                  <Text style={textStyles}>{weekDay.day}</Text>
                </TouchableOpacity>
              </View>
            )
          })}
        </View>
      </View>

      <View style={styles.todo}>
        {/* 
        <Title
          value={todos[selectedDate]['title']}
          onChangeText={setTitle}
        ></Title>
        <Title value={title} onChangeText={setTitle}></Title>
        value={title}*/}
        {typeof todos[selectedDate] == 'undefined' ? (
          <Title value={title} onChangeText={setTitle}></Title>
        ) : (
          <Title
            value={todos[selectedDate]['title']}
            onChangeText={setTitle}
          ></Title>
        )}

        <View style={styles.post_save_container}>
          <Button title="Save" onPress={onSave}></Button>
          <Button title="Post" onPress={onPost}></Button>
        </View>
        <View style={[styles.timePick]}>
          {Object.values(hoursRange).map((item) => (
            <TimePick
              key={item.id}
              item={item}
              setHoursRange={setHoursRange}
              hoursRange={hoursRange}
            />
          ))}
          {/*
          <Button
            title="  재설정"
            onPress={_renewHour}
            style={{ fontSize: 200, fontWeight: '600', marginLeft: 15 }}
          />
           */}
        </View>

        <Input
          value={newTask}
          onChangeText={_handleTextChange}
          onSubmitEditing={_addTask}
        />
        <ScrollView>
          {/* 
           {typeof todos[selectedDate] == 'undefined'
            ? console.log('render , empty')
            : console.log(todos[selectedDate]['todo_list'])}
          
          {Object.values(todos[selectedDate]['todo_list']).map((item) => (
            <Task
              key={item.id}
              item={item}
              deleteTask={_deleteTask}
              toggleTask={_toggleTask}
              updateTask={_updateTask}
            />
          ))}
          

            {typeof todos[selectedDate] == 'undefined'
            ? Object.values(tasks).map((item) => (
                <Task
                  key={item.id}
                  item={item}
                  deleteTask={_deleteTask}
                  toggleTask={_toggleTask}
                  updateTask={_updateTask}
                />
              ))
            : Object.values(todos[selectedDate]['todo_list']).map((item) => (
                <Task
                  key={item.id}
                  item={item}
                  deleteTask={_deleteTask}
                  toggleTask={_toggleTask}
                  updateTask={_updateTask}
                />
              ))}

          */}

          {typeof todos[selectedDate] == 'undefined'
            ? Object.values(tasks).map((item) => (
                <Task
                  key={item.id}
                  item={item}
                  deleteTask={_deleteTask}
                  toggleTask={_toggleTask}
                  updateTask={_updateTask}
                />
              ))
            : Object.values(todos[selectedDate]['todo_list']).map((item) => (
                <Task
                  key={item.id}
                  item={item}
                  deleteTask={_deleteTask}
                  toggleTask={_toggleTask}
                  updateTask={_updateTask}
                />
              ))}
          {tasks.length === 0
            ? Object.values(tasks).map((item) => (
                <Task
                  key={item.id}
                  item={item}
                  deleteTask={_deleteTask}
                  toggleTask={_toggleTask}
                  updateTask={_updateTask}
                />
              ))
            : Object.values(tasks).map((item) => (
                <Task
                  key={item.id}
                  item={item}
                  deleteTask={_deleteTask}
                  toggleTask={_toggleTask}
                  updateTask={_updateTask}
                />
              ))}
        </ScrollView>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  datepicker: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  weekpicker: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: '100%',
  },
  week: {
    alignItems: 'center',
  },
  todo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  timePick: {
    width: Dimensions.get('window').width - 10,
    alignItems: 'flex-start',
    left: 10,

    flexDirection: 'row',
    //alignItems: 'center',
    //  justifyContent: 'center',

    //paddingHorizontal: 17,
    //marginRight: Dimensions.get('window').width - 220,
    marginBottom: 10,
  },
  weekcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',

    // width: '100%',
    width: Dimensions.get('window').width - 10,
  },
  week: {
    alignItems: 'center',
  },
  weekDayItems: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },

  weekDayText: { fontSize: 17, marginBottom: 5, fontWeight: '500' },
  dayText: { fontSize: 16 },
  selectedDayText: {
    color: 'white',
    fontWeight: 'bold',
  },
  selectedTouchableDay: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,

    borderRadius: 30,
  },
  post_save_container: {
    bottom: 10,
    width: '100%',
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
})

export default MyRoutineScreen_save