import { ChangeEvent, MouseEvent, forwardRef } from 'react';

import { SearchList } from '@/components/ui/search-field/SearchList';
import { SearchListType } from '@/components/ui/search-field/search-field.interface';

import styles from './SearchField.module.scss';

interface SearchFieldProps {
	search: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	listItems: SearchListType[];
	onClick: (event: MouseEvent<HTMLLIElement>) => void;
	isVisible: boolean;
	isError: boolean;
	onFocus: () => void;
}

const SearchField = forwardRef<HTMLDivElement, SearchFieldProps>(
	(
		{ search, onChange, listItems, onClick, isVisible, isError, onFocus },
		ref
	) => {
		return (
			<div className={styles.wrapper} ref={ref}>
				<input
					type="text"
					value={search}
					onChange={onChange}
					onFocus={onFocus}
					placeholder="Find a beer"
				/>
				{isVisible ? (
					<SearchList
						listItems={listItems}
						onClick={onClick}
						isError={isError}
					/>
				) : null}
			</div>
		);
	}
);

SearchField.displayName = 'SearchField';

export default SearchField;
