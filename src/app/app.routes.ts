import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../components/guard/auth/guards/auth.guard';

export const routes: Routes = [

    {
        path: '',
        title: 'Home',
        loadComponent: () => import('../home/home.component').then((c) => c.HomeComponent)
    },
    {
        path: 'register',
        title: 'Register',
        loadComponent: () => import('../components/login-signup-page/sign-login-page.component').then((c) => c.SignLoginPageComponent),
    },
    {
        path: 'faq',
        title: 'FAQ',
        loadComponent: () => import('../components/FAQ/faq.component').then((c) => c.FAQComponent)
    },
    {
        path: 'terms',
        title: 'Terms & Conditions',
        loadComponent: () => import('../components/terms/terms.component').then((c) => c.TermsComponent)
    },
    {
        path: 'privacy',
        title: 'Privacy Policy',
        loadComponent: () => import('../components/privacy/privacy.component').then((c) => c.PrivacyComponent)
    },
    {
        path: 'contact-us',
        title: 'Contact Us',
        loadComponent: () => import('../components/contact/contact-us.component').then((c) => c.ContactUsComponent),
        canActivate: [authGuard]
    },

    {
        path: 'about',
        title: 'About',
        loadComponent: () => import('../components/about/about.component').then((c) => c.AboutComponent),
        canActivate: [authGuard]
    },
    {
        path: 'blogs',
        loadChildren: () =>
            import('../components/blogs/blogs.module').then(
                (m) => m.BlogsModule
            ),
        canActivate: [authGuard]
    },
    {
        path: 'courses',
        loadChildren: () =>
            import('../components/cources/cources.module').then(
                (m) => m.CourcesModule
            ),
        canActivate: [authGuard]
    },
    {
        path: 'quizzes',
        loadChildren: () =>
            import('../components/quizzes/quizzes.module').then(
                (m) => m.QuizzesModule
            ),
        canActivate: [authGuard]
    },
    {
        path: 'paths',
        loadChildren: () =>
            import('../components/paths/paths.module').then(
                (m) => m.PathsModule
            ),
        canActivate: [authGuard]
    },

    {
        path: 'profile',
        title: 'Profile',
        loadComponent: () => import('../components/profile/profile.component').then((c) => c.ProfileComponent),
        canActivate: [authGuard]
    },
    {
        path: '**',
        title: 'Page Not Found',
        loadComponent: () => import('../components/page-no-found/page-no-found.component').then((c) => c.PageNoFoundComponent)
    },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
