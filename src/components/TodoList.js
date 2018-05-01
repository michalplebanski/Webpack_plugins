import React from 'React';
import style from './TodoList.css';

const List = props => {
	const listElements = props.list.map(element => 
		<li key={element.id} onClick={() => props.delete(element.id)}>
			{element.text}
		</li>
	);
	return (
		<ul className={style.TodoList}>
			{listElements}
		</ul>
	);
}

export default List;
