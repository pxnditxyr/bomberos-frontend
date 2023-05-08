import { ChangeEvent, useState } from 'react'

export const useForm = <T> ( initialValues : T ) => {
  const [ formState, setFormState ] = useState<T>( initialValues )

  const onInputChange = ( { target } : ChangeEvent<HTMLInputElement> ) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [ name ]: value
    })
  }

  const onResetForm = () => {
    setFormState( initialValues )
  }

  return {
    form: formState,
    onInputChange,
    onResetForm,
    ...formState
  }
}
