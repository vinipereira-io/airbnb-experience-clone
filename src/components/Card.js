import Star from 'media/star.png'

function Card(props) {
    return (
        <section className='card'>
            <img src={props.image} className='card--image'></img>
            <div className='card--content'>
                <div className='card--content--review'>
                    <img src={Star} className='card--content--review--star'></img>
                    <p>{props.rating}</p>
                    <p className='card--content--review--greytext'>{'(' + props.reviewCount + ')'}</p>
                    <p className='card--content--review--greytext'>{'\u2022'}</p>
                    <p className='card--content--review--greytext'>{props.location}</p>
                </div>
                <p>{props.title}</p>
                <p><b>From ${props.price}</b> / person</p>
            </div>
        </section>
    )
}

export default Card