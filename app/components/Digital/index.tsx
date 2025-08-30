import Image from "next/image";

const Digital = () => {
    return (

     <div className="mx-2">
  <div className="mx-auto max-w-7xl px-6 my-40 pb-10 lg:pb-20 lg:px-12 bg-digital rounded-3xl bg-blue relative overflow-hidden">
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center my-6">

      {/* COLUMN-1 */}
      <div className="pt-16 lg:pl-20">
        <h3 className="text-lg font-normal text-white mb-5 tracking-widest text-center lg:text-start">
          WHO WE ARE
        </h3>
        <h4 className="text-4xl sm:text-6xl font-bold text-white mb-8 leading-snug text-center lg:text-start">
          Creative editing that <br /> builds your brand.
        </h4>

        <ul className="space-y-5 text-lg text-white font-medium mb-10 text-center lg:text-start">
          <li>✨ Fits your brand with neuro-marketing strategy</li>
          <li>🎬 Premium editing that expresses who you are</li>
          <li>🌟 Not just edits — your lifetime creative guide</li>
        </ul>

        {/* Consultation Highlight */}
        <div className="bg-white/10 border border-white/20 rounded-xl p-6 text-center lg:text-start shadow-lg">
          <p className="text-xl font-semibold text-white mb-4">
            Get an exclusive 1-on-1 creative consultation with our experts.
          </p>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            className="inline-block text-lg font-semibold text-black bg-white py-3 px-8 rounded-full hover:bg-gray-100 transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* COLUMN-2 */}
      <div>
        <div className="lg:absolute girldoodle right-0">
          <Image
            src="/images/digital/girldoodle.svg"
            alt="girldoodle"
            width={815}
            height={691}
          />
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default Digital;
