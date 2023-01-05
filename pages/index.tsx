import Head from 'next/head'
import Link from 'next/link'
import { EngineList } from '../components/EngineList'
import NavBar from '../components/NavBar'
import { FlexCenter } from '../containers/FlexCenter'


export default function Home() {

  interface Engine {
    name: string;
    version: string;
    deciption: string;
    link: string;
  }

  const listOfEnginesData = [
    {
      name: "No engine",
      version: "v.0.1",
      deciption: "Play chess with yourself",
      link: "/no-engine"
    },
    {
      name: "Only Bad Moves",
      version: "v.0.1",
      deciption: "Only play bad moves",
      link: "/no-engine"
    },
    {
      name: "Advance",
      version: "v.0.1",
      deciption: "Rewards forward moves",
      link: "/no-engine"
    },
    {
      name: "Woaw this bad",
      version: "v.0.1",
      deciption: "Such a bad engine smh",
      link: "/no-engine"
    }
  ]




  return (
    <>
      <main className='bg-gray-400'>

        <div className='flex flex-col items-center gap-20'>
          <section className='w-2/3 bg-gray-900 flex flex-col items-center justify-center mt-20 rounded-xl p-4'>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We make bad chess engines for fun!</h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">With little to no knowledge of how chess engines work, we tried to make chess engines.</p>
            <Link href="/about" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              About us!
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </Link>
          </section>


          <blockquote className="text-xl italic font-semibold text-gray-900">
            <svg aria-hidden="true" className="w-10 h-10 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
            <p>"These people have no clue how to make a good chess engine."</p>
            <h5 className='mt-2 text-white font-bold border-black'>Bill Gates</h5>
          </blockquote>


          <EngineList listOfEngine={listOfEnginesData}/>



        </div>






      </main>
    </>
  )
}
