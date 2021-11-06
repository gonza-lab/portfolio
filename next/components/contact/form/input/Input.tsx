import React from 'react';
import PropTypes from 'prop-types';

const validationsMessages = {
  from: {
    pattern: 'Debe ingresar un email válido.',
    required: 'Debe ingresar un email.',
  },
  name: {
    required: 'Por favor, ingrese su nombre.',
  },
  subject: {
    required: 'Por favor, ingrese el motivo de su contacto.',
  },
  text: {
    required: 'Por favor, ingrese su mensaje.',
  },
};

export const ContactFormInput = ({
  className,
  type,
  name,
  label,
  error = {},
  componentRef,
  typeInput,
  ...props
}) => {
  return (
    <div className={'contact-form-input' + (className ? ' ' + className : '')}>
      <label htmlFor={'id-' + name}>{label}</label>
      {type === 'input' ? (
        <input
          ref={componentRef}
          autoComplete="off"
          id={'id-' + name}
          name={name}
          type={typeInput}
          {...props}
        />
      ) : type === 'textarea' ? (
        <textarea
          ref={componentRef}
          autoComplete="off"
          id={'id-' + name}
          name={name}
          type={typeInput}
          {...props}
        ></textarea>
      ) : (
        ''
      )}
      <div
        className={
          'contact-form-input__error' +
          (Object.keys(error).length !== 0 ? ' active' : '')
        }
      >
        {validationsMessages[name][error[name]?.type]}
      </div>
    </div>
  );
};

ContactFormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  typeInput: PropTypes.string,
  error: PropTypes.object,
  className: PropTypes.string,
  type: PropTypes.oneOf(['input', 'textarea']),
};
