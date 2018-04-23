import decode from 'jwt-decode';

/** Trims last '/' from input string. */
export function trimSlash(s = '') {
  return s.endsWith('/') ? s.slice(0, -1) : s;
}

export function jwtDecode(s = '') {
  return decode(s);
}

export default {
  trimSlash,
  jwtDecode,
};
