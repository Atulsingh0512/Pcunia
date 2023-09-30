import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  saveFile(file: File, fileName: string) {
    const reader = new FileReader();
    reader.onload = () => {
      const fileData = reader.result as string;
      const a = document.createElement('a');
      a.href = fileData;
      a.download = fileName;
      a.click();
    };
    reader.readAsDataURL(file);
  }
}
