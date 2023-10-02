import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import userData from './userData';
const UserDetail = () => {
  const { id } = useParams();
  const userId = parseInt(id);
  const user = userData.find((u) => u.id === userId);
  if (!user) {
    return <div>User not found</div>;
  }
  return (
    <Container>
    <Row>
    <Col lg={12} md={12} sm={12}>
        <Link className='btn btn-primary mt-5' to="/">Back to User Directory</Link>
        <Card className='my-3'>
        <Card.Body>
          <div className="user-info">
            <Card.Title>{user.name}</Card.Title>
             <Card.Text>Username: {user.username}</Card.Text>
             <Card.Text>Catch Phrase: {user.catchPhrase}</Card.Text>
             <Card.Text>Address: {user.address}</Card.Text>
             <Card.Text>Email: {user.email}</Card.Text>
             <Card.Text>Phone: {user.phone}</Card.Text>
          </div>
          </Card.Body>
          </Card>
          <div className="user-posts">
          <h2 className='my-5 text-center'>Posts</h2>
            <Row>
              {user.posts.map((post) => (
                <Col lg={4} md={4} sm={12} key={post.id}>
                <Card className='my-3'>
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.content}</Card.Text>
                  </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserDetail;
