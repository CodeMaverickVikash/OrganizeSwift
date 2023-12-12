import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}

  ajax(options: any): any {
    let headers = new HttpHeaders().set(
      'Content-Type',
      options.contentType || 'application/x-www-form-urlencoded'
    );

    let opts: any = {
      headers: headers,
    };
    if (options.responseType) {
      opts['responseType'] = options.responseType;
    }
    opts = Object.assign(opts, options);

    const req = new HttpRequest(
      options.method || 'POST',
      options.url,
      options.data,
      opts
    );

    return this.http.request(req).subscribe(
      (response) => {
        options.success && options.success(response);
      },
      (err) => {
        options.error && options.error(err);
      }
    );
  }
}
