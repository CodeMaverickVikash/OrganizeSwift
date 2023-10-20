import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class SubjectService {
    // activatedEmitter = new EventEmitter<boolean>(); // old approach

    // Subject is same as eventEmitter, use subject insteam of eventEmitter
    activatedEmitter = new Subject<boolean>(); // new and better approach than eventEmitter, subject is used for cross-component communication
}