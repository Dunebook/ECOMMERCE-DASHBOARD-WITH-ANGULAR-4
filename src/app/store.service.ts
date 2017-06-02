import { Injectable } from '@angular/core';

import { StoreSummary } from './store-summary';
import { Product } from './product';
import { NEW_CUSTOMERS_COUNT,
         ACTIVE_USERS_COUNT,
         SALES_SUM
       } from './mock-store-summary';
import { PRODUCTS } from './mock-product';


@Injectable()
export class StoreService {
  constructor() { }
  getNewCustomersCount(): Promise<StoreSummary> {
    return Promise.resolve(NEW_CUSTOMERS_COUNT);
  }
  getActiveUsersCount(): Promise<StoreSummary> {
    return Promise.resolve(ACTIVE_USERS_COUNT);
  }
  getSalesSum(): Promise<StoreSummary> {
    return Promise.resolve(SALES_SUM);
  }
  getTopSellingProducts(): Promise<Product[]> {
    return Promise.resolve(PRODUCTS);
  }
}
