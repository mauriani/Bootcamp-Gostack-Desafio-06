import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

export default class User extends Component {
  static PropTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      route: PropTypes.func,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      stars: [],
      user: this.props.route.params.user,
      page: 1,
      refreshing: false,
      loading: false,
    };
  }

  async componentDidMount() {
    this.load();
  }

  load = async (page = 1) => {
    this.setState({loading: true});

    const {stars} = this.state;

    const user = this.props.route.params.user;
    const response = await api.get(`/users/${user.login}/starred`, {
      params: {page},
    });

    this.setState({
      stars: page >= 2 ? [...stars, ...response.data] : response.data,
      page,
      loading: false,
    });
  };

  loadMore = () => {
    const {page} = this.state;

    const next = page + 1;
    this.load(next);
  };

  refreshingList = () => {
    this.setState(
      {
        refreshing: true,
        stars: [],
      },
      this.load
    );
  };

  handleNavigate = (user) => {
    const {navigation} = this.props;
    navigation.navigate('Repository', {user});
  };
  render() {
    const {stars, user, loading, refreshing} = this.state;

    return (
      <Container>
        <Header>
          <Avatar source={{uri: user.avatar}}></Avatar>
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>

        {loading ? (
          <ActivityIndicator color="#111" size="large" />
        ) : (
          <Stars
            data={stars}
            keyExtractor={(star) => String(star.id)}
            onRefresh={this.refreshList}
            refreshing={refreshing}
            onEndReachedThreshold={0.2}
            onEndReached={this.loadMore}
            renderItem={({item}) => (
              <Starred onPress={() => this.handleNavigate(item)}>
                <OwnerAvatar source={{uri: item.owner.avatar_url}} />
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.owner.login}</Author>
                </Info>
              </Starred>
            )}
          />
        )}
      </Container>
    );
  }
}
