interface CustomButtonProps {
    color: string,
    bgColor: string,
    leftIcon?: any,
    rightIcon?: any,
    disabled?: boolean,
    label: string,
    action?: any
    className?: any
}

export default function CustomButton(props: CustomButtonProps){
    const {color, bgColor, leftIcon, rightIcon, label, action, className, disabled} = props
    return(
        <button 
            onClick={action}
            disabled={disabled}
            className={`
            ${color} ${bgColor} 
            flex gap-3 items-center rounded-full px-6 py-2 my-3 disabled:opacity-50
            transition-all duration-300 text-ellipsis whitespace-nowrap overflow-hidden w-fit font-medium ${className}
            `}>
            {leftIcon}
            {label}
            {rightIcon}

        </button>
    )
}