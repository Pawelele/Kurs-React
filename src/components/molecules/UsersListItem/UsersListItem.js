import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper } from './UsersListItem.styles';
import Average from 'components/atoms/Average/Average';
import Info from 'components/atoms/Info/Info';
import { UserShape } from 'types';
import { UsersContext } from 'providers/UsersProvider';

const UsersListItem = ({ userData }) => {
  const { deleteUser } = useContext(UsersContext);

  return (
    <Wrapper>
      <Average userData={userData} />
      <Info userData={userData} />
      <DeleteButton onClick={() => deleteUser(userData.name)} />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default UsersListItem;
