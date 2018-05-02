import { SpaceCard } from "./space-card";

export class AnomalyCard extends SpaceCard {

    deserialize(input: any): AnomalyCard {
        Object.assign(this, input);
        return this;
    }
}
