import classNames from 'classnames';
import { Avatar } from '../avatar/avatar';
import { PersonalInfo } from '../personal-info/personal-info';
import styles from './header.module.css';
const { container, cvOnline } = styles;
import githubIconUrl from '../../assets/github-mark.png';

export const Header = () => {
  return (
    <div className={classNames('flex', 'flex-row', container)}>
      <Avatar></Avatar>
      <PersonalInfo></PersonalInfo>
      <a href="https://krnldng.github.io/my-cv/" target="_blank">
        <div
          className={classNames(
            'absolute right-0 top-0 pt-1 px-4 border- bg-[#16a084a4] text-white flex flex-row gap-2',
            cvOnline
          )}
        >
          <img src={githubIconUrl} className="size-6"></img>
          <span>krnldng.github.io/my-cv</span>
        </div>
      </a>
    </div>
  );
};
