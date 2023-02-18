import Grid from 'media/photo-grid.png'

function Hero() {
    return (
        <section className='hero'>
            <img src={Grid} className='hero--image'></img>
            <div className='hero--text'>
                <h1>Online Experiences</h1>
                <h3>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h3>
            </div>
        </section>
    )
}

export default Hero