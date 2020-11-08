import { DRAG_ITEM } from '../actions/listActions';

const initialState = [
  {
    title: 'first List',
    id: 'list-0',
    cards: [
      {
        id: 'card-0',
        text: 'first list first item',
      },
      {
        id: 'card-1',
        text: 'first list second item',
      },
      {
        id: 'card-2',
        text: 'first list third item',
      },
      {
        id: 'card-3',
        text: 'first list forth item',
      },
    ],
  },
  {
    title: 'second List',
    id: 'list-1',
    cards: [
      {
        id: 'card-4',
        text: 'second list first item',
      },
      {
        id: 'card-5',
        text: 'second list second item',
      },
      {
        id: 'card-6',
        text: 'second list third item',
      },
      {
        id: 'card-7',
        text: 'second list forth item',
      },
    ],
  },
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case DRAG_ITEM:
      const {
        dragItemStart,
        dragItemEnd,
        dragItemStartIndex,
        dragItemEndIndex,
      } = action.data;
      const newState = [...state];
      // dropped in same list
      if (dragItemStart === dragItemEnd) {
        const list = state.find((listItem) => listItem.id === dragItemStart);
        const card = list.cards.splice(dragItemStartIndex, 1);
        list.cards.splice(dragItemEndIndex, 0, ...card);
      }

      //drop in other list
      if (dragItemStart !== dragItemEnd) {
        // start list
        const listStart = state.find(
          (listItem) => listItem.id === dragItemStart
        );

        // card item
        const card = listStart.cards.splice(dragItemStartIndex, 1);

        // end list
        const endList = state.find((listItem) => listItem.id === dragItemEnd);

        // update cards
        endList.cards.splice(dragItemEndIndex, 0, ...card);
      }
      return newState;
    default:
      return state;
  }
};

export default listReducer;
