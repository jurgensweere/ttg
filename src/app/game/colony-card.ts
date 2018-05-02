import { Card } from "./card";

export class ColonyCard extends Card {
    colonyType: string;
    generate: any; // make this something smart

    deserialize(input: any): ColonyCard {
        Object.assign(this, input);
        return this;
    }
}
