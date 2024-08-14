"use client";
import React, { useEffect, useState } from "react";
import EditNote from "../Icons/EditNote";
import DeleteNote from "../Icons/DeleteNote";

const NoteBody = () => {
  const [notes, setNotes] = useState<string[]>([]);
  const [checkedNotes, setCheckedNotes] = useState<boolean[]>([]);

  const fetchNotes = () => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      const parsedNotes = JSON.parse(storedNotes);
      setNotes(parsedNotes);
      setCheckedNotes(new Array(parsedNotes.length).fill(false));
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const toggleCheck = (index: number) => {
    const updatedCheckedNotes = [...checkedNotes];
    updatedCheckedNotes[index] = !updatedCheckedNotes[index];
    setCheckedNotes(updatedCheckedNotes);
  };

  return (
    <div className="w-2/6 mt-5">
      {notes.length > 0 ? (
        notes.map((note, index) => (
          <div
            key={index}
            className={`note-item flex items-center mb-4 cursor-pointer group ${
              index !== notes.length - 1 ? "border-b border-primary" : ""
            } pb-4`}
          >
            <div
              className={`mr-4 w-6 h-6 border rounded-sm cursor-pointer ${
                checkedNotes[index]
                  ? "bg-primary border-primary"
                  : "border-primary"
              }`}
              onClick={() => toggleCheck(index)}
            >
              {checkedNotes[index] && (
                <div className="flex justify-center items-center h-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="white"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              )}
            </div>
            <h2
              className={`text-xl font-medium ${
                checkedNotes[index]
                  ? "text-white text-opacity-50 line-through"
                  : "text-black dark:text-white"
              }`}
            >
              {note}
            </h2>
            <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-auto mr-2">
              <EditNote />
              <DeleteNote />
            </div>
          </div>
        ))
      ) : (
        <p className="text-black dark:text-white">No notes available.</p>
      )}
    </div>
  );
};

export default NoteBody;
