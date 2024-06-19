// import React, { useState } from 'react';
// import Navv from './Navv';
// import { Col, Container, Row, Form, Button } from 'react-bootstrap';
// import BlackCol from './BlackCol';
// import axios from 'axios';

// export default function Signup() {
//   const [Email, setEmail] = useState('');
//   const [Password, setPassword] = useState('');
//   const [Confirm, setConfirmPassword] = useState('');
//   const [agreed, setAgreed] = useState(false);

//   const postValue = async () => {
//     try {
//       const response = await axios.post(
//         'https://666fd32b0900b5f8724856d7.mockapi.io/SignUp',
//         {
//           Email,
//           Password,
//           Confirm,
//         }
//       );
//       console.log('Response:', response.data);
//       alert('Data stored successfully');
//     } catch (error) {
//       console.error('Error storing data:', error);
//       alert('Failed to store data');
//     }
//   };

//   const handleCheckboxChange = (e) => {
//     setAgreed(e.target.checked);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     postValue();
//   };

//   return (
//     <div className='signup-bdy'>
//       <Navv />
//       <Container>
//         <Row className='d-flex flex-wrap'>
//           <Col className='blk-col' xs={12} md={6}>
//             <BlackCol />
//           </Col>
//           <Col className='white-col' xs={12} md={6}>
//             <div className='signup-container'>
//               <h2>Let's get you started</h2>

//               <Form onSubmit={handleSubmit}>
//                 <Form.Group className='mb-3'>
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control
//                     type="email"
//                     placeholder="Enter email"
//                     value={Email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                   <br />
//                 </Form.Group>

//                 <Row>
//                   <br />
//                   <Col xs={12} md={6}>
//                     <Form.Group className='mb-3'>
//                       <Form.Label>Password</Form.Label>
//                       <Form.Control
//                         type="password"
//                         placeholder="Enter password"
//                         value={Password}
//                         onChange={(e) => setPassword(e.target.value)}
//                       />
//                     </Form.Group>
//                   </Col>
//                   <Col xs={12} md={6}>
//                     <Form.Group className='mb-3'>
//                       <Form.Label>Confirm Password</Form.Label>
//                       <Form.Control
//                         type="password"
//                         placeholder="Confirm password"
//                         value={Confirm}
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                       />
//                     </Form.Group>
//                     <br />
//                   </Col>
//                 </Row>

//                 <Form.Group className='mb-3' controlId="formBasicCheckbox">
//                   <Form.Check
//                     type="checkbox"
//                     label={
//                       <span style={{ color: 'grey' }}>
//                         By creating an account, I agree to{' '}
//                         <u onClick={() => window.location.href = '/terms-and-conditions'}>
//                           OKX Terms of Service, Risk and Compliance, and privacy policy statements
//                         </u>
//                       </span>
//                     }
//                     checked={agreed}
//                     onChange={handleCheckboxChange}
//                   />
//                 </Form.Group>

//                 <Button
//                   variant="primary"
//                   type="submit"
//                   className='w-100 signup-btn'
//                   disabled={!agreed}
//                   style={{ backgroundColor: agreed ? 'blue' : 'grey', borderColor: agreed ? 'blue' : 'grey' }}
//                 >
//                   Next
//                 </Button>
//                 <br />
//                 <br />
//                 <p className='text-center dont-have-account'>
//                   Have an account? <span className='signup-link' onClick={() => window.location.href = '/login'}>Login</span>
//                 </p>
//               </Form>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }


import React from 'react';
import Navv from './Navv';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import BlackCol from './BlackCol';
import axios from 'axios';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function Signup() {
  const postValue = async (values) => {
    try {
      const response = await axios.post(
        'https://666fd32b0900b5f8724856d7.mockapi.io/SignUp',
        values
      );
      console.log('Response:', response.data);
      alert('Data stored successfully');
    } catch (error) {
      console.error('Error storing data:', error);
      alert('Failed to store data');
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
    agreed: Yup.boolean()
      .oneOf([true], 'You must accept the terms and conditions')
      .required('Required'),
  });

  return (
    <div className='signup-bdy'>
      <Navv />
      <Container>
        <Row className='d-flex flex-wrap'>
          <Col className='blk-col' xs={12} md={6}>
            <BlackCol />
          </Col>
          <Col className='white-col' xs={12} md={6}>
            <div className='signup-container'>
              <h2>Let's get you started</h2>

              <Formik
                initialValues={{ email: '', password: '', confirmPassword: '', agreed: false }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                  postValue(values);
                  setSubmitting(false);
                }}
              >
                {({ isSubmitting, handleSubmit, isValid }) => (
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className='mb-3'>
                      <Form.Label>Email</Form.Label>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        className='form-control'
                      />
                      <ErrorMessage name="email" component="div" className="text-danger" />
                      <br />
                    </Form.Group>

                    <Row>
                      <br />
                      <Col xs={12} md={6}>
                        <Form.Group className='mb-3'>
                          <Form.Label>Password</Form.Label>
                          <Field
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            className='form-control'
                          />
                          <ErrorMessage name="password" component="div" className="text-danger" />
                        </Form.Group>
                      </Col>
                      <Col xs={12} md={6}>
                        <Form.Group className='mb-3'>
                          <Form.Label>Confirm Password</Form.Label>
                          <Field
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm password"
                            className='form-control'
                          />
                          <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
                          <br />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className='mb-3' controlId="formBasicCheckbox">
                      <Field
                        type="checkbox"
                        name="agreed"
                        className='form-check-input'
                        id="agreed"
                      />
                      <Form.Label
                        className="form-check-label"
                        htmlFor="agreed"
                        style={{ color: 'grey' }}
                      >
                        By creating an account, I agree to{' '}
                        <u onClick={() => window.location.href = '/terms-and-conditions'}>
                          OKX Terms of Service, Risk and Compliance, and privacy policy statements
                        </u>
                      </Form.Label>
                      <ErrorMessage name="agreed" component="div" className="text-danger" />
                    </Form.Group>

                    <Button
                      variant="primary"
                      type="submit"
                      className='w-100 signup-btn'
                      disabled={isSubmitting || !isValid}
                      style={{ backgroundColor: isValid ? 'blue' : 'grey', borderColor: isValid ? 'blue' : 'grey' }}
                    >
                      Next
                    </Button>
                    <br />
                    <br />
                    <p className='text-center dont-have-account'>
                      Have an account? <span className='signup-link' onClick={() => window.location.href = '/login'}>Login</span>
                    </p>
                  </Form>
                )}
              </Formik>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


