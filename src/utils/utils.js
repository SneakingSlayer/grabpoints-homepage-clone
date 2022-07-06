export const dateTimeFormat = (val) => {
  const milliseconds = val;
  const dateObject = new Date(milliseconds);
  const humanDateFormat = dateObject.toLocaleString();
  return humanDateFormat;
};
