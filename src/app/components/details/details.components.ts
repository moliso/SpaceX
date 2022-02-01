import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Details } from "src/app/models/details.model";
import { LaunchService } from "src/app/services/launch-service.service";


@Component({
    selector: 'launch-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {

    details?: Details;

    constructor(private launchService: LaunchService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.getLaunchData(this.route.snapshot.params['id']);
    }

    getLaunchData(id): void {
        this.launchService.getDetails(id).subscribe(
            data => {
                this.details = data;
                console.log(data);
            },
            error => {
                console.log(error)
            }
        )
    }
}
