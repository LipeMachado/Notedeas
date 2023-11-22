import { Editor } from "./components/Editor";

export function App() {
  return (
    <>
      <div className="min-h-screen p-8 text-neutral-50 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
        <div className="bg-gray-900 w-[1100px] mx-auto rounded-xl min-h-[630px] shadow-lg border border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]">
          <aside className="bg-slate-800/30 border-r border-r-slate-800/20 p-4">
            <div className="flex gap-2 group">
              <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-red-400" />
              <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400" />
              <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-green-400" />
            </div>
          </aside>
          <main className="p-4">
            <Editor />
          </main>
        </div>
      </div>
    </>
  )
}