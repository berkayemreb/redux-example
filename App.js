import { Text, View, Button } from 'react-native';
import { legacy_createStore as createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

const initialState = {
  counter: 0
}

function reducers(state, action) { 
  switch (action.type) {
    case 'UPDATE_COUNTER':
      return { ...state, counter: state.counter + 1 }
    default:
      return state;
  }
}

export default function App() {
  return (
    <Provider store={createStore(reducers, initialState)}>
      <View style={{ flex: 1, padding: 30 }}>
        <FirstComponent />
        <SecondComponent />
      </View>
    </Provider>
  );
}


const FirstComponent = () => {
  const counter = useSelector(selector => selector.counter); 
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch({ type: 'UPDATE_COUNTER' });
  }
  return (
    <View style={{ flex: 1, backgroundColor: 'gray' }}>
      <Text style={{ fontSize: 20 }}>FirstComponent! counter: {counter} </Text>
      <Button title='Update Counter' onPress={handleUpdate} />
    </View>
  )
}


const SecondComponent = () => {
  const counter = useSelector(selector => selector.counter); 
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 20 }}>SecondComponent! counter: {counter} </Text>
    </View>
  )
}


