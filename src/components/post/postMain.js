import React from 'react';
import GetAllPost from './postGETall';
import PostGetByID from './postGETbyID';
import PostDeleteById from './postDeleteByID';
import AddNewPost from './newPost';
import UpdatePost from './postUPDATE';

function PostMain() {
  return (
      <>
        <GetAllPost /> <br /> <br />
        <PostGetByID /> <br/><br/>
        <PostDeleteById />
        <AddNewPost />
        <UpdatePost />

      </>
    )
}

export default PostMain;