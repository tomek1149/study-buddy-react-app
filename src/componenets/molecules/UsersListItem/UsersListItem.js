import React from 'react';
import PropTypes from 'prop-types';
const UsersListItem = ({
  userData: { average = 'no data to calculate', name, attendance = '0%' },
}) => {
  return (
    <li>
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>attendence: {attendance}</p>
      </div>
      <button>X</button>
    </li>
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
