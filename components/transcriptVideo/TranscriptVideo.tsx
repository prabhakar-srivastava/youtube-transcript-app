import Section from '@components/section/Section'
import React from 'react'
import Search from './Search'
import TranscriptDetails from './TranscriptDetails'

function TranscriptVideo() {

  return (
    <div>
      <Section wrapperStyle="  bg-[#7300ff50]  h-[30rem]" sectionStyle='h-full'>
        <div className=' h-full  flex flex-col justify-center items-center'>
          <h2 className="text-[white] font-bold text-4xl lg:text-[3.5rem]">Get a TranScript : </h2>
          <div className='mt-10'>
            <Search />
          </div>
        </div>
      </Section>
      <TranscriptDetails />
    </div>
  )
}

export default TranscriptVideo