import { InputHTMLAttributes } from "react"
import './index.scss'

export interface IFormField extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    invalid?: boolean
    errorMessage?: string
}

export const FormField = (props: IFormField) => {
    return <div className="Form-field">
        {props.label && (
            <label>{props.label}</label>
        )}
        <input type="text" className={props.invalid ? 'invalid' : ''}></input>
        <span className={'error ' + (props.invalid ? 'on' : '')}>{props.errorMessage}</span>
        {props.children}
    </div>

}