import { Component } from '@angular/core';
import { FirstPathComponent } from './+first-path';
import { Router, Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { SecondPathComponent } from './+second-path';

@Component({
  moduleId: module.id,
  selector: 'test-project-app',
  templateUrl: 'test-project.component.html',
  styleUrls: ['test-project.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/firstPath', component: FirstPathComponent},
  {path: '/secondPath', component: SecondPathComponent}
])
export class TestProjectAppComponent {
  title = 'test-project works!';
  
  constructor(private router:Router) {
    
  }
}
