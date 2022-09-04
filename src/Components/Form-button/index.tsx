import { InputHTMLAttributes } from "react"
import './index.scss'

export interface IButton extends InputHTMLAttributes<HTMLInputElement> {
    disabled?: any
    loading?: boolean
    onClick?: any
}

export const FormButton = (props: IButton) => {
    return <button
        className="Form-button"
        disabled={props.disabled}
        onClick={props.onClick}
    >
        {props.loading ? (
            <div className="loading"></div>
        ) : (
            props.children
        )}
    </button >

}