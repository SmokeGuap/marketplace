const readMore = (text: string) => {
  if (text.length < 75) return text;
  else {
    return text.slice(0, 75).concat('... ');
  }
};

export default readMore;
