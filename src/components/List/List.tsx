import { Item } from '../Item/Item';
import { CharacterType } from '../../models/CharacterType';
import './styles.css';

interface IProps {
	list: CharacterType[] | undefined;
	handleContentItem: (item: CharacterType) => {
		image: string;
		name: string;
		alias: string;
	};
}

export const List: React.FC<IProps> = ({ list, handleContentItem }) => {
	return <div className="list__container">{list && list.map(item => <Item item={handleContentItem(item)} key={item.id}/>)}</div>;
};
