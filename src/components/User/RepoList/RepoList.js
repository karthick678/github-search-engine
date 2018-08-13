import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

import './RepoList.css';
import { HttpWrapper } from "./../../../helper/HttpWrapper";
import Langauge from "./../../Langauge/Langauge";

class RepoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            langData: {}
        }
    };

    __getClassName(val) {
        return val && val.toLowerCase();
    };

    __getFromattedDate(d) {
        return moment(d).format("MMMM Do YYYY, h:mm:ss a")
    }

    componentDidMount() {
        const url = this.props.repo.languages_url
        HttpWrapper.get(url).then((res) => {
            this.setState({ langData: res });
        });
    }

    render() {
        const { repo } = this.props;
        return (
            <div className="repo">
                <span className="repo__name">
                    <a href={repo.html_url} target="_blank">{repo.name}
                        <span className="repo_fullName">{repo.full_name}</span>
                    </a>
                </span>
                <p className="repo__description">
                    {repo.description}
                </p>
                <div className="repo__otherInfo">
                    <ul>
                        <li className={"repo-language-color " + this.__getClassName(repo.language)}>{repo.language}</li>
                        <li>{repo.forks_count + " Forks"}</li>
                        <li>{repo.watchers + " Watchers"}</li>
                        <li>{repo.stargazers_count + " Stars"}</li>
                    </ul>
                </div>
                <div className="repo_lastUpdated">
                    {"Updated on  " + this.__getFromattedDate(repo.pushed_at)}
                </div>
                <div className="repo__codePercentage">
                    <Langauge langData={this.state.langData} />
                </div>
            </div>
        );
    }
}

export default RepoList;