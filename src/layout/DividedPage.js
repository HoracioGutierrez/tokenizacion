import { Button, Typography } from "@mui/material"
import { useState } from "react"
import Icon from '@mui/material/Icon';

export const DividedPage = ({ children }) => {
    return (
        <div id="divided-page">
            {children}
        </div>
    )
}

export const PageCard = ({ imgUrl, firstText, secondText, buttonText, onChangeFirst, onChangeSecond, onSubmit, onSubmitFirst, onSubmitSecond }) => {

    const [firstValue, setFirstValue] = useState(firstText)
    const [secondValue, setSecondValue] = useState(secondText)
    const [editFirst, setEditFirst] = useState(false)
    const [editSecond, setEditSecond] = useState(false)

    const handleFirstChange = (e) => {
        setFirstValue(e.target.innerText)
        editFirst && onChangeFirst ? onChangeFirst(e.target.innerText) : console.log(e.target.innerText)
    }

    const handleSecondChange = (e) => {
        setSecondValue(e.target.innerText)
        editSecond && onChangeSecond ? onChangeSecond(e.target.innerText) : console.log(e.target.innerText)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        editFirst && onSubmit ? onSubmit({ firstValue, secondValue }) : console.log({ firstValue, secondValue })
    }

    const handleSubmitFirst = (e) => {
        e.preventDefault()
        editFirst && onSubmitFirst ? onSubmitFirst(firstValue) : console.log(firstValue)
        setEditFirst(false)
    }

    const handleSubmitSecond = (e) => {
        e.preventDefault()
        editSecond && onSubmitSecond ? onSubmitSecond(secondValue) : console.log(secondValue)
        setEditSecond(false)
    }

    return (
        <div id="divided-page-card">
            <div id="divided-page-card-img">
                <img src={imgUrl} alt="Avatar" />
            </div>
            <div id="divided-page-card-info">
                <div>
                    <Typography suppressContentEditableWarning={true} contentEditable={editFirst} variant="h5" color="primary" onInput={handleFirstChange} onBlur={handleSubmitFirst}>{firstText}</Typography>
                    <Icon className={!editFirst ? "disabled-icon" : "test"} onClick={(e) => {
                        setEditFirst(true)
                    }}>mode_edit</Icon>
                </div>
                <div>
                    <Typography suppressContentEditableWarning={true} onBlur={handleSubmitSecond} contentEditable={editSecond} onInput={handleSecondChange}>{secondText}</Typography>
                    <Icon className={!editSecond ? "disabled-icon" : "test"} onClick={() => setEditSecond(true)}>mode_edit</Icon>
                </div>
                {<Button variant="contained" color="primary" onClick={handleSubmit}>{buttonText}</Button>}
            </div>
        </div>
    )
}

export const PageContent = ({ children, title = "Titulo Pagina" }) => {
    return (
        <div id="divided-page-content">
            <Typography variant="h5">{title}</Typography>
            {children}
        </div>
    )
}