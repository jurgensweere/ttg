import { ProcessCard } from "./process-card";

export class ColonyCard extends ProcessCard {
    colonyType: string;
    generate: any; // make this something smart

    deserialize(input: any): ColonyCard {
        Object.assign(this, input);
        return this;
    }
}
