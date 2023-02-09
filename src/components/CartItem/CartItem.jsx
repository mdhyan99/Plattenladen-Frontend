import {BiTrash} from "react-icons/bi"
import Counter from "./Counter"

import "./CartItem.scss"

export default function({item, amount}) {
    console.log(item)
    return (
        <div>
            <div>
            <img className="cart-item-img" src={item?.picture}/>
            <h5>{item?.artist}</h5>
            <p>{item?.title}</p>
            </div>
            <div>
            <p>{item?.price}</p>
            <Counter/>
            <BiTrash/>
            </div>
        </div>
    )
}