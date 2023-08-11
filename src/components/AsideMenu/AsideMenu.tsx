import { Dispatch } from "react"
import { Close, Bars, Add } from "../../assets/icons/"
import { JSONContent } from "@tiptap/react"
import PageButton from "./PageButton/PageButton"

interface iProps {
    setShowAside: Dispatch<React.SetStateAction<boolean>>
    showAside: boolean
    text: JSONContent
}

export default function AsideMenu({ setShowAside, showAside, text }: iProps) {
    const menuOptionsStyles = 'hover:text-zinc-600 hover:bg-zinc-200 p-1 rounded-md'
    const setShowMenuStyles = `hover:bg-zinc-200 p-1 rounded-md ${showAside ? 'hover:text-red-500' : 'hover:text-violet-500'}`

    return (

        <aside className={`bg-zinc-100 border-r border-r-zinc-150 p-4`}>
            <div>
                <button
                    className={`${showAside
                        ? ' hover:bg-zinc-200 p-1 rounded-md'
                        : ' hover:bg-zinc-200 p-1 rounded-md'
                        }`
                    }
                    onClick={() => setShowAside(!showAside)}
                >
                    {showAside ? <Close /> : <Bars />}
                </button>
                <button className={menuOptionsStyles}>
                    <Add />
                </button>
            </div>

            {/* PROJETOS */}
            <div>
                <PageButton title={text.content?.[0]?.content?.[0]?.text || "Type something"} />
            </div>

        </aside>

    )

}