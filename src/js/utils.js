export const clickLabel = (item) => {
  item.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      item.click();
    }
  });
};
