import axios from 'axios'
import { createContext, useState } from 'react'
import IParagraph from '../../Interfaces/paragraph'


type contextType = {
    parag: string,
    fetchParagraph: (value: IParagraph) => void
}

export const ParagraphContext = createContext<contextType>({ parag: '', fetchParagraph: () => { } })

const ParagraphProvider = ({ children }: { children: JSX.Element | Array<JSX.Element> }) => {


    const [parag, setParag] = useState<string>('')

    const fetchParagraph = (value: IParagraph) => {
        axios.get('https://baconipsum.com/api/', {
            params: {
                type: 'all-meat',
                paras: value.paragCount,
                format: value.format
            }
        }
        ).then((res) => setParag(res.data))
    }

    const values = { parag, fetchParagraph }

    return <ParagraphContext.Provider value={values}>{children}</ParagraphContext.Provider>
}

export default ParagraphProvider