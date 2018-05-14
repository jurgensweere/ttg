import { Component, OnInit, OnChanges, SimpleChanges, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { ProcessCard } from '../process-card';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-discarder',
    templateUrl: './discarder.component.html',
    styleUrls: ['./discarder.component.scss']
})
export class DiscarderComponent implements OnInit, OnChanges {

    @Input() discard: number;
    @Input() hand: ProcessCard[];
    @Output() cardDiscarded: EventEmitter<ProcessCard> = new EventEmitter<ProcessCard>();
    @ViewChild('discarder') private content;
    private inited = false;

    constructor(private modalService: NgbModal) { }

    ngOnInit() {
        this.inited = true;
        if (this.discard > 0) {
            this.openModal();
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.inited && changes.discard && changes.discard.currentValue > 0) {
            this.openModal();
        }
    }

    openModal() {
        setTimeout(() => {
            this.modalService.open(this.content, {
                beforeDismiss: () => false
            });
        });
    }

    onCardSelected(card: ProcessCard) {
        this.cardDiscarded.emit(card);
    }
}
