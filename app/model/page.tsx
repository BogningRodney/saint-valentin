import React from 'react'
import Question from '../question/page'
import TemplateCard from '../component/templatecard/templateCard'

const page = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans text-black relative">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center  py-32 px-16 bg-white sm:items-start overflow-hidden">

        <h1 className="text-center  w-full text-2xl md:text-3xl lg:text-4xl font-semibold"> 
          Model name
        </h1>

        <div className="fixed z-10 bottom-10 right-10">
          <button className="text-white bg-pink-500 hover:bg-pink-400 cursor-pointer py-3 px-6 rounded-2xl w-full text-xl font-medium">
            New instance
          </button>
        </div>

        {/* Preview of the model */}
        <div className='w-full flex flex-col items-center'>
            <h2 className='text-start text-black text-xl font-medium w-full border-b pb-3 mb-3'>Model preview</h2>
            <Question />
        </div>

        {/* Template cards */}
        <div className='my-12 w-full'>
            <h2 className='text-start text-black text-xl font-medium w-full border-b pb-3 mb-3'>Messages already created</h2>
        
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center w-full">
                <TemplateCard />
                <TemplateCard />
                <TemplateCard />
                <TemplateCard />
                <TemplateCard />
                <TemplateCard />
            </div>
        </div>

      </main>
    </div>
  )
}

export default page
