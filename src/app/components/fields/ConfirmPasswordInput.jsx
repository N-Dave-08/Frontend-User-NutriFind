import React, { useState } from 'react'
import { useField } from 'formik'
import { Icon } from '@iconify/react'

export default function ConfirmPasswordInput({ ...props }) {

    const [field, meta] = useField(props)
    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className="form-control">
            <div className={`input bg-opacity-60 flex items-center gap-2 ${meta.touched && meta.error ? 'input-error' : ''}`}>
                <input
                    {...field} {...props}
                    type={showPassword ? 'text' : 'password'}
                    className='grow'
                />
                {showPassword ?
                    <Icon icon="mingcute:eye-2-fill" height='1.5rem' className='cursor-pointer opacity-60' onClick={handleShowPassword} />
                    : <Icon icon="mingcute:eye-close-fill" height='1.5rem' className='cursor-pointer opacity-60' onClick={handleShowPassword} />
                }
            </div>
            {meta.touched && meta.error && (
                <div className="label">
                    <span className="label-text text-error">{meta.error}</span>
                </div>
            )}
        </div>
    )
}
