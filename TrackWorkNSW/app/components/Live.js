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
      <View style={styles.listViewContainer}>
        <Text style={styles.lineName}> {rowData.lineName} </Text>
        <Text style={styles.serviceStatus}> {rowData.ServiceStatus} </Text>
      </View>
    )
  }

  render() {

    return (
      <View style={[styles.tabContent]}>
        <View style={styles.tabHeader}>
          <Text style={styles.tabText}> Live Track News </Text>
        </View>
        
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

  },
  tabHeader: {
    alignItems: 'center',
    marginTop: 15
  },
  tabText: {

  },
  tabTint: {
    color: '#1B82C5'
  },
  barTint: {
    color: 'white'
  },
  listView: {
    flex: 1,
    marginTop: 20
  },
  listViewContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    borderColor: '#0099AA',
    borderWidth: 2,
    marginTop: 3
  },
  lineName: {
    color: '#000',
    fontSize: 11,
    marginTop: 2
  },
  serviceStatus: {
    color: '#000',
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
