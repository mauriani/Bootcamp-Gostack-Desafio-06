import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Form, Input, SubmitButton} from './styles';

const Main = () => {
  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adicionar Usuário"
        />
        <SubmitButton>
          <Icon name="add" color="#fff" size={20} />
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default Main;
