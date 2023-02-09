import { BiUser } from "react-icons/bi"
import { GrCart } from "react-icons/gr"

import Searchfield from "./Searchfield"

import "./Header.scss"

export default function() {
    return (
        <header>
            <span>Groove City</span>
            <Searchfield />
            <BiUser className="user-icon"/>
            <GrCart className="cart-icon"/>
        </header>
    )
}