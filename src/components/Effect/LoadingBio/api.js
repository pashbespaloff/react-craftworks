const fetchUsers = async() => {
  return new Promise((resolve, reject) => (
    setTimeout(
      () => {
        if (db) resolve(Object.keys(db))
        else reject(new Error("database is empty or invalid"))
      }, 2023)
    )
  )
};

const fetchBio = async(person) => {
  return new Promise((resolve, reject) => (
    setTimeout(
      () => {
        if (db[person]) resolve(db[person])
        else reject(new Error("incorrect name"))
      }, 2023)
    )
  )
};

const db = {
  aristotelés: 'this is a biography of aristotelés.',
  plato: 'this is a biography of plato.',
  diogenes: 'this is a biography of diogenes.',
};

export {fetchUsers, fetchBio};