import { browser, by, element } from 'protractor';

export class AppPage {
  //return to home url
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
