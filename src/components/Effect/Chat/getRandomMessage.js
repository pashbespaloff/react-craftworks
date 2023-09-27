export default function getRandomMessage() {
  return `new message: ${messages[Math.floor(Math.random() * messages.length)]}`;
};

const messages = [
  "hi", 
  "hey",
  "yo",
  "what's up", 
  "glory to ukraine", 
  "<3", 
  "david bowie rules",
  "brno is a pretty city",
  "olomouc is a pretty city",
  "ljubljana is a pretty city",
  "paris is too expensive for me",
  "london is too expensive for me",
  "albania is undervalued",
  "new slowdive album is dope",
  "go see new photo of my cat",
  "bologna is full of parties",
  "czechs have the best beer",
  "kanye is genius",
  "black metal rules",
];