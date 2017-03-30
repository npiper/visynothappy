## Angular imports for services
import {Injectable} from "angular2/core";
import {Http} from "angular2/http";

@Injectable()
export class DataService {
  constructor(http: Http) {
    this.http = http;
    this.data = null;
  }

  retrieveData() {
    this.http.get('http://ec2-13-54-111-58.ap-southeast-2.compute.amazonaws.com/api/v1/user')
    .subscribe(data => {
      this.data = data;
    });
  }

  getData() {
    return this.data;
  }
}