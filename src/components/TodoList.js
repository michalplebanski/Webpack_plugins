import React from 'React';
import style from './TodoList.css';

const List = props => {
	const ListElements = props.list.map(element => 
		<li key={element.id} onClick={() => props.delete(element.id)}>
			{element.text}
		</li>
	);
	return (
		<ul className={style.TodoList}>
			{ListElements}
		</ul>
	);
}

export default List;