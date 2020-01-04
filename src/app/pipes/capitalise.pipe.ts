import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "capitalise"
})
export class CapitalisePipe implements PipeTransform {
  transform(value: any): string {
    if (typeof value !== "string") {
      return "";
    }
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
