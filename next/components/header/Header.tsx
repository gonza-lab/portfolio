import React, { useCallback, useContext, useState } from 'react';
import { HeaderNav } from './nav/Nav';
import { Link } from 'react-scroll';
import { HeaderHButton } from './HButton/HButton';
import useNav from '../../hooks/useNav';
import DataContext from '../../contexts/data';
import Image from 'next/image';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = useCallback(() => {
    setIsNavOpen((prev) => !prev);
  }, []);
  const { header } = useContext(DataContext);

  const { handleNav } = useNav(handleToggleNav, 'home');

  return (
    <header className={'header' + (isNavOpen ? ' header__expanded' : '')}>
      <div className="profile">
        <div className="profile__img">
          <Image layout="fill" alt="Gonzalo Flores" src={header.face_img} />
        </div>
        <h1>
          <Link onClick={handleNav} smooth={true} duration={500} to="home">
            Gonzalo Flores
          </Link>
        </h1>
        <div className="profile__social">
          {header?.socials.map((social) => (
            <button key={social.i}>
              <a target="_blank" href={social.href}>
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

export default Header;
