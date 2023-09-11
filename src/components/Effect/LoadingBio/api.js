const fetchBio = async(person) => {
  return new Promise((resolve, reject) => (
    setInterval(
        () => {
          if (db[person]) resolve(db[person])
          else reject(new Error("incorrect name!"))
        }, 3000
      )
    )
  )
};

const db = {
  aristotelés : 'this is a biography of aristotelés.',
  plato : 'this is a biography of plato.',
  diogenes : 'this is a biography of diogenes.',
};

export {fetchBio, db};