"use client"
import Button from '@components/button/Button'
import { eventBus } from '@utils/helper/eventBus'
import React, { useEffect, useState } from 'react'

function Search() {
    const [search, setSearch] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)



    // ===== yt link validation ========
    const matchYoutubeUrl = (url: any) => {
        var regexp = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;

        if (url?.match(regexp)) {
            setError('')
            return true;
        } else {
            if (url.length > 0) setError('Invalid url: ' + url);
            else setError('')
        }

        return false;
    }

    // ===== input change handle =======
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const url = event?.target?.value
        setSearch(url)
        setError('')
    }


    // ==== dispacting Data======
    const setSearchId = () => {
        setLoading(true)
        const ytUrl = matchYoutubeUrl(search)
        if (ytUrl) {
            if (search?.length > 0) {
                eventBus.dispatch('search', { search: search })
                setTimeout(() => {
                    setLoading(false)
                }, 2000);
            } else {
                setLoading(false)
                return
            }
        }
        if (!ytUrl) {
            setLoading(false)
        }
        return
    }

    return (
        <div className='w-full'>
            <div className='flex flex-col lg:flex-row gap-7 justify-center items-center lg:gap-3'>
                <input onChange={(e) => onChangeHandler(e)} type="text" className="px-7 py-2.5 h-12  " placeholder='Enter ot Paste youTube video link' />
                <Button loading={loading} lable={'Go'} action={setSearchId} buttonStyle=' bg-[#7300ff50] px-14 py-1.5 text-[#fff] font-bold text-2xl' />
            </div>
            {error.length > 0 && <h3 className='text-red-700 font-semibold text-xl text-center px-3 mt-3'>{error}</h3>}
        </div>

    )
}

export default Search