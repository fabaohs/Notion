import { Trash } from "../../../assets/icons/"

interface iProps {
    title: string
}

export default function PageButton({ title }: iProps) {
    const buttonCommonStyle = 'w-[100%] p-2 text-left hover:bg-zinc-200 rounded-md flex justify-between items-center'

    const buttonStyle = title === 'Type something'
        ? `${buttonCommonStyle} italic`
        : `${buttonCommonStyle}`

    return (
        <div className={buttonStyle}>
            <p>{title}</p>
            <button className="hover:text-red-500">
                <Trash />
            </button>
        </div>
    )
}