import { Router } from "@angular/router/src/router";

export class BaseComponent {
    constructor(
        private router: Router
    ) {}

    onNew() {
        this.router.navigate(['create'])
    }
}