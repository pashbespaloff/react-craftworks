import React, {useState} from 'react';
import AddItem from './AddItem';
import List from './List';
import style from './PackingList.module.css';

export default function PackingList() {
  const [packingList, setPackingList] = useState(initialItems);
  const [total, setTotal] = useState(initialItems.length);
  const [packed, setPacked] = useState(initialItems.reduce(
    (packedItems, item) => packedItems + isPacked(item), 0
  ));

  const handleAddItem = (title) => {
    setTotal(total + 1);
    setPackingList([
      ...packingList,
      { id: nextId++, title: title, packed: false },
    ]);
  };

  const handleChangeItem = (changedItem) => {
    setPackingList(
      packingList.map((item) => {
        return (item.id === changedItem.id) 
          ? changedItem
          : item;
      })
    );

    setPacked(
      (changedItem.packed) 
        ? packed + 1 
        : packed - 1
    );
  };

  const handleDeleteItem = (itemToDelete) => {
    (itemToDelete.packed) && setPacked(packed - 1);
    setTotal(total - 1);
    setPackingList(
      packingList.filter((item) => item.id !== itemToDelete.id)
    );
  }

  return (
    <>
      <AddItem onAddItem={handleAddItem} />
      <List
        packingList={packingList}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
      />
      <p className={style.result}>
        packed: {packed} / {total}
      </p>
    </>
  )
};

let nextId = 3;

const initialItems = [
  { id: 0, title: 'warm socks', packed: true },
  { id: 1, title: 'travel journal', packed: false },
  { id: 2, title: 'watercolors', packed: false },
];

const isPacked = (item) => item.packed ? 1 : 0;