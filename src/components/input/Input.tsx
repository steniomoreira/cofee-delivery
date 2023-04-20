import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'
import { InputContainer, InputError, InputFileld } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  maxWidth?: number
}

export function Input({ name, ...props }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <InputContainer hasLabelOptional={!props.required} {...props}>
      <InputFileld
        {...register(name, {
          required: props.required && {
            value: props.required,
            message: 'Requerido',
          },
        })}
        {...props}
      />
      {errors[name] && <InputError>{`${errors[name]?.message}`}</InputError>}
    </InputContainer>
  )
}
