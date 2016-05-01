'use strict';/**
 * @module
 * @description
 * Change detection enables data binding in Angular.
 */
"use strict";
var change_detection_1 = require('./change_detection/change_detection');
exports.ChangeDetectionStrategy = change_detection_1.ChangeDetectionStrategy;
exports.ChangeDetectorRef = change_detection_1.ChangeDetectorRef;
exports.WrappedValue = change_detection_1.WrappedValue;
exports.SimpleChange = change_detection_1.SimpleChange;
exports.IterableDiffers = change_detection_1.IterableDiffers;
exports.KeyValueDiffers = change_detection_1.KeyValueDiffers;
exports.CollectionChangeRecord = change_detection_1.CollectionChangeRecord;
exports.KeyValueChangeRecord = change_detection_1.KeyValueChangeRecord;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlX2RldGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgteHJOS0YzNlEudG1wL2FuZ3VsYXIyL3NyYy9jb3JlL2NoYW5nZV9kZXRlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRzs7QUFFSCxpQ0FpQk8scUNBQXFDLENBQUM7QUFoQjNDLDZFQUF1QjtBQUV2QixpRUFBaUI7QUFFakIsdURBQVk7QUFDWix1REFBWTtBQUVaLDZEQUFlO0FBR2YsNkRBQWU7QUFHZiwyRUFBc0I7QUFDdEIsdUVBRTJDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbW9kdWxlXG4gKiBAZGVzY3JpcHRpb25cbiAqIENoYW5nZSBkZXRlY3Rpb24gZW5hYmxlcyBkYXRhIGJpbmRpbmcgaW4gQW5ndWxhci5cbiAqL1xuXG5leHBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblxuICBDaGFuZ2VEZXRlY3RvclJlZixcblxuICBXcmFwcGVkVmFsdWUsXG4gIFNpbXBsZUNoYW5nZSxcbiAgUGlwZVRyYW5zZm9ybSxcbiAgSXRlcmFibGVEaWZmZXJzLFxuICBJdGVyYWJsZURpZmZlcixcbiAgSXRlcmFibGVEaWZmZXJGYWN0b3J5LFxuICBLZXlWYWx1ZURpZmZlcnMsXG4gIEtleVZhbHVlRGlmZmVyLFxuICBLZXlWYWx1ZURpZmZlckZhY3RvcnksXG4gIENvbGxlY3Rpb25DaGFuZ2VSZWNvcmQsXG4gIEtleVZhbHVlQ2hhbmdlUmVjb3JkLFxuICBUcmFja0J5Rm5cbn0gZnJvbSAnLi9jaGFuZ2VfZGV0ZWN0aW9uL2NoYW5nZV9kZXRlY3Rpb24nO1xuIl19