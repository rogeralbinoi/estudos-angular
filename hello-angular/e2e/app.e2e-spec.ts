import { RogerPage } from './app.po';

describe('roger App', function() {
  let page: RogerPage;

  beforeEach(() => {
    page = new RogerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
