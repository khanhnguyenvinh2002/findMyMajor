import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from 'react-native'

import { FormInput } from './FormInput'

const LOGIN_FIELDS = {
  username: 'username',
  password: 'password',
}

const Login = () => {
  const formMethods = useForm()

  const onSubmit = (form) => {
    console.log(form)
  }

  const onErrors = (errors) => {
    console.warn(errors)
  }

  return (
    <Wrapper>
      <FormProvider {...formMethods}>
        <FormInput
          name={LOGIN_FIELDS.username}
          label='Username'
          rules={{ required: 'Username is required!' }}
        />
        <FormInput
          name={LOGIN_FIELDS.password}
          label='Password'
          rules={{
            required: 'Password is required!',
            minLength: {
              message: 'Use at least 10 characters.',
              value: 10,
            },
          }}
        />
      </FormProvider>
      <Button
        title='Login'
        onPress={formMethods.handleSubmit(onSubmit, onErrors)}
      />
    </Wrapper>
  )
}

export default Login