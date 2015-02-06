import {Router} from 'aurelia-router';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Sei lá';
      config.map([
        { route: ['','welcome'], moduleId: 'welcome', nav: true },
        { route: 'thread/:id',   moduleId: 'thread' },
        { route: 'board',        moduleId: 'board',   nav: true },
      ]);
    });
  }
}
