import {Component, OnInit} from '@angular/core';
import {Pet} from '../shared/models/Pet';
import {PetService} from '../shared/services/pet.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {
  pet: Pet;

  constructor(private petService: PetService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
      const id = +this.route.snapshot.paramMap.get('id');
      this.petService.getById(id).subscribe(p => {
        this.pet = p;
        console.log(p);
      });
  }

  onDelete() {
    this.petService.deleteById(this.pet.id);
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
