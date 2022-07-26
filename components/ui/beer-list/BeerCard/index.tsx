import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { EmptyImg } from '@/components/ui/EmptyImg';

import { limitString } from '@/utils/string/limitString';

import styles from './BeerCard.module.scss';

interface BeerCardProps {
	imageSrc: string;
	title: string;
	description: string;
	link: string;
}

export const BeerCard: FC<BeerCardProps> = ({
	description,
	title,
	imageSrc,
	link,
}) => {
	return (
		<Link href={link}>
			<a>
				<div className={styles.card}>
					<div>
						{imageSrc ? (
							<Image
								src={imageSrc}
								width="100%"
								height="100%"
								layout="responsive"
								objectFit="contain"
								priority
							/>
						) : (
							<EmptyImg />
						)}
					</div>
					<div>
						<h2 className={styles.title}>{title}</h2>
						<p className={styles.description}>{limitString(description)}</p>
					</div>
				</div>
			</a>
		</Link>
	);
};
