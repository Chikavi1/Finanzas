import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'tab5',
    loadChildren: () => import('./tab5/tab5.module').then( m => m.Tab5PageModule)
  },
  {
    path: 'stats',
    loadChildren: () => import('./pages/stats/stats.module').then( m => m.StatsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'clients',
    loadChildren: () => import('./components/clients/clients.module').then( m => m.ClientsPageModule)
  },
  {
    path: 'visits',
    loadChildren: () => import('./components/visits/visits.module').then( m => m.VisitsPageModule)
  },
  {
    path: 'visitsby-users-general',
    loadChildren: () => import('./pages/visitsby-users-general/visitsby-users-general.module').then( m => m.VisitsbyUsersGeneralPageModule)
  },
  {
    path: 'visitsby-users-by-business',
    loadChildren: () => import('./pages/visitsby-users-by-business/visitsby-users-by-business.module').then( m => m.VisitsbyUsersByBusinessPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./components/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./pages/wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'uqr',
    loadChildren: () => import('./pages/uqr/uqr.module').then( m => m.UqrPageModule)
  },
  {
    path: 'gift',
    loadChildren: () => import('./components/gift/gift.module').then( m => m.GiftPageModule)
  },
  {
    path: 'promotions',
    loadChildren: () => import('./pages/promotions/promotions.module').then( m => m.PromotionsPageModule)
  },
  {
    path: 'business',
    loadChildren: () => import('./pages/business/business.module').then( m => m.BusinessPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'discounts',
    loadChildren: () => import('./components/discounts/discounts.module').then( m => m.DiscountsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'promotion',
    loadChildren: () => import('./pages/promotion/promotion.module').then( m => m.PromotionPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./components/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'client',
    loadChildren: () => import('./pages/client/client.module').then( m => m.ClientPageModule)
  },
  {
    path: 'plans',
    loadChildren: () => import('./pages/plans/plans.module').then( m => m.PlansPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./componentes/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'register-user',
    loadChildren: () => import('./pages/register-user/register-user.module').then( m => m.RegisterUserPageModule)
  },
  {
    path: 'register-business',
    loadChildren: () => import('./pages/register-business/register-business.module').then( m => m.RegisterBusinessPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./pages/create/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'goal',
    loadChildren: () => import('./pages/create/goal/goal.module').then( m => m.GoalPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/create/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'debt',
    loadChildren: () => import('./pages/create/debt/debt.module').then( m => m.DebtPageModule)
  },
  {
    path: 'movement',
    loadChildren: () => import('./pages/show/movement/movement.module').then( m => m.MovementPageModule)
  },
  {
    path: 'goal',
    loadChildren: () => import('./pages/show/goal/goal.module').then( m => m.GoalPageModule)
  },
  {
    path: 'debt',
    loadChildren: () => import('./pages/show/debt/debt.module').then( m => m.DebtPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./pages/show/categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'net-worth',
    loadChildren: () => import('./pages/show/net-worth/net-worth.module').then( m => m.NetWorthPageModule)
  },
  {
    path: 'recurrent',
    loadChildren: () => import('./pages/create/recurrent/recurrent.module').then( m => m.RecurrentPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/show/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'filtered-movements',
    loadChildren: () => import('./pages/show/filtered-movements/filtered-movements.module').then( m => m.FilteredMovementsPageModule)
  },
  {
    path: 'recurrent',
    loadChildren: () => import('./pages/show/recurrent/recurrent.module').then( m => m.RecurrentPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./pages/show/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'banks',
    loadChildren: () => import('./pages/show/banks/banks.module').then( m => m.BanksPageModule)
  },
  {
    path: 'recognition',
    loadChildren: () => import('./pages/show/recognition/recognition.module').then( m => m.RecognitionPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/show/card/card.module').then( m => m.CardPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
