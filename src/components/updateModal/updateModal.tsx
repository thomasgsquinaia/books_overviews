import { useEffect, useState } from "react";
import { useBookDataUpdate } from "../../hooks/useBookDataUpdate";
import { BookData } from "../../interface/BookData";
import "./modal.css";
import { useBookData } from "../../hooks/useBookData";
interface InputProps {
  label: string;
  value: string | number;
  updateValue(value: any | number): void;
}
interface ModalProps {
  idBook: number;
  closeModal(): void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input
        value={value}
        onChange={(event) => updateValue(event.target.value)}
      ></input>
    </>
  );
};

export function UpdateModal({idBook, closeModal }: ModalProps) {
  const [id, setId] = useState(idBook);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const { mutate, isSuccess } = useBookDataUpdate();

  const update = () => {
    const bookData: BookData = { 
      id,
      name,
      description,
      image
    }
    console.log("é o update",bookData);
    mutate(bookData);
  }
  
  useEffect(() => {
    if (!isSuccess) return;
    closeModal();
  }, [isSuccess]);

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Update overview</h2>
        <form className="input-container">
          <Input label="name" value={name} updateValue={setName} />
          <Input
            label="description"
            value={description}
            updateValue={setDescription}
          />
          <Input label="image" value={image} updateValue={setImage} />
        </form>
        <button onClick={update} className="btn-secondary">
          {/* {isLoading ? "Postando..." : "Postar"} */}
          Update
        </button>
        <button onClick={closeModal} className="btn-secondary">Cancel</button>
      </div>
    </div>
  );
}
