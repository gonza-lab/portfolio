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
  const { global } = useContext(DataContext);

  const { handleNav } = useNav(handleToggleNav, 'home');

  return (
    <header className={'header' + (isNavOpen ? ' header__expanded' : '')}>
      <div className="profile">
        <div className="profile__img">
          <Image layout="fill" alt="Gonzalo Flores" src={global.avatar.url} />
        </div>
        <h1>
          <Link onClick={handleNav} smooth={true} duration={500} to="home">
            Gonzalo Flores
          </Link>
        </h1>
        <div className="profile__social">
          {global.socialNetworks.map((social) => (
            <button key={social.id}>
              <a target="_blank" rel="noreferrer" href={social.url}>
                <ion-icon name={social.icon}></ion-icon>
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
