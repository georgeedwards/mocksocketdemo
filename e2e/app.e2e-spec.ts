import { MocksockdemoPage } from './app.po';

describe('mocksockdemo App', () => {
  let page: MocksockdemoPage;

  beforeEach(() => {
    page = new MocksockdemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
