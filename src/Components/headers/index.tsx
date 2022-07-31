import { useContext, useEffect, useState } from 'react'
import { ParagraphContext } from '../../Contexts/paragraph'
import IParagraph from '../../Interfaces/paragraph'





const Header = () => {

    const [data, setData] = useState<IParagraph>({ paragCount: 1, format: 'text' })
    const { fetchParagraph} = useContext(ParagraphContext)

    useEffect(() => {
        if (data.paragCount > 0)
            fetchParagraph({ ...data })
    }, [data])

    return (
        <div className='w-full'>
            <div className='text-3xl'>WELCOME TEXT GENERATOR</div>
            <div className='flex my-2 justify-center'>
                <div className='mx-2'>
                    <div><span>Paragraph Count</span></div>
                    <input onChange={(e) => setData({ ...data, paragCount: Number(e.target.value) })} className='border border-opacity-30 border-white bg-transparent outline-none pl-2 rounded-lg w-[50%]' type="number" min={1} defaultValue={1} />
                </div>
                <div className=''>
                    <div className='mx-2'><span>HTML</span></div>
                    <div className='relative border w-14 h-7 rounded-full text-black' >
                        <input onChange={(e) => setData({ ...data, format: e.target.checked ? 'html' : 'text' })} type='checkbox' className="ease-linear duration-300 appearance-none absolute left-1 top-[3px] bg-white rounded-full text-xs leading-3 p-1 before:content-['No'] before:checked:content-['Yes'] active:w-8 checked:active:duration-[0ms] checked:active:translate-x-1/2 checked:translate-x-[90%] checked:bg-emerald-500" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header