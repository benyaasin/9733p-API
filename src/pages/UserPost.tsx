import React, { useEffect, useState } from 'react'
import { ListGroup, Card } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { PostParams } from '../types';

const fetchUserPosts = async (userId: string | undefined) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    return await response.json();
};

function UserPost() {
    const [userPosts, setUserPosts] = useState<PostParams[]>([])
    const { userId } = useParams<{ userId: string }>()

    useEffect(() => {
        const getUserPosts = async () => {
            if (!userId) return;
            const postsData = await fetchUserPosts(userId)
            setUserPosts(postsData)
        };
        getUserPosts()
    }, [userId]);

    return (
        <div className="posts-container">
            <h2 className="mb-4">Posts</h2>
            <ListGroup>
                {userPosts.map((post) => (
                    <ListGroup.Item key={post.id} className="mb-3">
                        <Card>
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>{post.body}</Card.Text>
                                <Link 
                                    to={`/users/${userId}/posts/${post.id}`} 
                                    className="btn btn-primary btn-sm"
                                >
                                    Read More
                                </Link>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
}

export default UserPost;