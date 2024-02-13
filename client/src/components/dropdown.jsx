import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const options = [
  { key: 'Cool', text: 'Cool', value: 'Cool' },
  { key: 'Seen', text: 'Seen', value: 'Seen' },
  { key: 'Uncool', text: 'Graphic Uncool', value: 'Uncool' },
];

const DropDownReaction = () => (
  <Dropdown placeholder="Reaction" fluid multiple selection options={options} />
);

export default DropDownReaction;
