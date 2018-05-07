import { Card } from "./card";

export abstract class ProcessCard extends Card {
    input: any;
    output: any;
    cost: number;

    canAfford(manpower:number, production:number, science:number, credits:number, renown:number): boolean {
        if (!this.input) {
            return true;
        }
        let canAfford = true;
        Object.keys(this.input).forEach(currency => {
            switch (currency) {
                case 'manpower':
                    if(this.input[currency] > manpower) {
                        canAfford = false;
                    }
                    break;
                case 'production':
                    if(this.input[currency] > production) {
                        canAfford = false;
                    }
                    break;
                case 'science':
                    if(this.input[currency] > science) {
                        canAfford = false;
                    }
                    break;
                case 'renown':
                    if(this.input[currency] > renown) {
                        canAfford = false;
                    }
                    break;
                case 'card':
                    if(this.input[currency] > credits) {
                        canAfford = false;
                    }
                    break;
                default:
                    break;
            }
        });
        return canAfford;
    }
}
