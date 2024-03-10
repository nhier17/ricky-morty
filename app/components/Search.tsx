import { FaSearch } from "react-icons/fa";

interface SearchProps {
    setSearch: React.Dispatch<React.SetStateAction<string>>,
    search: string,
    setPageNumber: React.Dispatch<React.SetStateAction<number>>
}

export default function searchedCharacters({ setSearch, search,setPageNumber }: SearchProps) {
    const submitHandler = async(e: React.FormEvent) => {
        e.preventDefault()
        setPageNumber(1)
        setSearch(search)
    }
    return (
        <form className="flex justify-center mt-20" onSubmit={submitHandler}>
            <input 
            className="w-2/3 px-4 py-2 text-white bg-gradient-to-br from-gray-800 to-gray-600  rounded-md focus:outline-none  "
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="text" 
            placeholder="search for characters" />
            <button type="submit">
                <FaSearch className="text-2xl m-4 text-white" />
                </button>
        </form>
    )
}