import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SheetsService {

  constructor(private http: Http) {
  }

  getJsonData(unique_identifier: string): Observable<any> {
    let sheetUrl = 'https://spreadsheets.google.com/feeds/list/' + unique_identifier + '/1/public/values?alt=json';
    return this.http.get(sheetUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.json().feed.entry as Observable<any>;
  }

  getSheetData(unique_identifier: string): Observable<any> {
    let object = [];
    return this.getJsonData(unique_identifier)
      .map(e => {
        e.map(f => {
          object.push(this.extractCols(f))
        });
      })
      .map(() => object)
      .catch(this.handleError);
  }

  private extractCols(f): Object {
    let obj = new Object();
    for (let x in f) {
      if (f.hasOwnProperty(x)) {
        let prop = x.split('$');
        if (prop[0] === 'gsx')
          obj[prop[1]] = f[x].$t.replace('</p>', '').split(`<p>`);
      }
    }
    return obj;
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
