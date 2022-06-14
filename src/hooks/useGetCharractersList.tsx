import { useEffect, useState } from "react"
import { CharacterType } from "../models/CharacterType"
import { getCharactersList } from "../services/getCharactersList"

export const useGetCharactersList = () => {

    const [list, setCharactersList] = useState<CharacterType[] | undefined>(undefined)
    const [offset, setOffset] = useState(0)
    const [total, setTotal] = useState(0)
    
    useEffect(()=> {
        (async ()=> {
          const response = await getCharactersList(offset)
          setCharactersList(response.results)
          setTotal(response.total)
        })()
      }, [offset])

    return { list, setOffset, offset, total }
}