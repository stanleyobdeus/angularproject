import { Personne } from 'src/app/Model/Personne';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Personne[];
   link = 'http://localhost:3000/api/personnes';

  constructor(private http: HttpClient)  { 
    this.personnes = [
      new Personne(1,'Stanley','OBDEUS',49,'rotating_card_profile2.png',98777,'Analyste Developpeur'),
      new Personne(2,'Vladimir','OBDEUS',149,'tome.jpg',987,'Lead Developpeur'),
      new Personne(3,'Norzelus','Myriam',149,'',987,'Nurse')
    ]
  }

  getFakePersonnes() {
    return this.personnes;
  }

  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(this.link);
  }

  getPersonneById(id: number): Observable<Personne> {
  //  const personne = this.personnes.find( personne =>{
   //   return personne.id == id;
   // });
    return this.http.get<Personne>(this.link + `/${id}`);

  }
  addPersonne(personne: Personne): Observable<any> {
   // personne.id=this.personnes[this.personnes.length-1].id+1
    //this.personnes.push(personne);
    // const token = localStorage.getItem('token');
    // if (token) {
     // const params = new HttpParams().set('access_token', token);
     // return this.http.post( this.link , personne, {params});
   // }
   return this.http.post( this.link , personne);
  }

  deletePersonne(id: number) {
   return this.http.delete(this.link + `/${id}`);
  }

  updatePersonne(personne: Personne) {
   return this.http.put(this.link, personne);
  }

  findByName(name): Observable<Personne[]> {
    const filter = `{"where":{"name":{"like":"%${name}%"}}}`;
    const params = new HttpParams().set('filter', filter );
    return this.http.get<Personne[]>(this.link, {params});
  }


}
