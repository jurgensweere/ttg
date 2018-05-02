import { SpaceCard } from "./space-card";

export class EventCard extends SpaceCard {

    deserialize(input: any): EventCard {
        Object.assign(this, input);
        return this;
    }
}