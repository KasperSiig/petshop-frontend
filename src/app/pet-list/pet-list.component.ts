import { Component, OnInit } from '@angular/core';
import {PetService} from '../shared/services/pet.service';
import {Pet} from '../shared/models/Pet';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  pets: Pet[];

  constructor(private petService: PetService) {}

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.petService.getAll()
      .subscribe(pets => {
        this.pets = pets;
      });
  }

  onDelete(id: number) {
    this.petService.deleteById(id).subscribe(m => {
      console.log('Pet Deleted with message: ' + m);
      this.refresh();
    });
  }
}
