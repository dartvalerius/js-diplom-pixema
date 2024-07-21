import { useState } from 'react';
import './index.scss';
import { ISwitch } from '../../types';

export const Switch = ({checked, disabled, onChange}: ISwitch) => {
    return (
        <label className="switch">
            <input type="checkbox" checked={ checked } disabled={ disabled } onChange={ () => onChange() }/>
            <span className="switch-slider switch-slider__round" />
        </label>
    )
}