import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Loader from 'react-loader-spinner';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import { useDispatch, useSelector } from 'react-redux';
import mail_api from '../../../api/mail';
import { ContactFormInput } from './input/Input';
import './Form.scss';

const initialForm = {
  name: '',
  from: '',
  subject: '',
  text: '',
};

export const ContactForm = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const { isSendingMail: isLoading } = useSelector((state) => state.ui);
  const [failed, setFailed] = useState(false);
  const [succes, setSucces] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const { ok } = await mail_api.send(data, dispatch);

    if (ok) {
      setSucces(true);
      reset(initialForm);
      setTimeout(() => setSucces(false), 5000);
    } else {
      setFailed(true);
      setTimeout(() => setFailed(false), 5000);
    }
  };

  return (
    <div className="contact-form__container">
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <ContactFormInput
          componentRef={register({ required: true })}
          label="Nombre"
          name="name"
          type="input"
          error={errors}
        />
        <ContactFormInput
          componentRef={register({
            required: true,
            pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          })}
          label="Email"
          name="from"
          type="input"
          error={errors}
        />
        <ContactFormInput
          componentRef={register({ required: true })}
          label="Motivo"
          name="subject"
          type="input"
          error={errors}
          className="expand"
        />
        <ContactFormInput
          componentRef={register({ required: true })}
          className="expand"
          label="Mensaje"
          name="text"
          type="textarea"
          error={errors}
        />
        <div className="contact-form__status expand">
          <div className="contact-form__spinner">
            <Fade top collapse when={isLoading}>
              <div>
                <Loader
                  type="Oval"
                  color="rgb(24, 210, 110)"
                  secondaryColor="black"
                  height={20}
                  width={20}
                />
                <span>Cargando</span>
              </div>
            </Fade>
          </div>
          <div className="contact-form__error">
            <Fade top collapse when={failed}>
              Ha ocurrido un error. Porfavor intentelo denuevo
            </Fade>
          </div>
          <div className="contact-form__success">
            <Fade top collapse when={succes}>
              Su mensaje se ha enviado correctamente!
            </Fade>
          </div>
        </div>
        <div className={'contact-form__submit expand'}>
          <button disabled={isLoading} type="submit">
            Enviar mensaje
          </button>
        </div>
      </form>
    </div>
  );
};
