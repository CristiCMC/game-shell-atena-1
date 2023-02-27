

let initialized = false;
const clientId =
  '1036428115018-g9sq2u2mjs5jfk1harkk0ggvelbl65jt.apps.googleusercontent.com';

export const initializeGoogleAuth = async () => {
  return new Promise((resolve) => {
    if (initialized) {
      return;
    }

    window.addEventListener('load', () => {
      /* global google */
      google.accounts.id.initialize({
        client_id: clientId,
        callback: (response) => {
          console.log(response);
        },
        scope: 'email profile',
      });
    });

    resolve();
    initialized = true;
  });
};
