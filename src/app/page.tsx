import Image from "next/image";

export default function Home() {
  return (
    <div className="grid  items-center justify-items-center min-h-screen ">
      <div className="-translate-y-10 md:flex gap-6">
        <div className="flex justify-center">
          <Image
          src="/pfp.jpg"
          width={200}
          height={200}
          style={{
                objectFit: "cover",
                borderRadius: "100px", //👈 and here you can select border radius
              }}
          alt="Picture of Navkirat"
          priority={true}/>
          
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-clash-display)' }} className="pt-4 md:pt-0 flex filter drop-shadow-glow items-center xl:text-8xl text-yellow-100 md:text-7xl text-6xl text-center">
            Navkirat Singh
          </div>
          <div style={{ fontFamily: 'var(--font-swit-display)' }} className="flex justify-center md:justify-start  gap-4 text-xl md:text-2xl xl:text-4xl ">
            <div className=" font-light">Aka</div>
            <a href="https://github.com/Vanillapapa64" target="_blank" style={{ fontFamily: 'var(--font-clash-display)' }} className="font-medium text-gray-500 flex gap-1 underline underline-offset-4 cursor-pointer hover:text-white">Vanillapapa64 <div className="relative w-8 flex justify-start sm:w-8 md:w-8 h-auto">
              <Image
                src="/redirect.png"
                alt="Picture of the author"
                fill
                className="object-contain"
              />
            </div></a>
          </div>
          <div className="md:pt-4 md:text-2xl text-center md:text-left font-light text-slate-300 tracking-widest">WEB | ML | DEV OPS | DS</div>
        </div>
      </div>
    </div>
  );
}
