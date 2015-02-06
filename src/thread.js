import {HttpClient} from 'aurelia-http-client';


export class Thread{
  static inject() { return [HttpClient]; }
  constructor(http){
    this.posts = [];
    this.http = http;
  }

  activate(params){
    var url = 'http://8ch.net/b/res/'+params.id+'.json';
    return this.http.get(url).then(response => {
      var json = JSON.parse(response.response);
      this.posts = json.posts;
    });
  }
}
