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

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    };
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.fetchNews();
  }

  componentWillReceiveProps(props) {
    const { dataSource } = this.state;
    const { newsData } = this.props;
    this.setState({
      dataSource: dataSource.cloneWithRows(newsData)
    })
  }

  renderRow(rowData){

    return (
      <View>
        <Text style={styles.lineName}> {rowData.lineName} </Text>
        <Text style={styles.serviceStatus}> {rowData.ServiceStatus} </Text>
      </View>
    )
  }

  render() {

    return (
      <View style={[styles.tabContent]}>
        <Text style={styles.tabText}>Live news</Text>
          <ListView
            dataSource={this.state.dataSource} 
            renderRow={this.renderRow.bind(this)}
            style={styles.listView}
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
  },
  listView: {
    backgroundColor: 'blue',
    flex: 6,
    flexDirection: 'column',
    paddingTop: 12
  },
  lineName: {
    color: '#fff',
    fontSize: 11,
    marginTop: 2
  },
  serviceStatus: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
    position: 'relative',
    top: 0
  }
})

Live.propTypes = {
  actions: PropTypes.object,
  newsData: PropTypes.array
}
