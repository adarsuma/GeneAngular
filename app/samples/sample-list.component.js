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
var sample_service_1 = require('./sample.service');
var SampleListComponent = (function () {
    function SampleListComponent(_sampleService) {
        this._sampleService = _sampleService;
        this.pageTitle = 'Sample List';
    }
    SampleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._sampleService.getSamples()
            .subscribe(function (samples) {
            _this.samples = samples;
        });
        // .subscribe(samples => this.samples = samples,
        //            error => this.errorMessage = <any>error);
    };
    SampleListComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/samples/sample-list.component.html',
            styleUrls: ['app/samples/sample-list.component.css']
        }), 
        __metadata('design:paramtypes', [sample_service_1.SampleService])
    ], SampleListComponent);
    return SampleListComponent;
}());
exports.SampleListComponent = SampleListComponent;
//# sourceMappingURL=sample-list.component.js.map