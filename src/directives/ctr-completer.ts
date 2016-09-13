import { Directive, EventEmitter, Input, OnInit, Output } from "@angular/core";
// import { Observable } from "rxjs/Observable";


// import { CompleterData } from "../components/ng2-completer/services/completer-data";
import { CompleterItem } from "../components/ng2-completer/completer-item";

export interface CompleterList {
    search(term: string): void;
    clear(): void;
}

export interface CompleterDropdown {
    clear(): void;
    selectCurrent(): void;
    nextRow(): void;
    prevRow(): void;
}

@Directive({
    selector: "[ctrCompleter]",
})
export class CtrCompleter implements OnInit {
     @Output() public selected = new EventEmitter<CompleterItem>();
     @Output() public highlighted = new EventEmitter<CompleterItem>();
    // private searchTimer: number = null;
    // private searching = false;
    // private results: CompleterItem[] = [];
    // private term = "";
    private list: CompleterList;
    private dropdown: CompleterDropdown;
   

    constructor() {}

    public ngOnInit() {
        //
    }

    public registerList(list: CompleterList) {
        this.list = list;
    }

    public registerDropdown(dropdown: CompleterDropdown) {
        this.dropdown = dropdown;
    }

    public onHighlighted(item: CompleterItem) {
        this.highlighted.emit(item);
    }

    public onSelected(item: CompleterItem) {
        this.selected.emit(item);
        this.clear();
    }

    public search(term: string) {
        console.log("CtrCompleter search");
        if (this.list) {
            this.list.search(term);
        }
    }

    public clear() {
        console.log(`clear`);
        if (this.dropdown) {
            this.dropdown.clear();
        }
        if (this.list) {
            this.list.clear();
        }
        // if (this.searchTimer) {
        //     clearTimeout(this.searchTimer);
        // }
        // this.results = [];
    }

    public selectCurrent() {
        console.log(`selectCurrent`);
        if (this.dropdown) {
            this.dropdown.selectCurrent();
        }
    }

    public nextRow() {
        console.log(`nextRow`);
        if (this.dropdown) {
            this.dropdown.nextRow();
        }
    }

    public prevRow() {
        console.log(`prevRow`);
        if (this.dropdown) {
            this.dropdown.prevRow();
        }
    }

    // private searchTimerComplete(str: string) {
    //     // Begin the search
    //     if (!str || str.length < this.minSearchLength) {
    //         return;
    //     }
    //     this.dataService.search(str);
    // }

    // private handleError(error: any) {
    //     this.searching = false;
    //     let errMsg = (error.message) ? error.message :
    //         error.status ? `${error.status} - ${error.statusText}` : "Server error";
    //     if (console && console.error) {
    //         console.error(errMsg); // log to console 
    //     }

    //     return Observable.throw(errMsg);
    // }

}
