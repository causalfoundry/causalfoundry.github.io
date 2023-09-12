const parseTwitter = (text: string) => {
  const regex = /@(\w+)/g;

  const parsedText = text.replace(
    regex,
    '<a href="https://twitter.com/$1">@$1</a>'
  );

  return parsedText;
};

export { parseTwitter };
