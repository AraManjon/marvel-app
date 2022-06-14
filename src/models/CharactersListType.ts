import {CharacterType} from "./CharacterType";

export type CharactersListType = {
    offset: number, 
    limit: number, 
    total: number, 
    count: number, 
    results: CharacterType[]
}