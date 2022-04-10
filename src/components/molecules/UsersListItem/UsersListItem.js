import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper } from './UsersListItem.styles';
import Average from 'components/atoms/Average/Average';
import Info from 'components/atoms/Info/Info';
import { UserShape } from 'types';

const UsersListItem = ({ deleteUser, userData }) => (
  <Wrapper>
    <Average userData={userData} />
    <Info userData={userData} />
    <DeleteButton onClick={() => deleteUser(userData.name)} />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default UsersListItem;
