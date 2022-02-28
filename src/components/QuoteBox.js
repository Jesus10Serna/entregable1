import React from 'react';
import Quotes from "../quotes.json";
import { useState } from 'react';

const getRandom = () => Math.floor(Math.random() * Quotes.length)

const colors = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871", "#5EC284", "#2BAB8D", "#00928D", "#057984", "#246071", "#246071"];

const QuoteBox = () => {

    const [quote, setQuote] = useState(Quotes[getRandom()])

    
    //const quote = Quotes[0]

    const changeQuote = () => {
        const random = getRandom();
        setQuote(Quotes[random]);
    }

    const color = colors[Math.floor(Math.random() * colors.length)]

    document.body.style = `background: ${color}`

    console.log(Quotes)
    return (
        <div className="quote-cont" style={{color: color}}>
            <h3><i class="fas fa-quote-left"></i> {quote.quote}</h3>
            <h4>{quote.author}</h4>
            <button onClick={changeQuote} style={{color: color}}><i class="fas fa-angle-right"></i></button>
            
        </div>
    );
};

export default QuoteBox;