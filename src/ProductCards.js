import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './ProductCards.css'

function ProductCards() {
    const [people, setPeople] = useState([
        {
            name: "Nature",
            url: "https://images.unsplash.com/photo-1532344110095-8c22cdcfc71c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80",
        },
        {
            name: "Ocean",
            url: "https://images.unsplash.com/photo-1606744666360-2f22c8b4a45b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
        },
        {
            name: "Sky",
            url: "https://images.unsplash.com/photo-1509647648544-a3e09b751ad6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=348&q=80",
        },
    ])

    const swiped = (direction, nameToDelete) => {
        console.log('removing' + nameToDelete)
    }
    
    const outOfFrame = (name) => {
        console.log(name + 'left the screen')
    }
    return (
            <div className="productCards">
                <div className='productCards__cardContainer'>
                    {people.map((person) => (
                        <TinderCard
                            className="swipe"
                            key={person.name}
                            preventSwipe={["up","down"]}
                            onSwipe={(dir) => swiped(dir, person.name)}
                            onCardLeftScreen={() => outOfFrame(person.name)}
                        >
                            <div
                                style={{ backgroundImage: `url(${person.url})`}}
                                className="card"
                            >
                                <h3>{person.name}</h3></div>
                        </TinderCard>
                    ))} 
                </div>
            </div>
            )
}

export default ProductCards