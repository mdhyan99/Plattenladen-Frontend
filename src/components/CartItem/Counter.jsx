import "./Counter.scss"

export default function({amount}) {
    return (
        <>
            <div className="counter">
                <span>-</span>
                <span>{amount}</span>
                <span>+</span>
            </div>
        </>
    )
}