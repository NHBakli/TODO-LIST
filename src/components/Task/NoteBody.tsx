"use client";
import React, { useState, useEffect } from "react";
import EditNote from "../Icons/EditNote";
import DeleteNote from "../Icons/DeleteNote";
import DeleteNoteConfirmation from "./DeleteNote";
import EditNoteConfirmation from "./EditNote";
import Image from "next/image";

interface NoteBodyProps {
  notes: { text: string; checked: boolean }[];
  setNotes: React.Dispatch<
    React.SetStateAction<{ text: string; checked: boolean }[]>
  >;
  filter: string;
}

const NoteBody: React.FC<NoteBodyProps> = ({ notes, setNotes, filter }) => {
  const [noteToDelete, setNoteToDelete] = useState<number | null>(null);
  const [noteToEdit, setNoteToEdit] = useState<number | null>(null);
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setTheme(storedTheme);
  }, []);

  // Fonction pour basculer l'état checked d'une note
  const toggleCheck = (index: number) => {
    const updatedNotes = notes.map((note, i) =>
      i === index ? { ...note, checked: !note.checked } : note
    );
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const handleEditNote = (index: number) => {
    setNoteToEdit(index);
  };

  const handleNoteEdited = (index: number, newNote: string) => {
    const updatedNotes = notes.map((note, i) =>
      i === index ? { ...note, text: newNote } : note
    );
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setNoteToEdit(null); // Fermer la modal d'édition
  };

  const cancelEdit = () => {
    setNoteToEdit(null);
  };

  // Fonction pour définir la note à supprimer
  const handleDeleteNote = (index: number) => {
    setNoteToDelete(index);
  };

  // Fonction pour confirmer la suppression d'une note
  const confirmDelete = () => {
    if (noteToDelete !== null) {
      const updatedNotes = notes.filter((_, index) => index !== noteToDelete);
      setNotes(updatedNotes);
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      setNoteToDelete(null);
    }
  };

  // Fonction pour annuler la suppression
  const cancelDelete = () => {
    setNoteToDelete(null);
  };

  // Filtrer les notes selon l'état du filtre
  const filteredNotes = notes.filter((note) => {
    if (filter === "Complete") return note.checked;
    if (filter === "Incomplete") return !note.checked;
    return true;
  });

  return (
    <div className="w-2/6 mt-5">
      {filteredNotes.length > 0 ? (
        filteredNotes.map((note, index) => {
          return (
            <div
              key={index}
              className={`note-item flex items-center mb-4 cursor-pointer group ${
                index !== filteredNotes.length - 1
                  ? "border-b border-primary"
                  : ""
              } pb-4`}
            >
              <div
                className={`mr-4 w-6 h-6 border rounded-sm cursor-pointer ${
                  note.checked ? "bg-primary border-primary" : "border-primary"
                }`}
                onClick={() => toggleCheck(index)}
              >
                {note.checked && (
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
                  note.checked
                    ? "text-black dark:text-white dark:text-opacity-50 text-opacity-50 line-through"
                    : "text-black dark:text-white"
                }`}
              >
                {note.text}
              </h2>
              <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-auto mr-2">
                <EditNote onClick={() => handleEditNote(index)} />
                <DeleteNote onClick={() => handleDeleteNote(index)} />
              </div>
            </div>
          );
        })
      ) : (
        <div className="flex flex-col items-center justify-center">
          <Image
            src={
              theme === "dark" ? "/Detectivedark.png" : "/Detectivelight.png"
            }
            width={250}
            height={200}
            alt="loupe"
          />
          <p className="mt-8 font-medium text-xl text-center text-black dark:text-white">
            Empty...
          </p>
        </div>
      )}

      {noteToEdit !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10">
          <div className="fixed inset-0 flex items-center justify-center z-20">
            <EditNoteConfirmation
              note={notes[noteToEdit].text}
              onCancel={cancelEdit}
              onNoteEdited={(newNote) => handleNoteEdited(noteToEdit, newNote)}
            />
          </div>
        </div>
      )}

      {noteToDelete !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10">
          <div className="fixed inset-0 flex items-center justify-center z-20">
            <DeleteNoteConfirmation
              onCancel={cancelDelete}
              onDelete={confirmDelete}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default NoteBody;
