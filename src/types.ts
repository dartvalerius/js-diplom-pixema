export enum InputType {
    TEXT = 'text',
    EMAIL = 'email',
    PASSWORD = 'password',
    TEXTAREA = 'textarea'
}

export enum ButtonType {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

export interface IInput {
    title: string,
    type?: InputType,
    value?: string,
    placeholder?: string,
    disabled?: boolean,
    errorText?: string,
    onChange: Function
}

export interface IButton {
    content: string,
    type?: ButtonType,
    disabled?: boolean,
    onClick: Function
}

export interface ISwitch {
    checked?: boolean,
    disabled?: boolean,
    onChange: Function
}

export interface ISearch {
    onChange: Function,
    onClickFilter: Function,
    disabled?: boolean,
    filtered?: boolean
}