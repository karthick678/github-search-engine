import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Profile from './Profile/Profile';
import RepoList from './RepoList/RepoList';

class User extends Component {
    render() {
        const { user } = this.props;
        return (
            <React.Fragment>
                <Profile profile={user.profile} />
                <div className="content">
                    <h4> Repositories </h4>
                    <div className="repositories">
                        {
                            user.repos.map((repo, key) => {
                                return <RepoList repo={repo} key={key} />
                            })
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default User;