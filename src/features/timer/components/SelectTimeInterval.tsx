import SimpleSelect from "@/components/ui/Select/SimpleSelect";
import SimpleInput from "@/components/ui/SimpleInput";
import SimpleRadioInput from "@/components/ui/SimpleRadioInput/SimpleRadioInput";
import { useState } from "react";

const timeIntervals = [
  { text: "30 seconds", value: 1000 * 30 }, // 30 seconds
  { text: "60 seconds", value: 1000 * 60 }, // 1 minute
  { text: "2 minutes", value: 1000 * 60 * 2 }, // 2 minutes
  { text: "5 minutes", value: 1000 * 60 * 5 }, // 5 minutes
  { text: "10 minutes", value: 1000 * 60 * 10 }, // 10 minutes
  { text: "Custom", value: 1000 * 60 * 15 }, // 15 minutes
];

const types:['minutes', 'seconds'] = ['minutes', 'seconds']

const selectIntervalInterval = () => {
  const [selectInterval, setSelectInterval] = useState(0);
  const [time, setTime] = useState(1000 * 60 * 5); // 5 minutes
  const [type, setType] = useState(0);
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="flex gap-4">
        {timeIntervals.map((item, index) => (
          <SimpleRadioInput
            key={index}
            text={item.text}
            name={"time"}
            checked={selectInterval === index}
            onChange={() => {
              setSelectInterval(index);
              setTime(item.value);
            }}
          />
        ))}
      </div>
      {selectInterval === 5 && (
        <div className="flex gap-3 items-center mt-4">
          <SimpleInput
            type="number"
            value={time / 1000 / 60}
            onChange={(e) => {
              const value = parseInt(e.target.value) * 1000 * 60;
              setTime(value);
            }}
          />
          <SimpleSelect data={types} activeElementIndex={type} onChoose={setType}/>
          </div>
      )}
    </form>
  );
};

export default selectIntervalInterval;
