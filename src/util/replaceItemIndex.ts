const replaceItemAtIndex = (
  array: Array<any>,
  index: number,
  newValue: any,
) => [...array.slice(0, index), newValue, ...array.slice(index + 1)];

export { replaceItemAtIndex };
