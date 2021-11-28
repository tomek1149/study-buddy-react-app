import React, { useState, useEffect } from 'react';
import UsersList from 'componenets/organisms/UsersList/UsersList';
import { ThemeProvider } from 'styled-components';
import { users as usersData } from 'data/users';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form from 'componenets/organisms/Form/Form';


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

const initialFormState = {
  name: '',
  attendance: '',
  average: ''
}

const Root = () => {
  const [users, setUsers] = useState(usersData);
  // stan dla userów 
  const [formValues, setFormsValues] = useState(initialFormState);

  useEffect(() => {
    mockAPI()
      .then(data => {
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

  //state na wpisywaniu do formlaarza
  const handleInputChange = (e) => {
    console.log(formValues)
    setFormsValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  //date dodania do formularza

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average
    }

    //stan userów z nowym userem
    setUsers([newUser, ...users])

    //czyszczenie formularza
    setFormsValues(initialFormState)
  }

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/add-user">Add user</Link>
          </nav>
          <Routes>
            <Route path="/" exact element={<UsersList deleteUser={deleteUser} users={users} />} />
            <Route path="/add-user" element={<Form formValues={formValues} handleAddUser={handleAddUser} handleInputChange={handleInputChange} />} />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </Router>
  )
};

Root.propTypes = {};

export default Root;
