import { useState } from "react";

const Story = ({ toggleSubmit, story, clearStory }) => {
    const handleClick = () => {
        toggleSubmit();
        clearStory({});
    }
    return (
        <div>
            <p>{`There was a ${story.color} ${story.noun} who loved a ${story.adj} ${story.nounTwo}.`}</p>
            <button onClick={handleClick}>Restart</button>
        </div>
    )
}

export default Story