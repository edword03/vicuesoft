import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { Beer } from '@/components/screens/beer';

import { BeerModel } from '@/shared/models/BeerModel';

import { BeersServices } from '@/services/beers.services';

interface BeerItemType {
	beer: BeerModel;
}

const BeerPage: NextPage<BeerItemType> = ({ beer }) => {
	return <Beer beer={beer} />;
};

export default BeerPage;

export const getStaticPaths: GetStaticPaths = async () => {
	const { data } = await new BeersServices().getBeers();

	const paths = data.map((beer) => ({ params: { id: beer.id.toString() } }));
	console.log(paths);
	return {
		paths,
		fallback: 'blocking',
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: beer } = await new BeersServices().getBeerById(
			String(params?.id)
		);

		return {
			props: {
				beer: beer[0],
			},
		};
	} catch (error) {
		return {
			props: {},
			notFound: true,
		};
	}
};
