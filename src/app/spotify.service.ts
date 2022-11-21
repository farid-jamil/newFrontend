import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
 providedIn: 'root'
})
export class SpotifyService {
 getHeader(query: string) {
 const url = 'https://api.spotify.com/v1/' + query;
 let headers = new HttpHeaders();
 headers = headers.append(
 'Authorization',
 // tslint:disable-next-line: max-line-length
 "Bearer BQAY6krH1irx00SFwpKykDNRCWcvt0nvhfSmU9UR2tne85--P9PFbya0LzdWO-SlU0u9qSa0NPNvFeuce91l3FaMsMaYVJ96BY6wYNtyOkWXRx2ITMQPhvTjZ2haIRI6R4FFjBItf3X78MqM9ttAGnbEawN1xztW2OeE3SKTUOFjIPxebTLCMQumi6hEH9vqW1U"
 );
 return this._http.get(url, { headers });
 }
 // tslint:disable-next-line: variable-name
 constructor(private _http: HttpClient) {}
 searchMusic(str: string, type = 'artist') {
 const param = '&offset=0' + '&limit=20' + '&type=' + type +
'&market=US';
 const query = 'search?query=' + str + param;
 return this.getHeader(query);
 }
 getArtist(id: string) {
 const query = `artists/${id}`;
 return this.getArtist(query);
 }
}