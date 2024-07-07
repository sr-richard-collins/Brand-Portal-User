import React, { useState } from 'react'
import { Form, ProgressBar } from 'react-bootstrap'
import { useController } from 'react-hook-form'

const PasswordWithStrengthInput = ({ control, name, containerClassName, label, id, placeholder }) => {
  const { field, fieldState } = useController({ name, control })
  const [passwordStrength, setPasswordStrength] = useState(0)

  const calculatePasswordStrength = (value) => {
    let strength = 0
    // Add points for each criteria met
    strength += /[A-Z]/.test(value) ? 1 : 0 // Uppercase
    strength += /[a-z]/.test(value) ? 1 : 0 // Lowercase
    strength += /[0-9]/.test(value) ? 1 : 0 // Digit
    strength += /[^A-Za-z0-9]/.test(value) ? 1 : 0 // Special character

    // Normalize strength to a percentage
    const normalizedStrength = (strength / 4) * 100
    setPasswordStrength(normalizedStrength)
  }

  const getProgressVariant = () => {
    if (passwordStrength < 25) return 'danger'
    if (passwordStrength < 50) return 'warning'
    if (passwordStrength < 75) return 'info'
    return 'success'
  }

  return (
    <div className={containerClassName}>
      <Form.Group controlId={id}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          {...field}
          type="password"
          placeholder={placeholder}
          onChange={(e) => {
            field.onChange(e)
            calculatePasswordStrength(e.target.value)
          }}
          isInvalid={fieldState.invalid}
        />
        <Form.Control.Feedback type="invalid">{fieldState.error?.message}</Form.Control.Feedback>
      </Form.Group>
      <p style={{ marginTop: '20px' }}>Strength</p>
      <ProgressBar now={passwordStrength} variant={getProgressVariant()} label={`${passwordStrength.toFixed(0)}%`} />
    </div>
  )
}

export default PasswordWithStrengthInput
