module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  url: env("URL"),
  proxy: true,
  rest: {
    defaultLimit: 1000,
    maxLimit: 1000,
    withCount: true,
  },
});
