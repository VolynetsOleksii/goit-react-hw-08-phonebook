import axios from 'axios';

axios.defaults.baseURL = "https://648c17088620b8bae7ec358d.mockapi.io";

export const fetchContacts = async () => {
  const { data } = await axios.get(`/contacts`);
 
  return data;
};

export const addContacts = async contact => {
  const { data } = await axios.post(`/contacts`, contact);

  return data;
};

export const deleteContacts = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
 
  return data;
};
