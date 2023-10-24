import { envsafe, str } from "envsafe";

export const env = envsafe({
  NODE_ENV: str({
    devDefault: "development",
    choices: ["development", "staging", "production"],
  }),
  STEAM_KEY: str(),
  STEAM_ID: str(),
  LASTFM_USER: str(),
  LASTFM_TOKEN: str(),
  DISCORD_ID: str(),
});
