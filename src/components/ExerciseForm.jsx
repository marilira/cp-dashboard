import { useState } from "react";

export default function ExerciseForm(props) {
    const [name, setName] = useState("");
    const [platform, setPlatform] = useState("beecrowd");
    function handleNameChange(e) {
        setName(e.target.value);
    }
    function handlePlatformChange(e) {
        setPlatform(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        const newExercise = {
            id: Date.now(),
            name,
            platform,
            date: new Date().toLocaleDateString("en-CA")
        }
        props.setExercises((prev) => ([
            ...prev,
            newExercise
        ]))

        setName("");
        setPlatform("beecrowd");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={handleNameChange} type="text" name="name" placeholder="Título do exercício" />
            <select name="platforms" value={platform} onChange={handlePlatformChange}> 
                <option value="beecrowd">Beecrowd</option>
            </select>
            <button type="submit">Adicionar exercício</button>
        </form>
    )
}