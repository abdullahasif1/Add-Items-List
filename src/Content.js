import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ["Gal Gaddot", "Nicky Minaj", "Lana Del Ray"];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }

    const handleClick = () => {
        console.log("You clicked it")
    }

    const handleClick2 = (name) => {
        console.log(`${name} was clicked`)
    }

    const handleClick3 = (e) => {
        console.log(e.target.innerText)
    }

    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {handleNameChange()}!
            </p>
            
            {/* we cannot do this to change name as handleNameChange only renders when page loads, to solve this we will be using useState Hook*/}
            <button onClick={handleNameChange}>Click on it to change the name</button>

            {/* if we put () after handleClick in {handleClick} it would be invoked immediately without even being clicked  */}
            <button onClick={handleClick}>Click it</button>
            
            {/* but here handleClick2 is not invoked immediately cause it it inside an anonymous function ()=>  */}
            <button onClick={() => handleClick2('Abdullah')}>Click it</button>

            {/* this targets the event happened which is in this case is a button */}
            <button onClick={(e) => handleClick3(e)}>Click it</button>

        </main>
    )
}

export default Content