import { useEffect, useContext } from 'react'
import Loader from './assets/Loader';
import UserContext from './context/UserContext'
import { userSchema } from './validations/UserValidation'
import { Formik, Form } from 'formik'
import TextField from './TextField';
import CustomSelectComponent from './CustomSelectComponent';


function UserForm() {
    const { loading, submitted, getOptions, states, occupations, postForm } = useContext(UserContext)

    useEffect(() => {
        getOptions()
    }, [])
    
    
    const user = {name: '', email: '', password: '', occupation: '', state: ''}
    if(!loading) {
        if(!submitted){
            return (
                <Formik  
                    initialValues={user}
                    validationSchema={userSchema}
                    onSubmit={values => {
                        postForm(values)
                        }
                    }
                    >
                    {formik => (
                        <Form className='grid grid-cols-2'>
                            <h1 className='col-span-2 text-center text-blue-500 text-xl font-semibold'>My Form</h1>
                            <TextField label='Full Name: ' name='name' type='text' span='2'/>
                            <TextField label='Email:  ' name='email' type='email' span='1' />
                            <TextField label='Password: ' name='password' type='password' span='1' />
                            <CustomSelectComponent name='occupation' formik={formik} value={formik.values.occupation} label='Select Occupation: ' options={occupations} />
                            <CustomSelectComponent name='state' formik={formik} value={formik.values.state} label='Select State: ' options={states}  />
                            <button type='submit' className='col-span-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-3 rounded'>
                                Submit</button>
                            {/* <button type='reset' className='col-span-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mt-2 rounded'>
                                Reset</button> */}

                        </Form>
                    )}
                </Formik>
            )
        } else return (
            <h1 className='p-10 text-blue-500 text-4xl font-bold'>Thank you for submitting this form</h1>
        )
    } else return <Loader />
}

export default UserForm
