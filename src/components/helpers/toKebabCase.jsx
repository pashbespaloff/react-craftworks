const toKebabCase = (text) => {
  return String(text)
    .replaceAll(/[^a-zA-Z ]/g, "")
    .replaceAll(" ", "-")
    .replaceAll("--", "-")
};

export default toKebabCase;