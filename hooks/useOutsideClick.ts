import { RefObject, useEffect } from 'react';

export const useOnClickOutside = (
	ref: RefObject<any>,
	handler: (event: MouseEvent) => void
) => {
	useEffect(() => {
		const listener = (event: MouseEvent) => {
			if (!ref?.current || ref.current.contains(event.target)) {
				return;
			}
			handler(event);
		};

		document.addEventListener('click', listener);
		return () => {
			document.removeEventListener('mousedown', listener);
		};
	}, [ref, handler]);
};
