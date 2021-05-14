import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton } from './SignupElements'

const SignUp = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Ground Level</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Create an Account</FormH1>
              <FormLabel htmlFor='for'>Name</FormLabel>
                <FormInput htmlFor='name' required />
              <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput htmlFor='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
                <FormInput htmlFor='password' required />
              <FormButton type='submit'>Continue</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignUp