import call from '../utils/call';
import { generateTs } from './generateTs';
import { generateHash } from './generateHash';
import { API_URL } from './settings'

import { CharactersListResponse } from './models/CharactersListResponse';
import { CharactersListType } from '../models/CharactersListType';

export const getCharactersList = async (offset: number): Promise<CharactersListType> => {

    const ts = generateTs()
    const API_PRIVATE_KEY = process.env.REACT_APP_API_PRIVATE_KEY || '';
    const API_PUBLIC_KEY = process.env.REACT_APP_API_PUBLIV_KEY || '';
    const hash = generateHash(ts, API_PRIVATE_KEY, API_PUBLIC_KEY)
    
    const { data } = await call<CharactersListResponse>(`${API_URL}/characters?offset=${offset}&ts=${ts}&apikey=${API_PUBLIC_KEY}&hash=${hash}`, {
        method: 'GET',
    });

    return data.data;
}