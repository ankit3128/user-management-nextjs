import httpClient from "./axios";

export const getAllUsers = () => httpClient.get("/users");

export const getUserById = (id) =>
  httpClient.get(`/users/${id}`);

export const updateUserById = (id, data) =>
  httpClient.put(`/users/${id}`, data);

export const deleteUserById = (id) =>
  httpClient.delete(`/users/${id}`);