import React from "react";

import './Card.css'

const PromotionCard = ({ promotion }) => (
    <div className="promotion-card">
        <img src={promotion.imageUrl} className="promotion-card--image" />
        <div className="promotion-card--info">
            <h1 className="promotion-card--title">{promotion.title}</h1>
            <span className="promotion-card--price">R$ {promotion.price}</span>
            <footer className="promotion-card--footer">
                {promotion.comments.length > 0 && (
                    <div className="promotion-card--comment">"{promotion.comments[0].comment}"</div>
                )}

                <div className="promotion-card--comments-count">
                    {promotion.comments.length} {' '}
                    comentário{promotion.comments.length > 1 ? '1' : ''}
                    </div>
                <a href={promotion.url} target="_blank" className="promotion-card--link">IR PARA O SITE</a>
            </footer>
        </div>
    </div>
)

export default PromotionCard