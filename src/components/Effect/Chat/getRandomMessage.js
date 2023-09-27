export default function getRandomMessage(room = "general") {
  const msgs = messages[room];
  return `new message: ${msgs[Math.floor(Math.random() * msgs.length)]}`;
};

const messages = {
  general: [
    "hi", 
    "hey",
    "yo",
    "what's up", 
    "glory to ukraine", 
    "<3", 
    "lol",
    "go see new photo of my cat",
    "send nudes",
    "omg",
  ],
  music: [
    "hi", 
    "hey",
    "yo",
    "what's up", 
    "glory to ukraine", 
    "<3",
    "david bowie rules",
    "new slowdive album is dope",
    "kanye is genius",
    "black metal rules",
    "check out my new phonk beat",
    "phonk sucks",
    "dark jazz is sooo deep",
    "you understand nothing in post ambient metal",
  ],
  travel: [
    "hi", 
    "hey",
    "yo",
    "what's up", 
    "glory to ukraine", 
    "<3", 
    "brno is a pretty city",
    "olomouc is a pretty city",
    "ljubljana is a pretty city",
    "paris is too expensive for me",
    "london is too expensive for me",
    "albania is undervalued",
    "bologna is full of parties",
    "czechs have the best beer",
  ],
};