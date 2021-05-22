export const IS_PRODUCTION = process.env.NODE_ENV == 'production';

export const backendAddress = IS_PRODUCTION ? 'https://ateam-pse-back.herokuapp.com' : 'http://localhost:3030';