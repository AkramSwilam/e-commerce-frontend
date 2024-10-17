import { useFormik } from "formik";
import * as yup from "yup"
import Style from "./Register.module.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Audio } from 'react-loader-spinner'
let baseUrl = "https://ecommerce.routemisr.com/api/v1"
function Register() {
    let [error, setError] = useState(null)
    let [loading, setLoading] = useState(false)

    let navigate = useNavigate()
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    let registerValidation = yup.object({
        name: yup.string().required(),
        email: yup.string().email().required(),
        phone: yup.string().matches(phoneRegExp).required(),
        password: yup.string().min(6, 'password minlength is 6'),
        rePassword: yup.string().oneOf([yup.ref('password')], 'not equals password').required()
    })

    async function submit(values) {
        setLoading(true)
        let respone = await axios.post(`${baseUrl}/auth/signup`, values).catch(
            (err) => {
                console.log(err);
                setError(err.response.data.message)
                setLoading(false)
            }
        )
        console.log(respone.data);
        if (respone.data.message === "success") {
            setLoading(false)
            navigate("/login")
        }
    }
    let formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            email: "",
            password: "",
            rePassword: ""
        },
        validationSchema: registerValidation,
        onSubmit: submit
    })
    return <>
        <div className="container py-4">
            {error ? <div className="alert alert-danger">{error}</div> : <></>}
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formik.values.name} className="form-control mb-2" onChange={formik.handleChange} onBlur={formik.handleBlur} />

                {formik.errors.name && formik.touched.name ?
                    <div className="alert alert-danger p-2 mt-1">{formik.errors.name}</div> : <></>}

                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" value={formik.values.phone} className="form-control mb-2" onChange={formik.handleChange} onBlur={formik.handleBlur} />

                {formik.errors.phone && formik.touched.phone ?
                    <div className="alert alert-danger p-2 mt-1">{formik.errors.phone}</div> : <></>}


                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formik.values.email} className="form-control mb-2" onChange={formik.handleChange} onBlur={formik.handleBlur} />

                {formik.errors.email && formik.touched.email ?
                    <div className="alert alert-danger p-2 mt-1">{formik.errors.email}</div> : <></>}


                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={formik.values.password} className="form-control mb-2" onChange={formik.handleChange} onBlur={formik.handleBlur} />

                {formik.errors.password && formik.touched.password ?
                    <div className="alert alert-danger p-2 mt-1">{formik.errors.password}</div> : <></>}


                <label htmlFor="rePassword">re Password</label>
                <input type="password" id="rePassword" name="rePassword" value={formik.values.rePassword} className="form-control mb-2" onChange={formik.handleChange} onBlur={formik.handleBlur} />

                {formik.errors.rePassword && formik.touched.rePassword ?
                    <div className="alert alert-danger p-2 mt-1">{formik.errors.rePassword}</div> : <></>}


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
                </button> : <button type="submit" disabled={!formik.isValid || !formik.dirty} className="btn bg-main text-white mt-2">Register</button>
                }

            </form>
        </div>

    </>
}

export default Register;