import { ErrorMessage, useField } from 'formik'

function TextField({ label, span, ...props}) {
    const [field, meta] = useField(props)
    return (
        <div className={`col-span-${span} items-center border-b mx-2 py-3`}>
        <label htmlFor={field.name}>{label}</label>
        <ErrorMessage component='div' name={field.name} className='text-red-500'/>
            <input className={`${meta.touched && meta.error && 'border-red-500'} appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none`} 
                {...field} {...props}
                    />
        </div>
    )
}

export default TextField
