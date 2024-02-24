import React, { useState } from 'react';
import css from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
    const [searchValue, setSearchValue] = useState('');

    const handleChangeSearchValue = e => {
        setSearchValue(e.target.value);
    };

    const handleSubmitForm = e => {
        e.preventDefault();
        onSubmit(searchValue);
        setSearchValue('');
    };

    return (
        <header className={css.Searchbar}>
            <form onSubmit={handleSubmitForm} className={css.SearchForm}>
                <button type="submit" className={css.SearchFormButton}>
                    <span className={css.SearchFormButtonLabel}>Search</span>
                </button>

                <input
                    className={css.SearchFormInput}
                    value={searchValue}
                    onChange={handleChangeSearchValue}
                    type="text"
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    );
}
