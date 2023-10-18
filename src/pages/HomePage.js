import React from 'react'
import UserCard from '../components/UserCard'
import "../App.css";
const HomePage = ({users, posts,loading, postLoading}) => {
    if(loading && postLoading){
        return(
            <div>
                <p>
                    Loading...
                </p>
            </div>
        )
    }
    return (
        <div className='App'>
            <UserCard users={users} posts={posts}/>
        </div>
    )
}

export default HomePage