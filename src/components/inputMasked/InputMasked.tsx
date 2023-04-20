import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { InputMaskedContainer, InputMaskedError } from './styles'

interface InputMaskedProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  mask: string
  maxWidth?: number
}

export function InputMasked({
  name,
  mask,
  maxWidth,
  ...props
}: InputMaskedProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <InputMaskedContainer maxWidth={maxWidth}>
      <InputMask
        mask={mask}
        maskPlaceholder={null}
        {...register(name, {
          required: props.required && {
            value: props.required,
            message: 'Requerido',
          },
          minLength: props.minLength && {
            value: props.minLength,
            message: 'Digite 8 caracteres',
          },
        })}
        {...props}
      />
      {errors[name] && (
        <InputMaskedError>{`${errors[name]?.message}`}</InputMaskedError>
      )}
    </InputMaskedContainer>
  )
}
