import './styles.css';

interface IProps {
	item: {
		image: string;
		name: string;
		alias: string;
	};
}

export const Item: React.FC<IProps> = ({ item }) => {
	
	const {name, alias, image} = item
	
	return (
			<div className="item">
				<div className='img__container'>
					<img className="img" src={image} alt={name}/>
				</div>
				<p className='name'>{name}</p>
				<p className='alias'>{alias}</p>
			</div>
		)
};
