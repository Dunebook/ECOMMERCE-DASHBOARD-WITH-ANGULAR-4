import { StoreReporterPage } from './app.po';

describe('store-reporter App', () => {
  let page: StoreReporterPage;

  beforeEach(() => {
    page = new StoreReporterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
