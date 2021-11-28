import React, {Component} from 'react';

import {connect, ConnectedProps} from 'react-redux';
import {RootState} from 'reducers/rootReducer';
import {toggleLoginModal} from 'reducers/loginModal/actions';

import LoginModal from '../../LoginModal/LoginModal';

const mapStateToProps = (state: RootState) => {
  return {
    showLoginModal: state.loginModal.showLoginModal,
  };
};

const connector = connect(mapStateToProps, {toggleLoginModal});

type Props = ConnectedProps<typeof connector>;

class LoginModalContainer extends Component<Props> {
  render(): JSX.Element {
    return <LoginModal showModal={this.props.showLoginModal} toggleModal={this.props.toggleLoginModal} />;
  }
}

export default connector(LoginModalContainer);