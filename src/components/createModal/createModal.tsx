import { useState } from "react"
import { useBookDataMutate } from "../../hooks/useBookDataMutate";
import { BookData } from "../../interface/BookData";

interface InputProps{
    label: string,
    value: string | number,
    updateValue(value: any | number) : void
}

const Input = ({label, value, updateValue} : InputProps) => { 
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function createModal() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState(0);
    const [image, setImage] = useState("")
    const { mutate } = useBookDataMutate();

    const submit = () => {
        const bookData: BookData = {
            name,
            description,
            image
        } 
        mutate(bookData)
    }
  return (
    <div className='modal-overlay'>
        <div className='modal-body'>
            <h2>Create a new overview</h2>
            <form className='input-container'>
                <Input label="name" value={name} updateValue={setName}/>
                <Input label="description" value={description} updateValue={setDescription}/>
                <Input label="image" value={image} updateValue={setImage}/>
            </form>
            <button onClick={submit} className="btn-secondary">Publicar</button>
        </div>
    </div>
  )
}
