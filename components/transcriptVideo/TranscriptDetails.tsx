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

let copy = false;

function TranscriptDetails() {
    const [id, setId] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [captionsList, setCaptionsList] = useState<any>();
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



    return id && true && (
        <div>
            <Section sectionStyle=' px-4 lg:px-0 py-14 grid gap-10 grid-cols-1 lg:grid-cols-2'>
                <iframe id="player" className=' w-full h-[225px] lg:w-full lg:h-[375px]'
                    src={`https://www.youtube.com/embed/${id}?enablejsapi=1`}
                    title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />

                <div className=' relative bg-[#80808022] w-full  h-[375px]  grid p-4'>
                    <div className='  mb-12 overflow-auto'>
                        <CaptionListting data={null} autoScoll={autoScroll} />
                    </div>
                    <div className='absolute bottom-2 right-3 flex items-center gap-3 '>

                        {/* <input type='checkbox' value={'true'} onChange={e => handleOnChange(e)} /> */}
                        autoscroll = available soon
                        <Button loading={loading} action={!copy ? copyToClipboard : () => null} wraperStyle='text-lg font-bold text-[white] bg-[#7300ff50] ' buttonStyle='bg-[#7300ff50]   px-5 ' lable={!copy ? 'copy' : 'copied'} />
                    </div>
                </div>
            </Section>

        </div>
    )
}

export default TranscriptDetails