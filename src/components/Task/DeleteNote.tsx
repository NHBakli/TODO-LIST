interface DeleteNoteProps {
  onCancel: () => void;
  onDelete: () => void;
}

const DeleteNoteConfirmation: React.FC<DeleteNoteProps> = ({
  onCancel,
  onDelete,
}) => {
  return (
    <div className="bg-white dark:bg-bgDark dark:border p-4 rounded-xl shadow-lg w-1/7 h-56 relative">
      <h1 className="text-center text-black dark:text-white font-bold my-2 w-11/12">
        ARE YOU SURE YOU WANT TO DELETE THIS NOTE?
      </h1>
      <div className="absolute bottom-4 left-0 w-full flex justify-between px-4">
        <button
          className="dark:bg-bgDark text-primary font-semibold border-primary border rounded dark:hover:bg-primaryOpacity hover:bg-primaryOpacity w-24 h-9 ml-3 mb-1"
          onClick={onCancel}
        >
          CANCEL
        </button>
        <button
          className="bg-primary text-white rounded font-semibold hover:bg-secondary w-24 h-9 mr-3 mb-1"
          onClick={onDelete}
        >
          APPLY
        </button>
      </div>
    </div>
  );
};

export default DeleteNoteConfirmation;
