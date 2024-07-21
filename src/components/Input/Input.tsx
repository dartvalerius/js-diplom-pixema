import { IInput, InputType } from "../../types";
import "./index.scss";

export const Input = ({title, type = InputType.TEXT, value, placeholder, disabled, errorText, onChange}: IInput) => {
    
    return (
        <>
            <div className="input-title">{title}</div>
            {
                type !== InputType.TEXTAREA
                    ? <input className={`input-main ${errorText ? "input-main-error" : ""}`} type={type} placeholder={placeholder} value={value} disabled={disabled} onChange={(e) => onChange(e)}/>
                    : <textarea className={`input-main ${errorText ? "input-main-error" : ""}`} placeholder={placeholder} value={value} disabled={disabled} onChange={(e) => onChange(e)}/>
            }
            {
                errorText && <div className="input-error-text">{errorText}</div>
            }
        </>
    )
}