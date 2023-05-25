abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;

  static characterPresentation(character: Character): void {
    character.talk();
    character.specialMove();
  }
}

class MeleeCharacter extends Character {
  talk() {
    console.log('Character speaks using a Subclass e seu tipo de range é Melee');
  };
  specialMove(): void {
    console.log('Character attacks with SpecialMove using a Subclass/Melee');
  };

}

class LongRangeCharacter extends Character {
  talk() {
    console.log('Character speaks using a Subclass e seu tipo de range é Long Range');
  }
  specialMove(): void {
    console.log('Character attacks with SpecialMove using a Subclass/LR');
  };
}

const yoshi = new MeleeCharacter();
const samus = new LongRangeCharacter();

yoshi.talk();
yoshi.specialMove();
samus.talk();
samus.specialMove();

Character.characterPresentation(yoshi);
Character.characterPresentation(samus);