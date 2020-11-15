// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

import { Component } from '@angular/core';
import { fadeInOut } from '../../services/animations';

@Component({
    selector: 'CAT Test',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    animations: [fadeInOut]
})
export class AboutComponent {
}
