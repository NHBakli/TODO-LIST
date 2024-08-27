"use client";
import { useState } from "react";

interface EditNoteProps {
  note: string;
  onCancel: () => void;
  onNoteEdited: (newNote: string) => void;
}

const EditNoteConfirmation: React.FC<EditNoteProps> = ({
  note: initialNote,
  onCancel,
  onNoteEdited,
}) => {
  const [note, setNote] = useState<string>(initialNote);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const editNote = () => {
    if (note.trim()) {
      onNoteEdited(note);
      setNote("");
      onCancel();
    }
  };

  return (
    <div className="bg-white dark:bg-bgDark dark:border p-4 rounded-xl shadow-lg w-2/6 h-72 relative">
      <h1 className="text-center text-black dark:text-white font-bold mb-4">
        EDIT NOTE
      </h1>
      <div className="flex justify-center items-center w-full">
        <input
          type="text"
          value={note}
          onChange={handleInputChange}
          placeholder="Input your note..."
          className="w-9/12 p-2 mb-4 pl-4 border focus:outline-none bg-white dark:bg-bgDark dark:text-white border-primary dark:border-gray-300 rounded"
        />
      </div>
      <div className="absolute bottom-4 left-0 w-full flex justify-between px-4">
        <button
          className="dark:bg-bgDark text-primary font-semibold border-primary border rounded dark:hover:bg-primaryOpacity hover:bg-primaryOpacity w-24 h-9 ml-3 mb-1"
          onClick={onCancel}
        >
          CANCEL
        </button>
        <button
          className="bg-primary text-white rounded font-semibold hover:bg-secondary w-24 h-9 mr-3 mb-1"
          onClick={editNote}
        >
          APPLY
        </button>
      </div>
    </div>
  );
};

export default EditNoteConfirmation;
