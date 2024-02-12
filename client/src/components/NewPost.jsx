import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_POST_MUTATION } from '../utils/mutations';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { GridRow } from 'semantic-ui-react';

const NewPost = () => {
  const [posts, setPosts] = useState('');

  const [createPost, { error }] = useMutation(CREATE_POST_MUTATION);

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    let body = event.target[0].value;
    console.log(body);
    try {
      const { data } = await createPost({
        variables: { body },
      });
      setPosts('');
    } catch (err) {
      console.error(err);
    }
    window.location.reload();
  };

  const user = localStorage.getItem('id');

  return (
    <>
      <GridRow className="page-picture">
        <a href="#post">
          <div className="post-banner"></div>
        </a>
        <h1>New Post</h1>
      </GridRow>
      <div className="card newPost">
        <form onSubmit={handleOnSubmit}>
          <div className="form-group">
            <label htmlFor="post-text">Share Your Thoughts</label>
            <textarea
              className="form-input"
              placeholder="What's on your mind?"
              id="post-text"
            ></textarea>
          </div>
          <button className="btn primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default NewPost;
