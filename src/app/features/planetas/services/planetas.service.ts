import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { API_URL } from '@core/config/api';
import { Pagina } from '@shared/models/pagina.model';
import { Planeta } from '../models/planeta.model';

@Injectable({ providedIn: 'root' })
export class PlanetasService {
  private readonly http = inject(HttpClient);
  private readonly url = `${API_URL}/planets`;
  private readonly porPagina = 12;

  listar(pagina: number) {
    return this.http.get<Pagina<Planeta>>(this.url, {
      params: { page: pagina, limit: this.porPagina },
    });
  }
}
