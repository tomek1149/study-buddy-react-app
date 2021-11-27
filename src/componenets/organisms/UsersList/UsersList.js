import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';
import UsersListItem from 'componenets/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const UsersList = () => {
  const [users, setUsers] = useState(usersData);
  // stan dla userów 
  const [isLoading, setLoadingState] = useState([]);
  // stan dla loadingu


  useEffect(() => {
    //przed pobraniem danych wyrzuca nam LOadding
    setLoadingState(true);
    mockAPI()
      .then(data => {
        //po pobraniu dnaych wyrzuca nam USer list
        setLoadingState(false)
        //user jest updatowany po załadoaniu data wykonuje się render- sprawdzenie czy zaszła zmiana jeśli tak to update 
        setUsers(data)
      })
      .catch(err => console.log(err));
  }, []);




  //stan dla userów jest zmieniany wqtedy kiedy name nie może być równe z imieniem które podajemy
  const deleteUser = (name) => {
    const filteredUsers = users.filter(user => user.name !== name);
    // filtered users to nowy stan
    setUsers(filteredUsers)
  }

  return (
    <Wrapper>
      <h1>{isLoading ? 'Loading...' : `User's list`}</h1>
      <StyledList>
        {users.map((userData) => (
          // funkcja jest przekazywna do komenentu 
          <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
        ))}

      </StyledList>
    </Wrapper>
  );
}


UsersList.propTypes = {};

export default UsersList;
