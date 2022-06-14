import { CharacterType } from "../../models/CharacterType"

export type CharactersListResponse = {
    data: {
        offset: number, 
        limit: number, 
        total: number, 
        count: number, 
        results: CharacterType[]
    }
}