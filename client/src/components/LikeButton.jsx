import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_LIKE } from '../utils/mutations';
import { QUERY_SINGLE_POST, QUERY_ME } from '../utils/queries';
import { Button } from 'semantic-ui-react';
import Auth from '../utils/auth';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setLiked('Liked');
  };

  return (
    <Button basic className="primary btn" onClick={handleFormSubmit}>
      {liked ? 'Liked!' : 'Like'}
    </Button>
  );
};

export default LikeButton;
