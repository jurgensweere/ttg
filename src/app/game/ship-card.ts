import { ProcessCard } from "./process-card";

export class ShipCard extends ProcessCard {
    deserialize(input: any): ShipCard {
        Object.assign(this, input);
        return this;
    }
}