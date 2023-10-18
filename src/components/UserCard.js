import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../App.css";
const UserCard = ({users, posts}) => {
    const navigate = useNavigate();
    const navigateToUserDetail = (userData) => {
        navigate(`/user/${userData.id}`, { state: userData });
    };
  return (
    <div style={{ border: "1px solid", textAlign: "center" }}>
      <h3>Directory</h3>
      {users?.map((item, index) => {
        const userPosts = posts?.filter(post => post.userId === item.id)
        return (
          <div
            key={index}
            className="user-card"
            onClick={() => navigateToUserDetail(item)}
            style={{
              display: "flex",
              border: "1px solid",
              padding: "10px",
              margin: "5px",
              justifyContent: "space-between",
            }}
          >
            <div className="user-name">{item.name}</div>
            <div className="user-posts-count">No. of posts: {userPosts?.length} </div>
          </div>
        )
      })}
    </div>
  )
}

export default UserCard