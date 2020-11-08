import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const TrelloCard = ({ title, cardId, index }) => {
  return (
    <Draggable draggableId={cardId} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card style={{ marginBottom: 10 }}>
            <CardContent>
              <Typography>{title}</Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default TrelloCard;
