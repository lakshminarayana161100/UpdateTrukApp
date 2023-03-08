import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoggeduserGuard } from './guards/loggeduser.guard';
import { ShipperguardGuard } from './guards/shipperguard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/loadingscreen',
    pathMatch: 'full'
  },
  {
    path: 'tab',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    //canActivate: [AuthGuard]
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'loginotp',
    loadChildren: () => import('./loginotp/loginotp.module').then( m => m.LoginotpPageModule)
  },
  {
    path: 'verifyotp',
    loadChildren: () => import('./verifyotp/verifyotp.module').then( m => m.VerifyotpPageModule)
  },

  {
    path: 'selectlanguage',
    loadChildren: () => import('./selectlanguage/selectlanguage.module').then( m => m.SelectlanguagePageModule)
  },
  {
    path: 'selecttype',
    loadChildren: () => import('./selecttype/selecttype.module').then( m => m.SelecttypePageModule)
  },
  {
    path: 'personorcompanydetails',
    loadChildren: () => import('./personorcompanydetails/personorcompanydetails.module').then( m => m.PersonorcompanydetailsPageModule),
    
  },
  {
    path: 'loadingscreen',
    loadChildren: () => import('./loadingscreen/loadingscreen.module').then( m => m.LoadingscreenPageModule),
   // canActivate:[LoggeduserGuard]
  },

  {
    path: 'attach-new-load',
    loadChildren: () => import('./attach-new-load/attach-new-load.module').then( m => m.AttachNewLoadPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'page-not-found',
    loadChildren: () => import('./page-not-found/page-not-found.module').then( m => m.PageNotFoundPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'addaddress',
    loadChildren: () => import('./addaddress/addaddress.module').then( m => m.AddaddressPageModule)
  },
  {
    path: 'editalldetails',
    loadChildren: () => import('./editalldetails/editalldetails.module').then( m => m.EditalldetailsPageModule)
  },
  {
    path: 'vrifyaadharotp',
    loadChildren: () => import('./verifyaadharotp/vrifyaadharotp.module').then( m => m.VrifyaadharotpPageModule)
  },
  {
    path: 'verifygstotp',
    loadChildren: () => import('./verifygstotp/verifygstotp.module').then( m => m.VerifygstotpPageModule)
  },
  {
    path: 'shipperhome',
    loadChildren: () => import('./shipperhome/shipperhome.module').then( m => m.ShipperhomePageModule),
    canActivate:[ShipperguardGuard]
  },
  {
    path: 'view-bid',
    loadChildren: () => import('./view-bid/view-bid.module').then( m => m.ViewBidPageModule)
  },
  {
    path: 'place-bid',
    loadChildren: () => import('./place-bid/place-bid.module').then( m => m.PlaceBidPageModule)
  },
  {
    path: 'edit-page',
    loadChildren: () => import('./edit-page/edit-page.module').then( m => m.EditPagePageModule)
  },
  {
    path: 'load-details',
    loadChildren: () => import('./load-details/load-details.module').then( m => m.LoadDetailsPageModule)
  },
  {
    path: 'mytrucks',
    loadChildren: () => import('./mytrucks/mytrucks.module').then( m => m.MytrucksPageModule)
  },
  {
    path: 'truk-edit-page',
    loadChildren: () => import('./truk-edit-page/truk-edit-page.module').then( m => m.TrukEditPagePageModule)
  },
  {
    path: 'your-truck-posted',
    loadChildren: () => import('./your-truck-posted/your-truck-posted.module').then( m => m.YourTruckPostedPageModule)
  },
  {
    path: 'add-truck',
    loadChildren: () => import('./add-truck/add-truck.module').then( m => m.AddTruckPageModule)
  },
  {
    path: 'add-new-truck',
    loadChildren: () => import('./add-new-truck/add-new-truck.module').then( m => m.AddNewTruckPageModule)
  },
  {
    path: 'add-new-truck-details',
    loadChildren: () => import('./add-new-truck-details/add-new-truck-details.module').then( m => m.AddNewTruckDetailsPageModule)
  },
  {
    path: 'lookingfor',
    loadChildren: () => import('./lookingfor/lookingfor.module').then( m => m.LookingforPageModule)
  },
  {
    path: 'attach-load',
    loadChildren: () => import('./attach-load/attach-load.module').then( m => m.AttachLoadPageModule)
  },
  {
    path: 'all-bids',
    loadChildren: () => import('./all-bids/all-bids.module').then( m => m.AllBidsPageModule)
  },
  {
    path: 'existing-loads',
    loadChildren: () => import('./existing-loads/existing-loads.module').then( m => m.ExistingLoadsPageModule)
  },
  {
    path: 'attach-existing-loads',
    loadChildren: () => import('./attach-existing-loads/attach-existing-loads.module').then( m => m.AttachExistingLoadsPageModule)
  },
  {
    path: 'makepayment',
    loadChildren: () => import('./makepayment/makepayment.module').then( m => m.MakepaymentPageModule)
  },
  {
    path: 'help-and-guide',
    loadChildren: () => import('./help-and-guide/help-and-guide.module').then( m => m.HelpAndGuidePageModule)
  },
  {
    path: 'attach-prefferd-newload',
    loadChildren: () => import('./attach-prefferd-newload/attach-prefferd-newload.module').then( m => m.AttachPrefferdNewloadPageModule)
  },  {
    path: 'get-started',
    loadChildren: () => import('./get-started/get-started.module').then( m => m.GetStartedPageModule)
  },

  





];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
