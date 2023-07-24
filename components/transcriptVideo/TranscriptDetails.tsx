"use client"
import Button from '@components/button/Button'
import Section from '@components/section/Section'
import { copyClipboard } from '@utils/helper/copyToClipboard';
import { eventBus } from '@utils/helper/eventBus';
import { transScribe } from '@utils/helper/transcript';
import React, { useEffect, useState } from 'react'
import CaptionListting from './CaptionListting';
import { upload_file } from '@utils/helper/network';
import { subtitle } from '@utils/helper/subtitle';
import Loader, { TYPE } from '@components/button/Loader';

let copy = false;

function TranscriptDetails() {
    const [id, setId] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [captionsList, setCaptionsList] = useState<any>(null);
    const [autoScroll, setAutoScroll] = useState<boolean>(false)

    useEffect(() => {
        // === setting id data ======
        eventBus.on('search', (data) => {
            const ytUrl = data.search.split('/')
            setId(ytUrl[ytUrl.length - 1])
        })

        if (id) {
            // un-comment this for fetching transcript information
            // getData()
            transScribe()
        }
        return () => {
            eventBus.remove('search', () => null)
        }
    }, [id])


    const getData = async () => {
        if (id) {
            const data = await upload_file(id)
            // console.log(data, 'data');
            setCaptionsList(data)

        }
    }

    // ==== copy to Clipboard =====
    const copyToClipboard = () => {
        setLoading(true)
        if (captionsList?.text) {
            copyClipboard(captionsList?.text)
            copy = true
        }
        setTimeout(() => {
            setLoading(false)
        }, 1000);

    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        if (!autoScroll) {
            setAutoScroll(true)
        } else {
            setAutoScroll(false)
        }
    }


    // replace true with captionList
    return !true ? (
        <div className='flex flex-col lg:flex-row justify-center items-center py-7 px-4 lg:px-0 gap-3'>
            <Loader type={TYPE.BLACK} loaderHeight={50} loaderWidth={50} />
            <h5 className=' text-base lg:text-xl'>
                Please wait... while your video is transcripting...
            </h5>
        </div>
    ) : id && (
        <div>
            <Section sectionStyle=' px-4 lg:px-0 py-14 grid gap-10 grid-cols-1 lg:grid-cols-2'>
                <iframe id="player" className=' w-full h-[225px] lg:w-full lg:h-[375px]'
                    src={`https://www.youtube.com/embed/${id}?enablejsapi=1`}
                    title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />

                <div className=' relative bg-[#80808022] w-full  h-[375px]  grid p-4'>
                    <div className='  mb-12 overflow-auto'>
                        <CaptionListting data={captionsList} autoScoll={autoScroll} />

                    </div>
                    <div className='absolute bottom-2 right-3 flex items-center gap-3 '>

                        <input type='checkbox' className='p-7 hidden lg:block' value={'true'} onChange={e => handleOnChange(e)} />
                        <h5 className='text-lg hidden lg:block'> autoscroll</h5>
                        <h5 className='text-sm block lg:hidden'> (autoscroll - available soon)</h5>
                        <Button loading={loading} action={!copy ? copyToClipboard : () => null} wraperStyle='text-base lg:text-lg font-bold text-[white] bg-[#7300ff50] ' buttonStyle='bg-[#7300ff50]   px-5 ' lable={!copy ? 'copy' : 'copied'} />
                    </div>
                </div>
            </Section>

        </div>
    )
}

export default TranscriptDetails