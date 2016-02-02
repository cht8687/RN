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

export default class Tabbar extends Component {

  constructor(props) {
    super(props);
  }

  onTapTab (tab) {
    const { actions } = this.props;
    actions.changeTab(tab);
    const news = actions.fetchNews();
    
  }

  _renderContent(pageText: string) {
    return (
      <View style={[styles.tabContent]}>
        <Text style={styles.tabText}>{pageText}</Text>
      </View>
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
          {this._renderContent('Live TrackWork')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="history"
          selected={tabName === COMMING}
          onPress={this.onTapTab.bind(this, COMMING)} 
          >
          {this._renderContent('Comming Trackwork')}
        </TabBarIOS.Item>
      </TabBarIOS>
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

Tabbar.propTypes = {
  tabName: PropTypes.string,
  actions: PropTypes.object
}
