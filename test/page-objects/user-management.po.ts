import {browser} from 'protractor';

class UserManagementPageObject {

    go() {
        return browser.get('/user-management');
    }
}

export const userManagementPage = new UserManagementPageObject();