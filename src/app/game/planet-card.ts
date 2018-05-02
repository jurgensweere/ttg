import { SpaceCard } from "./space-card";

export class PlanetCard extends SpaceCard {
    slots: string[];

    deserialize(input: any): PlanetCard {
        Object.assign(this, input);
        return this;
    }
}
