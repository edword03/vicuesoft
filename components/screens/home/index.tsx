import { useSearchBeer } from '@/components/screens/home/useSearchBeer';
import { BeerList } from '@/components/ui/beer-list';
import { Loader } from '@/components/ui/loader';
import { Pagination } from '@/components/ui/pagination';
import SearchField from '@/components/ui/search-field';

import styles from './Home.module.scss';

export const Home = () => {
	const {
		isError,
		data,
		searchValue,
		onChange,
		onChangeByClick,
		ref,
		isVisible,
		onFocus,
		setPage,
		isLoading,
		page,
	} = useSearchBeer();

	return (
		<main className={styles.main}>
			<div>
				<SearchField
					search={searchValue}
					onChange={onChange}
					onClick={onChangeByClick}
					listItems={data || []}
					ref={ref}
					isVisible={isVisible}
					isError={isError}
					onFocus={onFocus}
				/>
			</div>
			{isLoading ? (
				<div className="flex justify-center items-center h-screen">
					<Loader />
				</div>
			) : data?.length ? (
				<BeerList beerList={data || []} />
			) : (
				<p className="text-center text-2xl py-10">Not found</p>
			)}
			{data && (
				<Pagination
					listLength={data.length}
					currentPage={page}
					setPage={setPage}
				/>
			)}
		</main>
	);
};
