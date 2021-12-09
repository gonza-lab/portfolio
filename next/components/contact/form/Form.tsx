import { Button, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Loader from 'react-loader-spinner';
import Fade from 'react-reveal/Fade';
import mail_api from '../../../api/mail';
import messages from '../../../utils/errors';

const initialForm = {
  name: '',
  email: '',
  from: '',
  subject: '',
  text: '',
};

export const ContactForm = () => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: initialForm,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const [succes, setSucces] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    // const { ok } = await mail_api.send(data);
    setTimeout(() => {
      setIsLoading(false);

      if (true) {
        setSucces(true);
        reset(initialForm);
        setTimeout(() => setSucces(false), 5000);
      } else {
        setFailed(true);
        setTimeout(() => setFailed(false), 5000);
      }
    }, 2000);
  };

  console.log(errors);

  return (
    <div className="contact-form__container">
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Nombre"
              variant="standard"
              id="name"
              helperText={
                errors.name?.type ? messages.name[errors.name?.type] : null
              }
              error={Boolean(errors.name?.type)}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          rules={{
            required: true,
            pattern:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              variant="standard"
              id="email"
              helperText={
                errors.email?.type ? messages.email[errors.email?.type] : null
              }
              error={Boolean(errors.email?.type)}
            />
          )}
        />
        <Controller
          name="subject"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Motivo"
              variant="standard"
              id="subject"
              className="expand"
              helperText={
                errors.subject?.type
                  ? messages.subject[errors.subject?.type]
                  : null
              }
              error={Boolean(errors.subject?.type)}
            />
          )}
        />
        <Controller
          name="text"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Mensaje"
              variant="standard"
              id="text"
              multiline
              minRows={5}
              className="expand"
              helperText={
                errors.text?.type ? messages.text[errors.text?.type] : null
              }
              error={Boolean(errors.text?.type)}
            />
          )}
        />
        {/* <div className="contact-form__status expand">
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
        </div> */}
        <div className={'contact-form__submit expand'}>
          <LoadingButton loading={isLoading} type="submit" variant="outlined">
            Enviar
          </LoadingButton>
        </div>
      </form>
    </div>
  );
};
