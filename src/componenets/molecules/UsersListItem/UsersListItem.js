import React from 'react';
import PropTypes from 'prop-types';
import Button from 'componenets/atoms/Button/Button';
import { Wrapper, StyledAverage, StyledInfo } from './UsersListItem.styles';
// przekazana funkcja do komontentu w propsach 
const UsersListItem = ({ deleteUser, userData: { average = '0', name, attendance = '0%' } }) => {
  return (
    <Wrapper>
      <StyledAverage value={average}>{average}</StyledAverage>
      <StyledInfo>
        <p>
          {name}
          {/* wywołanie funckcji z parametrem name czyli name ma być inny od tego który jest  */}
          <Button onClick={() => deleteUser(name)} />
        </p>
        <p>attendence: {attendance}</p>
        <p>{average > 3.5 ? 'Good' : `should work more or no data`}</p>
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
