import React, { useState } from 'react'

const Content = () => {

    const [name, setName] = useState('Bobby');
    const [count, setCount] = useState(0);

    const handleNameChange = () => {
        const names = ["Gal Gaddot", "Nicky Minaj", "Lana Del Ray"];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
    }

    const handleClick = () => {
        setCount(count+1);  //this changes state for the next time to be shown
        console.log(count); //the state we pass to function wont change itself in the function
    }

    const handleClick2 = (name) => {
        console.log(`${name} was clicked`)
    }

    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {name}!
            </p>
            
            <button onClick={handleNameChange}>Click on this to change the name</button>

            <button onClick={handleClick}>Click it</button>
            
            <button onClick={() => handleClick2('Abdullah')}>Click it</button>


        </main>
    )
}

export default Content