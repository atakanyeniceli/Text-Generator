import { useContext } from 'react'
import { ParagraphContext } from '../../Contexts/paragraph'

const Content = () => {

    const { parag } = useContext(ParagraphContext)

    const copyClipboard = () => {
        navigator.clipboard.writeText(parag)
    }

    return (
        <div className='w-full h-full'>
            <div className='flex my-5'>
                <span className='w-full self-center pl-20'>PARAGRAPHS</span>
                <button onClick={copyClipboard} className='text-xs border border-white border-opacity-40 rounded-lg'>Copy Clipboard</button>
            </div>
            <div className='h-[70%] overflow-y-auto border border-slate-400'>
                {parag.split('\n').map((i) => <div className='my-2 w-full'>{i}</div>)}
            </div>
        </div>
    )
}

export default Content