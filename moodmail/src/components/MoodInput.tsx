import { Input } from "./ui/input"
import { Button } from "./ui/button"


type Props={
  mood:string;
  setMood:(val:string)=>void,
  onGenerate:()=>void,
  disabled:boolean
}


const moodInput = ({mood,setMood,onGenerate,disabled}:Props) => {
  return (
    <div className="space-y-4">
      <Input
      placeholder="How are you feeling today? {Happy,Sad,Angry,Stressed...}"
      value={mood}
      onChange={(e)=>setMood(e.target.value)}
      disabled={disabled}
      />

      <Button className="w-full" onClick={onGenerate}
        disabled={disabled}>
        Generate Email Template
      </Button>
    </div>
  )
}

export default moodInput