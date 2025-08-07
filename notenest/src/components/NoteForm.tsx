import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useState } from "react"
import { db } from "@/lib/firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import toast from "react-hot-toast"


const NoteForm = () => {

    const [note, setNote] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        if (!note.trim()) { toast.error("Please Fill note") }
        setLoading(!loading)
        await addDoc(collection(db, "notes"), {
            content: note,
            createdAt: serverTimestamp()

        })
        setNote("")
        setLoading(false)
        toast.success("Note Added")
    }

    return (

        <div className="space-y-2">
            <Input
                placeholder="Type your note..."
                value={note} onChange={(e) => { setNote(e.target.value) }}
                maxLength={50} />

            <div className="flex justify-between text-xs text-gray-500">
              <span>{note.length}/50</span>
            </div>
            <Button className="w-full mt-3"
                onClick={handleSubmit}
                disabled={loading}>
                {loading ? "Seving..." : "Save Notes"}
            </Button>


        </div>
    )
}

export default NoteForm