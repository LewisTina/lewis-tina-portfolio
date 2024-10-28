import ErrorForm from '../ErrorForm';

export interface formInput {
    label?:   string;
    placeholder?:   any;
    type?:   string;
    controller:  any;
    name: string;
    onChange?: any
    isRequired?: any
    className?: string
}

export default function InputTextArea(props: formInput){
    const {
        label,
        name, 
        placeholder, 
        isRequired, 
        onChange,
        controller,
        className
    } = props

    return(
        <div className={`${className??''} w-full`}>
            {label ? <label className='font-medium capitalize'> {label} <span>{isRequired ? "*" : ""}</span> <br /></label>: ''}
            <textarea
                    {...controller(name, {
                            required: isRequired ? true : false,
                        }
                        )}
                    min ="0"
                    className={`rounded-md p-2 px-4 w-full max-w-full h-40`} 
                    placeholder={placeholder}
                    onKeyUp={onChange}
                    />
                    {
                        (isRequired != undefined) && (isRequired[name] && <ErrorForm message={`${isRequired[name]?.message}`}/>)
                    }
        </div>
    )
}