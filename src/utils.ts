import { EXPECTED_ORDER } from "./constants";

export function face2idx(face: string) {
  return EXPECTED_ORDER.indexOf(face);
}
