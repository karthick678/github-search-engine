import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './Profile.css';

class Profile extends Component {
    render() {
        const { profile } = this.props;
        return (
            <div className="aside">
                <div className="container">
                    <div className="avatarContainer">
                        <img className="profile-img" src={profile.avatar_url} />
                        <a href={profile.html_url} className="viewProfile">View Profile</a>
                        <div className="name">{profile.name}</div>
                        <div className="userName">{profile.login}</div>
                    </div>
                    <div className="otherInfo">
                        {profile.company ? <div className="compay">
                            <i className="fa fa-building-o"></i> {profile.company}
                        </div> : ""}

                        {profile.location ? <div className="location">
                            <i className="fa fa-map-marker"></i> {profile.location}
                        </div> : ""}

                        {profile.email ? <div className="mail">
                            <i className="fa fa-envelope"></i>
                            <a href={`mailto:${profile.email}`}>{profile.email}</a>
                        </div> : ""}
                    </div>
                    <div className="otherInfo">
                        <ul>
                            <li><span className="number">{profile.public_repos}</span> Public Repo</li>
                            <li><span className="number">{profile.public_gists}</span> Public Gists</li>
                            <li><span className="number">{profile.followers}</span> Followers</li>
                            <li><span className="number">{profile.following}</span> Following</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;