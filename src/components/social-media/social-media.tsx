import { 
  Facebook,
  GitHub,
  Instagram,
  Telegram,
} from '@material-ui/icons';
import React from 'react';
import Medium from '../icons/medium';
import './social-media.css';

interface IProps {
  githubUrl?: string;
  instagramUrl?: string;
  facebookUrl?: string;
  mediumUrl?: string;
  telegramUrl?: string;
}

export default function SocialMedia(props: IProps) {
  return (
    <div className="social-container">
      { props.githubUrl === undefined ? '' : <a target="_blank" href={ props.githubUrl }><GitHub className="social-icon" color="primary" /></a> }
      { props.mediumUrl === undefined ? '' : <a target="_blank" href={ props.mediumUrl }><Medium className="social-icon" color="primary" /></a> }
      { props.instagramUrl === undefined ? '' : <a target="_blank" href={ props.instagramUrl }><Instagram className="social-icon" color="primary" /></a> }
      { props.facebookUrl === undefined ? '' : <a target="_blank" href={ props.facebookUrl }><Facebook className="social-icon" color="primary" /></a> }
      { props.telegramUrl === undefined ? '' : <a target="_blank" href={ props.telegramUrl }><Telegram className="social-icon" color="primary" /></a> }
    </div>
  );
}