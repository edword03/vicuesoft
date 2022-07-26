import { FC, MouseEvent } from 'react';

import { SearchListType } from '../search-field.interface';

import styles from './SearchList.module.scss';

interface SearchListProps {
	listItems: SearchListType[];
	onClick: (event: MouseEvent<HTMLLIElement>) => void;
	isError: boolean;
}

export const SearchList: FC<SearchListProps> = ({
	listItems,
	onClick,
	isError,
}) => {
	return (
		<ul className={styles.ul}>
			{isError && <div>Something went wrong</div>}
			{listItems?.length ? (
				listItems.map((list) => (
					<li key={list.id} onClick={onClick} className={styles.li}>
						{list.name}
					</li>
				))
			) : (
				<div className="p-2">Not found</div>
			)}
		</ul>
	);
};
