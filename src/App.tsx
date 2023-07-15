import Bars from "./assets/icons/Bars"
import { useState } from 'react'
import Editor from "./components/Editor/Editor"
import Close from "./assets/icons/Close"

export function App() {

  const [showAside, setShowAside] = useState<boolean>(true)

  return (
    <div className="p-8 min-h-screen text-zinc-900 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
      <div className={`grid ${showAside ? 'grid-cols-[16rem_1fr]' : 'grid-cols-[4rem_1fr]'} bg-white w-[1380px] mx-auto overflow-scroll rounded-xl min-h-[870px] max-h-[870px] shadow-md`}>

        <aside className={`bg-zinc-100 border-r border-r-zinc-150 p-4`}>
          <button className={`${showAside ? 'ml-[90%] hover:text-red-500' : 'hover:text-violet-500'}`} onClick={() => setShowAside(!showAside)}>
            {showAside ? <Close /> : <Bars />}
          </button>
        </aside>

        <main className='p-4'>
          <Editor />
        </main>
      </div>
    </div>
  )
}
