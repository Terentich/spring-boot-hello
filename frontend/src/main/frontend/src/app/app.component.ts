import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private http: HttpClient) {
    }

    title = 'app';

    test() {
        console.log("Facebook status: ");
        this.http.get('/connect/facebook').subscribe(data => {
            console.log("result: " + JSON.stringify(data));
        });

    }
}
