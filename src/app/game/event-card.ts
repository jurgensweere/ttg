import { SpaceCard } from "./space-card";

export class EventCard extends SpaceCard {
    effect: any[];
    cost:any; // TODO: maybe convert to same thing as input?

    deserialize(input: any): EventCard {
        Object.assign(this, input);
        return this;
    }

    canAfford(manpower:number, production:number, science:number, credits:number, renown:number): boolean {
        if (!this.cost) {
            return true;
        }
        let canAfford = true;
        Object.keys(this.cost).forEach(currency => {
            switch (currency) {
                case 'manpower':
                    if(this.cost[currency] > manpower) {
                        canAfford = false;
                    }
                    break;
                case 'production':
                    if(this.cost[currency] > production) {
                        canAfford = false;
                    }
                    break;
                case 'science':
                    if(this.cost[currency] > science) {
                        canAfford = false;
                    }
                    break;
                case 'renown':
                    if(this.cost[currency] > renown) {
                        canAfford = false;
                    }
                    break;
                case 'card':
                    if(this.cost[currency] > credits) {
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