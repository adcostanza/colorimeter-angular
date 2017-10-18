import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
@Injectable()
export class StartService {
	constructor(private http: HttpClient) {};
  go(): Observable<any> {
		let token = 'XXXXXXXXXXXXXXXX';
    let deviceId = 'YYYYYYYYYYYYYYYYYYYYYY';
		let headers = { headers : new HttpHeaders().set('Content-Type', 'application/json') };
		return this.http.post('https://api.particle.io/v1/devices/'+deviceId+'/go?access_token='+token,{'arg':' '},headers)
			.map(response => {
				return response;
			});
	}
}
