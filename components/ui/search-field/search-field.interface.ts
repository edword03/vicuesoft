import { BeerModel } from '@/shared/models/BeerModel';

export interface SearchListType extends Pick<BeerModel, 'id' | 'name'> {}
