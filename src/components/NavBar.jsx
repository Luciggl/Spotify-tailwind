import { Home as HomeIcon, Search, Library} from 'lucide-react'
export function NavBar() {
    return (
        <aside className="w-72bg-zinc-950 p-6">

            <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>

            <nav className="space-y-5 mt-8">
                <a href="#" className="flex item-center gap-3 text-sm font-semibold text-zinc-200">
                    <HomeIcon />
                    Home
                </a>
                <a href="#" className="flex item-center gap-3 text-sm font-semibold text-zinc-200">
                    <Search />
                    Search
                </a>
                <a href="#" className="flex item-center gap-3 text-sm font-semibold text-zinc-200">
                    <Library />
                    Your Library
                </a>
            </nav>

            <nav className="mt-6 pt-6 border-t border-zinc-700 flex flex-col gap-3">
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Hot Hits Brasil</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Top Brasil</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">My PlayList #1</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">AniverFunk</a>
            </nav>
        </aside>
    )
}