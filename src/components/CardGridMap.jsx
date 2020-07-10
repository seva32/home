import React from 'react';
import faker from 'faker';
import Container from './Container';
import Heading from './Heading';
import Flex from './Flex';
import Card from './Card';

const randomCards = [];

for (let i = 0; i < 9; i++) {
  randomCards.push({
    title: faker.lorem.words(2),
    copy: faker.lorem.sentences(3),
  });
}

const CardSampleMap = () => {
  return (
    <div>
      <Container>
        <Heading>Card List</Heading>
        <Flex>
          {randomCards.map((el, index) => {
            return (
              <Card
                primary
                key={index}
                delay={index * 125}
                style={{ width: '25%' }}
              >
                <Heading style={{ color: '#fff' }} h4>
                  {el.title}
                </Heading>
                <p>{el.copy}</p>
              </Card>
            );
          })}
        </Flex>
      </Container>
    </div>
  );
};

export default CardSampleMap;
