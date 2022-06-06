const replace = (text, replaceMap) => {
  Object.entries(replaceMap).forEach(([oldText, newText]) => {
    text = text.replaceAll(`{${oldText}}`, newText);
  });
  return text;
};

export default replace;
