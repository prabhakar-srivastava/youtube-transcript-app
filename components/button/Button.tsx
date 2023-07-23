"use client"
import Image from 'next/image';

interface ButtonProps {
    lable: string;
    action?: any;
    buttonStyle?: string;
    wraperStyle?: string;
    loading?: boolean;
}

function Button({ lable, action, buttonStyle, wraperStyle, loading }: ButtonProps) {

    return (
        <div className={`${wraperStyle || ''}`}>
            <button
                disabled={loading}
                className={`${buttonStyle || ''} h-12  `}
                onClick={() => {
                    action()
                }}
            >
                {loading && <Image className='animate-spin' src={'/loading.svg'} alt='' width={30} height={30} />}
                {!loading && lable}
            </button>
        </div>
    )
}

export default Button