'use strict'

import React, {
  Component,
  View,
  StyleSheet,
  PropTypes,
  Text
} from 'react-native'
import { connect } from 'react-redux/native'
import { bindActionCreators } from 'redux';
import Tabbar from '../components/Tabbar';
import * as tabActions from '../actions/tab';

export default class App extends Component {

  constructor (props) {
    super(props);
  }

  componentWillReceiveProps (nextProps) {
    
  }

  render() {
    const { tabName, actions } = this.props;

    return (
      <Tabbar
        tabName={tabName}
        actions={actions}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

App.propTypes = {
  tabName: PropTypes.string
}


function mapStateToProps(state) {
  return {
    tabName: state.tab.tabName
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(allActions, dispatch)
//   };
// }

// export default connect(
//   mapStateToProps,
// )(App)

export default connect(state => {
  return {
    tabName: state.tab.tabName
  }
}, dispatch => {
  return {
    actions: bindActionCreators(tabActions, dispatch)
  }
})(App)
