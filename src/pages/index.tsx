import Image from "next/image";
import { Kiwi_Maru } from "next/font/google";

const KiwiMaru = Kiwi_Maru({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${KiwiMaru.className}`}
    >
      <p className="{KiwiMaru.className}, kiwi-border" >すなおなすなば</p>
    </main>
  );
}
