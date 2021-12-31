import { useState } from "react";
import MadLibsForm from "./MadLibsForm";
import Story from "./Story";

const MadLibs = () => {
    const [ isSubmit, setIsSubmit ] = useState(false);
    const [ storyData, setStoryData ] = useState({});

    const toggleSubmit = () => setIsSubmit(isSubmit => !isSubmit);
    const updateStoryData = (newStoryData) => setStoryData(newStoryData);

    return (
        <div>
            <h1>Madlibs!</h1>
            {isSubmit ? <Story toggleSubmit={toggleSubmit} story={storyData} clearStory={updateStoryData}/> 
                      : <MadLibsForm toggleSubmit={toggleSubmit} addStory={updateStoryData}/>}
        </div>
    )
}

export default MadLibs;