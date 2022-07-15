import React from 'react'

const Content = () => {
    const handleNameChnage = () => {
        const names = ["Gal Gaddot", "Nicky Minaj", "Lana Del Ray"];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }

    return (
        <main>
            <p>
                Hello {handleNameChnage()}!
            </p>
        </main>
    )
}

export default Content