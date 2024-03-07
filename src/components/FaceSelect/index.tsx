import { Dispatch, SetStateAction } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LETTERS } from "@/constants";

type FaceSelectProps = {
  placeholder: string;
  onChange: Dispatch<SetStateAction<string>>;
};

export default function FaceSelect({ placeholder, onChange }: FaceSelectProps) {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-[100px] text-lg">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {LETTERS.map((letter) => (
          <SelectItem value={letter} key={letter} className="text-lg">
            {letter}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
