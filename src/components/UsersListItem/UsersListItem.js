import React from 'react';
import PropTypes from 'prop-types';

const UsersListItem = ({ userData }) => (
  <li>
    <div>{userData.avarage}</div>
    <div>
      <p>{userData.name}</p>
      <p>attendance: {userData.attendance}</p>
    </div>
    <button>X</button>
  </li>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
