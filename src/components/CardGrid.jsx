import React from 'react';
import Container from './Container';
import Heading from './Heading';
import Flex from './Flex';
import Card from './Card';

const CardSample = () => {
  return (
    <div>
      <Container>
        <Heading>Card List</Heading>
        <Flex justifyCenter alignStretch contentAround>
          <Card width="30%">
            <Heading h3>Normal Card</Heading>
            <p>
              Nullam quis risus eget urna mollis ornare vel eu leo. Donec id
              elit non mi porta gravida at eget metus. Donec sed odio dui.
            </p>
          </Card>
          <Card width="40%">
            <Heading h3>Big Card</Heading>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Donec sed odio dui. Donec id elit non mi porta gravida at eget
              metus.
            </p>
          </Card>
          <Card primary delay="1500" width="75%">
            <Heading h3 style={{ color: '#fff' }}>
              Primary Delayed Card
            </Heading>
            <p>
              Nullam quis risus eget urna mollis ornare vel eu leo. Donec id
              elit non mi porta gravida at eget metus. Donec sed odio dui.
            </p>
          </Card>
        </Flex>
      </Container>
    </div>
  );
};

export default CardSample;
