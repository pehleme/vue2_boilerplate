const { NODE_ENV = '', VUE_APP_BASE_URL } = process.env;

const env = {
  environment: NODE_ENV.toLowerCase(),
  baseUrl: VUE_APP_BASE_URL,
};

export { env };
