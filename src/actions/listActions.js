export const DRAG_ITEM = 'DRAG_ITEM';

export const dragItem = (
  dragItemStart,
  dragItemEnd,
  dragItemStartIndex,
  dragItemEndIndex,
  dragItemId
) => {
  return {
    type: DRAG_ITEM,
    data: {
      dragItemStart,
      dragItemEnd,
      dragItemStartIndex,
      dragItemEndIndex,
      dragItemId,
    },
  };
};
