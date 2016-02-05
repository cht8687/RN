'use strict'

import React, {
  Component,
  StyleSheet,
  View,
  Text,
  TabBarIOS,
  TouchableHighlight,
  PropTypes,
  ListView
} from 'react-native';

export default class Live extends Component {

  constructor(props) {
    super(props);

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}); 
    const { newsData } = this.props;

    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2'])
    };
  }

  componentWillMount() {
    const { actions } = this.props;
    actions.fetchNews();
  }

  _renderRow(rowData) {
    const a = 1;
    return <Text>{rowData}</Text>
  }

  render() {

    return (
      <View style={[styles.tabContent]}>
        <Text style={styles.tabText}>Live news</Text>
          <ListView
            dataSource={this.state.dataSource} 
            renderRow={(rowData) => <Text>{rowData}</Text>}
          />
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
