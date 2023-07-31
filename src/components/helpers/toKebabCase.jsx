export default function toKebabCase(text) {
  return String(text)
    .replaceAll(/[^a-zA-Z ]/g, "")
    .replaceAll(" ", "-")
    .replaceAll("--", "-")
    .split(" ")
    .map(word => word[0].toLowerCase() + word.slice(1))
    .join("")
};