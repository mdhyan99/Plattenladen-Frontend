import { GoSearch } from "react-icons/go"

export default function() {
    return (
        <div className="search-field">
            <input type="text" placeholder="Suche"></input>
            <GoSearch className="search-icon"/>
        </div>
    )
}