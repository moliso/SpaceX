import { AfterViewInit, Component, ViewChild, OnInit } from "@angular/core";
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Launch } from "src/app/models/launch.model";
import { LaunchService } from "src/app/services/launch-service.service";
import { Details } from "src/app/models/details.model";


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, AfterViewInit {

    displayedColumns: string[] = ['id', 'flight_number', 'name', 'date', 'success', 'details'];
    dataSource= new MatTableDataSource<Launch>();
    details: Details;


    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private launchService: LaunchService) { }

    ngOnInit(): void {
        this.getLaunches();
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    getLaunches(): void {
        this.launchService.getAll().subscribe(
            data => {
                this.dataSource.data = data;
                console.log(data);
            },
            error => {
                console.log(error)
            }
        )
    }

    applyFilter(filterValue: String) {
        this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
    }

}