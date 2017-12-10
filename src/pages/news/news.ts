import { Component } from '@angular/core';

@Component({
    selector: 'news-page',
    templateUrl: 'news.html'
})

export class NewsPage{

    news: any[] = [{
        title: 'New LTO License Has 32 Security Features',
        description: "Forgers will have a hard time copying the new driver's licenses with a five-year validity as these have almost three dozen security features, the Land Transportation office (LTO) said on tuesday.",
        date: 'September 4th',
        place: 'Cebu City'
    }]

    constructor(){}
}