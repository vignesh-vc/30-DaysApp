import { useState } from "react";
import MoodInput from "../components/MoodInput"
import MoodOutput from "../components/MoodOutput"

const Home = () => {

    const [mood, setMood] = useState("");
    const [subject, setSubject] = useState("");
    const [footer, setfooter] = useState("");
    const [generated, setGenerated] = useState(false);

    const handleGenerate = () => {
        const lowerMood = mood.toLowerCase();
        if (lowerMood.includes("happy")) {
            setSubject("Happy Guys")
            setfooter("Best Regards")

        } else if (lowerMood.includes("sad")) {
            setSubject("Sad Guys")
            setfooter("Sending hugs")
        } else if (lowerMood.includes("angry")) {
            setSubject("Angery Guys")
            setfooter("take a break")
        } else {
            setSubject("Mood updated")
            setfooter("Thank you")
        }
        setGenerated(true);
    }

    const handleReset = () => {
        setMood(""),
            setSubject(""),
            setfooter(""),
            setGenerated(false)
    }
    return (
        <div className='max-w-xl mx-auto mt-20 p-6 border rounded-lg bg-white shadow-sm space-y-6'>
            <h2 className='text-2xl font-bold text-grau-800'>Mood Generator</h2>
            {!generated ? (
                <MoodInput mood={mood} setMood={setMood} onGenerate={handleGenerate} disabled={false} />

            ) : <MoodOutput subject={subject} footer={footer} onReset={handleReset} />


            }

        </div>
    )
}

export default Home