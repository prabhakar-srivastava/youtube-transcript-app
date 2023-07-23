import Section from '@components/section/Section'
import Image from 'next/image'
import React from 'react'

function Navbar() {
    return (
        <div>
            <Section>
                <div className='fixed top-0 z-50 md:relative bg-white flex items-center px-3 py-2 lg:py-1 lg:px-0 justify-between gap-2'>
                    <div className='flex gap-2 items-center '>

                        <Image src={'/yt.svg'} alt='' width={50} height={50} />
                        <span className='font-bold lg:text-2xl' > YouTube TranScript</span>
                    </div>
                    <div>
                        <h5 className='text-sm lg:text-lg text-center'>Try my new <a href='https://pdf2gpt.com/' className='text-[blue] underline underline-offset-2'> automatic PDF summary</a> site</h5>
                    </div>
                </div>

            </Section>
        </div>
    )
}

export default Navbar