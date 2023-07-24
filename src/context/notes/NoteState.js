import NoteContext from './noteContext';
import { useState } from 'react';

const NoteState = (props) => {
  const s1 = {
    "name": "Saurabh",
    "class": "Third year"
  };

  const [state, setState] = useState(s1);

  const update = () => {
    setTimeout(() => {
        setState({
                "name": "Seenu",
                "class": "fourth year"
            })
    }, 1500);
  }

  return (
    <NoteContext.Provider value={{state , update}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
