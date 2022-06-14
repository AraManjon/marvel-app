import { CharacterType } from "../models/CharacterType";

export const extractCharacterContent = (character:CharacterType) => {

    const name = character.name.split('(')[0]
	
	const alias = character.name.split('(')[1]?.replace(')', '')

    const image = `${character.thumbnail.path}.${character.thumbnail.extension}`

    return {name, alias, image}
}