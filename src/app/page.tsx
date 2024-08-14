"use client";
import { useState } from "react";
import IconNewNote from "@/components/Icons/IconNewNote";
import Navbar from "@/components/Navbar/navbar";
import CreateNote from "@/components/Task/CreateNote";
import NoteBody from "@/components/Task/NoteBody";

export default function Home() {
  const [isCreatingNote, setIsCreatingNote] = useState(false);

  const handleCancel = () => {
    setIsCreatingNote(false);
  };

  return (
    <div className="relative">
      {isCreatingNote && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10" />
      )}

      <main
        className={`flex flex-col items-center justify-between p-14 ${
          isCreatingNote ? "filter blur-sm" : ""
        }`}
      >
        <h1 className="text-black dark:text-white font-bold text-xl pb-7">
          TODO LIST
        </h1>

        <Navbar />

        <NoteBody />

        <div
          className="fixed bottom-12 right-1/3 cursor-pointer"
          onClick={() => setIsCreatingNote(true)}
        >
          <IconNewNote />
        </div>
      </main>

      {isCreatingNote && (
        <div className="fixed inset-0 flex items-center justify-center z-20">
          <CreateNote onCancel={handleCancel} />
        </div>
      )}
    </div>
  );
}
