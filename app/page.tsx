import Image from "next/image";
import Logo from '../public/images/logo.png';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="logo-sec"><Image src={Logo} alt="Bright" /></div>
        <div className="sec2">
        <h1>Launching soon..</h1></div>

       
      </main>
      
    </div>
  );
}
