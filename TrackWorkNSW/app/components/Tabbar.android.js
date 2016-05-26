'use strict'

import {
  StyleSheet,
  View,
  Text,
  ToolbarAndroid,
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

  renderContent() {
    const { tabName } = this.props;
    if (tabName == LIVE) {
      {this._renderCommingTrackWork()}
    } else if (tabName == COMMING) {
      {this._renderCommingTrackWork()}
    }
  }

  render () {
    return (
      <View style={styles.container}>
        {this.renderContent()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
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
