import React, { Component } from 'react';
import FriendCard from '../FriendCard';
import friends from '../../friends.json';
import './FriendWrapper.css';

class FriendWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends
        };
    }

    render() {
        return (
            <div className="wrapper">
                <div className="friend-div">
                    {this.state.friends.map(friend =>
                        <FriendCard
                            id={friend.id}
                            key={friend.id}
                            name={friend.name}
                            image={friend.image}
                        />
                    )}
                </div>
            </div>
        );
    };
};

export default FriendWrapper;