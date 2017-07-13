import {userManagementPage} from '../page-objects/user-management.po';
import {browser} from 'protractor';

describe('Release Toggles page', () => {

    beforeEach(() => {
        browser.ignoreSynchronization = true;
        userManagementPage.go();

        (browser.manage() as any).addCookie({
            name: 'cookieName',
            value: 'cookieVal',
            path: '/',
            domain: '127.0.0.1'
        });
    });

    it('should display a list of release toggles', async () => {
        userManagementPage.go();
    });

});