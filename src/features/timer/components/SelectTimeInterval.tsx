import SimpleSelect from "@/components/ui/Select/SimpleSelect";
import SimpleInput from "@/components/ui/SimpleInput";
import SimpleRadioInput from "@/components/ui/SimpleRadioInput/SimpleRadioInput";
import { useEffect, useState } from "react";
import { useTimerStore } from "../store/timerStore";

const timeIntervals = [
  { text: "30 seconds", value: 1000 * 30 }, // 30 seconds
  { text: "60 seconds", value: 1000 * 60 }, // 1 minute
  { text: "2 minutes", value: 1000 * 60 * 2 }, // 2 minutes
  { text: "5 minutes", value: 1000 * 60 * 5 }, // 5 minutes
  { text: "10 minutes", value: 1000 * 60 * 10 }, // 10 minutes
  { text: "Custom", value: 1000 * 60 * 15 }, // 15 minutes
];

const types: ["minutes", "seconds"] = ["minutes", "seconds"];

const SelectTimeInterval = () => {
  const setTimeInterval = useTimerStore((state) => state.setTimeInterval);

  const [selectInterval, setSelectInterval] = useState(0);
  const [time, setTime] = useState(15);
  const [type, setType] = useState(0);
  const [invalidTime, setInvalidTime] = useState(false);

  useEffect(() => {
    if (selectInterval !== 5) {
      setTimeInterval(timeIntervals[selectInterval].value);
      return;
    }
    if (isNaN(time) || (type === 1 && time < 5) || time < 1) {
      setInvalidTime(true);
      return;
    } else {
      setInvalidTime(false);
    }
    if (type === 0) {
      setTimeInterval(time * 1000 * 60);
    } else {
      setTimeInterval(time * 1000);
    }
  }, [selectInterval, time, type]);

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
            }}
          />
        ))}
      </div>
      {selectInterval === 5 && (
        <>
          <div className="flex gap-3 items-center mt-4">
            <SimpleInput
              autofocus={true}
              type="number"
              value={time}
              onClick={(e) => {
                e.currentTarget.select();
              }}
              onChange={(e) => {
                setTime(parseInt(e.target.value));
              }}
            />
            <SimpleSelect
              data={types}
              activeElementIndex={type}
              onChoose={setType}
            />
          </div>
          {invalidTime && (
            <p className="text-red-500 text-sm mt-1">
              Please enter a valid time. Time must be at least 5 seconds.
            </p>
          )}
        </>
      )}
    </form>
  );
};

export default SelectTimeInterval;
