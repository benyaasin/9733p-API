import React from "react"
import ListGroup from 'react-bootstrap/ListGroup';
import { useLoaderData, Link } from 'react-router-dom'
import { UserProps } from '../types';
import Container from 'react-bootstrap/Container';

export const usersLoader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
}

function UsersPage() {
  const users = useLoaderData() as UserProps[]

  return (
    <Container className="py-4">
      <div className="users-page text-center">
        <h1 className="mb-4">Users</h1>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <ListGroup>
              {users.map((user) => (
                <ListGroup.Item 
                  key={user.id} 
                  className="mb-3 p-3 shadow-sm rounded"
                  style={{ backgroundColor: '#fff' }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="text-start">
                      <h5 className="mb-1">{user.name}</h5>
                      <small className="text-muted">@{user.username}</small>
                    </div>
                    <Link 
                      to={`/users/${user.id}`} 
                      className="btn btn-primary btn-sm"
                      style={{ minWidth: '100px' }}
                    >
                      View Profile
                    </Link>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default UsersPage