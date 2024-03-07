import { face2idx } from "@/utils";
import Image from "next/image";

type FaceImageProps = {
  faceId: string;
};

const WIDTH = 277;
const HEIGHT = 336;

export default function FaceImage({ faceId }: FaceImageProps) {
  const idx = face2idx(faceId);

  return <>
    {faceId && (
      <Image
        src={`/faces/${idx}.png`}
        width={WIDTH}
        height={HEIGHT}
        alt={`Face ${idx + 1}`}
      />
    )}
    {!faceId && (
      <Image src="/person.png" width={WIDTH} height={HEIGHT} alt="Rosto" />
    )}
  </>
}

