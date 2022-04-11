import React, { useContext } from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { Title } from 'components/atoms/Title/Title';
import { UsersContext } from 'providers/UsersProvider';

const UsersList = () => {
  const { users } = useContext(UsersContext);

  return (
    <>
      <StyledList>
        <Title>User's List</Title>
        {users.map((userData) => (
          <UsersListItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

export default UsersList;
