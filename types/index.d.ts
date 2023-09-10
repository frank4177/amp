
export type authInputDataType = {
    title?: string;
    width?: string | number;
    height?: string | number;
    type?:string;
    placeholder?: string;
    required?: boolean;
    iconStart?: React.JSX.Element;
    iconEnd?: React.JSX.Element;
}

export type buttonType = {
    width?: string | number;
    background?: string;
    color?: string;
    height?: string | number;
    title?: string,
    handleClick?: () => void;
}