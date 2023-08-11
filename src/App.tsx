import { useState } from 'react'
import Editor from "./components/Editor/Editor"
import AsideMenu from "./components/AsideMenu/AsideMenu"
import { JSONContent } from '@tiptap/react'

export function App() {

  const [showAside, setShowAside] = useState<boolean>(true)
  const [text, setText] = useState<JSONContent>([])

  return (
    <div className="p-8 min-h-screen text-zinc-900 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
      <div className={`grid ${showAside ? 'grid-cols-[16rem_1fr]' : 'grid-cols-[4rem_1fr]'} bg-white w-[1380px] mx-auto overflow-scroll rounded-xl min-h-[870px] max-h-[870px] shadow-md`}>

        <AsideMenu setShowAside={setShowAside} showAside={showAside} text={text} />

        <main className='p-4'>
          <Editor setText={setText} />
        </main>
      </div>
    </div>
  )
}
