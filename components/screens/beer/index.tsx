import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { EmptyImg } from '@/components/ui/EmptyImg';
import { Title } from '@/components/ui/Title';
import { ArrowBack } from '@/components/ui/arrow-back';

import { BeerModel } from '@/shared/models/BeerModel';

import styles from './Beer.module.scss';

interface BeerProps {
	beer: Omit<BeerModel, 'id'>;
}

export const Beer: FC<BeerProps> = ({
	beer: { abv, name, tagline, description, image_url, food_pairing },
}) => {
	return (
		<div className={styles.beer}>
			<div className="flex">
				<div className="max-w-sm w-full ml-10">
					{image_url ? (
						<Image
							src={image_url}
							width="100%"
							height="100%"
							layout="responsive"
							objectFit="contain"
							priority
							alt={name}
						/>
					) : (
						<EmptyImg className="w-1/2 translate-x-1/2" />
					)}
				</div>
				<div>
					<Title className="mb-10">{name}</Title>
					<span className={styles.tagline}>{tagline}</span>
					<span className="block">
						<strong>abv:</strong> {abv}%
					</span>
				</div>
			</div>
			<p className={styles.description}>{description}</p>
			<p className="my-3 text-xl">Food pairing:</p>
			<ul>
				{food_pairing?.map((food) => (
					<li key={food} className="py-1">
						<span>- {food}</span>
					</li>
				))}
			</ul>

			<Link href="/">
				<a>
					<ArrowBack />
				</a>
			</Link>
		</div>
	);
};
