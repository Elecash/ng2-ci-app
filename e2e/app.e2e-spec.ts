import { Ng2CiAppPage } from './app.po';

describe('ng2-ci-app App', function () {
    let page: Ng2CiAppPage;

    beforeEach(() => {
        page = new Ng2CiAppPage();
    });

    it('should display message saying app works', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('NG Friends!');
    });

    it('should display some ng friends', () => {
        page.navigateTo();
        expect(page.getFriends()).toEqual(9);
    });
});
