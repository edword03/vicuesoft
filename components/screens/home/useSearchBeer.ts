import { useQuery } from '@tanstack/react-query';
import { ChangeEvent, MouseEvent, useCallback, useRef, useState } from 'react';

import { useDebounce } from '@/hooks/useDebounce';
import { useOnClickOutside } from '@/hooks/useOutsideClick';

import { BeersServices } from '@/services/beers.services';

export const useSearchBeer = () => {
	const beerService = new BeersServices();
	const [searchValue, setSearchValue] = useState<string>('');
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [page, setPage] = useState<number>(1);
	const ref = useRef<HTMLDivElement>(null);

	useOnClickOutside(ref, () => {
		setIsVisible(false);
	});

	const debouncedValue = useDebounce(searchValue, 300);

	const { data, isLoading, isError } = useQuery(
		['search beer', debouncedValue, page],
		() => beerService.getBeers(debouncedValue, page),
		{
			select: (data) => data.data,
		}
	);

	const onChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			setSearchValue(event.target.value);
			setPage(1);
		},
		[setSearchValue]
	);

	const onChangeByClick = (event: MouseEvent<HTMLLIElement>) => {
		setSearchValue(event.currentTarget.textContent as string);
		setIsVisible(false);
		setPage(1);
	};

	const onFocus = () => {
		setIsVisible(true);
	};

	return {
		onChange,
		searchValue,
		data,
		isLoading,
		isError,
		onChangeByClick,
		ref,
		isVisible,
		onFocus,
		setPage,
		page,
	};
};
