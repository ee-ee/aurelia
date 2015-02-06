import {HttpClient} from 'aurelia-http-client';

var url = 'http://8ch.net/b/0.json';

export class Board{
  static inject() { return [HttpClient]; }
  constructor(http){
    this.threads = [];
    this.http = http;
  }

  activate(){
    return this.http.get(url).then(response => {
      var json = JSON.parse(response.response);
      this.threads = json.threads;
    });
  }
}
