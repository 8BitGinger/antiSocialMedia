import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {
  Card,
  CardContent,
  CardHeader,
  CardMeta,
  CardDescription,
  Icon,
  Label,
  Image,
  Button,
} from 'semantic-ui-react';
import avatar from '../assets/coder.png';
import LikeButton from './LikeButton';

// var relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

var options = [
  'IncognitoPost#',
  'AnonymousPost#',
  'SecretPost#',
  'ShadowPost#',
  'HiddenPost#',
  'MysteryPost#',
  'UnknownPost#',
  'GhostPost#',
  'StealthPost#',
  'PhantomPost#',
  'SilentPost#',
  'InvisiblePost#',
  'ConcealedPost#',
  'CovertPost#',
  'UnseenPost#',
  'HiddenPost#',
  'VeiledPost#',
  'MaskedPost#',
  'CloakedPost#',
  'ObscuredPost#',
  'DisguisedPost#',
];
var choice = options[Math.floor(Math.random() * options.length)];

const PostCard = ({ post: { body, createdAt, _id } }) => {
  return (
    <Card fluid>
      <CardContent>
        <div className="row">
          <Image className="avatar" floated="left" size="tiny" src={avatar} />
          <CardHeader>
            <div>
              {choice}{' '}
              <span id="idHolder" className="id-post">
                {_id}
              </span>
            </div>
          </CardHeader>
        </div>
        <CardDescription>{body}</CardDescription>
        <div className="divider"></div>
        <CardMeta>{dayjs(createdAt).fromNow()}</CardMeta>
      </CardContent>
      <CardContent extra>
        <LikeButton />
      </CardContent>
    </Card>
  );
};

export default PostCard;
