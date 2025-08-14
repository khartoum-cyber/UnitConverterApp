import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {
  private apiUrl = 'http://localhost:5192/api/conversion';

  readonly http = inject(HttpClient);

  convert(payload: ConversionRequest): Observable<ConversionResult> {
    return this.http.post<ConversionResult>(this.apiUrl, payload);
  }
}