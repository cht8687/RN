'use strict'

import {
  StyleSheet,
  View,
  Text,
  TabBarIOS,
  TouchableHighlight,
} from 'react-native';
import {
  LIVE,
  COMMING
} from '../constant/tab';
import React, { Component, PropTypes } from 'react';
import Live from './Live';
import Incomming from './Incomming';
import Icon from 'react-native-vector-icons/Ionicons';
import { bindActionCreators } from 'redux';
import allActions from '../actions';
import { connect } from 'react-redux'

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
        <Icon.TabBarItem
          title="Live"
          iconName="wrench"
          selectedIconName="wrench"
          selected={tabName === LIVE}
          onPress={this.onTapTab.bind(this, LIVE)} 
          >
          {this._renderLiveTrackWork()}
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Comming"
          iconName="calendar"
          selectedIconName="calendar"
          selected={tabName === COMMING}
          onPress={this.onTapTab.bind(this, COMMING)} 
          >
          {this._renderCommingTrackWork()}
        </Icon.TabBarItem>
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
  inCommingNewsData: PropTypes.object
}


function mapStateToProps(state) {
  return {
    tabName: state.tab.tabName,
    newsData: state.news.newsData,
    inCommingNewsData: state.news.inCommingNewsData
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
)(Tabbar)