import React from 'react'
import UserProfileComp from '../components/UserProfile'

const UserProfile = ({posts, timeZone,loading, timeZoneLoading}) => {
    if(loading && timeZoneLoading){
        return(
            <div>
                <p>
                    Loading...
                </p>
            </div>
        )
    }
    return (
        <>
        <UserProfileComp posts={posts} timeZone={timeZone}/>
        </>
    )
}

export default UserProfile