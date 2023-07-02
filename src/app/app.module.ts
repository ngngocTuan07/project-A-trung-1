import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './content/news/news.component';
import { StockComponent } from './content/stock/stock.component';
import { EnterpriseComponent } from './content/enterprise/enterprise.component';
import { EstateComponent } from './content/estate/estate.component';
import { FinanceComponent } from './content/finance/finance.component';
import { EconomyComponent } from './content/economy/economy.component';
import { WorldComponent } from './content/world/world.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    NewsComponent,
    StockComponent,
    EnterpriseComponent,
    EstateComponent,
    FinanceComponent,
    EconomyComponent,
    WorldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'economy', component: EconomyComponent },
      {path: 'content', component: ContentComponent},
      {path: 'enterprise', component: EnterpriseComponent},
      {path: 'estate', component: EstateComponent},
      {path: 'finance', component: FinanceComponent},
      {path: 'news', component: NewsComponent},
      {path: 'stock', component: StockComponent},
      {path: 'world', component: WorldComponent},
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
