import {Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'truncatePipe'})

export class TruncatePipe implements PipeTransform {
    transform(value: string, maxChar: number = 100): string {
        if (value.length < maxChar) return value;
        return value.substr( 0, maxChar) + '...';
    }
}