/* eslint-disable no-restricted-globals */
import { useFormik } from "formik";
import * as yup from "yup"
// eslint-disable-next-line no-unused-vars
import Style from "./Login.module.css"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Audio } from 'react-loader-spinner'
import { UserContext } from "../../Context/user";
let baseUrl = "https://ecommerce.routemisr.com/api/v1"
function Login() {
    let [error, setError] = useState(null)
    let [loading, setLoading] = useState(false)
    let {setUserToken,userToken} =useContext(UserContext)

    let navigate = useNavigate()
    
    let registerValidation = yup.object({
        email: yup.string().email().required(),
        password: yup.string().min(6, 'password minlength is 6'),
    })

    async function submit(values) {
        setLoading(true)
        let respone = await axios.post(`${baseUrl}/auth/signin`, values).catch(
            (err) => {
                console.log(err);
                setError(err.response.data.message)
                setLoading(false)
            }
        )
        console.log(respone.data);
        if (respone.data.message === "success") {
            console.log("here");
            
            localStorage.setItem("userToken",respone.data.token)
            setUserToken(respone.data.token)
            setLoading(false)
    
            if(location.pathname==="/login") navigate("/")
           else  navigate(`${location.pathname}`)
        }
    }
    let formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: registerValidation,
        onSubmit: submit
    })
    return <>
        <div className="container py-4">
            {error ? <div className="alert alert-danger">{error}</div> : <></>}
            <form onSubmit={formik.handleSubmit}>
                

                


                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formik.values.email} className="form-control mb-2" onChange={formik.handleChange} onBlur={formik.handleBlur} />

                {formik.errors.email && formik.touched.email ?
                    <div className="alert alert-danger p-2 mt-1">{formik.errors.email}</div> : <></>}


                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={formik.values.password} className="form-control mb-2" onChange={formik.handleChange} onBlur={formik.handleBlur} />

                {formik.errors.password && formik.touched.password ?
                    <div className="alert alert-danger p-2 mt-1">{formik.errors.password}</div> : <></>}


               


                {loading ? <button type="button" disabled className="btn bg-main text-white mt-2">
                    <Audio
                        height="25"
                        width="50"
                        radius="9"
                        color="white"
                        ariaLabel="three-dots-loading"
                        wrapperStyle
                        wrapperClass
                    />
                </button> : 
                <div>
                    <button type="submit" disabled={!formik.isValid || !formik.dirty} className="btn bg-main text-white mt-2">Login</button>
                    <Link className="btn" to={'/register'}>Don't have an account? Register Now</Link>
                </div>
                }

            </form>
        </div>

    </>
}

export default Login;