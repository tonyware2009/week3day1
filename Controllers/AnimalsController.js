import { Alligator } from "../models/alligator.js";
import { Babboon } from "../models/Babboon.js";
import { Cat } from "../models/cat.js";
import { Dog } from "../models/dog.js";
import { Elephant } from "../models/Elephant.js";

const animalKingdom = [
  new Alligator('Steve', "Grey", "male", 600, 7, 3),
  new Babboon('Rafiki', "Black", "male", 250,),
  new Cat('Mr. Smithers', "white", "male", 15,),
  new Dog('London', "silver", "female", 140),
  new Elephant('Ms Thickums', "brown", "female", 1200)
]


export class AnimalsController {
  function _drawAnimals() {
  let template = ''
  animalKingdom.forEach(f => template += f.printListItem())
  document.getElementById('zoo').innerHTML = template

}



