import CartItem from "../components/CartItem/CartItem"

export default function({records}) {
    const cart = [
        {
            id: "esfse234056520w3wsdmdobht",
            amount: 2,
        }
    ]

    return (
        <>
            <h2>Warenkorb</h2>
            {cart.map((c,i)=> (
                <CartItem 
                    key={i} 
                    item={records.find((r)=> r.id == c.id)} 
                    amount={c.amount}
                />
            ))}
            <hr/>
            <div className="cart-sum">
                <span>Versandkosten</span>
                <span>5,95 €</span>
            </div>
            <div className="cart-sum">
                <span>Gesamtkosten</span>
                <span>49,85 €</span>
            </div>
        </>
    )
}