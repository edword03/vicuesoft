import { FC, ReactNode } from 'react';

interface TitleProps {
	children: ReactNode;
	className?: string;
}

export const Title: FC<TitleProps> = ({ children, className }) => {
	return (
		<h1 className={`font-semibold text-3xl ${className ? className : ''}`}>
			{children}
		</h1>
	);
};
