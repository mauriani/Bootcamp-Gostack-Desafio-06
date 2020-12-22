import React, {Component} from 'react';
import {WebView} from 'react-native-webview';
import PropTypes from 'prop-types';

import {Container} from './styles';

export default class Repository extends Component {
  static PropTypes = {
    navigation: PropTypes.shape({
      route: PropTypes.func,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      url: this.props.route.params.user.html_url,
    };
  }

  render() {
    const {url} = this.state;
    return (
      <WebView source={{uri: url}} style={{flex: 1, alignSelf: 'stretch'}} />
    );
  }
}
