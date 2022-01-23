import {AxiosCall} from 'utils/axios';
import {ServiceSuccessResponseType} from './serviceMappers/BaseMapper';
import {BookItemMapping} from './serviceMappers/BookMapper';

export const fetchBooksList = async (params: {
  search_text?: string;
  offset?: number;
  limit?: number;
}): Promise<ServiceSuccessResponseType<Array<BookItemMapping>>> => {
  let queryParams = '';
  const {search_text, limit, offset} = params;
  if (search_text) {
    queryParams += `search=${search_text}`;
  }
  if (typeof limit !== 'undefined' && typeof offset !== 'undefined') {
    queryParams += `${queryParams ? '&' : ''}limit=${limit}&offset=${offset}`;
  }
  return AxiosCall.get(
    `https://61dddb4af60e8f0017668ac5.mockapi.io/api/v1/Book?${queryParams}`,
  );
};

export const addBookService = async (data: {
  name: string;
  author: string;
  price: string;
}) => {
  return AxiosCall.post(
    'https://61dddb4af60e8f0017668ac5.mockapi.io/api/v1/Book',
    data,
  );
};
