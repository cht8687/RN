'use strict'

import React, {
  Component,
  StyleSheet,
  View,
  Text,
  TabBarIOS,
  TouchableHighlight,
  PropTypes
} from 'react-native';

export default class Live extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { actions } = this.props;
    actions.fetchNews();
  }

  render() {
    const { newsData } = this.props;
    return (
      <View style={[styles.tabContent]}>
        <Text style={styles.tabText}>Live news</Text>
        {
          newsData.map((e, index) => (
       
            <Text key={index}>
              {e.lineName}
            </Text>
      
          ))
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    margin: 50,
  },
  tabTint: {
    color: '#1B82C5'
  },
  barTint: {
    color: 'white'
  }
})

Live.propTypes = {
  actions: PropTypes.object,
  newsData: PropTypes.array
}
