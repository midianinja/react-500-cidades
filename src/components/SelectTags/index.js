import React, { useState, useEffect } from 'react';
import Input from '../Input';
import Select from '../Select';
import { skills } from '../../register-options.json';
import './styles.css'

const SelectTags = (props) => {
    const [filterTags, setfilterTags] = useState('');
    const [optionsTags, setOptionsTags] = useState(skills);
    const [selectedTags, setSelectedTags] = useState([])

    const addTags = e => {  
        if(!selectedTags.includes(e.target.value)) { 
            setSelectedTags([...selectedTags, e.target.value])
            props.setUserInfo({...props.userInfo, skills: [...props.userInfo.skills, e.target.value]})
        }    
    };
    const removeTags = e => {
        selectedTags.filter(el => el !== e.target.textContent)
        props.setUserInfo({...props.userInfo, skills: props.userInfo.skills.filter(el => el !== e.target.textContent)})
        
    };
    const selectSearchTags = e => {
        setfilterTags(e.target.value);
    }
    useEffect(() => {
        const selectOptions = skills.filter(el =>
            el.toLowerCase().includes(filterTags.toLowerCase())
        )
        setOptionsTags(selectOptions)
    }, [filterTags])

    return (
        <div className="tags-field">
            <Input
                name="filterTags"
                value={filterTags}
                onChange={(e) => selectSearchTags(e)}
                type="text"
                inputClass="register-input"
                labelClass="register-label"
                labelName="Palavras-chave"
              />
              <Select
                options={optionsTags}
                name="optionsTags"
                value={optionsTags}
                onChange={(e) => addTags(e)}
                selectClass="register-select"
                optionClass="register-option"
                labelClass="register-label"
                defaultName="Escolha suas palavras-chave"
              />
            <div className="tags">
            {selectedTags.map((i,index) =>
              <div key={index} className="selected-tags" onClick={(e) => removeTags(e)}>{i}</div>
            )}
            </div> 
        </div>
    );
}

export default SelectTags;