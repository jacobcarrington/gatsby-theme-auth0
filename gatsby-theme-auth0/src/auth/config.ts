const config = {
  domain: process.env.AUTH0_DOMAIN!,
  clientID: process.env.AUTH0_CLIENT_ID!,
  redirectUri: process.env.AUTH0_CALLBACK_URL!,
  audience: process.env.AUTH0_AUDIENCE!,
  responseType: process.env.AUTH0_RESPONSE_TYPE! || "token id_token",
  scope: process.env.AUTH0_SCOPE! || "openid email profile",
  overrides: {},
};

if (
  process.env.AUTH0_TOKEN_ISSUER !== undefined &&
  process.env.AUTH0_TOKEN_ISSUER !== undefined
) {
  config.overrides = {
    __tenant: process.env.AUTH0_TENANT!, // eslint-disable-line @typescript-eslint/camelcase
    __token_issuer: process.env.AUTH0_TOKEN_ISSUER!, // eslint-disable-line @typescript-eslint/camelcase
  };
}

export { config };
