import { Card } from "./card";

export abstract class ProcessCard extends Card {
    input: any;
    output: any;

    use() {
        this.tapped = true;
    }
}
