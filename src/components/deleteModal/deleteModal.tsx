import { useEffect } from "react";
import { useBookDataDelete } from "../../hooks/useBookDataDelete";
// import { DeleteBookData } from "../../interface/BookData";
import "./modal.css";
interface ModalProps {
  bookId: number | any;
  closeModal(): void;
}

export function DeleteModal({ bookId, closeModal }: ModalProps) {
  const { mutate, isSuccess } = useBookDataDelete();

  const deleteBook = () => {
    mutate(bookId);
  }
  
  useEffect(() => {
    if (!isSuccess) return;
    closeModal();
  }, [isSuccess]);

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <button onClick={deleteBook} className="btn-secondary">Delete</button>
        <button onClick={closeModal} className="btn-secondary">Cancel</button>
      </div>
    </div>
  );
}
