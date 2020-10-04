const { NODE_ENV = '' } = process.env;

const env = {
  environment: NODE_ENV.toLowerCase(),
};

export { env };
