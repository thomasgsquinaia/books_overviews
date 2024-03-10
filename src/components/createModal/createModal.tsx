import { useEffect, useState } from "react";
import { useBookDataMutate } from "../../hooks/useBookDataMutate";
import { BookData } from "../../interface/BookData";
import "./modal.css";
interface InputProps {
  label: string;
  value: string | number;
  updateValue(value: any | number): void;
}
interface ModalProps {
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

export function CreateModal({ closeModal }: ModalProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const { mutate, isSuccess } = useBookDataMutate();

  const submit = () => {
    const bookData: BookData = {
      name,
      description,
      image,
    };
    mutate(bookData);
  };

  useEffect(() => {
    if (!isSuccess) return;
    closeModal();
  }, [isSuccess, closeModal]);

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Create a new overview</h2>
        <form className="input-container">
          <Input label="name" value={name} updateValue={setName} />
          <Input
            label="description"
            value={description}
            updateValue={setDescription}
          />
          <Input label="image" value={image} updateValue={setImage} />
        </form>
        <button onClick={submit} className="btn-secondary">Postar</button>
        <button onClick={closeModal} className="btn-secondary">Cancel</button>

      </div>
    </div>
  );
}
