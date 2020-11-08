import { Typography } from '@material-ui/core';
import React from 'react';
import TrelloCard from './TrelloCard';
import { Droppable } from 'react-beautiful-dnd';

const TrelloList = ({ title, cards, listId }) => {
  return (
    <Droppable droppableId={listId}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={{
            width: 300,
            backgroundColor: '#dfe3e6',
            borderRadius: 4,
            padding: 8,
            marginRight: 8,
          }}
        >
          <Typography>{title}</Typography>
          {cards.map((card, index) => (
            <TrelloCard
              key={card.id}
              title={card.text}
              cardId={card.id}
              index={index}
            ></TrelloCard>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TrelloList;
