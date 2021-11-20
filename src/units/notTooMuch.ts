const notTooMuch = (str: string, limit: number) => {
  if (str.length < limit) return str;
  return str.slice(0, limit) + "...";
};
export default notTooMuch;
