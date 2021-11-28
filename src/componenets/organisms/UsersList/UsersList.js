import React from 'react';
import UsersListItem from 'componenets/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles';
import { StyledTitle } from './UsersList.styles';

const UsersList = ({ users, deleteUser }) => {

  return (
    <>
      <Wrapper>
        <StyledTitle>Students list</StyledTitle>
        <StyledList>
          {users.map((userData) => (
            // funkcja jest przekazywna do komenentu 
            <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
}


UsersList.propTypes = {};

export default UsersList;
