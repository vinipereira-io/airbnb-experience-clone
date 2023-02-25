import Star from 'media/star.png'

function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = 'SOLD OUT';
    } else if (props.item.location === 'Online') {
        badgeText = 'ONLINE';
    }

    return (
        <div className='card'>
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img src={props.item.coverImg} className='card--image'></img>
            <div className='card--content'>
                <div className='card--content--review'>
                    <img src={Star} className='card--content--review--star'></img>
                    <p>{props.item.stats.rating}</p>
                    <p className='card--content--review--greytext'>{'(' + props.item.stats.reviewCount + ')'}</p>
                    <p className='card--content--review--greytext'>{'\u2022'}</p>
                    <p className='card--content--review--greytext'>{props.item.location}</p>
                </div>
                <p className='card--title'>{props.item.title}</p>
                <p className='card--price'><b>From ${props.item.price}</b> / person</p>
            </div>
        </div>
    )
}

export default Card