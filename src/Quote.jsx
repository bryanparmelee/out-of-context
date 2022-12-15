const Quote = ({randomQuote}) => {
    const { id, quote, author } = randomQuote;
    return (
        <div className="text-center">
            <h2 key={quote} 
                className="animate-quote-fade font-serif text-3xl sm:text-6xl font-bold text-white text-shadow-lg">
                {`"${quote}"`}
            </h2>
            <h5 key={id}
                className="animate-author-fade font-sans text-white text-md sm:text-lg pt-6 pr-12 text-right text-shadow-lg">
                {`— ${author}`}
            </h5>
        </div>
    )
}

export default Quote;