
export default function Card({ username, details, myArr }) {
    console.log(details)
    console.log(myArr)
    return (
        <>
            <h1><strong>{username}</strong></h1>
            <br />
            <p className="pl-2">Printing object and array.</p>

            <ul className="list-[number] pl-5">
                {Object.keys(details).map((key) => (
                    <li key={key}>
                        <strong>{key}:</strong> {details[key]}
                    </li>
                ))}

            </ul>
                    <br />
            <ol className="list-[upper-alpha] pl-5">
                {myArr.map((item) => (
                    <li key={item}> {item} </li>
                ))}
            </ol>

        </>
    )

}