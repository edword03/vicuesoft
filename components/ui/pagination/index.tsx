import { Dispatch, FC, SetStateAction, useEffect } from 'react';

import styles from './Pagination.module.scss';

interface PaginationProps {
	currentPage: number;
	setPage: Dispatch<SetStateAction<number>>;
	listLength: number;
}

export const Pagination: FC<PaginationProps> = ({
	setPage,
	currentPage,
	listLength,
}) => {
	useEffect(() => {
		window.scrollTo({ top: 0 });
	}, [currentPage]);

	return (
		<div className={styles.container}>
			<div>
				<button
					className={styles.arrowBtn}
					disabled={currentPage === 1}
					onClick={() => {
						setPage((prevState) => (prevState > 1 ? prevState - 1 : 1));
					}}
				>
					{'<'}
				</button>
			</div>
			<span>{currentPage}</span>
			<div>
				<button
					className={styles.arrowBtn}
					disabled={listLength < 25}
					onClick={() => setPage((prevState) => prevState + 1)}
				>
					{'>'}
				</button>
			</div>
		</div>
	);
};
