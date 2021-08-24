import {Injectable} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta: Meta, private title: Title) {
  }

  updateSEO(data: any) {
    console.log(data)
    if (data?.url) {
      this.meta.updateTag({name: 'url', content: data.url});
      this.meta.updateTag({property: 'og:url', content: data.url});
      this.meta.updateTag({name: 'twitter:url', content: data.url});
    }
    if (data?.title) {
      this.title.setTitle(data.title);
      this.meta.updateTag({name: 'title', content: data.title});
      this.meta.updateTag({property: 'og:title', content: data.title});
      this.meta.updateTag({name: 'twitter:title', content: data.title});
    }
    if (data?.description) {
      this.meta.updateTag({name: 'description', content: data.description});
      this.meta.updateTag({property: 'og:description', content: data.description});
      this.meta.updateTag({name: 'twitter:description', content: data.description});
    }
    if (data?.image) {
      this.meta.updateTag({name: 'twitter:card', content: 'summary'});
      this.meta.updateTag({name: 'image', content: data.image});
      this.meta.updateTag({property: 'og:image', content: data.image});
      this.meta.updateTag({name: 'twitter:image', content: data.image});
    }

  }

  addSEO() {
    this.title.setTitle('Weather APP - 01');
    this.meta.addTags([
      {
        name: 'image',
        content: 'https://scontent.ftbs5-3.fna.fbcdn.net/v/t1.6435-1/p200x200/166846352_4025418324188485_1560541714478597380_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_ohc=coDOQu2zDPEAX_Qa2eK&tn=9V-redFaDjuN9T3Z&_nc_ht=scontent.ftbs5-3.fna&oh=f538c6ae993038c33f0ea8378cd3ac83&oe=614A636E'
      },
      {name: 'og:image:width', content: '400'},
      {name: 'og:image:height', content: '300'},
      {name: 'keywords', content: 'Angular SEO Integration, Music CRUD, Angular Universal'},
      {name: 'robots', content: 'index, follow'},
      {name: 'description', content: 'Description here'},
      {name: 'author', content: 'iMed Bekaia'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {charset: 'UTF-8'},
      {name: 'url', content: 'https://www.google.ge/'},
      {name: 'type', content: 'website'},
      {name: 'description', content: 'Description here'},
      {name: 'title', content: 'Weather APP - 01'},
    ])
  }
}
