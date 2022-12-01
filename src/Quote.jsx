const Quote = ({randomQuote}) => {
    const { quote, author } = randomQuote;
    return (
        <div>
            <h2>{quote}</h2>
            <h5>{author}</h5>
        </div>
    )
}

export default Quote;