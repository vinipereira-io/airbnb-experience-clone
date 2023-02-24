import Star from 'media/star.png'

function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = 'SOLD OUT';
    } else if (props.location === 'Online') {
        badgeText = 'ONLINE';
    }

    return (
        <div className='card'>
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img src={props.image} className='card--image'></img>
            <div className='card--content'>
                <div className='card--content--review'>
                    <img src={Star} className='card--content--review--star'></img>
                    <p>{props.rating}</p>
                    <p className='card--content--review--greytext'>{'(' + props.reviewCount + ')'}</p>
                    <p className='card--content--review--greytext'>{'\u2022'}</p>
                    <p className='card--content--review--greytext'>{props.location}</p>
                </div>
                <p className='card--title'>{props.title}</p>
                <p className='card--price'><b>From ${props.price}</b> / person</p>
            </div>
        </div>
    )
}

export default Card