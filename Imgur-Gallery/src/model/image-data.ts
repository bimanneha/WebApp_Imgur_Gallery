export class ImageData {
  id: string;
  title: string;
  type: string;
  description: string;
  link: string;
  ups: number;
  downs: number;
  score: number;
  cover_width: number;
  cover_height: number;
  imageType: string;
  images: any;

  constructor() {
    this.id = '';
    this.title = '';
    this.type = '';
    this.description = '';
    this.link = '';
    this.ups = null;
    this.downs = null;
    this.score = null;
    this.cover_height = 0;
    this.cover_width = 0;
    this.imageType = '';
    this.images = [];
  }
}
