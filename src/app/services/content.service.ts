import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {SheetsService} from './sheets.service';

@Injectable()
export class ContentService {
  public string;

  getPage(unique_identifier: string): Observable<any> {
    let object = [];
    return this.sheets.getJsonData(unique_identifier)
      .map(e => {
        e.map(f => {
          object.push(this.extractCols(f))
        });
      })
      .map(() => object)
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

  constructor(public sheets: SheetsService) {
  }
}
