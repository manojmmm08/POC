import { Component, OnInit, Input } from '@angular/core';
import {DevService} from '../dev-service';
import { EmitterService } from '../emitter-service';
import { Comment } from '../comment';

@Component({
  selector: 'app-call-api',
  templateUrl: './call-api.component.html',
  styleUrls: ['./call-api.component.css']
})
export class CallApiComponent implements OnInit {
  [x: string]: any;
  
  constructor(private service :DevService) { }
// Define input properties
comments: Comment[];

  ngOnInit() {
    //this.loadComments()
  }
  
  loadComments() {
    // Get all comments
    this.service.getComments()
                      .subscribe(
                          comments => this.comments = comments, //Bind to view
                           err => {
                               // Log errors if any
                               console.log(err);
                           });
}

postComment()
{
  this.service.postComments()
  .subscribe(
      comments => this.comments = comments, //Bind to view
       err => {
           // Log errors if any
           console.log(err);
       });
}

putComment()
{
  this.service.putComments()
  .subscribe(
      comments => this.comments = comments, //Bind to view
       err => {
           // Log errors if any
           console.log(err);
       });
}

ngOnChanges(changes:any) {
  // Listen to the 'list'emitted event so as populate the model
  // with the event payload
  //another way to call service using Emitter
 // EmitterService.get(this.listId).subscribe((comments:Comment[]) => { this.loadComments()});
 EmitterService.get(this.listId).subscribe((comments:Comment[]) => { this.loadComments()});
 EmitterService.get(this.listId).subscribe(() => { this.postComment()});
}

}
