import React, { useCallback, useState } from 'react';
import { HeaderNav } from './nav/Nav';
import { Link } from 'react-scroll';
import { useDispatch, useSelector } from 'react-redux';
import ui from '../../redux/ui/actions';
import useNav from '../../hooks/useNav';
import { HeaderHButton } from './HButton/HButton';
import './Header.scss';

export const Header = () => {
  const dispatch = useDispatch();
  const handleToggleNav = useCallback(() => {
    dispatch(ui.toggleNav());
  }, []);
  const { isNavOpen } = useSelector((state) => state.ui);
  const { header } = useSelector((state) => state.data);

  const { handleNav } = useNav(handleToggleNav, 'home');

  return (
    <header className={'header' + (isNavOpen ? ' header__expanded' : '')}>
      <div className="profile">
        <div className="profile__img">
          <img alt="Gonzalo Flores" src={header?.face_img} />
        </div>
        <h1>
          <Link onClick={handleNav} smooth={true} duration={500} to="home">
            Gonzalo Flores
          </Link>
        </h1>
        <div className="profile__social">
          {header?.socials.map((social) => (
            <button key={social.i}>
              <a tabIndex="_blank" href={social.href}>
                <i className={social.i}></i>
              </a>
            </button>
          ))}
        </div>
      </div>
      <HeaderNav />
      <HeaderHButton onChange={handleToggleNav} isActive={isNavOpen} />
    </header>
  );
};
