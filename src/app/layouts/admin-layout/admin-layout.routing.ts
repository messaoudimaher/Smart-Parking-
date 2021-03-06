import { Routes } from "@angular/router";

import { UserProfileComponent } from "../../user-profile/user-profile.component";
import { TableListComponent } from "../../table-list/table-list.component";
import { NotificationsComponent } from "../../notifications/notifications.component";
import { AuthGuard } from "app/auth/auth.guard";
import { UserContactComponent } from "app/user-contact/user-contact.component";
import { UserReservationComponent } from "app/user-reservation/user-reservation.component";

export const AdminLayoutRoutes: Routes = [

    
  { path: "user-profile", component: UserProfileComponent, canActivate:[AuthGuard], data: {roles: ["user"]} },
  { path: "details", component: UserContactComponent, canActivate:[AuthGuard], data: {roles: ["user"]} },
  { path: "table-list", component: TableListComponent,  canActivate:[AuthGuard], data: {roles: ["admin"]}},
  // { path: "notifications", component: NotificationsComponent, canActivate:[AuthGuard], data: {roles: ["user", "admin"]}},
  { path: "reclamations", component: UserReservationComponent, canActivate:[AuthGuard], data: {roles: ["user"]}}
];
