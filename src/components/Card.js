import Star from 'media/star.png'
const path = 'media/'

function Card(props) {
    return (
        <section className='card'>
            <div className='card--image' style={{background: `url(${path + props.image})`}}>
                <p className='card--image--label'>SOLD OUT</p>
            </div>
            <div className='card--content'>
                <div className='card--content--review'>
                    <img src={Star} className='card--content--review--star'></img>
                    <p>{props.rating}</p>
                    <p className='card--content--review--greytext'>{'(' + props.reviewCount + ')'}</p>
                    <p className='card--content--review--greytext'>{'\u2022'}</p>
                    <p className='card--content--review--greytext'>{props.country}</p>
                </div>
                <p>{props.title}</p>
                <p><b>From ${props.price}</b> / person</p>
            </div>
        </section>
    )
}

export default Card