import Sortable from 'sortablejs';

const initDragAndDrop = () => {
  const lists = document.querySelectorAll('.js-drag-container');
  if (!lists) {
    return;
  }
  const listsArray = Array.prototype.slice.call(lists, 0);
  listsArray.forEach((list) => {
    /* eslint-disable-next-line */
    new Sortable(list, {
      handle: '.js-drag-handle',
      // animation: 150,
    });
  });
};

export {initDragAndDrop};
