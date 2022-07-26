import { FC } from 'react';

export const EmptyImg: FC<{ className?: string }> = ({ className }) => {
	return (
		<div
			className={`bg-gray-300 w-full h-72 ${className ? className : ''}`}
		></div>
	);
};
