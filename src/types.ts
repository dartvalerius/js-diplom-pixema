export enum InputType {
    TEXT = "text",
    EMAIL = "email",
    PASSWORD = "password",
    TEXTAREA = 'textarea'
}

export interface IInput {
    title: string,
    type?: InputType,
    value?: string,
    placeholder?: string,
    disabled?: boolean,
    errorText?: string,
    onChanged: Function
}