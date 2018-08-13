import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as Constants from "./../helper/Constant";
import { HttpWrapper } from "./../helper/HttpWrapper";
import Header from './../components/Header/Header';
import Loader from './../components/Loader/Loader';
import User from './../components/User/User';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            profile: {},
            repos: []
        }

        this.searchOnClickHandler = this.searchOnClickHandler.bind(this);
    }

    searchOnClickHandler(searchText, searchBy) {
        let userUrl = null;
        let repoUrl = null;

        if (searchText) {
            this.setState({
                isLoading: true,
                profile: {},
                repos: []
            });

            if (searchBy == Constants.USERNAME) {
                userUrl = Constants.USER_URL.replace("{search}", searchText);
                repoUrl = Constants.REPO_URL.replace("{search}", searchText);
                this.getUser(userUrl, repoUrl);
            } else {
                userUrl = Constants.REPO_URL.replace("{search}", searchText);
            }

        } else {
            this.setState({
                isLoading: false,
                profile: {},
                repos: []
            });
        }
    }

    getUser(userUrl, repoUrl) {
        HttpWrapper.get(userUrl).then((res) => {
            this.prepareUser(res);
            this.getRepo(repoUrl);
        });
    }

    getRepo(repoUrl) {
        HttpWrapper.get(repoUrl).then((res) => {
            this.prepareRepo(res);
        });
    }

    prepareUser(res) {
        if (res) {
            this.setState((prevState) => {
                return {
                    isLoading: prevState.isLoading,
                    profile: res,
                    repos: prevState.repos
                }
            });
        } else {
            this.setState((prevState) => {
                return {
                    isLoading: prevState.isLoading,
                    profile: {},
                    repos: prevState.repos
                }
            });
        }
    }

    prepareRepo(res) {
        if (res) {
            this.setState((prevState) => {
                return {
                    isLoading: false,
                    profile: prevState.profile,
                    repos: res
                }
            });
        } else {
            this.setState((prevState) => {
                return {
                    isLoading: false,
                    profile: prevState.profile,
                    repos: []
                }
            });
        }
    }

    render() {
        return (
            <div>
                <Header searchOnClickHandler={this.searchOnClickHandler} />
                <div className="wrapper">
                    {(this.state.profile.url || this.state.repos.length > 0) ? < User user={this.state} /> : <h5>Please Enter Search String</h5>}
                </div>
                {this.state.isLoading ? <Loader /> : ''}
            </div>
        )
    }
}

export default App;
