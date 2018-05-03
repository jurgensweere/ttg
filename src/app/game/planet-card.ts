import { SpaceCard } from "./space-card";
import { ColonyCard } from "./colony-card";

export class PlanetCard extends SpaceCard {
    slots: string[] = [];
    colonies: ColonyCard[] = [];

    deserialize(input: any): PlanetCard {
        Object.assign(this, input);
        return this;
    }

    colonize(card:ColonyCard) {
        this.colonies.push(card);
    }
}
