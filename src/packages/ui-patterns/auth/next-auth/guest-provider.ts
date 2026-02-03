import CredentialsProvider from "next-auth/providers/credentials"

import { uniqueNamesGenerator, adjectives, animals, Config } from 'unique-names-generator';
const config: Config = {
  dictionaries: [adjectives, animals],
  separator: '-',
};

export const guestProvider = CredentialsProvider({
  // The name to display on the sign in form (e.g. 'Sign in with...')
  name: 'a Guest profile',
  // The credentials is used to generate a suitable form on the sign in page.
  // You can specify whatever fields you are expecting to be submitted.
  // e.g. domain, username, password, 2FA token, etc.
  // You can pass any HTML attribute to the <input> tag through the object.
  credentials: {},
  async authorize(credentials, req) {
    const id = uniqueNamesGenerator(config);

    return {
      id,
      name: id,
      tier: "guest",
    };
  }
})
