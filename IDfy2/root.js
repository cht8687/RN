
import React, { AppRegistry, 
  Component 
} from 'react-native';
import App from 'src/containers/app';
import { Provider } from 'react-redux/native';
import configureStore from './store/configure-store';

const store = configureStore()

export default class IDfy2 extends Component {

  render() {
    return (
      <Provider store={store}>
        {() => <App />}
      </Provider>
    )
  }
}
