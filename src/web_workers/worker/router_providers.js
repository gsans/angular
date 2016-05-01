'use strict';"use strict";
var core_1 = require('angular2/core');
var common_1 = require('angular2/platform/common');
var platform_location_1 = require('./platform_location');
var router_providers_common_1 = require('angular2/src/router/router_providers_common');
exports.WORKER_APP_ROUTER = [
    router_providers_common_1.ROUTER_PROVIDERS_COMMON,
    /* @ts2dart_Provider */ { provide: common_1.PlatformLocation, useClass: platform_location_1.WebWorkerPlatformLocation },
    {
        provide: core_1.APP_INITIALIZER,
        useFactory: function (platformLocation, zone) { return function () {
            return initRouter(platformLocation, zone);
        }; },
        multi: true,
        deps: [common_1.PlatformLocation, core_1.NgZone]
    }
];
function initRouter(platformLocation, zone) {
    return zone.runGuarded(function () { return platformLocation.init(); });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyX3Byb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgteHJOS0YzNlEudG1wL2FuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy93b3JrZXIvcm91dGVyX3Byb3ZpZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQWdFLGVBQWUsQ0FBQyxDQUFBO0FBQ2hGLHVCQUErQiwwQkFBMEIsQ0FBQyxDQUFBO0FBQzFELGtDQUF3QyxxQkFBcUIsQ0FBQyxDQUFBO0FBQzlELHdDQUFzQyw2Q0FBNkMsQ0FBQyxDQUFBO0FBRXpFLHlCQUFpQixHQUFHO0lBQzdCLGlEQUF1QjtJQUN2Qix1QkFBdUIsQ0FBQyxFQUFDLE9BQU8sRUFBRSx5QkFBZ0IsRUFBRSxRQUFRLEVBQUUsNkNBQXlCLEVBQUM7SUFDeEY7UUFDRSxPQUFPLEVBQUUsc0JBQWU7UUFDeEIsVUFBVSxFQUFFLFVBQUMsZ0JBQTJDLEVBQUUsSUFBWSxJQUFLLE9BQUE7WUFDM0QsT0FBQSxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDO1FBQWxDLENBQWtDLEVBRHlCLENBQ3pCO1FBQ2xELEtBQUssRUFBRSxJQUFJO1FBQ1gsSUFBSSxFQUFFLENBQUMseUJBQWdCLEVBQUUsYUFBTSxDQUFDO0tBQ2pDO0NBQ0YsQ0FBQztBQUVGLG9CQUFvQixnQkFBMkMsRUFBRSxJQUFZO0lBQzNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQVEsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXBwbGljYXRpb25SZWYsIFByb3ZpZGVyLCBOZ1pvbmUsIEFQUF9JTklUSUFMSVpFUn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1BsYXRmb3JtTG9jYXRpb259IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2NvbW1vbic7XG5pbXBvcnQge1dlYldvcmtlclBsYXRmb3JtTG9jYXRpb259IGZyb20gJy4vcGxhdGZvcm1fbG9jYXRpb24nO1xuaW1wb3J0IHtST1VURVJfUFJPVklERVJTX0NPTU1PTn0gZnJvbSAnYW5ndWxhcjIvc3JjL3JvdXRlci9yb3V0ZXJfcHJvdmlkZXJzX2NvbW1vbic7XG5cbmV4cG9ydCB2YXIgV09SS0VSX0FQUF9ST1VURVIgPSBbXG4gIFJPVVRFUl9QUk9WSURFUlNfQ09NTU9OLFxuICAvKiBAdHMyZGFydF9Qcm92aWRlciAqLyB7cHJvdmlkZTogUGxhdGZvcm1Mb2NhdGlvbiwgdXNlQ2xhc3M6IFdlYldvcmtlclBsYXRmb3JtTG9jYXRpb259LFxuICB7XG4gICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgIHVzZUZhY3Rvcnk6IChwbGF0Zm9ybUxvY2F0aW9uOiBXZWJXb3JrZXJQbGF0Zm9ybUxvY2F0aW9uLCB6b25lOiBOZ1pvbmUpID0+ICgpID0+XG4gICAgICAgICAgICAgICAgICAgIGluaXRSb3V0ZXIocGxhdGZvcm1Mb2NhdGlvbiwgem9uZSksXG4gICAgbXVsdGk6IHRydWUsXG4gICAgZGVwczogW1BsYXRmb3JtTG9jYXRpb24sIE5nWm9uZV1cbiAgfVxuXTtcblxuZnVuY3Rpb24gaW5pdFJvdXRlcihwbGF0Zm9ybUxvY2F0aW9uOiBXZWJXb3JrZXJQbGF0Zm9ybUxvY2F0aW9uLCB6b25lOiBOZ1pvbmUpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgcmV0dXJuIHpvbmUucnVuR3VhcmRlZCgoKSA9PiB7IHJldHVybiBwbGF0Zm9ybUxvY2F0aW9uLmluaXQoKTsgfSk7XG59XG4iXX0=