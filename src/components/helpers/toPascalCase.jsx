const toPascalCase = (text) => {
  return String(text)
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join("")
    .replaceAll("&", "And")
    .replaceAll(/[^a-zA-Z ]/g, "")
};

export default toPascalCase;