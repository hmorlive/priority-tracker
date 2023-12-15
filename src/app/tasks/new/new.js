export default function NewTask () {
    return (
        <form className="w-full flex gap-2 items-center justify-center">
            <input type="text" maxLength={200} className="bg-transparent border border-zinc-400 text-base rounded-md w-full px-2 py-1"></input>
            <select  className="bg-transparent px-2 py-1 border border-zinc-400 rounded-md">
                <option default>low</option>
                <option>medium</option>
                <option>high</option>
            </select>
            <input type="submit" value={'Submit'} className="bg-green-700 px-3 py-2 rounded-md"/>
        </form>
    )
}