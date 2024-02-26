import { atom,} from 'recoil';

 export const emailState = atom({
    key: 'email', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });
 export const passState = atom({
    key: 'pass', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });