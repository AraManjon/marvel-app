import { useGetCharactersList } from '../hooks/useGetCharractersList';
import { extractCharacterContent } from './extractCharacterContent';
import { PaginationButtons } from '../components/PaginationButtons/PaginationButtons';
import { List } from '../components/List/List';
import './styles.css';

export const CharactersPage = () => {

	const { list, offset, total, setOffset } = useGetCharactersList();

	return (
		<div className="page">
			<p className="title__page">MARVEL CHARACTERS LIST</p>
			<List list={list} handleContentItem={extractCharacterContent}/>
			<PaginationButtons offset={offset} total={total} setOffset={setOffset} />
		</div>
	);
};
