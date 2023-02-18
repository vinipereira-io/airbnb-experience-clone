import Star from 'media/star.png'
import Katie from 'media/katie-zaferes.png'

function Card() {
    return (
        <div className='Card'>
            <img src={Katie} className='Card--image'></img>
            <div className='Card--content'>
                <div>
                    <img src={Star}></img>
                    <p>5.0</p>
                    <p>(6)</p>
                    <p>USA</p>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p><b>From $136</b> / person</p>
            </div>
        </div>
    )
}

export default Card