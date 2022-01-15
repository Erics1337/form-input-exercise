import Select from 'react-select'
import { ErrorMessage, useField } from 'formik'


function CustomSelectComponent({ label, name, formik, options, value, ...props}) {
    const [field, meta] = useField(name)

    const defaultValue = (options, value) => {
        return options ? options.find(option => option.value === value) : ''
    }

    return (
        <div className="col-span-1 items-center mx-2 py-3">
        <label htmlFor={field.name}>{label}</label>
        <ErrorMessage component='div' name={name} className='text-red-500'/>
            <Select 
                className={`${meta.touched && meta.error && 'border-red-500'} focus:outline-none appearance-none bg-transparant `}
                value={defaultValue(options, value)}
                onChange={ value => formik.setFieldValue(name, value.value)}
                options={options}
                />
        </div>
    )
}

export default CustomSelectComponent
