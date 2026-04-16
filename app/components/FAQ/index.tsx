"use client"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const faqs = [
    {
        q: "Tell me about The Shams Media",
        a: "The Shams Media is a creative agency helping creators, entrepreneurs, and photographers build their brand with stunning visuals and strategy-driven editing."
    },
    {
        q: "Which services do you provide?",
        a: "We provide a wide range of video & image editing services, including reels & shorts, YouTube videos, promo videos, motion graphics, background removal, ghost mannequin, image retouching, image masking, color correction, multi-path edits, and more. Customized packages are available to fit your brand's needs."
    },
    {
        q: "Do you handle international projects?",
        a: "Absolutely! We work with international photographers, content creators, and entrepreneurs worldwide. No matter where you're located, we're ready to help you scale your brand."
    },
    {
        q: "Can I get ongoing support for my brand?",
        a: "Yes! We're not just a one-time service. We offer monthly retainers and continuous support to keep your content fresh, consistent, and ahead of competitors."
    },
    {
        q: "How do you guarantee client satisfaction?",
        a: "We prioritize your vision. With unlimited revisions, real-time communication, and a dedicated project manager, we make sure every deliverable aligns perfectly with your expectations. Your satisfaction drives us."
    },
    {
        q: "Why choose an agency over freelancers?",
        a: "Freelancers may come and go, but with The Shams Media, you get a reliable in-house team that works as an extension of your brand. No missed deadlines, no communication gaps—just professional results every time."
    },
    {
        q: "What's your step-by-step workflow?",
        a: "We follow a streamlined process: Discovery Call – Understand your goals. Strategy – Define editing style and timeline. Production – Editing and revisions."
    },
]

const FAQ = () => {
    return (
        <div id="faq-section" className='relative mx-auto max-w-7xl py-24 lg:px-8 rounded-2xl my-16 overflow-hidden'>
            {/* Ambient glow */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon/10 blur-[150px] rounded-full pointer-events-none -z-10" />

            <h3 className='text-neon text-sm md:text-base font-bold tracking-[0.2em] uppercase text-center mb-4'>FAQ</h3>
            <h2 className='text-4xl lg:text-5xl xl:text-6xl font-extrabold text-center text-white tracking-tight mb-6'>Frequently asked <br /> questions.</h2>
            <p className='text-center text-white/50 text-lg mb-16 max-w-2xl mx-auto'>Everything you need to know about getting started with The Shams Media.</p>

            <div className="w-full px-4 pt-4 space-y-4 max-w-5xl mx-auto">
                {faqs.map((item, i) => (
                    <Disclosure key={i}>
                        {({ open }) => (
                            <div className={`rounded-[24px] backdrop-blur-md border transition-all duration-300 ${open
                                ? 'bg-white/10 border-white/20 shadow-[0_0_30px_rgba(255,51,51,0.08)]'
                                : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                                }`}>
                                <Disclosure.Button className="flex w-full justify-between items-center px-6 py-6 text-left text-xl lg:text-2xl font-semibold focus:outline-none">
                                    <span className='text-white'>{item.q}</span>
                                    <span className={`flex items-center justify-center flex-shrink-0 ml-4 w-10 h-10 rounded-full transition-all duration-300 ${open ? 'bg-neon/20 rotate-180' : 'bg-white/5'}`}>
                                        <ChevronUpIcon className={`h-6 w-6 transition-colors ${open ? 'text-neon' : 'text-white/60'}`} />
                                    </span>
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-6 pb-8 text-base lg:text-lg text-white/60 font-normal leading-relaxed">
                                    {item.a}
                                </Disclosure.Panel>
                            </div>
                        )}
                    </Disclosure>
                ))}
            </div>
        </div>
    )
}

export default FAQ;