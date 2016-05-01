import { APP_ID, NgZone, PLATFORM_COMMON_PROVIDERS, PLATFORM_INITIALIZER } from 'angular2/core';
import { DirectiveResolver, ViewResolver } from 'angular2/compiler';
import { BROWSER_APP_COMMON_PROVIDERS } from 'angular2/src/platform/browser_common';
import { BrowserDomAdapter } from 'angular2/src/platform/browser/browser_adapter';
import { AnimationBuilder } from 'angular2/src/animate/animation_builder';
import { MockAnimationBuilder } from 'angular2/src/mock/animation_builder_mock';
import { MockDirectiveResolver } from 'angular2/src/mock/directive_resolver_mock';
import { MockViewResolver } from 'angular2/src/mock/view_resolver_mock';
import { MockLocationStrategy } from 'angular2/src/mock/mock_location_strategy';
import { LocationStrategy } from 'angular2/platform/common';
import { MockNgZone } from 'angular2/src/mock/ng_zone_mock';
import { XHRImpl } from "angular2/src/platform/browser/xhr_impl";
import { XHR } from 'angular2/compiler';
import { TestComponentBuilder } from 'angular2/src/testing/test_component_builder';
import { BrowserDetection } from 'angular2/src/testing/utils';
import { ELEMENT_PROBE_PROVIDERS } from 'angular2/platform/common_dom';
import { IS_DART } from 'angular2/src/facade/lang';
import { Log } from 'angular2/src/testing/utils';
function initBrowserTests() {
    BrowserDomAdapter.makeCurrent();
    BrowserDetection.setup();
}
function createNgZone() {
    return IS_DART ? new MockNgZone() : new NgZone({ enableLongStackTrace: true });
}
/**
 * Default platform providers for testing without a compiler.
 */
export const TEST_BROWSER_STATIC_PLATFORM_PROVIDERS = 
/*@ts2dart_const*/ [
    PLATFORM_COMMON_PROVIDERS,
    /*@ts2dart_Provider*/ { provide: PLATFORM_INITIALIZER, useValue: initBrowserTests, multi: true }
];
export const ADDITIONAL_TEST_BROWSER_PROVIDERS = 
/*@ts2dart_const*/ [
    /*@ts2dart_Provider*/ { provide: APP_ID, useValue: 'a' },
    ELEMENT_PROBE_PROVIDERS,
    /*@ts2dart_Provider*/ { provide: DirectiveResolver, useClass: MockDirectiveResolver },
    /*@ts2dart_Provider*/ { provide: ViewResolver, useClass: MockViewResolver },
    Log,
    TestComponentBuilder,
    /*@ts2dart_Provider*/ { provide: NgZone, useFactory: createNgZone },
    /*@ts2dart_Provider*/ { provide: LocationStrategy, useClass: MockLocationStrategy },
    /*@ts2dart_Provider*/ { provide: AnimationBuilder, useClass: MockAnimationBuilder },
];
/**
 * Default application providers for testing without a compiler.
 */
