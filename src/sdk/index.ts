export type User = {
  name: string;
  age: number;
  email: string;
  phoneNumber: string;
  newsletter: "daily" | "weekly" | "monthly";
};

export type TokenResponse = {
  user: User;
  token: string;
};

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const createUser = async (user: User): Promise<TokenResponse> => {
  await sleep(2000);

  return { user, token: "sample.token" };
};
