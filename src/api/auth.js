

let initialized = false;
const clientId =
  '979132773544-17a2u8srmiah2hf9qi3pfsg5apdped3u.apps.googleusercontent.com';

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