export const TEST_BROWSER_STATIC_APPLICATION_PROVIDERS = 
/*@ts2dart_const*/ [
    BROWSER_APP_COMMON_PROVIDERS,
    /*@ts2dart_Provider*/ { provide: XHR, useClass: XHRImpl },
    ADDITIONAL_TEST_BROWSER_PROVIDERS
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlcl9zdGF0aWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLVNGZ2VLY0xNLnRtcC9hbmd1bGFyMi9wbGF0Zm9ybS90ZXN0aW5nL2Jyb3dzZXJfc3RhdGljLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEVBQ0wsTUFBTSxFQUNOLE1BQU0sRUFFTix5QkFBeUIsRUFDekIsb0JBQW9CLEVBQ3JCLE1BQU0sZUFBZTtPQUNmLEVBQUMsaUJBQWlCLEVBQUUsWUFBWSxFQUFDLE1BQU0sbUJBQW1CO09BQzFELEVBQUMsNEJBQTRCLEVBQUMsTUFBTSxzQ0FBc0M7T0FDMUUsRUFBQyxpQkFBaUIsRUFBQyxNQUFNLCtDQUErQztPQUV4RSxFQUFDLGdCQUFnQixFQUFDLE1BQU0sd0NBQXdDO09BQ2hFLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwwQ0FBMEM7T0FDdEUsRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJDQUEyQztPQUN4RSxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0NBQXNDO09BQzlELEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwwQ0FBMEM7T0FDdEUsRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDBCQUEwQjtPQUNsRCxFQUFDLFVBQVUsRUFBQyxNQUFNLGdDQUFnQztPQUVsRCxFQUFDLE9BQU8sRUFBQyxNQUFNLHdDQUF3QztPQUN2RCxFQUFDLEdBQUcsRUFBQyxNQUFNLG1CQUFtQjtPQUU5QixFQUNMLG9CQUFvQixFQUdyQixNQUFNLDZDQUE2QztPQUU3QyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEJBQTRCO09BRXBELEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw4QkFBOEI7T0FFN0QsRUFBQyxPQUFPLEVBQUMsTUFBTSwwQkFBMEI7T0FFekMsRUFBQyxHQUFHLEVBQUMsTUFBTSw0QkFBNEI7QUFFOUM7SUFDRSxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUMzQixDQUFDO0FBRUQ7SUFDRSxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksVUFBVSxFQUFFLEdBQUcsSUFBSSxNQUFNLENBQUMsRUFBQyxvQkFBb0IsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO0FBQy9FLENBQUM7QUFFRDs7R0FFRztBQUNILE9BQU8sTUFBTSxzQ0FBc0M7QUFDL0Msa0JBQWtCLENBQUE7SUFDaEIseUJBQXlCO0lBQ3pCLHFCQUFxQixDQUFBLEVBQUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDO0NBQzlGLENBQUM7QUFFTixPQUFPLE1BQU0saUNBQWlDO0FBQzFDLGtCQUFrQixDQUFBO0lBQ2hCLHFCQUFxQixDQUFDLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFDO0lBQ3RELHVCQUF1QjtJQUN2QixxQkFBcUIsQ0FBQyxFQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUM7SUFDbkYscUJBQXFCLENBQUMsRUFBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBQztJQUN6RSxHQUFHO0lBQ0gsb0JBQW9CO0lBQ3BCLHFCQUFxQixDQUFDLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFDO0lBQ2pFLHFCQUFxQixDQUFDLEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBQztJQUNqRixxQkFBcUIsQ0FBQyxFQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUM7Q0FDbEYsQ0FBQztBQUVOOztHQUVHO0FBQ0gsT0FBTyxNQUFNLHlDQUF5QztBQUNsRCxrQkFBa0IsQ0FBQTtJQUNoQiw0QkFBNEI7SUFDNUIscUJBQXFCLENBQUMsRUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUM7SUFDdkQsaUNBQWlDO0NBQ2xDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBUFBfSUQsXG4gIE5nWm9uZSxcbiAgUHJvdmlkZXIsXG4gIFBMQVRGT1JNX0NPTU1PTl9QUk9WSURFUlMsXG4gIFBMQVRGT1JNX0lOSVRJQUxJWkVSXG59IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtEaXJlY3RpdmVSZXNvbHZlciwgVmlld1Jlc29sdmVyfSBmcm9tICdhbmd1bGFyMi9jb21waWxlcic7XG5pbXBvcnQge0JST1dTRVJfQVBQX0NPTU1PTl9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9icm93c2VyX2NvbW1vbic7XG5pbXBvcnQge0Jyb3dzZXJEb21BZGFwdGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vYnJvd3Nlci9icm93c2VyX2FkYXB0ZXInO1xuXG5pbXBvcnQge0FuaW1hdGlvbkJ1aWxkZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9hbmltYXRlL2FuaW1hdGlvbl9idWlsZGVyJztcbmltcG9ydCB7TW9ja0FuaW1hdGlvbkJ1aWxkZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9tb2NrL2FuaW1hdGlvbl9idWlsZGVyX21vY2snO1xuaW1wb3J0IHtNb2NrRGlyZWN0aXZlUmVzb2x2ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9tb2NrL2RpcmVjdGl2ZV9yZXNvbHZlcl9tb2NrJztcbmltcG9ydCB7TW9ja1ZpZXdSZXNvbHZlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL21vY2svdmlld19yZXNvbHZlcl9tb2NrJztcbmltcG9ydCB7TW9ja0xvY2F0aW9uU3RyYXRlZ3l9IGZyb20gJ2FuZ3VsYXIyL3NyYy9tb2NrL21vY2tfbG9jYXRpb25fc3RyYXRlZ3knO1xuaW1wb3J0IHtMb2NhdGlvblN0cmF0ZWd5fSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9jb21tb24nO1xuaW1wb3J0IHtNb2NrTmdab25lfSBmcm9tICdhbmd1bGFyMi9zcmMvbW9jay9uZ196b25lX21vY2snO1xuXG5pbXBvcnQge1hIUkltcGx9IGZyb20gXCJhbmd1bGFyMi9zcmMvcGxhdGZvcm0vYnJvd3Nlci94aHJfaW1wbFwiO1xuaW1wb3J0IHtYSFJ9IGZyb20gJ2FuZ3VsYXIyL2NvbXBpbGVyJztcblxuaW1wb3J0IHtcbiAgVGVzdENvbXBvbmVudEJ1aWxkZXIsXG4gIENvbXBvbmVudEZpeHR1cmVBdXRvRGV0ZWN0LFxuICBDb21wb25lbnRGaXh0dXJlTm9OZ1pvbmVcbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3Rlc3RpbmcvdGVzdF9jb21wb25lbnRfYnVpbGRlcic7XG5cbmltcG9ydCB7QnJvd3NlckRldGVjdGlvbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3Rlc3RpbmcvdXRpbHMnO1xuXG5pbXBvcnQge0VMRU1FTlRfUFJPQkVfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9jb21tb25fZG9tJztcblxuaW1wb3J0IHtJU19EQVJUfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuXG5pbXBvcnQge0xvZ30gZnJvbSAnYW5ndWxhcjIvc3JjL3Rlc3RpbmcvdXRpbHMnO1xuXG5mdW5jdGlvbiBpbml0QnJvd3NlclRlc3RzKCkge1xuICBCcm93c2VyRG9tQWRhcHRlci5tYWtlQ3VycmVudCgpO1xuICBCcm93c2VyRGV0ZWN0aW9uLnNldHVwKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5nWm9uZSgpOiBOZ1pvbmUge1xuICByZXR1cm4gSVNfREFSVCA/IG5ldyBNb2NrTmdab25lKCkgOiBuZXcgTmdab25lKHtlbmFibGVMb25nU3RhY2tUcmFjZTogdHJ1ZX0pO1xufVxuXG4vKipcbiAqIERlZmF1bHQgcGxhdGZvcm0gcHJvdmlkZXJzIGZvciB0ZXN0aW5nIHdpdGhvdXQgYSBjb21waWxlci5cbiAqL1xuZXhwb3J0IGNvbnN0IFRFU1RfQlJPV1NFUl9TVEFUSUNfUExBVEZPUk1fUFJPVklERVJTOiBBcnJheTxhbnkgLypUeXBlIHwgUHJvdmlkZXIgfCBhbnlbXSovPiA9XG4gICAgLypAdHMyZGFydF9jb25zdCovW1xuICAgICAgUExBVEZPUk1fQ09NTU9OX1BST1ZJREVSUyxcbiAgICAgIC8qQHRzMmRhcnRfUHJvdmlkZXIqL3twcm92aWRlOiBQTEFURk9STV9JTklUSUFMSVpFUiwgdXNlVmFsdWU6IGluaXRCcm93c2VyVGVzdHMsIG11bHRpOiB0cnVlfVxuICAgIF07XG5cbmV4cG9ydCBjb25zdCBBRERJVElPTkFMX1RFU1RfQlJPV1NFUl9QUk9WSURFUlM6IEFycmF5PGFueSAvKlR5cGUgfCBQcm92aWRlciB8IGFueVtdKi8+ID1cbiAgICAvKkB0czJkYXJ0X2NvbnN0Ki9bXG4gICAgICAvKkB0czJkYXJ0X1Byb3ZpZGVyKi8ge3Byb3ZpZGU6IEFQUF9JRCwgdXNlVmFsdWU6ICdhJ30sXG4gICAgICBFTEVNRU5UX1BST0JFX1BST1ZJREVSUyxcbiAgICAgIC8qQHRzMmRhcnRfUHJvdmlkZXIqLyB7cHJvdmlkZTogRGlyZWN0aXZlUmVzb2x2ZXIsIHVzZUNsYXNzOiBNb2NrRGlyZWN0aXZlUmVzb2x2ZXJ9LFxuICAgICAgLypAdHMyZGFydF9Qcm92aWRlciovIHtwcm92aWRlOiBWaWV3UmVzb2x2ZXIsIHVzZUNsYXNzOiBNb2NrVmlld1Jlc29sdmVyfSxcbiAgICAgIExvZyxcbiAgICAgIFRlc3RDb21wb25lbnRCdWlsZGVyLFxuICAgICAgLypAdHMyZGFydF9Qcm92aWRlciovIHtwcm92aWRlOiBOZ1pvbmUsIHVzZUZhY3Rvcnk6IGNyZWF0ZU5nWm9uZX0sXG4gICAgICAvKkB0czJkYXJ0X1Byb3ZpZGVyKi8ge3Byb3ZpZGU6IExvY2F0aW9uU3RyYXRlZ3ksIHVzZUNsYXNzOiBNb2NrTG9jYXRpb25TdHJhdGVneX0sXG4gICAgICAvKkB0czJkYXJ0X1Byb3ZpZGVyKi8ge3Byb3ZpZGU6IEFuaW1hdGlvbkJ1aWxkZXIsIHVzZUNsYXNzOiBNb2NrQW5pbWF0aW9uQnVpbGRlcn0sXG4gICAgXTtcblxuLyoqXG4gKiBEZWZhdWx0IGFwcGxpY2F0aW9uIHByb3ZpZGVycyBmb3IgdGVzdGluZyB3aXRob3V0IGEgY29tcGlsZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBURVNUX0JST1dTRVJfU1RBVElDX0FQUExJQ0FUSU9OX1BST1ZJREVSUzogQXJyYXk8YW55IC8qVHlwZSB8IFByb3ZpZGVyIHwgYW55W10qLz4gPVxuICAgIC8qQHRzMmRhcnRfY29uc3QqL1tcbiAgICAgIEJST1dTRVJfQVBQX0NPTU1PTl9QUk9WSURFUlMsXG4gICAgICAvKkB0czJkYXJ0X1Byb3ZpZGVyKi8ge3Byb3ZpZGU6IFhIUiwgdXNlQ2xhc3M6IFhIUkltcGx9LFxuICAgICAgQURESVRJT05BTF9URVNUX0JST1dTRVJfUFJPVklERVJTXG4gICAgXTtcbiJdfQ==