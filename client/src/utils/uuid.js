import { v4 as uuidv4 } from 'uuid';

export const initUUID = () => {
  let uuid = localStorage.getItem('uuid');
  if (!uuid) {
    uuid = uuidv4();
    localStorage.setItem('uuid', uuid);
  }
  return uuid;
};
