import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="w-full relative py-32 border-t border-black/5 bg-gradient-to-b from-transparent to-neutral-50/50 dark:border-white/5 dark:to-neutral-950/50"
    >
      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="flex flex-col">
          <span className="text-purple-700 font-medium text-sm tracking-tight mb-4 dark:text-purple-500">
            ABOUT US
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 mb-6 leading-[1.1] dark:text-white">
            Built for businesses that
            <br />
            need results fast
          </h2>
          <p className="text-neutral-600 text-lg md:text-xl font-normal leading-relaxed mb-10 max-w-lg dark:text-neutral-400">
            Nexlink Studio helps businesses turn outdated or non-existent
            websites into modern, high-performing digital experiences. We combine
            proven design with fast execution so you can launch quickly and start
            attracting customers.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <span className="text-4xl font-medium tracking-tight text-neutral-900 block mb-2 dark:text-white">
                10x
              </span>
              <span className="text-neutral-500 text-sm font-normal">
                Faster delivery time
              </span>
            </div>
            <div>
              <span className="text-4xl font-medium tracking-tight text-neutral-900 block mb-2 dark:text-white">
                24/7
              </span>
              <span className="text-neutral-500 text-sm font-normal">
                Continuous support
              </span>
            </div>
          </div>
        </div>

        <div className="relative w-full aspect-square md:aspect-video lg:aspect-square bg-neutral-100/50 rounded-3xl border border-black/5 overflow-hidden flex items-center justify-center group dark:bg-neutral-900/30 dark:border-white/5">
          <Image 
            src="https://images.openai.com/static-rsc-4/jhsqEyqkubC5WlILhI5ICkT_sYrbdKR5JbLj7YFYHOUcKJWOXUn4fO50DIBLZtvYgUwvVWS2cwzsEcZ7Uazhq6IyzbwhI39zBy5-wv7VFISyTBI48WDcF1-tg3QrTuxc2baAKz2d8ihYZwyGz-ItmQ94VZvhKuZR5PS7_GVFZdhsfddnbQ6PoIv_122Y3Sh2?purpose=fullsize" 
            alt="Nexlink Studio Design Process" 
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/50 via-transparent to-black/20 opacity-80 group-hover:opacity-100 transition duration-700 dark:from-purple-700/60" />
          
          <div className="w-24 h-24 rounded-full border border-white/20 bg-black/30 backdrop-blur-md flex items-center justify-center relative z-10 shadow-2xl">
            <span className="text-3xl font-medium tracking-tighter text-white">
              NS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
