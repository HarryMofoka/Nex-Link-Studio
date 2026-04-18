export function Background() {
  return (
    <>
      <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-purple-700/40 rounded-full blur-[120px] pointer-events-none -z-20 transform translate-x-1/3 -translate-y-1/3 dark:bg-red-900/10" />

      <div className="fixed top-0 right-0 w-[120vw] h-[120vh] pointer-events-none -z-10 overflow-hidden transform translate-x-[10%] -translate-y-[10%]">
        <div className="absolute w-[200%] h-[200%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform -rotate-[38deg]">
          <div className="absolute top-[5%] right-[25%] w-[120px] h-[150%] bg-gradient-to-b from-transparent via-purple-600/60 to-transparent blur-[24px] dark:via-red-600/40" />
          <div className="absolute top-[-5%] right-[32%] w-[180px] h-[150%] bg-gradient-to-b from-transparent via-[#9333ea]/70 to-transparent blur-[32px] dark:via-[#ff2a00]/50" />
          <div className="absolute top-[15%] right-[42%] w-[140px] h-[150%] bg-gradient-to-b from-transparent via-purple-600/50 to-transparent blur-[20px] dark:via-orange-600/30" />
          <div className="absolute top-[0%] right-[50%] w-[200px] h-[150%] bg-gradient-to-b from-transparent via-purple-700/60 to-transparent blur-[40px] dark:via-red-800/40" />
        </div>
      </div>
    </>
  );
}
