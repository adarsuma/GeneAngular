"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var SampleFilterByUserPipe = (function () {
    function SampleFilterByUserPipe() {
    }
    SampleFilterByUserPipe.prototype.transform = function (value, filterByUser) {
        filterByUser = filterByUser ? filterByUser.toLocaleLowerCase() : null;
        return filterByUser ? value.filter(function (sample) {
            return sample.CreatedBy.toLocaleLowerCase().indexOf(filterByUser) !== -1;
        }) : value;
    };
    SampleFilterByUserPipe = __decorate([
        core_1.Pipe({
            name: 'sampleFilterByUser'
        }), 
        __metadata('design:paramtypes', [])
    ], SampleFilterByUserPipe);
    return SampleFilterByUserPipe;
}());
exports.SampleFilterByUserPipe = SampleFilterByUserPipe;
//# sourceMappingURL=sample-filter.pipe.js.map