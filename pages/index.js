import Image from 'next/image'
import Head from 'next/head'


export default function Home() {
  return (
  <section className="text-gray-600 body-font">
    <Head>
      <title>Dhruva Shaw</title>
    </Head>
  <div className="container px-5 py-24 mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
      <div className="rounded-lg h-64 overflow-hidden">
        <Image alt="content" className="object-cover object-center h-full w-full" width={1200} height={500} src="/bg.png"/>
      </div>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
          <Image alt="content" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-full w-full" viewBox="0 0 24 24" width={1200} height={1200} src="/profile.png"/>
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Dhruva Shaw</h2>
            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p className="text-base">A discord.py bot developer and a full stack web developer using python</p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4">Hey there myself, Dhruva Shaw.<br/> I am discord.py bot developer and a full stack web developer using python. Apart from that I am a robotics engineer, I do various different kind electronics and software projects. All of the research and code are open sourced, head over to my github and see more!</p>
          <a className="text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
