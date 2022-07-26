import { BeerModel } from '@/shared/models/BeerModel';

import axios from '@/api/axios';
import { getBeers } from '@/config/api.config';

export class BeersServices {
	async getBeers(searchName?: string, currentPage?: number) {
		return await axios.get<BeerModel[]>(getBeers(''), {
			params: searchName
				? {
						beer_name: searchName,
						page: currentPage,
				  }
				: {
						page: currentPage,
				  },
		});
	}

	async getBeerById(id: string) {
		return await axios.get<BeerModel[]>(getBeers(id));
	}
}
