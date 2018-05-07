import { ProcessCard } from "./process-card";

export class ColonyCard extends ProcessCard {
    colonyType: string;

    deserialize(input: any): ColonyCard {
        Object.assign(this, input);
        return this;
    }
}
