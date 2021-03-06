import React from 'react';

import { Button, PortalBox, SVG } from '@theme';

import './AboutControls.css';
import EmailSignup from '@app/About/EmailSignup';
import PushNotifications from '@app/About/PushNotifications';
import { appDescription, appTitle } from '@utils/constants';

const AboutControls = ({ className = '' }: { className?: string }) => {
  const [emailBox, setEmailBox] = React.useState<boolean>(false);
  const [pushBox, setPushBox] = React.useState<boolean>(false);

  return (
    <React.Fragment>
      <ul className={`about-controls ${className}`}>
        <li className="about-controls__item">
          <Button
            className="about-controls__button"
            onClick={() => setEmailBox(true)}
            layout="empty"
            round
            icon="mdi/email-outline"
            iconRight
          >
            Subscribe Email
          </Button>
        </li>
        <li className="about-controls__item">
          <Button
            className="about-controls__button"
            onClick={() => setPushBox(true)}
            layout="empty"
            round
            icon="mdi/bell-outline"
            iconRight
          >
            Push Notifications
          </Button>
        </li>
        {'share' in navigator && (
          <li className="about-controls__item">
            <Button
              className="about-controls__button"
              onClick={() =>
                navigator.share({
                  url: window.location.href,
                  text: `Check out PWAdvent.dev. ${appDescription}`,
                  title: appTitle,
                })
              }
              layout="empty"
              round
              icon="mdi/share"
              iconRight
            >
              Tell your friends
            </Button>
          </li>
        )}
        {(window as any).installPrompt && (
          <li className="about-controls__item">
            <Button
              className="about-controls__button"
              onClick={() => (window as any).installPrompt.prompt()}
              layout="empty"
              round
              icon="mdi/download"
              iconRight
            >
              Add to homescreen
            </Button>
          </li>
        )}
      </ul>
      {emailBox && (
        <PortalBox
          size="small"
          close={() => {
            //settingsDB.set('emailPopupClosed', true);
            setEmailBox(false);
          }}
          title="Email signup"
        >
          <EmailSignup />
        </PortalBox>
      )}
      {pushBox && (
        <PortalBox
          size="small"
          close={() => setPushBox(false)}
          title="Push Notifications"
        >
          <PushNotifications />
        </PortalBox>
      )}
    </React.Fragment>
  );
};

export default AboutControls;
