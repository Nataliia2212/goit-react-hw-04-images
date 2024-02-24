import React, { Component } from 'react';
import css from './Searchbar.module.css'


export default class Searchbar extends Component {
    state = {
        searchValue: ''
    }

    handleChangeSearchValue = (e) => {
        this.setState({searchValue: e.target.value})
    }
    
    handleSubmitForm = (e) => {
        e.preventDefault()
        const { searchValue } = this.state;
        const { onSubmit } = this.props;
        onSubmit(searchValue)
        this.setState({searchValue: ''})

    }

    render() {
        const { searchValue } = this.state;
    return (
        <header className={css.Searchbar}>
            <form onSubmit={this.handleSubmitForm} className={css.SearchForm}>
                <button type="submit" className={css.SearchFormButton}>
                    <span className={css.SearchFormButtonLabel}>Search</span>
                </button>

                <input
                    className={css.SearchFormInput}
                    value={searchValue}
                    onChange={this.handleChangeSearchValue}
                    type="text"
                    placeholder="Search images and photos"
                />
            </form>
        </header>
  )
  }
}




