import { FaSearch } from "react-icons/fa";


export default function searchedCharacters({ setSearch, search }) {
     return (
        <form className="flex justify-center">
            <input 
            className="w-2/3 px-4 py-2 text-gray-700 bg-gray-200 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="text" 
            placeholder="search for characters" />
            <button className="">
                <FaSearch className="text-2xl m-4" />
                </button>
        </form>
    )
}