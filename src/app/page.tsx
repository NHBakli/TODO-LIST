"use client";
import { useState, useEffect } from "react";
import IconNewNote from "@/components/Icons/IconNewNote";
import Navbar from "@/components/Navbar/navbar";
import CreateNote from "@/components/Task/CreateNote";
import NoteBody from "@/components/Task/NoteBody";

export default function Home() {
  const [isCreatingNote, setIsCreatingNote] = useState(false);
  const [allNotes, setAllNotes] = useState<
    { text: string; checked: boolean }[]
  >([]);
  const [filteredNotes, setFilteredNotes] = useState<
    { text: string; checked: boolean }[]
  >([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      const parsedNotes = JSON.parse(storedNotes);
      setAllNotes(parsedNotes);
      setFilteredNotes(parsedNotes);
    }
  }, []);

  useEffect(() => {
    // Filtrer les notes chaque fois que allNotes ou filter change
    const filtered = allNotes.filter((note) => {
      if (filter === "Complete") return note.checked;
      if (filter === "Incomplete") return !note.checked;
      return true;
    });
    setFilteredNotes(filtered);
  }, [allNotes, filter]);

  const handleCancel = () => {
    setIsCreatingNote(false);
  };

  const handleNoteAdded = (newNote: string) => {
    const updatedNotes = [...allNotes, { text: newNote, checked: false }];
    setAllNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setIsCreatingNote(false);
  };

  const handleFilterChange = (filter: string) => {
    setFilter(filter);
  };

  const handleSearch = (query: string) => {
    const filtered = allNotes.filter((note) =>
      note.text.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredNotes(filtered);
  };

  return (
    <div className="relative">
      {isCreatingNote && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10" />
      )}

      <main className="flex flex-col items-center justify-between p-14 ">
        <h1 className="text-black dark:text-white font-bold text-xl pb-7">
          TODO LIST
        </h1>

        <Navbar onSearch={handleSearch} onFilterChange={handleFilterChange} />

        <NoteBody
          notes={filteredNotes}
          setNotes={setAllNotes} // Utilisez cette fonction pour mettre à jour allNotes
          filter={filter}
        />

        <div
          className="fixed bottom-12 right-1/3 cursor-pointer"
          onClick={() => setIsCreatingNote(true)}
        >
          <IconNewNote />
        </div>
      </main>

      {isCreatingNote && (
        <div className="fixed inset-0 flex items-center justify-center z-20">
          <CreateNote onCancel={handleCancel} onNoteAdded={handleNoteAdded} />
        </div>
      )}
    </div>
  );
}
