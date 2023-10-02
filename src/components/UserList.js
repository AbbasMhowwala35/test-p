import React from 'react';
import { Container, Row } from 'react-bootstrap';
import UserCard from './UserCard';
import userData from './userData';

const UserList = () => {
  return (
    <Container>
        <Row className='mt-5'>
          {userData.map((user) => (
              <UserCard key={user.id} user={user} />
          ))}
      </Row>
    </Container>
  );
};

export default UserList;
