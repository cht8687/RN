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
import { changeTab } from '../actions/tab';
console.log(changeTab);

export default class App extends Component {

  constructor (props) {
    super(props);
  }

  componentWillReceiveProps (nextProps) {
    
  }

  render() {
    const { tabName, changeTab } = this.props;

    return (
      <Tabbar
        tabName={tabName}
        changeTab={changeTab}
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
  tabName: PropTypes.string,
  changeTab: PropTypes.func
}


function mapStateToProps(state) {
  return {
    tabName: state.tab.tabName
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeTab: (tab) => dispatch(changeTab(tab))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

// export default connect(state => {
//   return {
//     tabName: state.tab.tabName
//   }
// }, dispatch => {
//   return {
//     actions: dispatch(tabActions)
//   }
// })(App)
