import { AngularProjPage } from './app.po';

describe('angular-proj App', () => {
  let page: AngularProjPage;

  beforeEach(() => {
    page = new AngularProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
