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
import allActions from '../actions';
import Tabbar from '../components/Tabbar';


export default class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      tab: null
    };
  }

  componentWillReceiveProps (props) {
    const { application } = props;
    this.setState({
      tab: application.tab
    })
  }

  render () {
    const { tab } = this.state;
    const { actions } = this.props;
    return (
      <View style={styles.container}>
        <Tabbar tab={'game'} actions={actions}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

App.propTypes = {
  actions: PropTypes.object
}


function mapStateToProps(state) {
  return {
    application: state.application
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(allActions, dispatch)
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
