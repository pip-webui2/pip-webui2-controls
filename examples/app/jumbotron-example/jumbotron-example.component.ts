import { Component } from '@angular/core';

@Component({
    selector: 'jumbotron-example',
    templateUrl: './jumbotron-example.component.html',
    styleUrls: ['./jumbotron-example.component.scss']
})
export class JumbotronExampleComponent {

    constructor() {

    }

    public items = [
        {
            title: 'ID',
            text: 'jh223423dsff6f',
            secondTitle: 'POReceipt#',
            secondText: '7a26e1804422',
            subtitle: 'Activities',
            subtext: '3',
            subtextSecond: '12 min 34 sec ago'
        }, {
            title: 'ID',
            text: 'jh223423dsff6f',
            secondTitle: 'POReceipt#',
            secondText: '7878a26e1804422',
            subtitle: 'Activities',
            subtext: '4',
            subtextSecond: '12 min 34 sec ago'
        }
    ];

}
