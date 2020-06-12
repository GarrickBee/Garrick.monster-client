import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SEO } from '@core/models';
import { DatePipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class SeoService {
  defaults: SEO;
  seoProps: SEO;

  constructor(private meta: Meta, private title: Title, private datePipe: DatePipe) {
    // Today Dates
    let todayDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');

    this.defaults = {
      title: "Garrick Monster",
      url: window.location.href,
      description: "A journey of a software developer.",
      image: "/",
      keywords: "JavaScript, Angular",
      date: todayDate,
      type: "website"
    }
  }

  /**
   * Update Seo Meta Tags 
   * @param options :SEO
   * 
   */
  updateMetaTags(options?: SEO) {
    // Set SEO Options Properties
    this.seoProps = { ...this.defaults, ...options };
    // Browser
    this.title.setTitle(this.seoProps.title);
    this.meta.updateTag({ name: 'keywords', content: this.seoProps.keywords });
    this.meta.updateTag({ name: 'description', content: this.seoProps.description });
    this.meta.updateTag({ name: 'date', content: this.seoProps.date, scheme: 'YYYY-MM-DD' });
    this.meta.updateTag({ name: "identifier-URL", content: this.seoProps.url });
    this.meta.updateTag({ name: "url", content: this.seoProps.url });
    // Facebook 
    this.meta.updateTag({ property: 'og:title', content: this.seoProps.title });
    this.meta.updateTag({ property: 'og:description', content: this.seoProps.description });
    this.meta.updateTag({ property: "og:url", content: this.seoProps.url });
    this.meta.updateTag({ property: "og:type", content: this.seoProps.type });
    this.meta.updateTag({ property: "og:image", content: this.seoProps.image });
    // Twitter
    this.meta.updateTag({ property: "twitter:description", content: this.seoProps.description });
    this.meta.updateTag({ property: "twitter:card", content: this.seoProps.image });
    this.meta.updateTag({ property: "twitter:url", content: this.seoProps.url });
    this.meta.updateTag({ property: "twitter:title", content: this.seoProps.title });
    this.meta.updateTag({ property: "twitter:image", content: this.seoProps.image });
  }
  addMetaTags() {
    this.meta.addTags([
      { name: 'description', content: 'My coding journey' },
      { name: "identifier-URL", content: 'ABCD' },
      { name: 'keywords', content: 'TypeScript, Angular' },
      { name: 'date', content: '2018-06-02', scheme: 'YYYY-MM-DD' },
      { httpEquiv: 'Content-Type', content: 'text/html' },
      { property: 'og:title', content: "My Text" },
      { property: 'og:type', content: "website" },
      { property: 'og:url', content: "website" },
      { property: 'og:description', content: "website" },
      { property: 'og:site_name', content: "website" },
      { property: 'og:image', content: "website" },
      { property: 'fb:page_id', content: "website" },
      { property: 'og:email', content: "website" },
      { charset: 'UTF-8' }
    ]);
  }

  getMetaTags() {
    let metaEl: HTMLMetaElement = this.meta.getTag('name= "keywords"');
    console.log(metaEl);
    console.log(metaEl.name);
    console.log(metaEl.content);

    let els: HTMLMetaElement[] = this.meta.getTags('name');
    els.forEach(el => {
      console.log(el);
      console.log(el.name);
      console.log(el.content);
    });
  }

  removeMetaTags() {
    //Using removeTag
    this.meta.removeTag('name = "description"');
    this.meta.removeTag('name= "keywords"');
    this.meta.removeTag('name = "viewport"');
    this.meta.removeTag('name = "robots"');

    //Using removeTagElement
    let author: HTMLMetaElement = this.meta.getTag('name = "author"');
    this.meta.removeTagElement(author);
    let date: HTMLMetaElement = this.meta.getTag('name = "date"');
    this.meta.removeTagElement(date);
    let contentType: HTMLMetaElement = this.meta.getTag('httpEquiv = "Content-Type"');
    this.meta.removeTagElement(contentType);
    let charset: HTMLMetaElement = this.meta.getTag('charset');
    this.meta.removeTagElement(charset);
    let ogTitle: HTMLMetaElement = this.meta.getTag('property = "og:title"');
    this.meta.removeTagElement(ogTitle);
    let ogType: HTMLMetaElement = this.meta.getTag('property = "og:type"');
    this.meta.removeTagElement(ogType);
  }
} 