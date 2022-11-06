import Sortable from 'sortablejs';

const initDragAndDrop = () => {
  const lists = document.querySelectorAll(".js-drag-container");
  if(!lists) {
    return;
  }
  const listsArray = Array.prototype.slice.call(lists,0);
  listsArray.forEach((list) => {
    new Sortable(list, {
      handle: '.js-drag-handle',
      // animation: 150,
    });
  })
}

export {initDragAndDrop};
