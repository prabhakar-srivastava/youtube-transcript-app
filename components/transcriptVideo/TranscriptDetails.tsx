"use client"
import Button from '@components/button/Button'
import Section from '@components/section/Section'
import { copyClipboard } from '@utils/helper/copyToClipboard';
import { eventBus } from '@utils/helper/eventBus';
import { transScribe } from '@utils/helper/transcript';
import React, { useEffect, useState } from 'react'
import CaptionListting from './CaptionListting';
import { upload_file } from '@utils/helper/network';


let copy = false;

function TranscriptDetails() {
    const [id, setId] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [captionsList, setCaptionsList] = useState<any>();

    useEffect(() => {
        // === setting id data ======
        eventBus.on('search', (data) => {
            const ytUrl = data.search.split('/')
            setId(ytUrl[ytUrl.length - 1])
        })

        if (id) {

            getData()
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
        copyClipboard(captionsList?.text)
        copy = true
        setTimeout(() => {
            setLoading(false)
        }, 1000);

    }



    return id && captionsList?.data?.length && (
        <div>
            <Section sectionStyle=' px-4 lg:px-0 py-14 grid gap-10 grid-cols-1 lg:grid-cols-2'>
                <iframe id="player" className=' w-full h-[225px] lg:w-full lg:h-[375px]' src={`https://www.youtube.com/embed/${id}?enablejsapi=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
                <div className=' relative bg-[#80808022] w-full  h-[375px]  grid p-4'>
                    <div className='  mb-11 overflow-auto'>
                        <CaptionListting data={captionsList} />
                    </div>
                    <Button loading={loading} action={!copy ? copyToClipboard : () => null} wraperStyle='absolute bottom-3 right-3 text-lg font-bold text-[white] bg-[#7300ff50] ' buttonStyle='bg-[#7300ff50]   px-5 ' lable={!copy ? 'copy' : 'copied'} />
                </div>
            </Section>

        </div>
    )
}

export default TranscriptDetails