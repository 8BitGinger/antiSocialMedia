import React, { useState, useContext } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_SKILL } from '../utils/mutations';
import { QUERY_SINGLE_POST, QUERY_ME } from '../utils/queries';
import { Button } from 'semantic-ui-react';
import Auth from '../utils/auth';

const LikeButton = (props) => {
  const [liked, setLiked] = useState(false);

  const [skill, setSkill] = useState('');

  const [profileId, setProfileId] = useState('');

  const [addSkill, { error }] = useMutation(ADD_SKILL);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(props.postBody);

    console.log(props.likeId);
    setLiked(true);
    setSkill(props.postBody);
    setProfileId(props.likeId);

    try {
      const data = await addSkill({
        variables: { profileId, skill },
      });

      setSkill('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Button basic className="primary btn" onClick={handleFormSubmit}>
      {liked ? 'Saved!' : 'Save'}
    </Button>
  );
};

export default LikeButton;
