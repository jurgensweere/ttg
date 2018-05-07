import { SpaceCard } from "./space-card";
import { ColonyCard } from "./colony-card";

export class PlanetCard extends SpaceCard {
    hazzard: number = 0;
    slots: string[] = [];
    colonies: ColonyCard[] = [];

    deserialize(input: any): PlanetCard {
        Object.assign(this, input);
        return this;
    }

    canColonize(card:ColonyCard):boolean {
        // check if there is an empty slot
        if (this.slots.length <= this.colonies.length) {
            return false;
        }
        // check if there is a slot for the type available
        if (card.colonyType == 'utility') {
            // utility always fits
            return true;
        }
        // count the slots of the same type
        let totalSlots = this.slots
            .filter(slot => slot == card.colonyType)
            .length;
        totalSlots -= this.colonies
            .filter(colony => colony.colonyType == card.colonyType)
            .length;
        
        return totalSlots > 0;
    }

    colonize(card:ColonyCard) {
        this.colonies.push(card);
    }
}
