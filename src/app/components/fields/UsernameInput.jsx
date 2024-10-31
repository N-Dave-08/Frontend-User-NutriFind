import React from 'react'
import { useField } from 'formik'

export default function UsernameInput({ ...props }) {

    const [field, meta] = useField(props)

    return (
        <div className="form-control">
            <input
                {...field} {...props}
                type="text"
                className={`input bg-opacity-60 ${meta.touched && meta.error ? 'input-error' : ''}`}
            />
            {meta.touched && meta.error && (
                <div className="label">
                    <span className="label-text text-error">{meta.error}</span>
                </div>
            )}
        </div>
    )
}
