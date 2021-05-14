export const IS_PRODUCTION = process.env.NODE_ENV == 'production';

export const backendAddress = IS_PRODUCTION ? 'http://localhost:3030' : 'http://localhost:3030';