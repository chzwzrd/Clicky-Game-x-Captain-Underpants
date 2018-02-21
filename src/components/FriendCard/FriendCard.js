import React from 'react';
import './FriendCard.css';

const FriendCard = props =>
            <div className="card"
                style={{
                    backgroundImage: 'url(' + props.image + ')',
                    backgroundSize: 'cover',
                    backgroundPosition: '50%'
                }}>
            </div>;

export default FriendCard;