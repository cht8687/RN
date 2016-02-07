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
import {
  LIVE,
  COMMING
} from '../constant/tab';
import Live from './Live';
import Incomming from './Incomming';

export default class Tabbar extends Component {

  constructor(props) {
    super(props);
  }

  onTapTab (tab) {
    const { actions } = this.props;
    actions.changeTab(tab);
  }

  _renderLiveTrackWork() {
    const { actions, newsData } = this.props;
    return (
      <Live
        actions={actions}
        newsData={newsData}
        style={styles.tabContent}
      />
    );
  }

  _renderCommingTrackWork() {
    const { actions, inCommingNewsData } = this.props;
    return (
      <Incomming
        actions={actions}
        inCommingNewsData={inCommingNewsData}
        style={styles.tabContent}
      />
    );
  }

  render () {
    const { tabName } = this.props;

    return (
      <TabBarIOS>
        <TabBarIOS.Item
          systemIcon="featured"
          selected={tabName === LIVE}
          onPress={this.onTapTab.bind(this, LIVE)} 
          >
          {this._renderLiveTrackWork()}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="history"
          selected={tabName === COMMING}
          onPress={this.onTapTab.bind(this, COMMING)} 
          >
          {this._renderCommingTrackWork()}
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    flexDirection: 'column'
  },
  tabText: {
    margin: 50
  },
  tabTint: {
    color: '#1B82C5'
  },
  barTint: {
    color: 'white'
  }
})

Tabbar.propTypes = {
  tabName: PropTypes.string,
  actions: PropTypes.object,
  newsData: PropTypes.array,
  inCommingNewsData: PropTypes.array
}
