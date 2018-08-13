import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as Constants from "./../../helper/Constant";
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);

        this.searchOptions = [{
            key: '0',
            value: Constants.USERNAME,
            label: 'Username'
        }];

        this.searchText = null;
        this.searchBy = 'username';
        this.searchTextChange = this.searchTextChange.bind(this);
        this.selectByChangeHandler = this.selectByChangeHandler.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    componentDidMount() {
        this.searchText.focus();
    }

    createOption() {
        let options = this.searchOptions.map((searchOption) =>
            <option value={searchOption.value} key={searchOption.key} >{searchOption.label}</option>
        );
        return options;
    }

    searchTextChange(e) {
        this.searchText = e.target.value;
    }

    selectByChangeHandler(e) {
        this.searchBy = e.target.value;
        this.props.searchOnClickHandler(this.searchText, this.searchBy);
    }

    onSubmitForm(e) {
        e.preventDefault();
        if (typeof this.searchText !== 'object')
            this.props.searchOnClickHandler(this.searchText, this.searchBy);
    }

    render() {
        return (
            <div className="header">
                <div className="logo-container">
                    <h1>GSE</h1>
                    <div className="tagline">Github Search Engine</div>
                </div>
                <div className="seachOptions">
                    <form onSubmit={this.onSubmitForm}>
                        <div className="select-style">
                            <select onChange={this.selectByChangeHandler}>
                                {this.createOption()}
                            </select>
                        </div>
                        <input type="text" ref={(input) => this.searchText = input} onChange={this.searchTextChange} />
                        <i tabIndex="2" className="fa fa-search" aria-hidden="true" onClick={this.onClickHandler}></i>
                    </form>
                </div>
                <div className="socialIcons">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/karthick-r-032a2074" target="_blank" className="socialIcons__linkedIn">
                                <i className="fa fa-linkedin"></i>
                                <span>LinkedIn</span>
                            </a>
                        </li>
                        <li>
                            <a href="" className="socialIcons__github">
                                <i className="fa fa-github"></i>
                                <span>Github</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header;
