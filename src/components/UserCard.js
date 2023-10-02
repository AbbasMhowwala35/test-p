import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
  return (
    <Col lg={4} md={4} sm={12}>
        <Link to={`/user/${user.id}`}>
        <Card className='text-center'>
            <Card.Body>
            <Card.Img className='mb-3 avtar-img'  variant="top" src={user.image} />
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>Posts: ({user.posts.length})</Card.Text>
            </Card.Body>
        </Card>
        </Link>
    </Col>
  );
};

export default UserCard;
