import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'flatten'})
export class FlattenPipe implements PipeTransform {

  transform(array:any[], [shallow = false]:any[] = []):any[] {
    return shallow
        ? [].concat.apply([], array)
        : this.flatten(array);
  }

  private flatten(array:any[]): any[] {
    return array.reduce((arr: any[], elm: any) => elm instanceof Array ?
        arr.concat(this.flatten(elm)) : arr.concat(elm), []);
  }
}
