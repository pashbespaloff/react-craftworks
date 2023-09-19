import React, {useRef, useEffect} from 'react';
import style from './TodoEffect.module.css';

export default function TodoTitle({title, isEditing, setTitle}) {
  const inputReference = useRef(null);

  useEffect(() => {
    if (isEditing) {
      const end = inputReference.current.value.length;
      inputReference.current.setSelectionRange(end, end);
      inputReference.current.focus();
    };
  }, [isEditing]);

  return (
    <textarea
      className={style.title}
      ref={inputReference}
      autoFocus={isEditing ? true : null}
      value={title}
      rows={title.length > 26 ? "2" : "1"}
      disabled={isEditing ? null : true}
      onChange={(e) => setTitle(e.target.value)}
    />
  );
};