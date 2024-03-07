import { useEffect, useState } from "react";
import { useBookDataUpdate } from "../../hooks/useBookDataUpdate";
import { UpdateBookData } from "../../interface/BookData";
import "./modal.css";
interface InputProps {
  label: string;
  value: string | number;
  updateValue(value: any | number): void;
}
interface ModalProps {
  bookInfo: UpdateBookData;
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

export function UpdateModal({ bookInfo ,closeModal }: ModalProps) {

  const [name, setName] = useState(bookInfo.name);
  const [description, setDescription] = useState(bookInfo.description);
  const [image, setImage] = useState(bookInfo.image);
  const { mutate, isSuccess } = useBookDataUpdate();

  const update = () => {
    const bookData: UpdateBookData = {
      id:bookInfo.id,
      name,
      description,
      image
    }
    mutate(bookData);
  }
  
  useEffect(() => {
    if (!isSuccess) return;
    closeModal();
  }, [isSuccess,closeModal]);

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
        <button onClick={update} className="btn-secondary">Update</button>
        <button onClick={closeModal} className="btn-secondary">Cancel</button>
      </div>
    </div>
  );
}
