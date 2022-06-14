import './styles.css';

interface IProps {
	offset: number;
	total: number;
	setOffset: (number: number) => void;
}

export const PaginationButtons: React.FC<IProps> = ({offset, total, setOffset}) => {
    
    return (
           <div className="button__container">
                    <button className={offset === 0 ? 'hidden' : 'button'} onClick={() => setOffset(offset - 20)}>Prev</button>
                    <p className='text'>{offset}/{total}</p>
                    <button className={offset >= total ? 'hidden' : 'button'} onClick={() => setOffset(offset + 20)}>Next</button>
            </div>
    )
}