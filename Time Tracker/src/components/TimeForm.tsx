import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";

interface Props {
  onAdd: (activity: string, hours: number) => void;
}

// ✅ Accept props in the component itself
const TimeForm = ({ onAdd }: Props) => {
  const [activity, setActivity] = useState("");
  const [hours, setHours] = useState("");

  const handleSubmit = () => {
    if (!activity.trim() || !hours) {
      alert("Please Fill it!");
      return;
    }
    onAdd(activity, Number(hours));
    setActivity("");
    setHours("");
  };

  return (
    <div>
      <Input
        placeholder="Activity (eg., Sleep)"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />

      <Input
        placeholder="Hours (eg., 5)"
        value={hours}
        type="number"
        onChange={(e) => setHours(e.target.value)}
      />

      <Button className="w-full" onClick={handleSubmit}>
        Add Activity
      </Button>
    </div>
  );
};

export default TimeForm;
