import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        title: 'Home',
        loadComponent: () => import('../home/home.component').then((c) => c.HomeComponent)
    },
    {
        path: 'register',
        title: 'Register',
        loadComponent: () => import('../components/login-signup-page/sign-login-page.component').then((c) => c.SignLoginPageComponent)
    },
    {
        path: 'faq',
        title: 'FAQ',
        loadComponent: () => import('../components/FAQ/faq.component').then((c) => c.FAQComponent)
    },
    {
        path: 'contact-us',
        title: 'Contact Us',
        loadComponent: () => import('../components/contact/contact-us.component').then((c) => c.ContactUsComponent)
    },

    {
        path: 'about',
        title: 'About',
        loadComponent: () => import('../components/about/about.component').then((c) => c.AboutComponent)
    },
    {
        path: 'blogs',
        loadChildren: () =>
            import('../components/blogs/blogs.module').then(
                (m) => m.BlogsModule
            ),
    },
    {
        path: 'courses',
        loadChildren: () =>
            import('../components/cources/cources.module').then(
                (m) => m.CourcesModule
            ),
    },
    {
        path: 'quizzes',
        loadChildren: () =>
            import('../components/quizzes/quizzes.module').then(
                (m) => m.QuizzesModule
            ),
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
export class AppRoutingModule {}
