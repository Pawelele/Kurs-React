import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { Wrapper } from './UsersListItem.styles';
import Average from 'components/atoms/Average/Average';
import Info from 'components/atoms/Info/Info';

const UsersListItem = ({ deleteUser, userData }) => (
  <Wrapper>
    <Average userData={userData} />
    <Info userData={userData} />
    <Button onClick={() => deleteUser(userData.name)} />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
