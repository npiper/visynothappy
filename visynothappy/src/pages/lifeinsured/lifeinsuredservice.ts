import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { LifeInsuredModel } from './LifeInsuredModel';

@Injectable()
export class LifeInsuredService {
  constructor(public http: Http) {}

  getData(): Promise<LifeInsuredModel> {
    return this.http.get('http://ec2-13-54-111-58.ap-southeast-2.compute.amazonaws.com/api/v1/getlifeinsured?id=1')
     .toPromise()
     .then(response => response.json() as LifeInsuredModel)
     .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
