import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import Usernav from "../components/Usernav";


export default function Userprofile() {

  const [base64code, setbase64code] = useState("");
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);


  const updateuserSchema = Yup.object().shape({

    username: Yup.string().required(),
    mobile: Yup.number().required().positive().integer(),

  });
  // get Id from authToken
  const Uauth = window.localStorage.getItem('accessToken')

  //get user details
  const getUserProfile = async () => {
    try {
      const { data } = await axios.get("https://trainexpress-node-akod.vercel.app/user/id",
        {
          headers: {
            "Authorization": `Bearer ${Uauth}`
          }
        }

      );
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // useEffect use refresh data
  useEffect(() => {
    getUserProfile();
  }, []);

  return (

    <div>
      <Usernav />
      <div className="container my-5">
        <div className="row mx-auto mt-3">
          {/* Profile details */}
          <div className="col-sm-4 col-md-6 col-lg-4 mx-auto text-center">

            <h5 style={{ color: "darkblue" }}>
              Username:{" "}
              <span className="text-secondary">{users.username}</span>
            </h5>
            <h5 style={{ color: "darkblue" }}>
              Email: <span className="text-secondary">{users.email}</span>
            </h5>
            <h5 style={{ color: "darkblue" }}>
              Mobile:{" "}
              <span className="text-secondary">{users.mobile} </span>
            </h5>

          </div>
          {/* profile Edit */}
          <div className="col-sm-4 col-md-6 ">
            {/* Formik validation */}
            <Formik
              initialValues={{
                username: "",
                mobile: "",

              }}
              validationSchema={updateuserSchema}
              onSubmit={async (values, { resetForm }) => {

                try {
                  // Register api call
                  await axios.put("http://localhost:5000/user/userupdate", values,
                    {
                      headers: {
                        "Authorization": `Bearer ${Uauth}`
                      }
                    }
                  );
                  // send mail to user api call
                  // await axios.post(`${ProductAPI}/auth/sendmail`, form);
                  getUserProfile();
                  resetForm({ values: "" })

                } catch ({ response: { data } }) {

                }
              }}
            >
              {({ errors, touched }) => (
                <Form >
                  <div className='container'>
                    {/* <div className='col-sm-6'> */}
                    <div className='card'>
                      <div className='card-body'>
                        <div className='card-title'>
                          <h5 style={{ color: "darkblue" }}>Update your profile</h5></div>
                        {/* Full name */}
                        <div className="mb-4">

                          <b>  <label className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }} >UserName</label></b>
                          <Field
                            style={{ fontSize: "14px" }}
                            type="text"
                            name="username"
                            placeholder="UserName"
                            className="form-control"
                          />
                        </div>
                        {errors.username && touched.username ? (
                          <span className="text-danger text-start">
                            *{errors.username}*
                          </span>
                        ) : null}

                        {/* Contact number */}
                        <div className="mb-4">

                          <b>  <label className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }} >Mobile</label></b>
                          <Field
                            style={{ fontSize: "14px" }}
                            type="number"
                            name="mobile"
                            className="form-control"
                            placeholder="Mobile Number"
                          />
                        </div>
                        {errors.mobile && touched.mobile ? (
                          <span className="text-danger text-start">
                            *{errors.mobile}*
                          </span>
                        ) : null}

                        {/* Email */}
                        <div className="mb-4">

                          <b>  <label className="form-label" style={{ fontSize: 15, fontFamily: "monospace" }} >Email</label></b>
                          <Field
                            style={{ fontSize: "14px" }}
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="form-control"
                            value={users.email}
                            disabled
                          />
                        </div>
                        {errors.email && touched.email ? (
                          <span className="text-danger text-start">
                            *{errors.email}*
                          </span>
                        ) : null}

                        {/* submit Button */}
                        <button
                          type="submit"
                          className="btn btn-success btn-md"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* </div> */}
                </Form>
              )}
            </Formik>
          </div>
        </div>

      </div>
    </div>
  );
}

