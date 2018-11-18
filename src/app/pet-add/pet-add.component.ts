import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PetService} from '../shared/services/pet.service';
import {Pet} from '../shared/models/Pet';
import {ActivatedRoute, ActivatedRouteSnapshot, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.css']
})
export class PetAddComponent implements OnInit {

  paramMap: ParamMap;
  id: number;
  edit = false;

  ownerForm = new FormGroup({
    id: new FormControl('')
  });

  petForm = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    birthdate: new FormControl(''),
    soldDate: new FormControl(''),
    color: new FormControl(''),
    previousOwner: this.ownerForm,
    price: new FormControl('')
  });

  constructor(private petService: PetService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.paramMap = this.route.snapshot.paramMap;
    if (this.paramMap.get('id')) {
      this.id = +this.paramMap.get('id');
      this.edit = true;
      this.petService.getById(this.id).subscribe(pet => {
        this.setupForm(pet);
      });
    }
  }

  onSave() {
    const pet = this.petForm.value;
    if (!this.edit) {
      this.petService.add(pet)
        .subscribe(() => {
          console.log('test');
          this.router.navigate(['../../'], {relativeTo: this.route});
        });
    } else {
      pet.id = this.id;
      this.petService.update(pet)
        .subscribe(() => {
          this.router.navigate(['../../'], {relativeTo: this.route});
        });
    }
  }

  onBack() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  setupForm(pet: Pet) {
    this.petForm.patchValue({
      name: pet.name,
      type: pet.type,
      color: pet.color,
      price: pet.price,
      birthdate: pet.birthdate,
      soldDate: pet.soldDate
    });

    this.ownerForm.patchValue({
      id: pet.previousOwner.id
    });
  }
}
