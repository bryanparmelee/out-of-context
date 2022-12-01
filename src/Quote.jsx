const Quote = ({randomQuote}) => {
    const { quote, author } = randomQuote;
    return (
        <div className="text-center">
            <h2 className="font-serif text-7xl font-bold text-white">
                {`"${quote}"`}
            </h2>
            <h5 className="font-sans text-white text-lg pt-6 pr-12 text-right">{`— ${author}`}</h5>
        </div>
    )
}

export default Quote;