import React from 'react'
import {useState , useEffect} from 'react';
import axios from 'axios';
import './PostList.css'

function PostList(props) {

    const [posts,setData] = useState([])

    useEffect(()=>{
        console.log("Adding component")
        axios.get('http://localhost:3002/posts')
        .then((response)=>{
            setData(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
    console.log(posts)

    return (
        <div>
            {posts.map(post=>(
                <div className='posted'>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                    <h3>-{post.author}</h3>
                </div>
            ))}
        </div>
    )
}

export default PostList
