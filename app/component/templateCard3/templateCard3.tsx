import React from 'react'

const TemplateCard3 = () => {

  return (

    <a href='/model' className="bg-white rounded-3xl shadow-2xl w-full p-8 relative cursor-pointer hover:shadow-pink-200">


    {/* Calin image */}
    <img src="/kiss.png" alt="" className='h-44 mx-auto'/>

    {/* Content */}
    <div className="text-center mt-8 mb-12">
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
          Will you be my Valentine 2 ?!
      </h1>
    </div>


  </a>
  )
}

export default TemplateCard3
