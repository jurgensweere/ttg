import { Deserializable } from "./deserializable";
import { PlanetCard } from "./planet-card";
import { ColonyCard } from "./colony-card";

export abstract class Card implements Deserializable<Card> {
    name: string;
    type: string;
    tokens: number;
    start: boolean = false;
    hand: boolean = false;
    renown: number = 0;
    tapped: boolean = false;

    deserialize(input: any): Card {
        throw new Error("Method not implemented on abstract class.");
    }
}
