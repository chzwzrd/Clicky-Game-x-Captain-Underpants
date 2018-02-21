import React, { Component } from 'react';
import FriendWrapper from '../FriendWrapper';
import FriendCard from '../FriendCard';
import friends from '../../friends.json';
import './Main.css';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends
        };
    }

    render() {
        return (
            <div className="main">
                <FriendWrapper>
                    {this.state.friends.map(friend => 
                        <FriendCard
                            id={friend.id}
                            key={friend.id}
                            name={friend.name}
                            image={friend.image}
                        />
                    )}
                </FriendWrapper>
            </div>
        );
    };
};

export default Main;