import { Card } from "./card";

export abstract class ProcessCard extends Card {
    input: any;
    output: any;
    cost: number;

    canAfford(manpower:number, production:number, science:number, credits:number, renown:number): boolean {
        if (!this.input) {
            return true;
        }
        Object.keys(this.input).forEach(currency => {
            switch (currency) {
                case 'manpower':
                    if(this.input[currency] > manpower) {
                        return false;
                    }
                    break;
                case 'production':
                    if(this.input[currency] > production) {
                        return false;
                    }
                    break;
                case 'science':
                    if(this.input[currency] > science) {
                        return false;
                    }
                    break;
                case 'renown':
                    if(this.input[currency] > renown) {
                        return false;
                    }
                    break;
                case 'card':
                    if(this.input[currency] > credits) {
                        return false;
                    }
                    break;
                default:
                    break;
            }
        });
        return true;
    }
}
