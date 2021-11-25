import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'componenets/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles';


const UsersList = () => {
  return (
    <Wrapper>
      <StyledList>
        {users.map((userData, i) => (
          <UsersListItem index={i} key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

UsersList.propTypes = {};

export default UsersList;
