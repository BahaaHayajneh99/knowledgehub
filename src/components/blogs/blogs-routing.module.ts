import { Routes } from "@angular/router"; 
import { BlogsComponent } from "./index/blogs.component";
import { BlogDetailsComponent } from "./blog-details/blog-details.component";

export const BLOGS_ROUTES: Routes = [{
  path: '',
  children: [
    { path: '', component: BlogsComponent },
    { path: 'details/:id', component: BlogDetailsComponent },
  ]

}]