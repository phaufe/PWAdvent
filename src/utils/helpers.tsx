import React from 'react';

export const zeroPad = (number: number, length: number): string =>
  number.toString().padStart(length, '0');

export const isDev: boolean = IS_DEV;

export const windowResize = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

export const getRandomNumber = (min, max) => Math.random() * (max - min) + min;

export const untrailingSlashIt = (str: string): string =>
  str.replace(/\/$/, '');

export const trailingSlashIt = (str: string): string =>
  untrailingSlashIt(str) + '/';

export const shuffle = (items: Array<any>) =>
  items.sort(() => Math.random() - 0.5);
