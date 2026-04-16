import Image from "next/image";

const Digital = () => {
  return (

    <div className="mx-2 relative z-10">
      <div className="mx-auto max-w-7xl px-6 my-40 py-16 lg:py-24 lg:px-16 bg-gradient-to-br from-soft/50 to-navyblue/80 border border-white/5 backdrop-blur-xl rounded-[40px] relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {/* Glow effect inside container */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 relative z-10">

          {/* COLUMN-1 */}
          <div className="lg:pl-8">
            <h3 className="text-neon mb-4 tracking-[0.2em] text-sm md:text-base font-bold uppercase text-center lg:text-start flex items-center justify-center lg:justify-start gap-4">
              <span className="w-12 h-px bg-neon/50"></span>
              WHO WE ARE
            </h3>
            <h4 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight tracking-tight text-center lg:text-start">
              Creative editing that <br className="hidden lg:block"/> builds your brand.
            </h4>

            <ul className="space-y-4 text-lg text-white/70 font-medium mb-12 text-center lg:text-start mx-auto lg:mx-0 max-w-lg">
              <li className="flex items-center justify-center lg:justify-start gap-3">
                <span className="w-2 h-2 rounded-full bg-neon"></span>
                Fits your brand with neuro-marketing strategy
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-3">
                <span className="w-2 h-2 rounded-full bg-neon"></span>
                Premium editing that expresses who you are
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-3">
                <span className="w-2 h-2 rounded-full bg-neon"></span>
                Not just edits — your lifetime creative guide
              </li>
            </ul>

            {/* Consultation Highlight */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center lg:text-start shadow-xl backdrop-blur-md">
              <p className="text-xl font-semibold text-white mb-6">
                Get an exclusive 1-on-1 creative consultation with our experts.
              </p>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                className="inline-flex items-center justify-center text-lg font-semibold text-white bg-neon py-4 px-10 rounded-full shadow-[0_0_20px_rgba(255,51,51,0.3)] hover:shadow-[0_0_30px_rgba(255,51,51,0.6)] hover:bg-red-500 transition-all duration-300 hover:-translate-y-1"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* COLUMN-2 */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              <Image
                src="/images/digital/girldoodle.svg"
                alt="girldoodle"
                width={815}
                height={691}
                className="drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Digital;
