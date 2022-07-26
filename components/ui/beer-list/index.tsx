import { FC } from 'react';

import { BeerModel } from '@/shared/models/BeerModel';

import { BeerCard } from './BeerCard';
import { getBeerUrl } from '@/config/url.config';

interface BeerListProps {
	beerList: Pick<BeerModel, 'name' | 'image_url' | 'description' | 'id'>[];
}

export const BeerList: FC<BeerListProps> = ({ beerList }) => {
	return (
		<section className="flex flex-wrap w-full gap-x-4 gap-y-6 mt-40 justify-between">
			{beerList ? (
				beerList?.map(({ name, image_url, description, id }) => (
					<BeerCard
						key={id}
						link={getBeerUrl(id)}
						imageSrc={image_url}
						description={description}
						title={name}
					/>
				))
			) : (
				<div>Not found</div>
			)}
		</section>
	);
};
