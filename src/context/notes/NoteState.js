import { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {
  const notesInitial = [ 
    {
      "_id": "64bff4104f017abb76aa51a6",
      "user": "64bff013d165d1f9ffa2af2e",
      "title": "seenu bhai ka Jalwa h   ffff",
      "description": "SEEnU bhaiya programmer ban gye",
      "tag": "programmer",
      "date": "2023-07-25T16:10:56.895Z",
      "__v": 0
    },
    {
      "_id": "64bff495422410a884e74ae0",
      "user": "64bff013d165d1f9ffa2af2e",
      "title": "seenu bhai ka Jalwa h   ffff",
      "description": "SEEnU bhaiya programmer ban gye",
      "tag": "programmer",
      "date": "2023-07-25T16:13:09.032Z",
      "__v": 0
    },
    {
      "_id": "64bff4a5422410a884e74ae2",
      "user": "64bff013d165d1f9ffa2af2e",
      "title": "seenu bhai ka Jalwa kaha reh gya yarr",
      "description": "SEEnU bhaiya programmer ban gye",
      "tag": "programmer",
      "date": "2023-07-25T16:13:25.418Z",
      "__v": 0
    },
    {
      "_id": "64bff4a5422410a884e74ae2",
      "user": "64bff013d165d1f9ffa2af2e",
      "title": "seenu bhai ka Jalwa kaha reh gya yarr",
      "description": "SEEnU bhaiya programmer ban gye",
      "tag": "programmer",
      "date": "2023-07-25T16:13:25.418Z",
      "__v": 0
    },
    {
      "_id": "64bff4a5422410a884e74ae2",
      "user": "64bff013d165d1f9ffa2af2e",
      "title": "seenu bhai ka Jalwa kaha reh gya yarr",
      "description": "SEEnU bhaiya programmer ban gye",
      "tag": "programmer",
      "date": "2023-07-25T16:13:25.418Z",
      "__v": 0
    },
    {
      "_id": "64bff4a5422410a884e74ae2",
      "user": "64bff013d165d1f9ffa2af2e",
      "title": "seenu bhai ka Jalwa kaha reh gya yarr",
      "description": "SEEnU bhaiya programmer ban gye",
      "tag": "programmer",
      "date": "2023-07-25T16:13:25.418Z",
      "__v": 0
    },
    {
      "_id": "64bff4a5422410a884e74ae2",
      "user": "64bff013d165d1f9ffa2af2e",
      "title": "seenu bhai ka Jalwa kaha reh gya yarr",
      "description": "SEEnU bhaiya programmer ban gye",
      "tag": "programmer",
      "date": "2023-07-25T16:13:25.418Z",
      "__v": 0
    },
    {
      "_id": "64bff58746bd849e800f528a",
      "user": "64bff013d165d1f9ffa2af2e",
      "title": "seenu bhai ka Jalwa kaha reh gya yarr",
      "description": "SEEnU bhaiya programmer ban gye",
      "tag": "programmer",
      "date": "2023-07-25T16:17:11.279Z",
      "__v": 0
    },
    {
      "_id": "64bff58746bd849e800f528a",
      "user": "64bff013d165d1f9ffa2af2e",
      "title": "seenu bhai ka Jalwa kaha reh gya yarr ab",
      "description": "SEEnU bhaiya ",
      "tag": "programmer",
      "date": "2023-07-25T16:17:11.279Z",
      "__v": 0
    }
  ];
  //eslint-disable-next-line
  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes , notesInitial }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
