import Section from '@components/section/Section'
import Image from 'next/image'
import React from 'react'

function Footer() {
    return (
        <Section >
            <div className='lg:flex items-center gap-9 justify-around  py-14 px-4 lg:px-0'>
                <div className='flex flex-col justify-center items-center'>
                    <Image src={'/computer.png'} width={120} height={120} alt='' />
                    <div className='text-center mt-6'>
                        <h1 className='font-bold text-2xl mb-3'>Reading is Faster</h1>
                        <h4 className='text-[grey] font-semibold text-xl' >Blah blah welcome to my video begone!</h4>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <Image src={'/stack.png'} width={120} height={120} alt='' />
                    <div className='text-center mt-6'>
                        <h1 className='font-bold text-2xl mb-3'>Probably Would not Fail</h1>
                        <h4 className='text-[grey] font-semibold text-xl' >Featuring the latest build of an undocumented API.</h4>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <Image src={'/checkmark.svg'} width={120} height={120} alt='' />
                    <div className='text-center mt-6'>
                        <h1 className='font-bold text-2xl mb-3'>Easy to Use</h1>
                        <h4 className='text-[grey] font-semibold text-xl' >Website definitely made with a bootstrap template.</h4>
                    </div>
                </div>

            </div>
        </Section>

    )
}

export default Footer