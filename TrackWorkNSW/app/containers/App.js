'use strict'

import React, {
  Component,
  View,
  StyleSheet,
  PropTypes,
  Text
} from 'react-native';
import { connect } from 'react-redux/native';
import { bindActionCreators } from 'redux';
import allActions from '../actions';
import { Tabbar } from '../components/Tabbar';


export default class App extends Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(props) {
    const { application } = props;
    this.setState({
      tab: application.tab
    })
  }

  render() {

    return (
      <View style={styles.container}>
        <Tabbar tab={'Live'} />
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
  tab: PropTypes.string
}

export default connect(state => {
  return {
    application: state.application
  }
}, dispatch => {
  return {
    actions: bindActionCreators(allActions, dispatch)
  }
})(App)


// function mapStateToProps(state) {
//   return {
//     application: state.application
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(allActions, dispatch)
//   };
// }


// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App)
