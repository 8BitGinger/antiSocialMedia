import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_LIKE } from '../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../utils/queries';
import { Button } from 'semantic-ui-react';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const [addLike, { error }] = useMutation(ADD_LIKE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addLike({
        variables: { postId, likes },
      });

      setLiked('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Button
      basic
      className="primary btn"
      onClick={(handleFormSubmit, () => setLiked(!liked))}
    >
      {liked ? 'Unlike' : 'Like'}
    </Button>
  );
};

export default LikeButton;
