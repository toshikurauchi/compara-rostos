"use client";

import FaceSelect from "@/components/FaceSelect";
import FaceImage from "@/components/FaceImage";
import { useState } from "react";
import { face2idx } from "@/utils";
import Image from "next/image";

export default function Home() {
  const [face1, setFace1] = useState("");
  const [face2, setFace2] = useState("");

  const idx1 = face2idx(face1);
  const idx2 = face2idx(face2);

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="text-6xl font-bold text-center">
        <span className="text-red-600">Insper</span> ONE
      </h1>

      <div className="flex flex-row flex-wrap items-center mt-8 text-xl gap-2">
        <span className="text-wrap">A face</span>
        <FaceSelect placeholder="Face 1" onChange={setFace1} />
        <span className="text-wrap">é mais nova do que a face</span>
        <FaceSelect placeholder="Face 2" onChange={setFace2} />
        <span className="text-wrap">?</span>
        {face1 && face2 && <span className={`font-bold text-2xl ${idx1 < idx2 ? "text-green-400" : "text-red-600"}`}>{idx1 < idx2 ? "SIM" : "NÃO"}</span>}
      </div>

      <div className="grid grid-cols-3 place-items-center mt-8">
        <FaceImage faceId={face1} />
        <span className="text-5xl md:text-7xl lg:text-9xl text-green-400">{greaterOrLessThan(idx1, idx2)}</span>
        <FaceImage faceId={face2} />
      </div>

      <div className="flex flex-col items-center mt-12">
        <h2 className="text-4xl mb-4 text-center font-bold">Sequência Esperada</h2>
        <Image src="/aging.gif" width={277} height={336} alt="Aging" />
      </div>
    </main>
  );
}

function greaterOrLessThan(face1: number, face2: number) {
  if (face1 < 0 || face2 < 0) return "?";
  if (face1 === face2) return "=";
  return face1 < face2 ? "<" : ">";
}
