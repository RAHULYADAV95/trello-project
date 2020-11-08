import { Typography } from '@material-ui/core';
import React from 'react';
import TrelloList from './TrelloList';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { dragItem } from '../actions/listActions';

class App extends React.Component {
  render() {
    const { lists } = this.props;
    console.log(this.props.lists);
    return (
      <div>
        <Typography>Trello Board</Typography>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {lists.map((list) => (
              <TrelloList
                listId={list.id}
                key={list.id}
                title={list.title}
                cards={list.cards}
              ></TrelloList>
            ))}
          </div>
        </DragDropContext>
      </div>
    );
  }

  onDragEnd = (output) => {
    const { destination, source, draggableId } = output;
    // if we put card outside the list
    if (!destination) {
      return;
    }
    this.props.dispatch(
      dragItem(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );
  };
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);
