import React from 'react'

const ServicePreview = () => {
  return (
    <div className='py-16'>
        <h1 className="text-center mb-4 text-4xl font-semibold tracking-tight leading-none">
            Some of our Services
        </h1>
    
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-12 ">
        <div className="p-4 border-2 border-yellow-400 rounded-lg">
            <h1>Accomodation </h1>
        </div>

        <div className="p-4 border-2 border-yellow-400 rounded-lg">
            <h1>Tours </h1>
        </div>
        <div className="p-4 border-2 border-yellow-400 rounded-lg">
            <h1>Transport </h1>
        </div>
        <div className="p-4 border-2 border-yellow-400 rounded-lg">
            <h1>Wedding Venues </h1>
        </div>
        <div className="p-4 border-2 border-yellow-400 rounded-lg">
            <h1>Schools & Colleges </h1>
        </div>
    </section>
    </div>
  )
}

export default ServicePreview