import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { useLoaderData, useParams } from 'react-router-dom'
import Usertabs from '../components/Usertabs'


export const userDetailLoader = async ({ params }: UserProps) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const userDetails = await response.json()
  return userDetails
}

function UserDetailsPage() {
  const userDetails = useLoaderData() as UserProps
  const { userId } = useParams()
  return (
    <>
      <Container>
        <h1>User Details</h1>
        <h4>Name: {userDetails.name}</h4>
        <h4>Username: {userDetails.username}</h4>
        <p>Email: {userDetails.email}</p>
        <p>Phone: {userDetails.phone}</p>
        <p>Website: {userDetails.website}</p>

      </Container>
      <Usertabs {
        ...{
          postLink: `/users/${userId}/posts`,
          albumsLink: `/users/${userId}/albums`,
          todoLink: `/users/${userId}/todo`
        }
      } />
    </>

  )
}

export default UserDetailsPage