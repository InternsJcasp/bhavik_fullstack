import { storageKeys } from "../../../constants/storageKeys";

const MOCK_USERS = [
  {
    id: "1",
    name: "Bhavik",
    email: "bhavik123@gmail.com",
    password: "bhavik123@",
  },
  {
    id: "2",
    name: "Rahul",
    email: "rahul123@gmail.com",
    password: "rahul123@",
  },
  {
    id: "3",
    name: "Pritam",
    email: "pritam123@gmail.com",
    password: "pritam123@",
  },
];

export const authService = {
  login(email, password) {
    const user = MOCK_USERS.find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase() &&
        u.password === password,
    );
    if (!user) {
      throw new Error("Invalid email or password");
    }
    localStorage.setItem(storageKeys.AUTH_TOKEN, "fake-jwt-token");
    localStorage.setItem(storageKeys.AUTH_USER, JSON.stringify(user));
    return user;
  },

  logout() {
    localStorage.removeItem(storageKeys.AUTH_TOKEN);
    localStorage.removeItem(storageKeys.AUTH_USER);
  },

  getCurrentUser() {
    const token = localStorage.getItem(storageKeys.AUTH_TOKEN);
    if (!token) return null;
    const userStr = localStorage.getItem(storageKeys.AUTH_USER);
    return userStr ? JSON.parse(userStr) : null;
  },
};
