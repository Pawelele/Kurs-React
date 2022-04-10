import React from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

const Dashboard = ({ users, deleteUser }) => {
  return (
    <ViewWrapper>
      <UsersList deleteUser={deleteUser} users={users} />
    </ViewWrapper>
  );
};

export default Dashboard;
