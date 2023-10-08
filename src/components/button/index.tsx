interface CustomButtonProps {
    color: string,
    bgColor: string,
    leftIcon?: any,
    rightIcon?: any,
    label: string,
    action: any
    className?: any
}

export default function CustomButton(props: CustomButtonProps){
    const {color, bgColor, leftIcon, rightIcon, label, action, className} = props
    return(
        <button 
            onClick={action}
            className={`${color} ${bgColor} ${className} flex items-center rounded-full px-6 py-2 my-3`}>
            {leftIcon}
            {label}
            {rightIcon}

        </button>
    )
}