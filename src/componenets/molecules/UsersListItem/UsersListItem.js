import React from 'react';
import PropTypes from 'prop-types';
import Button from 'componenets/atoms/Button/Button';
import { Wrapper, StyledAverage, StyledInfo } from './UsersListItem.styles';

const UsersListItem = ({ userData: { average = '0', name, attendance = '0%' } }) => {
  return (
    <Wrapper>
      <StyledAverage value={average}>{average}</StyledAverage>
      <StyledInfo>
        <p>
          {name}
          <Button />
        </p>
        <p>attendence: {attendance}</p>
      </StyledInfo>
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string,
    name: PropTypes.string.isRequired,
    attendane: PropTypes.string,
  }),
};

export default UsersListItem;
