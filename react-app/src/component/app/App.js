import React, { useMemo } from 'react';
import ImageGallery from 'react-image-gallery';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import './App.scss';

const images = [
  {
    original: 'http://localhost:5000/api/img/app/asep/asep_1.png',
  },
];

export const App = () => {
  const location = useLocation();
  const { list } = useSelector((state) => state.app);

  const app = useMemo(
    () => list.find((app) => app.app === location.pathname.split('/')[2]),
    [list]
  );

  const imageGalleryItems = useMemo(() => {
    const items = [];

    for (let index = 0; index < app?.photos; index++) {
      items.push({
        original: `/api/img/app/${app.app}/${app.app}_${index + 1}.png`,
      });
    }

    return items;
  }, [app]);

  return (
    <section className="app" id="app">
      <div className="app__slider">
        {!imageGalleryItems ? (
          <div className="app__slider-loading">
            <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
          </div>
        ) : (
          <ImageGallery
            items={imageGalleryItems}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            showNav={false}
            infinite
            autoPlay
          />
        )}
        <div>
          <h3>Información</h3>
          <ul>
            {app?.information.map((info) => (
              <li key={info[0]}>
                <strong>{info[0]}</strong>: {info[1]}
              </li>
            ))}
            <li className="li-link">
              <a target="_blank" href={app?.url}>
                Web
              </a>
            </li>
            {/* <li>
              <strong>URL:</strong>{' '}
              <a target="_blank" href={app?.url}>
                {app?.url.split('https://')[1]}
              </a>
            </li> */}
            {app?.repository && (
              <li className="li-link">
                <a target="_blank" href={app?.repository}>
                  Repositorio
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="app__description">
        <h2>Descripcion</h2>
        <p>{app?.description[0]}</p>
      </div>
    </section>
  );
};
