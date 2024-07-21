import { useState } from 'react';
import { ISearch } from '../../types';
import { Filter } from '../_media';
import './index.scss';

export const Search = ({onChange, onClickFilter, disabled, filtered}: ISearch) => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div className='search-input'>
            <input className='search-input-main' type='text' placeholder='Search' value={inputValue} disabled={ disabled } onChange={(e) => {
                setInputValue(e.target.value)
                onChange(e);
            }}/>
            <button className={`search-input-filter ${filtered && !disabled ? 'filtered' : ''}`} disabled={ disabled } onClick={() => onClickFilter()}>
                <div className='search-input-filter__content'>
                    <Filter/>
                    <div className='mark' />
                </div>
            </button>
        </div>
    )
}