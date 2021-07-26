/**
 * apiバージョン.
 * @type {*}
 */
export const apiVersion = 'v1';

/**
 * cookieに保存されたデータを取得する関数.
 *
 * @param {string} key
 * @return {*}
 */
export const getCookie = (key: string) => {
  const str = ((document.cookie + ';').match(key + '=([^¥S;]*)') || [])[1];
  if (str) {
    const decodeStr = decodeURIComponent(str);
    const index = decodeStr.indexOf('{');
    return JSON.parse(decodeStr.slice(index));
  }
  return null;
};
