import React from 'react';
import { Button, Icon, Label } from 'semantic-ui-react';

const Reaction = () => (
  <div>
    <Button className="secondary p-1" as="div" labelPosition="right">
      <Button icon>
        <Icon name="eye" />
        Like
      </Button>
      <Label as="a" basic pointing="left">
        2,048
      </Label>
    </Button>
  </div>
);

export default Reaction;
