import { ListWebappPage } from './app.po';

describe('list-webapp App', () => {
  let page: ListWebappPage;

  beforeEach(() => {
    page = new ListWebappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
