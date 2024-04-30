import React, { useState } from "react";
import './card.css'

interface cardProps{
    CardData:any;
}

const Card: React.FC<cardProps> = ({ CardData })=> {
    const [expand, setExpand] = useState(false);

    const handleCardClick = () => {
      setExpand(!expand);
    };

    const formatDate = (dateString:any) => {
        const date = new Date(dateString);
        return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
      };

    return(
        <div className={`card ${expand ? 'expanded' : ''}`} onClick={handleCardClick}>
           <div className="rank">{CardData.rank}</div>
           <img src={CardData.images.jpg.large_image_url} alt='img' className="images"/>
            <h5 className="title">{CardData.title}</h5>

            {expand && (
        <div className="expanddata">
            
            <div>Release Date: {CardData.aired.from ? formatDate(CardData.aired.from) : 'Now'}</div>
            <div>Latest Date: {CardData.aired.to ? formatDate(CardData.aired.to) : 'Now'}</div>
           <div>Rated: {CardData.rating}</div>

        </div>
      )}
        </div>

    )

}

export default Card;
