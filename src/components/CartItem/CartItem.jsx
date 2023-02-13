import {BiTrash} from "react-icons/bi"
import Counter from "./Counter"

import "./CartItem.scss"

export default function({item, amount}) {

    return (
        <div>
            <div className="cart-item-row">
                <img className="cart-item-img" src={item?.picture}/>
                <div className="cart-item-description">
                    <h5>{item?.artist}</h5>
                    <p>{item?.title}</p>
                </div>
            </div>
            <div className="cart-item-row">
                <p>{item?.price} €</p>
                <Counter amount={amount}/>
                <BiTrash size={30}/>
            </div>
        </div>
    )
}