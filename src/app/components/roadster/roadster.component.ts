import { Component, OnInit } from "@angular/core";
import { RoadsterService } from "src/app/services/roadster.service";
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'roadster',
    templateUrl: './roadster.component.html',
    styleUrls: ['./roadster.component.css']
})

export class RoadsterComponent implements OnInit {
    roadsterData?: any;

    constructor(private roadsterService: RoadsterService) { }

    ngOnInit(): void {
        this.getRoadsterInfo();
    }

    getRoadsterInfo(): void {
        this.roadsterService.getAll().subscribe(
            data => {
                this.roadsterData = data;
            },
            error => {
                console.log(error)
            }
        )
    }
}