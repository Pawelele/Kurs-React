import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { Wrapper } from './UsersListItem.styles';
import Average from 'components/atoms/Avarage/Average';
import Info from 'components/atoms/Info/Info';

const showMessage = (index) => alert(`Student number #${index + 1}`);

const UsersListItem = ({ index, userData }) => (
  <Wrapper>
    <Average userData={userData} />
    <Info userData={userData} />
    <Button onClick={() => showMessage(index)} />
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
