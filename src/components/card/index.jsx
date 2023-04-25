const Card = ({ image, title, imgWidth }) => {
    return (
        <div className="flex flex-col" style={{width: imgWidth}}>
            <img src={image} alt="" className="rounded"/>
            <span className="mx-auto mt-4 text-gray-700">{title}</span>
        </div>
    )
}

export default Card;