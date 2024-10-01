module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  url: env("URL"),
  proxy: true,
  paginator: {
    defaultLimit: 600,
    maxLimit: 1000,
  },
});
