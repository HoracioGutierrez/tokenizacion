import { Button, Typography } from "@mui/material"
import { useState } from "react"

export const DividedPage = ({children}) => {
    return (
        <div id="divided-page">
            {children}
        </div>
    )
}

export const PageCard = ({imgUrl,firstText,secondText,edit,buttonText,onChangeFirst,onChangeSecond,onSubmit}) => {

    const [firstValue, setFirstValue] = useState(firstText)
    const [secondValue, setSecondValue] = useState(secondText)

    const handleFirstChange = (e) => {
        setFirstValue(e.target.innerText)
        edit && onChangeFirst ? onChangeFirst(e.target.innerText) : console.log(e.target.innerText)
    }

    const handleSecondChange = (e) => {
        setSecondValue(e.target.innerText)
        edit && onChangeSecond ? onChangeSecond(e.target.innerText) : console.log(e.target.innerText)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        edit && onSubmit ? onSubmit({firstValue,secondValue}) : console.log({firstValue,secondValue})
    }

    return (
        <div id="divided-page-card">
            <div id="divided-page-card-img">
                <img src={imgUrl} alt="Avatar" />
            </div>
            <div id="divided-page-card-info">
                <Typography suppressContentEditableWarning={true} contentEditable={edit} variant="h5" color="primary" onInput={handleFirstChange}>{firstText}</Typography>
                <Typography suppressContentEditableWarning={true} contentEditable={edit} onInput={handleSecondChange}>{secondText}</Typography>
                {edit && <Button variant="contained" color="primary" onClick={handleSubmit}>{buttonText}</Button>}
            </div>
        </div>
    )
}

export const PageContent = ({children,title="Titulo Pagina"}) => {
    return (
        <div id="divided-page-content">
            <Typography variant="h5">{title}</Typography>
            {children}
        </div>
    )
}