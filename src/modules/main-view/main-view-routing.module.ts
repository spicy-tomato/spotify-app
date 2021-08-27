import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: async () => (await import('../home/home.module')).HomeModule
  },
  {
    path: 'playlist',
    loadChildren: async () => (await import('../playlist/playlist.module')).PlaylistModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainViewRoutingModule { }
