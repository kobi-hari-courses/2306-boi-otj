import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsernamesService {

  private usedNames = [
    'john', 
    'smith', 
    'johney'
  ]

  constructor() { }

  async isAvailable(user: string): Promise<boolean> {
    await new Promise(res => setTimeout(res, 2000));
    return !this.usedNames.includes(user);
  }
}
