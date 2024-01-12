import { api } from './request'

export const getChatByUserId = async (id: number) => {
  // _RPM
  const { data } = await api.get(`/chat/user/${id}`) 
  return data;
};