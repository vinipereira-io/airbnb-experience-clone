import Star from 'media/star.png'

function Card() {
    return (
        <section className='card'>
            <div className='card--image'>
                <p className='card--image--label'>SOLD OUT</p>
            </div>
            <div className='card--content'>
                <div className='card--content--review'>
                    <img src={Star} className='card--content--review--star'></img>
                    <p>5.0</p>
                    <p className='card--content--review--greytext'>(6)</p>
                    <p className='card--content--review--greytext'>{'\u2022'}</p>
                    <p className='card--content--review--greytext'>USA</p>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p><b>From $136</b> / person</p>
            </div>
        </section>
    )
}

export default Card