import {  PipeTransform, Pipe } from '@angular/core';
import {  ISample } from './sample';

@Pipe({
    name: 'sampleFilterByUser'
})
export class SampleFilterByUserPipe implements PipeTransform {
    transform(value: ISample[], filterByUser: string): ISample[] {
        filterByUser = filterByUser ? filterByUser.toLocaleLowerCase() : null;
        return filterByUser ? value.filter((sample: ISample) =>
            sample.CreatedBy.toLocaleLowerCase().indexOf(filterByUser) !== -1) : value;
    }
}