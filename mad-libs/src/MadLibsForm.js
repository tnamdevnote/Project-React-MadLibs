import { useState, useEffect, useRef } from "react";


const MadLibsForm = ({ toggleSubmit, addStory }) => {
    const INITIAL_STATE = {
        noun: "",
        nounTwo: "",
        adj: "",
        color: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [disable, setDisable] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        toggleSubmit();
        addStory({...formData})
        setFormData(INITIAL_STATE)
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    useEffect(() => {
        setDisable(!Object.values(formData).every(x => x !== ''))
    }, [formData])

    return (
        <form onSubmit={handleSubmit}>
			<input
                type="text"
                placeholder="noun"
                name="noun"
                value={formData.noun}
                onChange={handleChange}
            />
			<input
                type="text"
                placeholder="noun 2"
                name="nounTwo"
                value={formData.nounTwo}
                onChange={handleChange}
            />
			<input
                type="text"
                placeholder="adjective"
                name="adj"
                value={formData.adj}
                onChange={handleChange}
            />
			<input
                type="text"
                placeholder="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
            />
			<button disabled={disable}>Get Story</button>
		</form>
    )
}

export default MadLibsForm;