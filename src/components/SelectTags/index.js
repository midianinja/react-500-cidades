import React, { useState } from 'react';
import PropTypes from 'prop-types';
import skills from './tags.model';
import { FaTimes } from "react-icons/fa";
import './styles.css'

const normalize = (v) => v.toUpperCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '');

const filterTags = (value = '') => {
    const myValue = normalize(value);
    return skills.filter((item) => new RegExp(myValue, 'gm').test(normalize(item)));
}

const renderOptions = (skill, onClick) => (
    <li key={skill} className="skill-option" onClick={() => onClick(skill)}>
        {skill}
    </li>
)

const removeTags = ({
    tags, toDelete, handleChange
}) => {
    const newTags = tags.filter(t => t !== toDelete);
    handleChange(newTags);
}
const addTags = ({ tags, toAdd, handleChange }) => {
    if(tags.length === 5) return;
    const newTags = tags.filter(t => t !== toAdd)
    handleChange([...newTags, toAdd]);
}

const renderTags =(value,  tags, handleChange) => {
    return filterTags(value).map(sk => renderOptions(
        sk,
        (tag) => addTags({ tags, toAdd: tag, handleChange })
    ));
}

const SelectTags = ({
    tags, placeholder, handleChange,
    adicionalClass, error,
}) => {
    const [value, setValue] = useState('');
    const [showList, setShowList] = useState(false)

    return (
        <div className={`tags-field ${adicionalClass}`}>
            <label>Palavras Chave</label>
            <input 
                value={value} 
                onChange={({ target }) => setValue(target.value)} 
                type={'text'}  
                placeholder={placeholder} 
                className={'input-tag-list'} 
                onFocus={() => setShowList(true)}
                onBlur={() => setTimeout(() => setShowList(false), 200)}
            />
            <ul onClick={(e) => e.stopPropagation()} className={`list   ${showList ? '' : 'hide'}`}>
                {renderTags(value, tags, handleChange)}
            </ul>
            <div className={'tags'}>
                {tags.map((tag, index) =>
                    <div
                        key={index}
                        className="selected-tags"
                        onClick={() => removeTags({ tags, toDelete: tag, handleChange })}
                    >
                        {tag}
                        <FaTimes className="close-icon" />
                    </div>
                )}
            </div> 
            {error ? <span className="error">{error}.</span> : null}
        </div>
    );
}

SelectTags.propTypes = {
    handleChange: PropTypes.func.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default SelectTags;
