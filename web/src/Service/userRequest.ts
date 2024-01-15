import { api } from './request'

export const getOtherUserById = async (id: number) => {
  // _RPM
  const { data } = await api.get(`/user/other-user/${id}`) 
  return data;
};

export const getAllUsers = async () => {
  const { data } = await api.get('/user') 
  return data
}