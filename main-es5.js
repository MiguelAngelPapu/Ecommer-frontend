function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"sophia-app app\"  [ngClass]=\"settings.theme\" id=\"mainDIV\" style=\"height: 100vh;overflow: auto;\">\r\n    <ngx-spinner></ngx-spinner>\r\n    <app-color-options *ngIf=\"url != '/home'\"></app-color-options>\r\n<router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/color-options/color-options.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/color-options/color-options.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsColorOptionsColorOptionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"color-options transition\" [ngClass]=\"{'show': showOptions}\">\n    <button mat-raised-button (click)=\"showOptions = !showOptions\" class=\"options-icon mat-elevation-z0\">\n        <mat-icon>settings</mat-icon>\n    </button>\n    <mat-card fxLayout=\"column\" fxLayoutAlign=\"space-between center\"> \n        <span class=\"skin-icon yellow\" (click)=\"changeTheme('yellow')\"></span>  \n        <span class=\"skin-icon orange\" (click)=\"changeTheme('orange')\"></span>  \n        <span class=\"skin-icon green\" (click)=\"changeTheme('green')\"></span> \n        <span class=\"skin-icon blue\" (click)=\"changeTheme('blue')\"></span>\n        <span class=\"skin-icon red\" (click)=\"changeTheme('red')\"></span> \n        <span class=\"skin-icon pink\" (click)=\"changeTheme('pink')\"></span> \n        <span class=\"skin-icon purple\" (click)=\"changeTheme('purple')\"></span>\n        <span class=\"skin-icon grey\" (click)=\"changeTheme('grey')\"></span>  \n        \n\n    \n    </mat-card>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/demo/demo.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/demo/demo.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDemoDemoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"demo-wrapper\">\r\n  <div class=\"demo-header\">\r\n      <div class=\"container\">\r\n        <div class=\"demo-header-wrap\" fxLayout='column' fxLayout.lt-md=\"column\">\r\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"40\" class=\"left-panel\">\r\n                <div class=\"logo\"><img src=\"assets/images/logo-white.png\" alt=\"\"> </div>\r\n                  <div class=\"text-intro\">\r\n                    <h1><span class=\"powerful\">POWERFUL</span><br>Angular Material<br><span class=\"theme\">Ecommerce Theme</span> </h1>\r\n                  </div>\r\n                  <ul fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutAlign=\"center center\">\r\n                      <li fxLayout=\"row\"><i class=\"material-icons\">check</i><span>Quality check by Envato</span> </li>\r\n                      <li fxLayout=\"row\"><i class=\"material-icons\">check</i><span>Lifetime regular updates</span></li>\r\n                      <li fxLayout=\"row\"><i class=\"material-icons\">check</i><span>6 months free support</span></li>\r\n                      <li fxLayout=\"row\"><i class=\"material-icons\">check</i><span>Full access to all files included in the package</span></li>\r\n                    </ul>\r\n                  <div class=\"button\">\r\n                      <a target=\"_blank\" href=\"https://themeforest.net/item/sophia-angular-material-ecommerce-template/24219775\" class=\"ped-btn left-btn\">Buy Now</a>\r\n                  </div>\r\n               </div>\r\n               <!-- <div fxFlex=\"100\" fxFlex.gt-sm=\"60\" class=\"right-panel\">\r\n                  <img src=\"assets/images/demo/laptop.png\" alt=\"\">\r\n              </div> -->\r\n        </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"demo-showcase sec-padding\">\r\n     <div class=\"container\">\r\n        <div class=\"title\">\r\n            <h2>Main demo</h2>\r\n            <p>Check this beautiful demo with 5 different home pages</p>\r\n        </div>\r\n       <div class=\"demos\" fxLayout='row' fxLayout.lt-lg=\"column\">\r\n           <div  class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" ngClass.xs=\"mt-2\">\r\n             <div class=\"first\">\r\n                 <img src=\"assets/images/demo/s1.jpg\" alt=\"\">\r\n             </div>\r\n              <div class=\"seccond\">\r\n                <h4><a >HOME 1</a></h4>\r\n              </div>\r\n              <div class=\"button\">\r\n                 <a [routerLink]=\"['/home/one']\" routerLinkActive=\"router-link-active\"  target=\"_blank\" class=\"ped-btn left-btn\">VIEW DEMO</a>\r\n             </div>\r\n           </div>\r\n           <div  class=\"item middle\" fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" ngClass.xs=\"mt-2\">\r\n               <div class=\"first\">\r\n                   <img src=\"assets/images/demo/s10.jpg\" alt=\"\">\r\n               </div>\r\n                <div class=\"seccond\">\r\n                   <h4><a >HOME 2</a></h4>\r\n                </div>\r\n                <div class=\"button\">\r\n                   <a [routerLink]=\"['/home/two']\" target=\"_blank\" class=\"ped-btn left-btn\">VIEW DEMO</a>\r\n               </div>\r\n             </div>\r\n             <div  class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" ngClass.xs=\"mt-2\">\r\n                 <div class=\"first\">\r\n                     <img src=\"assets/images/demo/s11.jpg\" alt=\"\">\r\n                 </div>\r\n                  <div class=\"seccond\">\r\n                     <h4>HOME 3</h4>\r\n                  </div>\r\n                  <div class=\"button\">\r\n                     <a [routerLink]=\"['/home/three']\" target=\"_blank\" class=\"ped-btn left-btn\">VIEW DEMO</a>\r\n                 </div>\r\n               </div>\r\n       </div>\r\n       <div class=\"demos demo-row-sec\" fxLayout='row' fxLayout.lt-lg=\"column\" xLayoutAlign=\"space-around center\" >\r\n\r\n          <div  class=\"item sec\" fxFlex=\"100\" fxFlex.gt-xs=\"31.3\" ngClass.xs=\"mt-2\">\r\n              <div class=\"first\">\r\n                  <img src=\"assets/images/demo/s12.jpg\" alt=\"\">\r\n              </div>\r\n               <div class=\"seccond\">\r\n                  <h4><a >HOME 4</a></h4>\r\n               </div>\r\n               <div class=\"button\">\r\n                  <a [routerLink]=\"['/home/four']\" target=\"_blank\" class=\"ped-btn left-btn\">VIEW DEMO</a>\r\n              </div>\r\n            </div>\r\n            <div  class=\"item sec\" fxFlex=\"100\" fxFlex.gt-xs=\"31.3\" ngClass.xs=\"mt-2\">\r\n                <div class=\"first\">\r\n                    <img src=\"assets/images/demo/s13.jpg\" alt=\"\">\r\n                </div>\r\n                 <div class=\"seccond\">\r\n                    <h4><a >HOME 5</a></h4>\r\n                 </div>\r\n                 <div class=\"button\">\r\n                    <a [routerLink]=\"['/home/five']\" target=\"_blank\" class=\"ped-btn left-btn\">VIEW DEMO</a>\r\n                </div>\r\n              </div>\r\n\r\n     </div>\r\n    </div>\r\n   </div>\r\n\r\n   <div class=\"demo-showcase sec-padding\">\r\n    <div class=\"container\">\r\n      <div class=\"title\">\r\n          <h2>Check out the new demos</h2>\r\n          <p>More new templates will come up soon... Stay tuned!  </p>\r\n      </div>\r\n      <div class=\"demos\" fxLayout='row' fxLayout.lt-lg=\"column\">\r\n           <div  class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" ngClass.xs=\"mt-2\">\r\n             <div class=\"first\">\r\n                 <img src=\"assets/images/demo/home_new.jpg\" alt=\"\">\r\n             </div>\r\n              <div class=\"seccond\">\r\n                <h4><a >INDUSTRIAL</a></h4>\r\n              </div>\r\n              <div class=\"button\">\r\n                <a href=\"http://lamarena.online/sophia-industrial/\" target=\"_blank\" class=\"ped-btn left-btn\">VIEW DEMO</a>\r\n            </div>\r\n           </div>\r\n\r\n           <div  class=\"item middle\" fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" ngClass.xs=\"mt-2\">\r\n            <div class=\"first\">\r\n                <img src=\"assets/images/demo/food.jpg\" alt=\"\">\r\n            </div>\r\n             <div class=\"seccond\">\r\n               <h4><a >FOOD</a></h4>\r\n             </div>\r\n             <div class=\"button\">\r\n               <a href=\"http://lamarena.online/sophia-food/\" target=\"_blank\" class=\"ped-btn left-btn\">VIEW DEMO</a>\r\n           </div>\r\n          </div>\r\n          <div  class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" ngClass.xs=\"mt-2\">\r\n            <div class=\"first\">\r\n                <img src=\"assets/images/demo/furniture.jpg\" alt=\"\">\r\n            </div>\r\n             <div class=\"seccond\">\r\n               <h4><a >FURNITURE</a></h4>\r\n               <span>COMING SOON</span>\r\n             </div>\r\n             <div class=\"button\">\r\n               <a href=\"http://lamarena.online/sophia-furniture/#/home\" target=\"_blank\" class=\"ped-btn left-btn\">VIEW DEMO</a>\r\n           </div>\r\n          </div>\r\n           </div>\r\n      </div>\r\n    </div>\r\n   <div class=\"main-features sec-padding\">\r\n     <div class=\"container\">\r\n        <div class=\"features-wrap\">\r\n          <div class=\"title\">\r\n            <h2>Main Features</h2>\r\n          </div>\r\n           <div class=\"features\">\r\n               <div class=\"row\" fxLayout='row' fxLayout.lt-md=\"column\">\r\n                   <div fxLayout=\"row\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"feature-item\">\r\n                       <div class=\"icon-box\">\r\n                         <img src=\"assets/images/demo/angular.jpg\" alt=\"\">\r\n                       </div>\r\n                       <div class=\"text-box\">\r\n                            <h4>Angular app</h4>\r\n                            <p>Very powerfull and modern front-end Angular ecommerce app for your store market.</p>\r\n                       </div>\r\n                     </div>\r\n                     <div fxLayout=\"row\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"feature-item\">\r\n                      <div class=\"icon-box\">\r\n                        <img src=\"assets/images/demo/angularM.jpg\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"text-box\">\r\n                           <h4>Angular Material</h4>\r\n                           <p>Made with Angular Material UI component library specialized for Angular apps.</p>\r\n                      </div>\r\n                    </div>\r\n               </div>\r\n             <div class=\"row\" fxLayout='row' fxLayout.lt-md=\"column\">\r\n                 <div fxLayout=\"row\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"feature-item\">\r\n                     <div class=\"icon-box\">\r\n                       <img src=\"assets/images/demo/photoshop.jpg\" alt=\"\">\r\n                     </div>\r\n                     <div class=\"text-box\">\r\n                          <h4>PSD files included for all layouts</h4>\r\n                          <p>We provide layered organized psd files for all layouts (for those who want to photoshop).</p>\r\n                     </div>\r\n                   </div>\r\n                   <div fxLayout=\"row\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"feature-item\">\r\n                    <div class=\"icon-box\">\r\n                      <img src=\"assets/images/demo/sass.jpg\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"text-box\">\r\n                         <h4>SASS support</h4>\r\n                         <p>The theme is made with sass styling.</p>\r\n                    </div>\r\n                  </div>\r\n             </div>\r\n             <div class=\"row\" fxLayout='row' fxLayout.lt-md=\"column\">\r\n                 <div fxLayout=\"row\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"feature-item\">\r\n                     <div class=\"icon-box\">\r\n                       <img src=\"assets/images/demo/angular_flex.jpg\" alt=\"\">\r\n                     </div>\r\n                     <div class=\"text-box\">\r\n                          <h4>Angular Flex-Layout </h4>\r\n                          <p>Fast & flexible Flexbox layout library for building a layout structure.</p>\r\n                     </div>\r\n                   </div>\r\n                   <div fxLayout=\"row\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"feature-item\">\r\n                    <div class=\"icon-box\">\r\n                      <img src=\"assets/images/demo/spinner.jpg\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"text-box\">\r\n                         <h4>Ngx-spinner</h4>\r\n                         <p>Angular spinner implemented..</p>\r\n                    </div>\r\n                  </div>\r\n             </div>\r\n             <div class=\"row\" fxLayout='row' fxLayout.lt-md=\"column\">\r\n                 <div fxLayout=\"row\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"feature-item\">\r\n                     <div class=\"icon-box\">\r\n                       <img src=\"assets/images/demo/compare.jpg\" alt=\"\">\r\n                     </div>\r\n                     <div class=\"text-box\">\r\n                          <h4>Product Compare </h4>\r\n                          <p>We have implemented on product compare component.</p>\r\n                     </div>\r\n                   </div>\r\n                   <div fxLayout=\"row\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"feature-item\">\r\n                    <div class=\"icon-box\">\r\n                      <img src=\"assets/images/demo/font.jpg\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"text-box\">\r\n                         <h4>Google Fonts</h4>\r\n                         <p>The app uses regular google fonts</p>\r\n                    </div>\r\n                  </div>\r\n             </div>\r\n           </div>\r\n        </div>\r\n     </div>\r\n   </div>\r\n   <div class=\"color-showcase sec-padding\">\r\n      <div class=\"container\">\r\n        <div class=\"title\">\r\n          <h2>Unlimited color combinations</h2>\r\n        </div>\r\n        <div class=\"demos\" fxLayout='row' fxLayout.lt-lg=\"column\">\r\n            <div  class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"25\" ngClass.xs=\"mt-2\">\r\n                <div class=\"first\">\r\n                    <img src=\"assets/images/demo/c1.jpg\" alt=\"\">\r\n                </div>\r\n\r\n              </div>\r\n              <div  class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"25\" ngClass.xs=\"mt-2\">\r\n                  <div class=\"first\">\r\n                      <img src=\"assets/images/demo/c2.jpg\" alt=\"\">\r\n                  </div>\r\n\r\n                </div>\r\n                <div  class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"25\" ngClass.xs=\"mt-2\">\r\n                    <div class=\"first\">\r\n                        <img src=\"assets/images/demo/c3.jpg\" alt=\"\">\r\n                    </div>\r\n\r\n                  </div>\r\n                  <div  class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"25\" ngClass.xs=\"mt-2\">\r\n                      <div class=\"first\">\r\n                          <img src=\"assets/images/demo/c4.jpg\" alt=\"\">\r\n                      </div>\r\n\r\n\r\n                    </div>\r\n        </div>\r\n       </div>\r\n   </div>\r\n   <div class=\"likeUs sec-padding\">\r\n      <div class=\"container\">\r\n        <div class=\"theme-features\">\r\n            <mat-card fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"start start\"  class=\"p-0\">\r\n              <div class=\"item\">\r\n                <h2>Lifetime License</h2>\r\n                <ul>\r\n                  <li fxLayout=\"row\"><i class=\"material-icons\">check</i><span>Quality check by Envato</span> </li>\r\n                  <li fxLayout=\"row\"><i class=\"material-icons\">check</i><span>Lifetime regular updates</span></li>\r\n                  <li fxLayout=\"row\"><i class=\"material-icons\">check</i><span>6 months free support</span></li>\r\n                  <li fxLayout=\"row\"><i class=\"material-icons\">check</i><span>Full access to all files included in the package</span></li>\r\n                </ul>\r\n              </div>\r\n            </mat-card>\r\n        </div>\r\n        <div class=\"title\">\r\n          <h2>If you like Sophia app - Please rate us</h2>\r\n          <div class=\"stars\" fxLayout='row' fxLayoutAlign=\"center center\">\r\n              <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n              <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n              <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n              <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n              <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n           </div>\r\n        </div>\r\n        </div>\r\n        </div>\r\n\r\n        <div class=\"footer\">\r\n          <div class=\"container\">\r\n            <p>Copyrights © 2020 by Lamarena. All Rights Reserved. </p>\r\n          </div>\r\n        </div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMainMainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-sidenav-container fullscreen>\r\n    <mat-sidenav [opened]=\"false\" mode=\"over\"  #start  class=\"sidenav\">\r\n        <button mat-icon-button color=\"warn\" class=\"close\" (click)=\"start.close()\">\r\n          <mat-icon color=\"warn\">close</mat-icon>\r\n        </button>\r\n        <div class=\"divider\"></div>\r\n        <div class=\"sidebar-items\" fxLayout=\"column\" >\r\n            <app-sidebar *ngFor=\"let item of navItems\" [item]=\"item\"></app-sidebar>\r\n        </div>\r\n    </mat-sidenav>\r\n    <mat-toolbar class=\"main-topbar\" [ngClass]=\"{topbar_four: url == '/home/four'}\">\r\n        <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"top-bar container\" >\r\n                <span fxHide=\"false\" fxHide.gt-sm   >\r\n                    <button mat-icon-button (click)=\"start.toggle()\">\r\n                        <mat-icon>menu</mat-icon>\r\n                    </button>\r\n                 </span>\r\n              <div fxLayout=\"row\" class=\"welcome-message\">\r\n                <div class=\"widget-text\">\r\n                  <a mat-button [matMenuTriggerFor]=\"currencyMenu\" #currencyMenuTrigger=\"matMenuTrigger\">\r\n                    {{currency}}<mat-icon class=\"mat-icon-sm caret cur-icon\">arrow_drop_down</mat-icon>\r\n                  </a>\r\n                  <mat-menu #currencyMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\" class=\"app-dropdown\">\r\n                    <span>\r\n                        <button mat-menu-item *ngFor=\"let cur of currencies\" (click)=\"changeCurrency(cur)\">\r\n                            <span>{{cur}}</span>\r\n                        </button>\r\n                    </span>\r\n                </mat-menu>\r\n                </div>\r\n                <div class=\"widget-text\">\r\n                  <a mat-button [matMenuTriggerFor]=\"langMenu\" #langMenuTrigger=\"matMenuTrigger\">\r\n                    <img [src]=\"flag.image\" width=\"18\">\r\n                    <span fxShow=\"false\" fxShow.gt-sm class=\"flag-menu-title\">{{flag.name}}</span>\r\n                    <mat-icon class=\"mat-icon-sm caret cur-icon\">arrow_drop_down</mat-icon>\r\n                </a>\r\n                <mat-menu #langMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\" class=\"app-dropdown\">\r\n                    <span>\r\n                        <button mat-menu-item *ngFor=\"let flag of flags\" (click)=\"changeLang(flag)\">\r\n                            <img [src]=\"flag.image\" width=\"18\"> {{flag.name}}\r\n                        </button>\r\n                    </span>\r\n                </mat-menu>\r\n                </div>\r\n              </div>\r\n              <div class=\"widgets-left\" fxLayout=\"row\">\r\n\r\n                <div class=\"widget-text\">\r\n                  <a fxShow=\"false\" fxShow.gt-xs [routerLink]=\"['/pages/wishlist']\" routerLinkActive=\"router-link-active\" ><mat-icon class=\"mat-icon-lg mat-icon material-icons mr-10\">favorite_border</mat-icon> WISHLIST</a>\r\n                </div>\r\n                <div class=\"widget-text\">\r\n                  <a fxShow=\"false\" fxShow.gt-xs [routerLink]=\"['/pages/compare']\" routerLinkActive=\"router-link-active\" ><mat-icon>cached</mat-icon>COMPARE</a>\r\n                </div>\r\n                <div class=\"widget-text\">\r\n                    <a fxShow=\"false\" fxShow.gt-xs [routerLink]=\"['/pages/my-account']\" routerLinkActive=\"router-link-active\" ><mat-icon>person</mat-icon>My Account</a>\r\n                  </div>\r\n              </div>\r\n\r\n\r\n\r\n\r\n        </mat-toolbar-row>\r\n\r\n      </mat-toolbar>\r\n\r\n  <app-header *ngIf=\"url == '/home/one' || url == '/home/three' && url != '/home/two' && url != '/home/four' || router.url.includes('pages') || router.url.includes('products') || router.url.includes('blog') || router.url.includes('product')\"></app-header>\r\n  <app-header-two *ngIf=\"url == '/home/two'  \"></app-header-two>\r\n  <app-header-three *ngIf=\"url == '/home/four' || url == '/home/four'\"></app-header-three>\r\n  <app-header-four *ngIf=\"url == '/home/five' || url == '/home/five'\"></app-header-four>\r\n  <router-outlet></router-outlet>\r\n\r\n  <app-footer *ngIf=\"url != '/home/five'\"></app-footer>\r\n  <app-footer-two *ngIf=\"url == '/home/five'\"></app-footer-two>\r\n\r\n</mat-sidenav-container>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/banner-promotion/banner-promotion.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/banner-promotion/banner-promotion.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedBannerPromotionBannerPromotionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"banner-pro\">\r\n    <img src=\"assets/images/background/banerce.jpg\" alt=\"\">\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/banners-four/banners-four.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/banners-four/banners-four.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedBannersFourBannersFourComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"banners-container\" fxLayout=\"column\" fxLayout.gt-sm=\"row\" *ngIf=\"banners.length > 0\">\r\n                <div class=\"baner seccond four\" fxFlex [ngStyle]=\"getBgImage(1)\">\r\n                    <div class=\"info\" >\r\n                        <div class=\"text-box w-50\" fxLayout=\"column\" >\r\n                            <h4>{{getBanner(1).title}}</h4>\r\n                           <p>{{getBanner(1).subtitle}}</p>\r\n                    <a href=\"#\">Shop Now</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"baner seccond pd-xs four\" fxFlex [ngStyle]=\"getBgImage(2)\">\r\n                    <div class=\"info\" >\r\n                        <div class=\"text-box w-50\" fxLayout=\"column\" >\r\n                            <h4>{{getBanner(2).title}}</h4>\r\n                           <p>{{getBanner(2).subtitle}}</p>\r\n                    <a href=\"#\">Shop Now</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"baner seccond pd-xs four\" fxFlex [ngStyle]=\"getBgImage(2)\">\r\n                        <div class=\"info\" >\r\n                            <div class=\"text-box w-50\" fxLayout=\"column\" >\r\n                                <h4>{{getBanner(2).title}}</h4>\r\n                               <p>{{getBanner(2).subtitle}}</p>\r\n                        <a href=\"#\">Shop Now</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n            </div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/banners/banners.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/banners/banners.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedBannersBannersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"banners-container\" fxLayout=\"column\" fxLayout.gt-sm=\"row\" *ngIf=\"banners.length > 0\">\r\n\r\n  <div class=\"sec-padding\" fxLayout=\"row\" fxLayout.gt-sm=\"column\" fxLayout.xs=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"baners\">\r\n     <div class=\"baner first\"  [ngStyle]=\"getBgImage(0)\">\r\n       <div class=\"info\">\r\n           <div class=\"text-box\">\r\n               <h4>{{getBanner(0).title}}</h4>\r\n               <p>{{getBanner(0).subtitle}}</p>\r\n               <a href=\"#\">Shop Now</a>\r\n           </div>\r\n       </div>\r\n     </div>\r\n   </div>\r\n   <div fxLayout=\"row\" fxLayout.gt-sm=\"column\" fxLayout.xs=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"60\">\r\n       <div class=\"bn-wrap\" fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxFlexOrder=\"2\" fxFlexOrder.gt-sm=\"1\" fxFlex=\"50\" fxFlex.gt-sm=\"33\">\r\n           <div class=\"baner seccond\" fxFlex [ngStyle]=\"getBgImage(1)\">\r\n               <div class=\"info\" >\r\n                   <div class=\"text-box w-50\" fxLayout=\"column\" >\r\n                       <h4>{{getBanner(1).title}}</h4>\r\n                      <p>{{getBanner(1).subtitle}}</p>\r\n               <a href=\"#\">Shop Now</a>\r\n                   </div>\r\n               </div>\r\n           </div>\r\n           <div class=\"baner seccond pd-xs\" fxFlex [ngStyle]=\"getBgImage(2)\">\r\n               <div class=\"info\" >\r\n                   <div class=\"text-box w-50\" fxLayout=\"column\" >\r\n                       <h4>{{getBanner(2).title}}</h4>\r\n                      <p>{{getBanner(2).subtitle}}</p>\r\n               <a href=\"#\">Shop Now</a>\r\n                   </div>\r\n               </div>\r\n           </div>\r\n       </div>\r\n       <div class=\"baner seccond mg-xs-0\" fxFlexOrder=\"1\" fxFlexOrder.gt-sm=\"2\" fxFlex=\"50\" fxFlex.gt-sm=\"100\" [ngStyle]=\"getBgImage(3)\">\r\n           <div class=\"info\" >\r\n               <div class=\"text-box w-50 pt-40 \" fxLayout=\"column\" >\r\n                   <h4 class=\"big-title\">{{getBanner(3).title}}</h4>\r\n                  <p>{{getBanner(3).subtitle}}</p>\r\n           <a mat-raised-button color=\"primary\" class=\"big-price\">$66.99</a>\r\n               </div>\r\n           </div>\r\n       </div>\r\n   </div>\r\n </div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/blog-section/blog-section.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/blog-section/blog-section.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedBlogSectionBlogSectionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"blog-container\" fxLayout=\"column\" fxLayout.gt-sm=\"row\">\r\n        <div class=\"blog\" fxFlex>\r\n            <div class=\"info\" >\r\n                    <div class=\"img-box\">\r\n                            <img src=\"assets/images/blog/b1.jpg\" alt=\"\">\r\n                        </div>\r\n                <div class=\"text-box\" fxLayout=\"column\" >\r\n                    <mat-toolbar color=\"primary\"><div class=\"date\">17 <br>June</div></mat-toolbar> \r\n                        <h4>How to improve your market</h4>\r\n                   <p>Great pleasure to take a trivial example, which of us undertakes laborious.</p>\r\n            <a href=\"#\">See More</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"blog\" fxFlex>\r\n                <div class=\"info\" >\r\n                        <div class=\"img-box\">\r\n                            <img src=\"assets/images/blog/b1.jpg\" alt=\"\">\r\n                            </div>\r\n                    <div class=\"text-box\" fxLayout=\"column\" >\r\n                           <mat-toolbar color=\"primary\"><div class=\"date\">17 <br>June</div></mat-toolbar> \r\n                            <h4>How to improve your market</h4>\r\n                            <p>Great pleasure to take a trivial example, which of us undertakes laborious.</p>\r\n                <a href=\"#\">See More</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"blog\" fxFlex>\r\n                    <div class=\"info\" >\r\n                        <div class=\"img-box\">\r\n                                <img src=\"assets/images/blog/b1.jpg\" alt=\"\">\r\n                        </div>\r\n                        <div class=\"text-box\" fxLayout=\"column\" >\r\n                            <mat-toolbar color=\"primary\"><div class=\"date\">17 <br>June</div></mat-toolbar> \r\n                                <h4>How to improve your market</h4>\r\n                                <p>Great pleasure to take a trivial example, which of us undertakes laborious.</p>\r\n                    <a href=\"#\">See More</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n    </div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/categories-menu/categories-menu.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/categories-menu/categories-menu.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedCategoriesMenuCategoriesMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"category-contant\">\n  <ul fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"space-evenly center\">\n      <li fxLayout=\"column\"><a class=\"no-brd\" [routerLink]=\"['/home/products/all']\"><i class=\"material-icons\">dehaze</i>Show All</a></li>\n      <li fxLayout=\"column\"><a [routerLink]=\"['/home/products/Headphones']\"><i class=\"material-icons\">headset</i> Headphones</a></li>\n      <li fxLayout=\"column\"><a [routerLink]=\"['/home/products/Laptops']\"><i class=\"material-icons\">laptop</i>Laptops</a></li>\n      <li><a [routerLink]=\"['/home/products/Smartphones']\"><i class=\"material-icons\">smartphone</i>Smart Phones</a></li>\n      <li><a [routerLink]=\"['/home/products/Cameras']\"><i class=\"material-icons\">photo_camera</i>Cameras</a></li>\n      <li><a [routerLink]=\"['/home/products/Tv & Audio']\"><i class=\"material-icons\">tv</i>Tv & Audio</a></li>\n      <li><a [routerLink]=\"['/home/products/Watches']\"><i class=\"material-icons\">watch</i>Watches</a></li>\n  </ul>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/categories-section/categories-section.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/categories-section/categories-section.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedCategoriesSectionCategoriesSectionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"categories-section\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutAlign=\"start start\"  class=\"p-0\">\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"left-section\">\r\n        <div class=\"item mb-15\" >\r\n          <div class=\"product\">\r\n            <img src=\"assets/images/product/headphone1.png\" alt=\"\">\r\n          </div>\r\n          <div class=\"product-info\">\r\n              <h4><a href=\"\">Headphones</a></h4>\r\n            <ul>\r\n                <li><a href=\"\">Brand 1</a> </li>\r\n                <li><a href=\"\">Brand 1</a> </li>\r\n                <li><a href=\"\">Brand 1</a> </li>\r\n                <li><a href=\"\">Brand 1</a> </li>\r\n                <li><a href=\"\">Brand 1</a> </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"start start\">\r\n            <div class=\"item mr-7\" >\r\n                <div class=\"product\">\r\n                    <img src=\"assets/images/product/laptop1.png\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"product-info\">\r\n                      <h4><a href=\"\">Laptops</a></h4>\r\n                    <ul>\r\n                        <li><a href=\"\">Brand 1</a> </li>\r\n                        <li><a href=\"\">Brand 1</a> </li>\r\n                        <li><a href=\"\">Brand 1</a> </li>\r\n                        <li><a href=\"\">Brand 1</a> </li>\r\n                        <li><a href=\"\">Brand 1</a> </li>\r\n                    </ul>\r\n                  </div>\r\n            </div>\r\n            <div class=\"item ml-7\" >\r\n                <div class=\"product\">\r\n                    <img src=\"assets/images/product/phone1.png\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"product-info\">\r\n                    <h4><a href=\"\">Smart Phones</a></h4>\r\n                    <ul>\r\n                        <li><a href=\"\">Brand 1</a> </li>\r\n                        <li><a href=\"\">Brand 1</a> </li>\r\n                        <li><a href=\"\">Brand 1</a> </li>\r\n                        <li><a href=\"\">Brand 1</a> </li>\r\n                        <li><a href=\"\">Brand 1</a> </li>\r\n                    </ul>\r\n                  </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"right-section\">\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"start start\">\r\n            <div class=\"item mr-7\" >\r\n                <div class=\"product\">\r\n                    <img src=\"assets/images/product/steker.png\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"product-info\">\r\n                      <h4><a href=\"\">Cameras</a></h4>\r\n                    <ul>\r\n                        <li><a href=\"\">Brand 1</a> </li>\r\n                        <li><a href=\"\">Brand 1</a> </li>\r\n                        <li><a href=\"\">Brand 1</a> </li>\r\n                        <li><a href=\"\">Brand 1</a> </li>\r\n                        <li><a href=\"\">Brand 1</a> </li>\r\n                    </ul>\r\n                  </div>\r\n            </div>\r\n            <div class=\"item ml-7\" >\r\n                <div class=\"product\">\r\n                    <img src=\"assets/images/product/tv1.png\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"product-info\">\r\n                      <h4><a href=\"\">Tv & Audio</a></h4>\r\n                    <ul>\r\n                        <li><a href=\"\">Brand 1</a> </li>\r\n                        <li><a href=\"\">Brand 1</a> </li>\r\n                        <li><a href=\"\">Brand 1</a> </li>\r\n                        <li><a href=\"\">Brand 1</a> </li>\r\n                        <li><a href=\"\">Brand 1</a> </li>\r\n                    </ul>\r\n                  </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"item mt-15\" >\r\n            <div class=\"product\">\r\n              <img src=\"assets/images/product/Smartwatch1.png\" alt=\"\">\r\n            </div>\r\n            <div class=\"product-info\">\r\n                <h4><a href=\"\">Watches</a></h4>\r\n              <ul>\r\n                <li><a href=\"\">Brand 1</a> </li>\r\n                <li><a href=\"\">Brand 1</a> </li>\r\n                <li><a href=\"\">Brand 1</a> </li>\r\n                <li><a href=\"\">Brand 1</a> </li>\r\n                <li><a href=\"\">Brand 1</a> </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n      </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer-two/footer-two.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer-two/footer-two.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedFooterTwoFooterTwoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footer-two sec-padding\">\n    <div class=\"container\">\n        <div class=\"footer-wrapper\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between start\">\n          <div fxFlex=\"100\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"50\" class=\"footer-widget about-widget\"><a class=\"logo\" href=\"index.html\"><img src=\"assets/images/logo-white.png\" alt=\"Awesome Image\"></a>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada fringilla sem, at dictum lectus ultricies quis. Etiam eu bibendum orci. Aliquam erat volutpat.</p>\n            <div class=\"link\"><a href=\"#\">MORE ABOUT US</a> </div>\n          </div>\n\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"23\" fxFlex.sm=\"50\" ngClass.xs=\"mt-2\" class=\"footer-widget links-widget links-widget-pac\">\n              <div class=\"title\">\n                <h5>Services</h5>\n              </div>\n              <div class=\"row\">\n                  <ul>\n                    <li><a href=\"#\">Hotel Growth</a></li>\n                    <li><a href=\"#\">Hotel Loan</a></li>\n                    <li><a href=\"#\">Financial Planning</a></li>\n                    <li><a href=\"#\">Insurance Consulting</a></li>\n                    <li><a href=\"#\">Retirenment Planing</a></li>\n                    <li><a href=\"#\">Tax Planing</a></li>\n                  </ul>\n              </div>\n            </div>\n\n\n          <div fxFlex=\"100\" fxFlex.gt-sm=\"23\" fxFlex.sm=\"50\" ngClass.xs=\"mt-2\" class=\"footer-widget subscribe-widget\">\n            <div class=\"title\">\n              <h5>Subscribe Newsletter</h5>\n            </div>\n            <form action=\"#\">\n              <p>Get latest updates and offers.</p>\n              <div fxLayout=\"column\" class=\"newsletter-widget\">\n                <input type=\"text\" placeholder=\"Enter your email address\">\n                <button mat-raised-button color=\"primary\" type=\"submit\" class=\"ped-btn-footer\">SUBSCRIBE US</button>\n              </div>\n            </form>\n          </div>\n\n\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"23\" fxFlex.sm=\"50\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\" class=\"footer-widget subscribe-widget\">\n              <div class=\"title\">\n                <h5>Contact Us</h5>\n              </div>\n              <div fxLayout=\"row\" class=\"tel-box\">\n                <button color=\"primary\" mat-icon-button aria-label=\"Example icon-button with a heart icon\">\n                <div class=\"icon\"><i class=\"fa fa-map-marker\"></i></div>\n              </button>\n                <div class=\"text\">\n                  <p>Apple St, New York, NY 10012, USA</p>\n                </div>\n              </div>\n              <div fxLayout=\"row\" class=\"tel-box\">\n                <button color=\"primary\" mat-icon-button aria-label=\"Example icon-button with a heart icon\">\n                <div class=\"icon\"><i class=\"fa fa-phone\"></i></div>\n              </button>\n                <div class=\"text\">\n                  <p>( 018) 65 524 8503  /  (125) 954 7854</p>\n                </div>\n              </div>\n              <div fxLayout=\"row\" class=\"tel-box\">\n                <button color=\"primary\" mat-icon-button aria-label=\"Example icon-button with a heart icon\"> <div class=\"icon\"><i class=\"fa fa-envelope\"></i></div></button>\n                <div class=\"text\">\n                  <p><a href=\"#\">contact@lamarena.com</a></p>\n                </div>\n              </div>\n\n              <ul fxLayout=\"row\" class=\"social list-inline\">\n              \n                <li>\n                  <button color=\"primary\" mat-icon-button aria-label=\"Example icon-button with a heart icon\">\n                   <i color=\"primary\" class=\"fa fa-facebook\"></i>\n                 </button>\n               </li> \n               <li>\n                 <button color=\"primary\" mat-icon-button aria-label=\"Example icon-button with a heart icon\">\n                   <i class=\"fa fa-linkedin\"></i>\n                </button>\n              </li> \n              <li>\n               <button color=\"primary\" mat-icon-button aria-label=\"Example icon-button with a heart icon\">\n                 <i class=\"fa fa-twitter\"></i>\n              </button>\n            </li> \n            <li>\n             <button color=\"primary\" mat-icon-button aria-label=\"Example icon-button with a heart icon\">\n               <i class=\"fa fa-google-plus\"></i>\n            </button>\n          </li> \n               </ul>\n            </div>\n\n\n\n\n\n\n        </div>\n    </div>\n  </footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footer sec-padding\">\r\n  <div class=\"container\">\r\n      <div class=\"footer-wrapper\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between start\">\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"50\" class=\"footer-widget about-widget\"><a class=\"logo\" href=\"index.html\"><img src=\"assets//images/logo-02-01.png\" alt=\"Awesome Image\"></a>\r\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada fringilla sem, at dictum lectus ultricies quis. Etiam eu bibendum orci. Aliquam erat volutpat.</p>\r\n          <div class=\"link\"><a href=\"#\">MORE ABOUT US</a> </div>\r\n        </div>\r\n\r\n          <div fxFlex=\"100\" fxFlex.gt-sm=\"23\" fxFlex.sm=\"50\" ngClass.xs=\"mt-2\" class=\"footer-widget links-widget links-widget-pac\">\r\n            <div class=\"title\">\r\n              <h5>Services</h5>\r\n            </div>\r\n            <div class=\"row\">\r\n                <ul>\r\n                  <li><a href=\"#\">Hotel Growth</a></li>\r\n                  <li><a href=\"#\">Hotel Loan</a></li>\r\n                  <li><a href=\"#\">Financial Planning</a></li>\r\n                  <li><a href=\"#\">Insurance Consulting</a></li>\r\n                  <li><a href=\"#\">Retirenment Planing</a></li>\r\n                  <li><a href=\"#\">Tax Planing</a></li>\r\n                </ul>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"23\" fxFlex.sm=\"50\" ngClass.xs=\"mt-2\" class=\"footer-widget subscribe-widget\">\r\n          <div class=\"title\">\r\n            <h5>Subscribe Newsletter</h5>\r\n          </div>\r\n          <form action=\"#\">\r\n            <p>Get latest updates and offers.</p>\r\n            <div fxLayout=\"column\" class=\"newsletter-widget\">\r\n              <input type=\"text\" placeholder=\"Enter your email address\">\r\n              <button mat-raised-button color=\"primary\" type=\"submit\" class=\"ped-btn-footer\">SUBSCRIBE US</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n\r\n\r\n          <div fxFlex=\"100\" fxFlex.gt-sm=\"23\" fxFlex.sm=\"50\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\" class=\"footer-widget subscribe-widget\">\r\n            <div class=\"title\">\r\n              <h5>Contact Us</h5>\r\n            </div>\r\n            <div fxLayout=\"row\" class=\"tel-box\">\r\n              <div class=\"icon\"><i class=\"fa fa-map-marker\"></i></div>\r\n              <div class=\"text\">\r\n                <p>Apple St, New York, NY 10012, USA</p>\r\n              </div>\r\n            </div>\r\n            <div fxLayout=\"row\" class=\"tel-box\">\r\n              <div class=\"icon\"><i class=\"fa fa-phone\"></i></div>\r\n              <div class=\"text\">\r\n                <p>( 018) 65 524 8503  /  (125) 954 7854</p>\r\n              </div>\r\n            </div>\r\n            <div fxLayout=\"row\" class=\"tel-box\">\r\n              <div class=\"icon\"><i class=\"fa fa-envelope\"></i></div>\r\n              <div class=\"text\">\r\n                <p><a href=\"#\">contact@lamarena.com</a></p>\r\n              </div>\r\n            </div>\r\n\r\n            <ul fxLayout=\"row\" class=\"social list-inline\">\r\n              <li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\r\n              <li><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\r\n              <li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\r\n              <li><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\r\n            </ul>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n      </div>\r\n  </div>\r\n</footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/header-four/header-four.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/header-four/header-four.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedHeaderFourHeaderFourComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"home-header-4\">\n    <div class=\"container\"fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutGap=\"20px\" fxlayoutalign=\"space-between center\">\n      <div class=\"logo\">\n          <a [routerLink]=\"['/home/one']\" routerLinkActive=\"router-link-active\" ><img src=\"assets/images/logo-01.png\"></a>\n      </div>\n      <div fxflexoffset.gt-sm=\"10\"  fxFlex class=\"search-form\">\n       <form class=\"search-form\" fxLayout=\"row\">\n         <div class=\"form-wrap\">\n            <input type=\"text\" placeholder=\"Type to search...\">\n            <button class=\"btn-search\" type=\"submit\"><i class=\"fa fa-search\"></i></button>\n         </div>\n       </form>\n      </div>\n      <div class=\"call-bucket-wrap\" fxLayout=\"row\" fxLayout.sm=\"row\" fxLayoutAlign=\"center center\" >\n        <div class=\"info-message-icon\"  fxLayout=\"row\" fxLayoutAlign=\"center center\">\n          <div class=\"icon\"  fxLayout=\"row\" >\n              <mat-icon class=\"mat-icon-lg mat-icon material-icons\">call</mat-icon>\n          </div>\n            <div class=\"info-text\">\n              <p>Helpline:</p>\n               <span>02(981)336 111</span>\n            </div>\n        </div>\n        <div class=\"main-menu-wrapper-2\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" >\n            <mat-toolbar class=\"top-navbar top menu\">\n              <app-shopping-widgets-two [shoppingCartItems]=\"shoppingCartItems\"></app-shopping-widgets-two>\n            </mat-toolbar>\n          </div>\n      </div>\n    </div>\n  </div>\n  <div fxShow=\"false\" fxShow.gt-sm class=\"menu-container5\">\n      <app-menu></app-menu>\n  </div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/header-three/header-three.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/header-three/header-three.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedHeaderThreeHeaderThreeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"home-header-three\">\r\n  <div class=\"container\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutGap=\"20px\" fxlayoutalign=\"space-between center\">\r\n    <div class=\"logo\">\r\n        <a [routerLink]=\"['/home/one']\" routerLinkActive=\"router-link-active\" ><img src=\"assets/images/logo-01.png\"></a>\r\n    </div>\r\n    <div fxflexoffset.gt-sm=\"10\"  fxFlex class=\"search-form\">\r\n        <form class=\"search-form\" fxLayout=\"row\">\r\n          <div class=\"form-wrap\">\r\n             <input type=\"text\" placeholder=\"Type to search...\">\r\n             <button class=\"btn-search\" mat-raised-button color=\"primary\" type=\"submit\">Search</button>\r\n          </div>\r\n        </form>\r\n       </div>\r\n    <div class=\"call-bucket-wrap\" fxLayout=\"row\" fxLayout.sm=\"row\" fxLayoutAlign=\"center center\" >\r\n        <!-- <div class=\"info-message-icon\"  fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n          <div class=\"icon\"  fxLayout=\"row\" >\r\n              <mat-icon class=\"mat-icon-lg mat-icon material-icons\">call</mat-icon>\r\n          </div>\r\n            <div class=\"info-text\">\r\n              <p>Helpline:</p>\r\n               <span>02(981)336 111</span>\r\n            </div>\r\n        </div> -->\r\n        <div class=\"main-menu-wrapper-3\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" >\r\n            <mat-toolbar class=\"top-navbar top menu\">\r\n              <app-shopping-widgets-two [shoppingCartItems]=\"shoppingCartItems\"></app-shopping-widgets-two>\r\n            </mat-toolbar>\r\n          </div>\r\n      </div>\r\n\r\n  </div>\r\n</div>\r\n<div class=\"menu-container4\">\r\n    <app-menu></app-menu>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/header-two/header-two.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/header-two/header-two.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedHeaderTwoHeaderTwoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"home-header-2\">\r\n    <div class=\"container\"fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutGap=\"20px\" fxlayoutalign=\"space-between center\">\r\n      <div class=\"logo\">\r\n          <a [routerLink]=\"['/home/one']\" routerLinkActive=\"router-link-active\" ><img src=\"assets/images/logo-01.png\"></a>\r\n      </div>\r\n      <div fxflexoffset.gt-sm=\"10\"  fxFlex class=\"search-form\">\r\n       <form class=\"search-form\" fxLayout=\"row\">\r\n         <div class=\"form-wrap\">\r\n            <input type=\"text\" placeholder=\"Type to search...\">\r\n            <button class=\"btn-search\" type=\"submit\">Search</button>\r\n         </div>\r\n       </form>\r\n      </div>\r\n      <div class=\"call-bucket-wrap\" fxLayout=\"row\" fxLayout.sm=\"row\" fxLayoutAlign=\"center center\" >\r\n        <div class=\"info-message-icon\"  fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n          <div class=\"icon\"  fxLayout=\"row\" >\r\n              <mat-icon class=\"mat-icon-lg mat-icon material-icons\">call</mat-icon>\r\n          </div>\r\n            <div class=\"info-text\">\r\n              <p>Helpline:</p>\r\n               <span>02(981)336 111</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"main-menu-wrapper-2\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" >\r\n            <mat-toolbar class=\"top-navbar top menu\">\r\n              <app-shopping-widgets-two [shoppingCartItems]=\"shoppingCartItems\"></app-shopping-widgets-two>\r\n            </mat-toolbar>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div fxShow=\"false\" fxShow.gt-sm class=\"menu-container2\">\r\n   \r\n   <mat-toolbar color=\"primary\">\r\n    <mat-toolbar-row fxHide fxShow.gt-sm class=\"container\" fxLayout=\"row\"  fxLayout.xs=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <div class=\"main-menu\" fxLayout=\"row\" fxHide fxShow.gt-sm>\r\n          <a  mat-button class=\"mat-button\" [matMenuTriggerFor]=\"animals\">Home<mat-icon class=\"caret\">arrow_drop_down</mat-icon></a>\r\n          <mat-menu #animals=\"matMenu\" [overlapTrigger]=\"false\" class=\"app-dropdown\">\r\n            <a mat-menu-item [routerLink]=\"['/home/one']\" routerLinkActive=\"router-link-active\" >Home-1</a>\r\n            <a mat-menu-item [routerLink]=\"['/home/two']\" routerLinkActive=\"router-link-active\">Home-2</a>\r\n            <a mat-menu-item [routerLink]=\"['/home/three']\" routerLinkActive=\"router-link-active\">Home-3</a>\r\n            <a mat-menu-item [routerLink]=\"['/home/four']\" routerLinkActive=\"router-link-active\">Home-4</a>\r\n            <a mat-menu-item [routerLink]=\"['/home/five']\" routerLinkActive=\"router-link-active\">Home-5</a>\r\n        </mat-menu>\r\n          <a [routerLink]=\"['/home/products/all']\" routerLinkActive=\"router-link-active\"  mat-button class=\"mat-button\">Products</a>\r\n          <a  mat-button [matMenuTriggerFor]=\"shop\" class=\"mat-button\">Shop<mat-icon class=\"caret\">arrow_drop_down</mat-icon></a>\r\n          <mat-menu #shop=\"matMenu\" [overlapTrigger]=\"false\" class=\"app-dropdown mega-menu\">\r\n              <div fxLayout=\"row wrap\">\r\n                  <div fxFlex=\"25\" fxLayout=\"column\" class=\"p-1\">\r\n                      <a mat-menu-item routerLink=\"/\"><b>COMPUTERS</b></a>\r\n                      <mat-divider></mat-divider>\r\n                      <a mat-menu-item routerLink=\"/\">Laptops</a>\r\n                      <a mat-menu-item routerLink=\"/\">Cables</a>\r\n                      <a mat-menu-item routerLink=\"/\">Monitors</a>\r\n                      <a mat-menu-item routerLink=\"/\">Tablets</a>\r\n                      <a mat-menu-item routerLink=\"/\">Headsets</a>\r\n                  </div>\r\n                  <div fxFlex=\"25\" class=\"p-1\">\r\n                      <a mat-menu-item routerLink=\"/\"><b>TV & AUDIO</b></a>\r\n                      <mat-divider></mat-divider>\r\n                      <button mat-menu-item>TV</button>\r\n                      <button mat-menu-item>Video</button>\r\n                      <button mat-menu-item>Audio</button>\r\n                      <button mat-menu-item>DVD</button>\r\n                  </div>\r\n                  <div fxFlex=\"25\" class=\"p-1\">\r\n                      <a mat-menu-item routerLink=\"/\"><b>PHONES</b></a>\r\n                      <mat-divider></mat-divider>\r\n                      <button mat-menu-item>Mobile phones</button>\r\n                      <button mat-menu-item>Power Bank</button>\r\n                      <button mat-menu-item>Memory Cards</button>\r\n                      <button mat-menu-item>Accesories</button>\r\n                  </div>\r\n                  <div fxFlex=\"25\" class=\"p-1\">\r\n                      <a mat-menu-item routerLink=\"/\"><b>ELECTRONICS</b></a>\r\n                      <mat-divider></mat-divider>\r\n                      <button mat-menu-item>Washing Machines</button>\r\n                      <button mat-menu-item>Water heater</button>\r\n                      <button mat-menu-item>Cookers</button>\r\n                      <button mat-menu-item>Cold stores</button>\r\n                  </div>\r\n    \r\n              </div>\r\n    \r\n          </mat-menu>\r\n          <a  mat-button mat-button [matMenuTriggerFor]=\"blog\" class=\"mat-button\">Blog<mat-icon class=\"caret\">arrow_drop_down</mat-icon></a>\r\n          <mat-menu #blog=\"matMenu\" [overlapTrigger]=\"false\" class=\"app-dropdown\">\r\n              <a mat-menu-item [routerLink]=\"['/blog/blog-list']\">Blog List</a>\r\n              <a mat-menu-item [routerLink]=\"['/blog/blog-column']\">Blog Columns</a>\r\n              <a mat-menu-item [routerLink]=\"['/blog/blog-details']\">Blog Details</a>\r\n    \r\n          </mat-menu>\r\n          <a  mat-button [matMenuTriggerFor]=\"pages\" class=\"mat-button\">Pages<mat-icon class=\"caret\">arrow_drop_down</mat-icon></a>\r\n          <mat-menu #pages=\"matMenu\" [overlapTrigger]=\"false\" class=\"app-dropdown\">\r\n            <a [routerLink]=\"['/pages/about']\" mat-menu-item>About Us</a>\r\n            <a mat-menu-item [routerLink]=\"['/pages/faq']\" >FAQ</a>\r\n            <a mat-menu-item [routerLink]=\"['/pages/contact']\">Contact</a>\r\n            <a mat-menu-item [routerLink]=\"['/pages/wishlist']\">Wishlist</a>\r\n            <a mat-menu-item [routerLink]=\"['/pages/compare']\">Compare</a>\r\n            <a mat-menu-item [routerLink]=\"['/pages/checkout']\">Checkout</a>\r\n            <a mat-menu-item [routerLink]=\"['/pages/cart']\">Cart</a>\r\n            <a mat-menu-item [routerLink]=\"['/pages/my-account']\">My Account</a>\r\n            <a mat-menu-item [routerLink]=\"['/pages/error']\">404</a>\r\n        </mat-menu>\r\n          <a [routerLink]=\"['/pages/contact']\" routerLinkActive=\"router-link-active\"   mat-button class=\"mat-button\">Contact</a>\r\n        </div>\r\n    </mat-toolbar-row>\r\n   </mat-toolbar>   \r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/header/header.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/header/header.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n<div class=\"home-header-yellow\" [ngClass]=\"settings.theme\" [ngClass]=\"{'yellow' : true}\">\r\n  <mat-toolbar color=\"primary\" class=\"kuro\" >\r\n    <mat-toolbar-row class=\"container\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutGap=\"20px\" fxlayoutalign=\"space-between center\">\r\n    <div class=\"logo\">\r\n        <a [routerLink]=\"['/home/one']\" routerLinkActive=\"router-link-active\" ><img src=\"assets/images/logo-01.png\"></a>\r\n    </div>\r\n    <div fxflexoffset.gt-sm=\"10\"  fxFlex class=\"search-form\">\r\n        <form class=\"search-form\" fxLayout=\"row\">\r\n          <div class=\"form-wrap\">\r\n             <input type=\"text\" placeholder=\"Type to search...\">\r\n             <button class=\"btn-search\" type=\"submit\">Search</button>\r\n          </div>\r\n        </form>\r\n       </div>\r\n    <div class=\"call-bucket-wrap\" fxLayout=\"row\" fxLayout.sm=\"row\" fxLayoutAlign=\"center center\" >\r\n        <div class=\"info-message-icon\"  fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n          <div class=\"icon\"  fxLayout=\"row\" >\r\n              <mat-icon class=\"mat-icon-lg mat-icon material-icons\">call</mat-icon>\r\n          </div>\r\n            <div class=\"info-text\">\r\n              <p>Helpline:</p>\r\n               <span>02(981)336 111</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"main-menu-wrapper-2\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" >\r\n            <mat-toolbar class=\"top-navbar top menu\">\r\n              <app-shopping-widgets [shoppingCartItems]=\"shoppingCartItems\"></app-shopping-widgets>\r\n            </mat-toolbar>\r\n          </div>\r\n      </div>\r\n</mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n<div class=\"home-header\" [ngClass]=\"settings.theme\" >\r\n  <mat-toolbar color=\"primary\" class=\"kuro\" >\r\n    <mat-toolbar-row class=\"container\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutGap=\"20px\" fxlayoutalign=\"space-between center\">\r\n    <div class=\"logo\">\r\n        <a [routerLink]=\"['/home/one']\" routerLinkActive=\"router-link-active\" ><img src=\"assets/images/logo-white.png\"></a>\r\n    </div>\r\n    <div fxflexoffset.gt-sm=\"10\"  fxFlex class=\"search-form\">\r\n        <form class=\"search-form\" fxLayout=\"row\">\r\n          <div class=\"form-wrap\">\r\n             <input type=\"text\" placeholder=\"Type to search...\">\r\n             <button class=\"btn-search\" type=\"submit\">Search</button>\r\n          </div>\r\n        </form>\r\n       </div>\r\n    <div class=\"call-bucket-wrap\" fxLayout=\"row\" fxLayout.sm=\"row\" fxLayoutAlign=\"center center\" >\r\n        <div class=\"info-message-icon\"  fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n          <div class=\"icon\"  fxLayout=\"row\" >\r\n              <mat-icon class=\"mat-icon-lg mat-icon material-icons\">call</mat-icon>\r\n          </div>\r\n            <div class=\"info-text\">\r\n              <p>Helpline:</p>\r\n               <span>02(981)336 111</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"main-menu-wrapper-2\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" >\r\n            <mat-toolbar class=\"top-navbar top menu\">\r\n              <app-shopping-widgets [shoppingCartItems]=\"shoppingCartItems\"></app-shopping-widgets>\r\n            </mat-toolbar>\r\n          </div>\r\n      </div>\r\n</mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n</div>\r\n<div class=\"menu-container1\">\r\n    <app-menu></app-menu>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/menu/menu.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/menu/menu.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedMenuMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n  <mat-toolbar-row fxHide fxShow.gt-sm class=\"container\" fxLayout=\"row\"  fxLayout.xs=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <div class=\"main-menu\" fxLayout=\"row\" fxHide fxShow.gt-sm>\r\n        <a  mat-button class=\"mat-button\" [matMenuTriggerFor]=\"animals\">Home<mat-icon class=\"caret\">arrow_drop_down</mat-icon></a>\r\n        <mat-menu #animals=\"matMenu\" [overlapTrigger]=\"false\" class=\"app-dropdown\">\r\n          <a mat-menu-item [routerLink]=\"['/home/one']\" routerLinkActive=\"router-link-active\" >Home-1</a>\r\n          <a mat-menu-item [routerLink]=\"['/home/two']\" routerLinkActive=\"router-link-active\">Home-2</a>\r\n          <a mat-menu-item [routerLink]=\"['/home/three']\" routerLinkActive=\"router-link-active\">Home-3</a>\r\n          <a mat-menu-item [routerLink]=\"['/home/four']\" routerLinkActive=\"router-link-active\">Home-4</a>\r\n          <a mat-menu-item [routerLink]=\"['/home/five']\" routerLinkActive=\"router-link-active\">Home-5</a>\r\n      </mat-menu>\r\n        <a [routerLink]=\"['/home/products/all']\" routerLinkActive=\"router-link-active\"  mat-button class=\"mat-button\">Products</a>\r\n        <a  mat-button [matMenuTriggerFor]=\"shop\" class=\"mat-button\" (click)=\"openMegaMenu()\">Shop<mat-icon class=\"caret\">arrow_drop_down</mat-icon></a>\r\n        <mat-menu #shop=\"matMenu\" [overlapTrigger]=\"false\" class=\"app-dropdown mega-menu\">\r\n            <div fxLayout=\"row wrap\">\r\n                <div fxFlex=\"25\" fxLayout=\"column\" class=\"p-1\">\r\n                    <a mat-menu-item routerLink=\"/\"><b>COMPUTERS</b></a>\r\n                    <mat-divider></mat-divider>\r\n                    <a mat-menu-item routerLink=\"/\">Laptops</a>\r\n                    <a mat-menu-item routerLink=\"/\">Cables</a>\r\n                    <a mat-menu-item routerLink=\"/\">Monitors</a>\r\n                    <a mat-menu-item routerLink=\"/\">Tablets</a>\r\n                    <a mat-menu-item routerLink=\"/\">Headsets</a>\r\n                </div>\r\n                <div fxFlex=\"25\" class=\"p-1\">\r\n                    <a mat-menu-item routerLink=\"/\"><b>TV & AUDIO</b></a>\r\n                    <mat-divider></mat-divider>\r\n                    <button mat-menu-item>TV</button>\r\n                    <button mat-menu-item>Video</button>\r\n                    <button mat-menu-item>Audio</button>\r\n                    <button mat-menu-item>DVD</button>\r\n                </div>\r\n                <div fxFlex=\"25\" class=\"p-1\">\r\n                    <a mat-menu-item routerLink=\"/\"><b>PHONES</b></a>\r\n                    <mat-divider></mat-divider>\r\n                    <button mat-menu-item>Mobile phones</button>\r\n                    <button mat-menu-item>Power Bank</button>\r\n                    <button mat-menu-item>Memory Cards</button>\r\n                    <button mat-menu-item>Accesories</button>\r\n                </div>\r\n                <div fxFlex=\"25\" class=\"p-1\">\r\n                    <a mat-menu-item routerLink=\"/\"><b>ELECTRONICS</b></a>\r\n                    <mat-divider></mat-divider>\r\n                    <button mat-menu-item>Washing Machines</button>\r\n                    <button mat-menu-item>Water heater</button>\r\n                    <button mat-menu-item>Cookers</button>\r\n                    <button mat-menu-item>Cold stores</button>\r\n                </div>\r\n  \r\n            </div>\r\n  \r\n        </mat-menu>\r\n        <a  mat-button mat-button [matMenuTriggerFor]=\"blog\" class=\"mat-button\">Blog<mat-icon class=\"caret\">arrow_drop_down</mat-icon></a>\r\n        <mat-menu #blog=\"matMenu\" [overlapTrigger]=\"false\" class=\"app-dropdown\">\r\n            <a mat-menu-item [routerLink]=\"['/blog/blog-list']\">Blog List</a>\r\n            <a mat-menu-item [routerLink]=\"['/blog/blog-column']\">Blog Columns</a>\r\n            <a mat-menu-item [routerLink]=\"['/blog/blog-details']\">Blog Details</a>\r\n  \r\n        </mat-menu>\r\n        <a  mat-button [matMenuTriggerFor]=\"pages\" class=\"mat-button\">Pages<mat-icon class=\"caret\">arrow_drop_down</mat-icon></a>\r\n        <mat-menu #pages=\"matMenu\" [overlapTrigger]=\"false\" class=\"app-dropdown\">\r\n          <a [routerLink]=\"['/pages/about']\" mat-menu-item>About Us</a>\r\n          <a mat-menu-item [routerLink]=\"['/pages/faq']\" >FAQ</a>\r\n          <a mat-menu-item [routerLink]=\"['/pages/contact']\">Contact</a>\r\n          <a mat-menu-item [routerLink]=\"['/pages/wishlist']\">Wishlist</a>\r\n          <a mat-menu-item [routerLink]=\"['/pages/compare']\">Compare</a>\r\n          <a mat-menu-item [routerLink]=\"['/pages/checkout']\">Checkout</a>\r\n          <a mat-menu-item [routerLink]=\"['/pages/cart']\">Cart</a>\r\n          <a mat-menu-item [routerLink]=\"['/pages/my-account']\">My Account</a>\r\n          <a mat-menu-item [routerLink]=\"['/pages/error']\">404</a>\r\n      </mat-menu>\r\n        <a [routerLink]=\"['/pages/contact']\" routerLinkActive=\"router-link-active\"   mat-button class=\"mat-button\">Contact</a>\r\n      </div>\r\n  </mat-toolbar-row>\r\n\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/shopping-widgets-two/shopping-widgets-two.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/shopping-widgets-two/shopping-widgets-two.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedShoppingWidgetsTwoShoppingWidgetsTwoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n  <div class=\"commerce-buttons\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n\n    <button mat-button class=\"flex-row-button mat-button\" fxLayoutAlign=\"space-between center\" [matMenuTriggerFor]=\"menu\">\n      <div class=\"mat-button-wrapper\">\n        <div class=\"badge\" >\n            <mat-icon matBadge=\"{{shoppingCartItems.length}}\" matBadgeColor=\"primary\">local_grocery_store</mat-icon>\n              <!-- <mat-icon class=\"mat-icon-lg mat-icon material-icons\">local_grocery_store</mat-icon>\n              <span class=\"cart-count-wrapper\">{{shoppingCartItems.length}}</span> -->\n            </div>\n            <div class=\"top-cart\">\n                <span>{{ getTotal() | async | currency:productService?.currency:'symbol' }}</span>\n            </div>\n      </div>\n    </button>\n    <mat-menu class=\"spCard-main\"  #menu=\"matMenu\"> \n      <div class=\"spCard-dropdown\">\n        <div class=\"card-list-title\" fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\n           <a [routerLink]=\"['/pages/cart']\" routerLinkActive=\"router-link-active\" ><p>CHECK CARD</p></a>\n            <p>{{shoppingCartItems.length}} ITEM</p>\n        </div>\n            <mat-divider></mat-divider>\n            <p class=\"woo-message\" *ngIf=\"!shoppingCartItems.length\">Please add product<p>\n\n            <div class=\"new-product\" fxLayout=\"column\" *ngIf=\"shoppingCartItems.length\">\n              <div class=\"item\" fxLayout=\"row\" fxLayoutAlign=\"start start\" *ngFor=\"let item of shoppingCartItems\">\n                  <div class=\"product\">\n                      <img [src]=\"item.product.pictures[0].small\" alt=\"\">\n                     </div>\n                    <div class=\"desc\">\n                      <p>{{item.product.name}}</p>\n                      <span>{{item.quantity}} X {{item.product.price}}</span>\n                     </div>\n                     <div class=\"close-circle\">\n                        <a (click)=\"removeItem(item)\"><i class=\"material-icons\">\n                            delete\n                            </i></a>\n                      </div>\n              </div>\n              <mat-divider></mat-divider>\n              <div class=\"total\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                  <p class=\"text-muted\">Subtotal: </p>\n                  <span>{{ getTotal() | async | currency:productService?.currency:'symbol' }}</span>\n                </div>\n            </div>\n      </div>\n </mat-menu>\n  </div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/shopping-widgets/shopping-widgets.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/shopping-widgets/shopping-widgets.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedShoppingWidgetsShoppingWidgetsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n  <div class=\"commerce-buttons\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n\r\n    <button mat-button class=\"flex-row-button mat-button\" fxLayoutAlign=\"space-between center\" [matMenuTriggerFor]=\"menu\">\r\n      <div class=\"mat-button-wrapper\">\r\n          <div class=\"\" >\r\n              <mat-icon class=\"mat-icon-lg mat-icon material-icons\">local_grocery_store</mat-icon>\r\n              <span class=\"cart-count-wrapper\">{{shoppingCartItems.length}}</span>\r\n            </div>\r\n            <div class=\"top-cart\">\r\n                <span>{{ getTotal() | async | currency:productService?.currency:'symbol' }}</span>\r\n            </div>\r\n      </div>\r\n    </button>\r\n    <mat-menu class=\"spCard-main\"  #menu=\"matMenu\"> \r\n      <div class=\"spCard-dropdown\">\r\n        <div class=\"card-list-title\" fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n           <a [routerLink]=\"['/pages/cart']\" routerLinkActive=\"router-link-active\" ><p>CHECK CARD</p></a>\r\n            <p>{{shoppingCartItems.length}} ITEM</p>\r\n        </div>\r\n            <mat-divider></mat-divider>\r\n            <p class=\"woo-message\" *ngIf=\"!shoppingCartItems.length\">Please add product<p>\r\n\r\n            <div class=\"new-product\" fxLayout=\"column\" *ngIf=\"shoppingCartItems.length\">\r\n              <div class=\"item\" fxLayout=\"row\" fxLayoutAlign=\"start start\" *ngFor=\"let item of shoppingCartItems\">\r\n                  <div class=\"product\">\r\n                      <img [src]=\"item.product.pictures[0].small\" alt=\"\">\r\n                     </div>\r\n                    <div class=\"desc\">\r\n                      <p>{{item.product.name}}</p>\r\n                      <span>{{item.quantity}} X {{item.product.price}}</span>\r\n                     </div>\r\n                     <div class=\"close-circle\">\r\n                        <a (click)=\"removeItem(item)\"><i class=\"material-icons\">\r\n                            delete\r\n                            </i></a>\r\n                      </div>\r\n              </div>\r\n              <mat-divider></mat-divider>\r\n              <div class=\"total\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                  <p class=\"text-muted\">Subtotal: </p>\r\n                  <span>{{ getTotal() | async | currency:productService?.currency:'symbol' }}</span>\r\n                </div>\r\n            </div>\r\n      </div>\r\n </mat-menu>\r\n  </div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/sidebar/sidebar.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/sidebar/sidebar.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<a mat-list-item  [ngStyle]=\"{'padding-left': (depth * 12) + 'px'}\" class=\"menu-list-item\" (click)=\"onItemSelected(item)\"\r\n[ngClass]=\"{'active': item.route ? router.isActive(item.route, true): false, 'expanded': expanded}\">\r\n  {{item.displayName}}\r\n  <span fxFlex *ngIf=\"item.children && item.children.length\">\r\n      <span fxFlex></span>\r\n      <mat-icon [@indicatorRotate]=\"expanded ? 'expanded': 'collapsed'\">\r\n        expand_more\r\n      </mat-icon>\r\n    </span>\r\n</a>\r\n<div *ngIf=\"expanded\">\r\n    <app-sidebar *ngFor=\"let child of item.children\" [item]=\"child\" [depth]=\"depth+1\">\r\n    </app-sidebar>\r\n  </div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/home-five/home-five.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/home-five/home-five.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShopHomeFiveHomeFiveComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"carousel-3\">\n  <div class=\"container ctn-box\"  >\n    <div class=\"\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\">\n        <div class=\"carousel-2-wrapper\" fxLayout.sm=\"column\" fxFlex=\"100\" fxFlex.gt-md=\"70\" fxFlex.md=\"60\" fxFlex.sm=\"100\">\n            <app-main-carousel [slides]=\"slides\"></app-main-carousel>\n        </div>\n        <div class=\"slider-categories\" fxFlex=\"100\" fxFlex.gt-md=\"30\" fxFlex.md=\"40\">\n           <div class=\"carousel-banners-wrapper\" fxLayout=\"column\">\n             <div *ngFor=\"let bn of discount\" class=\"carousel-banner mb-15\">\n                <div class=\"baner seccond\">\n                    <div fxLayout=\"row\" fxLayout.xs=\"column\" class=\"info\" >\n                      <div fxFlex=\"100\" fxFlex.gt-md=\"50\" class=\"bn-img\"><img [src]=\"bn.image\" alt=\"\"> </div>\n                        <div fxFlex=\"100\" fxFlex.gt-md=\"50\" class=\"text-box w-50\" fxLayout=\"column\" >\n                            <h4>{{bn.title}}</h4>\n                           <p>{{bn.subtitle}}.</p>\n                           <button mat-raised-button color=\"primary\">Shop now</button>\n                        </div>\n                    </div>\n                </div>\n             </div>\n\n           </div>\n        </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"home-5-wrap\">\n    <div class=\"container \">\n        <div class=\"categories-menu-wrap\">\n\n               <app-categories-menu></app-categories-menu>\n\n          </div>\n          <div class=\"products sec-padding prod-five\">\n              <h3>POPULAR ITEMS</h3>\n                    <mat-tab-group>\n\n                        <mat-tab  label=\"FEATURED PRODUCTS\">\n\n                                 <app-product-carousel [product]=\"products | slice:0:8\"></app-product-carousel>\n\n\n                        </mat-tab>\n\n                        <mat-tab label=\"LATEST PRODUCTS\">\n\n                                <app-product-carousel [product]=\"products | slice:5:13\"></app-product-carousel>\n\n                        </mat-tab>\n\n                        <mat-tab label=\"ON SALE PRODUCTS\">\n\n                                  <app-product-carousel [product]=\"products | slice:13:22\"></app-product-carousel>\n\n                        </mat-tab>\n\n                      </mat-tab-group>\n\n\n              </div>\n\n      </div>\n      <div class=\"categories sec-padding\">\n        <div class=\"container\">\n          <div class=\"title\">\n              <h3>BROWSE</h3>\n          </div>\n\n            <app-categories-section></app-categories-section>\n        </div>\n        </div>\n\n        <div class=\"vertical-products\">\n          <div class=\"container\">\n\n              <app-product-vertical [products]=\"products\"></app-product-vertical>\n\n          </div>\n        </div>\n        <div class=\"blog-section sec-padding bg\">\n            <div class=\"container\">\n\n                <app-blog-section></app-blog-section>\n\n            </div>\n          </div>\n</div>\n\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/home-four/home-four.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/home-four/home-four.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShopHomeFourHomeFourComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-main-carousel [slides]=\"slides\"></app-main-carousel>\r\n<div class=\"home-1-wrap\">\r\n\r\n    <div  class=\"info-bar-four-wrapper\">\r\n        <div class=\"container\">\r\n            <div fxLayout=\"row wrap\" class=\"info-bar-four\">\r\n             <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n               <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                 <mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-xlg  m-0\">card_giftcard</mat-icon>\r\n                 <div class=\"content\">\r\n                   <p>BONUS PLUS</p>\r\n                   <span class=\"text-muted m-0\">Get a bonus plus for buying more that three products</span>\r\n                 </div>\r\n               </mat-card>\r\n             </div>\r\n             <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n               <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                 <mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-xlg  m-0\">local_shipping</mat-icon>\r\n                 <div class=\"content\">\r\n                   <p>FREE SHIPPING</p>\r\n                   <span class=\"text-muted m-0\">Free shipping on all orders over $99</span>\r\n                 </div>\r\n               </mat-card>\r\n             </div>\r\n             <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n               <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                 <mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-xlg m-0\">monetization_on</mat-icon>\r\n                 <div class=\"content\">\r\n                   <p>MONEY BACK GUARANTEE</p>\r\n                   <span class=\"text-muted m-0\">100% money back guarantee</span>\r\n                 </div>\r\n               </mat-card>\r\n             </div>\r\n             <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n               <mat-card class=\"light-block no-bd\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                 <mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-xlg m-0\">history</mat-icon>\r\n                 <div class=\"content\">\r\n                   <p>ONLINE SUPPORT 24/7</p>\r\n                   <span class=\"text-muted m-0\">Call us: 02 3555 65454 55</span>\r\n                 </div>\r\n               </mat-card>\r\n             </div>\r\n         </div>\r\n           </div>\r\n    </div>\r\n            \r\n\r\n              <div class=\"banners-four\">\r\n                  <div class=\"container\">\r\n                    <app-banners-four [banners]=\"banners\"></app-banners-four>\r\n                  </div>\r\n                </div>\r\n    <div class=\"container\">\r\n        <div class=\"products sec-padding\">\r\n          <div class=\"products-four\">\r\n\r\n              <h3>POPULAR ITEMS</h3>\r\n              <app-product-carousel [product]=\"products | slice:0:8\"></app-product-carousel>\r\n\r\n          </div>\r\n\r\n        </div>\r\n        </div>\r\n        <div class=\"featured-products-wrap\">\r\n            <div class=\"container\">\r\n                <div class=\"products sec-padding bg\">\r\n                        <div class=\"products-four\">\r\n\r\n                            <h3>FEATURED ITEMS</h3>\r\n                            <app-product-carousel [product]=\"products | slice:8:16\"></app-product-carousel>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                  </div>\r\n        </div>\r\n        <div class=\"main-banner\">\r\n            <app-banner-promotion></app-banner-promotion>\r\n      </div>\r\n          <div class=\"container\">\r\n        <app-product-vertical [products]=\"products\"></app-product-vertical>\r\n        </div>\r\n       \r\n       <div class=\"blog-section sec-padding\">\r\n         <div class=\"container\">\r\n           <div class=\"section-title\">\r\n              <h3>Latest From Our Blog</h3>\r\n              <p>Business analytics (BA) is the practice of iterative, methodical exploration of an<br> \r\n                  organization's data with emphasis on statistical analysis.</p>\r\n           </div>\r\n          \r\n           <app-blog-section></app-blog-section>\r\n         </div>\r\n       </div>\r\n\r\n  </div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/home-three/home-three.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/home-three/home-three.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShopHomeThreeHomeThreeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"carousel-3\">\r\n    <div class=\"container ctn-box\"  >\r\n      <div class=\"\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\">\r\n          <div class=\"carousel-2-wrapper\" fxLayout.sm=\"column\" fxFlex=\"100\" fxFlex.gt-md=\"70\" fxFlex.md=\"60\" fxFlex.sm=\"100\">\r\n              <app-main-carousel [slides]=\"slides\"></app-main-carousel>\r\n          </div>\r\n          <div class=\"slider-categories\" fxFlex=\"100\" fxFlex.gt-md=\"30\" fxFlex.md=\"40\">\r\n             <div class=\"carousel-banners-wrapper\" fxLayout=\"column\">\r\n               <div *ngFor=\"let bn of discount\" class=\"carousel-banner mb-15\">\r\n                  <div class=\"baner seccond\">\r\n                      <div fxLayout=\"row\" fxLayout.xs=\"column\" class=\"info\" >\r\n                        <div fxFlex=\"100\" fxFlex.gt-md=\"50\" class=\"bn-img\"><img [src]=\"bn.image\" alt=\"\"> </div>\r\n                          <div fxFlex=\"100\" fxFlex.gt-md=\"50\" class=\"text-box w-50\" fxLayout=\"column\" >\r\n                              <h4>{{bn.title}}</h4>\r\n                             <p>{{bn.subtitle}}.</p>\r\n                      <button mat-button color=\"primary\">Shop Now</button>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n               </div>\r\n\r\n             </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"home-3-wrap\">\r\n      <div class=\"container \">\r\n        <div class=\"home-main-wrapper\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\">\r\n          <div fxFlex=\"100\" fxFlex.gt-md=\"23\" fxFlex.md=\"40\" class=\"home3-sidebar\">\r\n              <div class=\"categories-wrap\" >\r\n                  <div class=\"title\"> TOP CATEGORIES</div>\r\n                    <app-categories></app-categories>\r\n                    <div class=\"btn-sale\">\r\n                        <button mat-raised-button color=\"primary\">USE THE DISCOUNT - 60% OFF</button>\r\n                    </div>\r\n               </div>\r\n               <div class=\"brands\">\r\n                  <div  class=\"title-header\"><h4  class=\"title\">BRANDS</h4></div>\r\n                  <div class=\"brand-logos\">\r\n                    <div class=\"brand-item\">\r\n                      <a href=\"#\">\r\n                        <img src=\"assets/images/brands/brand-1.png\" alt=\"\">\r\n                      </a>\r\n                    </div>\r\n                    <div class=\"brand-item\">\r\n                        <a href=\"#\">\r\n                          <img src=\"assets/images/brands/brand-2.png\" alt=\"\">\r\n                        </a>\r\n                      </div>\r\n                      <div class=\"brand-item\">\r\n                          <a href=\"#\">\r\n                            <img src=\"assets/images/brands/brand-3.png\" alt=\"\">\r\n                          </a>\r\n                        </div>\r\n                        <div class=\"brand-item\">\r\n                            <a href=\"#\">\r\n                              <img src=\"assets/images/brands/brand-4.png\" alt=\"\">\r\n                            </a>\r\n                          </div>\r\n                          <div class=\"brand-item\">\r\n                              <a href=\"#\">\r\n                                <img src=\"assets/images/brands/brand-5.png\" alt=\"\">\r\n                              </a>\r\n                            </div>\r\n                            <div class=\"brand-item\">\r\n                                <a href=\"#\">\r\n                                  <img src=\"assets/images/brands/brand-1.png\" alt=\"\">\r\n                                </a>\r\n                              </div>\r\n                  </div>\r\n               </div>\r\n               <mat-toolbar color=\"primary\" >\r\n                <div class=\"sale-widget\">\r\n                   <span class=\"sale-widget1\">\r\n                      BIG SALLE\r\n                  </span>\r\n                  <span class=\"sale-widget2\">\r\n                     DO NOT MISS IT!\r\n                 </span>\r\n                  <span class=\"discount\">60</span>\r\n                  <div class=\"percent\">\r\n                    <span>%</span>off\r\n                  </div>\r\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nects.</p>\r\n                </div>\r\n                 <mat-toolbar-row>\r\n                  \r\n                 </mat-toolbar-row>\r\n             \r\n              </mat-toolbar> \r\n               <div class=\"subscribe-widget\">\r\n                  <span>NEWSLETTER</span>\r\n                  <p>Get all the latest information on Events, Sales and Offers.</p>\r\n                  <div class=\"form\">\r\n                      <div fxLayout=\"column\" class=\"newsletter-widget\">\r\n                          <input type=\"text\" placeholder=\"Enter your email address\">\r\n                          <button type=\"submit\" mat-raised-button color=\"primary\" class=\"ped-btn-footer\">SUBSCRIBE US</button>\r\n                        </div>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n                <div fxFlex=\"100\"   fxFlex.gt-md=\"77\" fxFlex.md=\"60\" fxFlex.sm=\"100\" class=\"main-home3-wrapper\">\r\n                  <div fxLayout=\"row wrap\" class=\"info-bar pb-0\">\r\n                    <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n                      <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                        <mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-xlg  m-0\">card_giftcard</mat-icon>\r\n                        <div class=\"content\">\r\n                          <p>BONUS PLUS</p>\r\n                          <span class=\"text-muted m-0\">Get a bonus plus for buying more that three products</span>\r\n                        </div>\r\n                      </mat-card>\r\n                    </div>\r\n                    <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n                      <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                        <mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-xlg  m-0\">local_shipping</mat-icon>\r\n                        <div class=\"content\">\r\n                          <p>FREE SHIPPING</p>\r\n                          <span class=\"text-muted m-0\">Free shipping on all orders over $99</span>\r\n                        </div>\r\n                      </mat-card>\r\n                    </div>\r\n                    <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n                      <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                        <mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-xlg m-0\">monetization_on</mat-icon>\r\n                        <div class=\"content\">\r\n                          <p>MONEY BACK GUARANTEE</p>\r\n                          <span class=\"text-muted m-0\">100% money back guarantee</span>\r\n                        </div>\r\n                      </mat-card>\r\n                    </div>\r\n                    <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n                      <mat-card class=\"light-block no-bd\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                        <mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-xlg m-0\">history</mat-icon>\r\n                        <div class=\"content\">\r\n                          <p>ONLINE SUPPORT 24/7</p>\r\n                          <span class=\"text-muted m-0\">Call us: 02 3555 65454 55</span>\r\n                        </div>\r\n                      </mat-card>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"products sec-padding prod-three\">\r\n                    <h3>POPULAR ITEMS</h3>\r\n                          <mat-tab-group>\r\n\r\n                              <mat-tab  label=\"FEATURED PRODUCTS\">\r\n\r\n                                       <app-product-carousel-three [product]=\"products | slice:0:8\"></app-product-carousel-three>\r\n\r\n\r\n                              </mat-tab>\r\n\r\n                              <mat-tab label=\"LATEST PRODUCTS\">\r\n\r\n                                      <app-product-carousel-three [product]=\"products | slice:5:13\"></app-product-carousel-three>\r\n\r\n                              </mat-tab>\r\n\r\n                              <mat-tab label=\"ON SALE PRODUCTS\">\r\n\r\n                                        <app-product-carousel-three [product]=\"products | slice:13:22\"></app-product-carousel-three>\r\n\r\n                              </mat-tab>\r\n\r\n                            </mat-tab-group>\r\n\r\n\r\n                    </div>\r\n                    <div class=\"home3-banner-wrap\">\r\n                        <div class=\"banner\">\r\n                          <div fxLayout=\"column\" class=\"text-wrap\">\r\n                              <span class=\"subtitle\">CHECK THE PURE QUALITY</span>\r\n                              <span class=\"main\">EXCLUSIVE CLASS</span>\r\n                              <a href=\"#\">Shop Now</a>\r\n                          </div>\r\n\r\n                          <img src=\"assets/images/bg/hom3-banner.jpg\" alt=\"\">\r\n                        </div>\r\n                    </div>\r\n                    <app-product-vertical [products]=\"products\"></app-product-vertical>\r\n                </div>\r\n         </div>\r\n        </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/home-three/product-carousel-three/product-carousel-three.component.html":
  /*!***********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/home-three/product-carousel-three/product-carousel-three.component.html ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShopHomeThreeProductCarouselThreeProductCarouselThreeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"product-item swiper-container\" [swiper]=\"config\" >\r\n    <div class=\"swiper-wrapper h-100\">\r\n        <div *ngFor=\"let product of product\" class=\"swiper-slide\">\r\n            <mat-card fxLayout=\"column\">\r\n                <div class=\"product-img\">\r\n                    <a class=\"product-link\" [routerLink]=\"['/home/product', product.id]\">\r\n                      <img [src]=\"product.pictures[0].big\" alt=\"\">\r\n                   </a>\r\n                   <div class=\"icons\" fxLayout=\"column\">\r\n                     <a (click)=\"addToWishlist(product)\" class=\"hvr-icon-pulse-shrink\"><mat-icon class=\"hvr-icon mat-icon-lg mat-icon material-icons mr-10\">favorite_border</mat-icon></a>\r\n                     <a (click)=\"openProductDialog(product)\" class=\"hvr-icon-pulse-shrink\"><mat-icon class=\"hvr-icon\">remove_red_eye</mat-icon></a>\r\n                     <a (click)=\"addToCompare(product)\" class=\"hvr-icon-pulse-shrink\"><mat-icon class=\"hvr-icon\">cached</mat-icon></a>\r\n                    </div>\r\n                </div>\r\n                 <div class=\"product-info-wrapper\">\r\n                    <span class=\"category\">{{product.category}}</span>\r\n                    <div class=\"title-wrap\">\r\n                       <h4>{{product.name}}</h4>\r\n                    </div>\r\n                    <div class=\"stars\">\r\n                       <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                       <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                       <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                       <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                       <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                    </div>\r\n                    <div class=\"price-wrap\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                     <p>${{product.price | number : '1.2-2'}}</p>\r\n                     <button (click)=\"addToCart(product)\" mat-mini-fab color=\"primary\"><mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-lg mat-icon material-icons\">shopping_cart</mat-icon></button>\r\n                  </div>\r\n                   \r\n                 </div>\r\n              </mat-card>\r\n        </div>\r\n\r\n    </div>\r\n    <button mat-mini-fab class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n    <button mat-mini-fab class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button>\r\n  </div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/home-two/home-two.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/home-two/home-two.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShopHomeTwoHomeTwoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"carousel-2\">\r\n    <div class=\"container ctn-box\"  >\r\n      <div class=\"\" fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\">\r\n          <div class=\"slider-categories\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.md=\"40\">\r\n              <div class=\"categories-wrap\" >\r\n                  <div class=\"title\"> TOP CATEGORIES</div>\r\n                    <app-categories></app-categories>\r\n                    <div class=\"btn-sale\">\r\n                        <button mat-raised-button color=\"primary\">USE THE DISCOUNT - 60% OFF</button>\r\n                    </div>\r\n                    </div>\r\n          </div>\r\n          <div class=\"carousel-2-wrapper\" fxLayout.sm=\"column\" fxFlex=\"100\" fxFlex.gt-md=\"75\" fxFlex.md=\"60\" fxFlex.sm=\"100\">\r\n              <app-main-carousel [slides]=\"slides\"></app-main-carousel>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"home-2-wrap\">\r\n      <div class=\"info-bar2-wrap\">\r\n          <div class=\"container\">\r\n            <div fxLayout=\"row wrap\" class=\"info-bar\">\r\n                <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n                    <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                      <mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-xlg  m-0\">card_giftcard</mat-icon>\r\n                      <div class=\"content\">\r\n                        <p>BONUS PLUS</p>\r\n                        <span class=\"text-muted m-0\">Get a bonus plus for buying more that three products</span>\r\n                      </div>\r\n                    </mat-card>\r\n                  </div>\r\n                  <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n                    <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                      <mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-xlg  m-0\">local_shipping</mat-icon>\r\n                      <div class=\"content\">\r\n                        <p>FREE SHIPPING</p>\r\n                        <span class=\"text-muted m-0\">Free shipping on all orders over $99</span>\r\n                      </div>\r\n                    </mat-card>\r\n                  </div>\r\n                  <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n                    <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                      <mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-xlg m-0\">monetization_on</mat-icon>\r\n                      <div class=\"content\">\r\n                        <p>MONEY BACK GUARANTEE</p>\r\n                        <span class=\"text-muted m-0\">100% money back guarantee</span>\r\n                      </div>\r\n                    </mat-card>\r\n                  </div>\r\n                  <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n                    <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                      <mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-xlg m-0\">history</mat-icon>\r\n                      <div class=\"content\">\r\n                        <p>ONLINE SUPPORT 24/7</p>\r\n                        <span class=\"text-muted m-0\">Call us: 02 3555 65454 55</span>\r\n                      </div>\r\n                    </mat-card>\r\n                  </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"products sec-padding\">\r\n            <div class=\"container\">\r\n                <mat-tab-group>\r\n\r\n                    <mat-tab  label=\"FEATURED PRODUCTS\">\r\n\r\n                             <app-product-carousel-two [product]=\"products | slice:0:5\"></app-product-carousel-two>\r\n\r\n\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"LATEST PRODUCTS\">\r\n\r\n                            <app-product-carousel-two [product]=\"products | slice:5:13\"></app-product-carousel-two>\r\n\r\n                    </mat-tab>\r\n\r\n                    <mat-tab label=\"ON SALE PRODUCTS\">\r\n\r\n                              <app-product-carousel-two [product]=\"products | slice:13:22\"></app-product-carousel-two>\r\n\r\n                    </mat-tab>\r\n\r\n                  </mat-tab-group>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"banners-wrap\">\r\n              <div class=\"container\">\r\n                  <app-banners [banners]=\"banners\"></app-banners>\r\n              </div>\r\n          </div>\r\n          <div class=\"products-vertical-wrap\">\r\n              <div class=\"container\">\r\n                  <app-product-vertical [products]=\"products\"></app-product-vertical>\r\n              </div>\r\n          </div>\r\n  </div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/home-two/product-carousel-two/product-carousel-two.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/home-two/product-carousel-two/product-carousel-two.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShopHomeTwoProductCarouselTwoProductCarouselTwoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"product-item swiper-container\" [swiper]=\"config\" >\r\n   <div class=\"swiper-wrapper h-100\">\r\n       <div *ngFor=\"let product of product\" class=\"swiper-slide\">\r\n           <mat-card fxLayout=\"column\">\r\n               <div class=\"product-img\">\r\n                   <a class=\"product-link\" [routerLink]=\"['/home/product', product.id]\">\r\n                     <img [src]=\"product.pictures[0].big\" alt=\"\">\r\n                  </a>\r\n                  <div class=\"icons\" fxLayout=\"column\">\r\n                   <a (click)=\"addToWishlist(product)\" class=\"hvr-icon-pulse-shrink\"><mat-icon class=\"hvr-icon mat-icon-lg mat-icon material-icons mr-10\">favorite_border</mat-icon></a>\r\n                   <a (click)=\"openProductDialog(product)\" class=\"hvr-icon-pulse-shrink\"><mat-icon class=\"hvr-icon\">remove_red_eye</mat-icon></a>\r\n                   <a (click)=\"addToCompare(product)\" class=\"hvr-icon-pulse-shrink\"><mat-icon class=\"hvr-icon\">cached</mat-icon></a>\r\n                  </div>\r\n              \r\n               </div>\r\n                <div class=\"product-info-wrapper\">\r\n                   <span class=\"category\">{{product.category}}</span>\r\n                   <div class=\"title-wrap\">\r\n                      <h4>{{product.name}}</h4>\r\n                   </div>\r\n                   <div class=\"stars\">\r\n                      <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                      <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                      <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                      <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                      <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                   </div>\r\n                   <div class=\"price-wrap\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <p>${{product.price | number : '1.2-2'}}</p>\r\n                   <button (click)=\"addToCart(product)\" mat-mini-fab color=\"primary\"><mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-lg mat-icon material-icons\">shopping_cart</mat-icon></button>\r\n                   </div>\r\n                   \r\n                </div>\r\n             </mat-card>\r\n       </div>\r\n\r\n   </div>\r\n   <button mat-mini-fab class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n   <button mat-mini-fab class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button>\r\n </div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/home/home.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/home/home.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShopHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-main-carousel [slides]=\"slides\"></app-main-carousel>\r\n<div class=\"home-1-wrap\">\r\n  <div class=\"container\">\r\n      <div fxLayout=\"row wrap\" class=\"info-bar\">\r\n        <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n          <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n            <mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-xlg  m-0\">card_giftcard</mat-icon>\r\n            <div class=\"content\">\r\n              <p>BONUS PLUS</p>\r\n              <span class=\"text-muted m-0\">Get a bonus plus for buying more that three products</span>\r\n            </div>\r\n          </mat-card>\r\n        </div>\r\n        <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n          <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n            <mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-xlg  m-0\">local_shipping</mat-icon>\r\n            <div class=\"content\">\r\n              <p>FREE SHIPPING</p>\r\n              <span class=\"text-muted m-0\">Free shipping on all orders over $99</span>\r\n            </div>\r\n          </mat-card>\r\n        </div>\r\n        <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n          <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n            <mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-xlg m-0\">monetization_on</mat-icon>\r\n            <div class=\"content\">\r\n              <p>MONEY BACK GUARANTEE</p>\r\n              <span class=\"text-muted m-0\">100% money back guarantee</span>\r\n            </div>\r\n          </mat-card>\r\n        </div>\r\n        <div class=\"card-wrap\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"50\">\r\n          <mat-card class=\"light-block no-bd\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n            <mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-xlg m-0\">history</mat-icon>\r\n            <div class=\"content\">\r\n              <p>ONLINE SUPPORT 24/7</p>\r\n              <span class=\"text-muted m-0\">Call us: 02 3555 65454 55</span>\r\n            </div>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n      <div class=\"products sec-padding\">\r\n          <mat-tab-group>\r\n\r\n            <mat-tab  label=\"FEATURED PRODUCTS\">\r\n\r\n                     <app-product-carousel [product]=\"products | slice:0:8\"></app-product-carousel>\r\n\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"LATEST PRODUCTS\">\r\n\r\n                    <app-product-carousel [product]=\"products | slice:0:14\"></app-product-carousel>\r\n\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"ON SALE PRODUCTS\">\r\n\r\n                      <app-product-carousel [product]=\"products | slice:14:22\"></app-product-carousel>\r\n\r\n            </mat-tab>\r\n\r\n          </mat-tab-group>\r\n        </div>\r\n      <app-banners [banners]=\"banners\"></app-banners>\r\n      <app-product-vertical [products]=\"products\"></app-product-vertical>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/home/product-carousel/product-carousel.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/home/product-carousel/product-carousel.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShopHomeProductCarouselProductCarouselComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "    <div class=\"product-item swiper-container\" [swiper]=\"config\" >\r\n        <div class=\"swiper-wrapper h-100\">\r\n            <div *ngFor=\"let product of product\" class=\"swiper-slide\">\r\n                <mat-card fxLayout=\"column\">\r\n                    <div class=\"product-img\">\r\n                        <a class=\"product-link\" [routerLink]=\"['/home/product', product.id]\">\r\n                          <img [src]=\"product.pictures[0].big\" alt=\"\">\r\n                       </a>\r\n                       <div class=\"icons\" fxLayout=\"column\">\r\n                        <a (click)=\"addToWishlist(product)\" class=\"hvr-icon-pulse-shrink\"><mat-icon class=\"hvr-icon mat-icon-lg mat-icon material-icons mr-10\">favorite_border</mat-icon></a>\r\n                        <a (click)=\"openProductDialog(product)\" class=\"hvr-icon-pulse-shrink\"><mat-icon class=\"hvr-icon\">remove_red_eye</mat-icon></a>\r\n                        <a (click)=\"addToCompare(product)\" class=\"hvr-icon-pulse-shrink\"><mat-icon class=\"hvr-icon\">cached</mat-icon></a>\r\n                       </div>\r\n                   \r\n                    </div>\r\n                     <div class=\"product-info-wrapper\">\r\n                        <span class=\"category\">{{product.category}}</span>\r\n                        <div class=\"title-wrap\">\r\n                           <h4>{{product.name}}</h4>\r\n                        </div>\r\n                        <div class=\"stars\">\r\n                           <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                           <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                           <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                           <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                           <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                        </div>\r\n                        <div class=\"price-wrap\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                         <p>${{product.price | number : '1.2-2'}}</p>\r\n                        <button (click)=\"addToCart(product)\" mat-mini-fab color=\"primary\"><mat-icon mat-stroked-button color=\"primary\" class=\"mat-icon-lg mat-icon material-icons\">shopping_cart</mat-icon></button>\r\n                        </div>\r\n                        \r\n                     </div>\r\n                  </mat-card>\r\n            </div>\r\n\r\n        </div>\r\n        <button mat-mini-fab class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n        <button mat-mini-fab class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button>\r\n      </div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/main-carousel/main-carousel.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/main-carousel/main-carousel.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShopMainCarouselMainCarouselComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n    <div class=\"main-slider\">\r\n        <div class=\"swiper-container h-100\" [swiper]=\"config\">\r\n          <div class=\"swiper-wrapper h-100\">\r\n            <div *ngFor=\"let slide of slides\" class=\"swiper-slide\" >\r\n\r\n                    <div [attr.data-background]=\"slide.image\" class=\"slide-item swiper-lazy\">\r\n                      <div class=\"container sl-wrap\">\r\n                          <div class=\"swiper-lazy-preloader swiper-lazy-preloader-white\"></div>\r\n\r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"center left\" class=\"content\">\r\n                            <h1>{{slide.title}}</h1>\r\n                            <h3>{{slide.subtitle}}</h3>\r\n                            <button mat-raised-button color=\"primary\">Shop now</button>\r\n                          </div>\r\n                      </div>\r\n\r\n                    </div>\r\n\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"swiper-pagination white\"></div>\r\n          <button mat-mini-fab color=\"primary\" class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n          <button mat-mini-fab color=\"primary\" class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/price/price.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/price/price.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShopProductsPricePriceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"price-slider\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"text-muted\">\r\n      <span>From: <b>${{priceFrom}}</b></span>\r\n      <span>To: <b>${{priceTo}}</b></span>\r\n  </div>\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"filter-price\">\r\n      <mat-slider (change)=\"priceFilter()\" color=\"primary\" max=\"2000\" min=\"1\" thumb-label=\"true\" [(ngModel)]=\"priceFrom\"></mat-slider>\r\n      <mat-slider (change)=\"priceFilter()\" color=\"warn\" max=\"2000\" min=\"1\" thumb-label=\"true\" [(ngModel)]=\"priceTo\"></mat-slider>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product-details/product-details.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product-details/product-details.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShopProductsProductDetailsProductDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <div class=\"details-wrapper sec-padding\" >\r\n       <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"80\">\r\n          <div fxLayout=\"row wrap\" fxFlex=\"100\" fxFlex.gt-md=\"100\" fxFlex.gt-sm=\"100\">\r\n              <div fxFlex=\"100\" fxFlex.gt-md=\"50\" fxFlex.md=\"45\">\r\n                  <!-- <mat-card class=\"product-image\">\r\n                     <div *ngFor=\"let image of product.pictures\">\r\n                        <ngx-image-zoom   [thumbImage]=\"image\" [fullImage]=\"image\" zoomMode=\"hover\"\r\n                    ></ngx-image-zoom>\r\n                     </div>\r\n                  </mat-card> -->\r\n                  <mat-card class=\"product-image\">\r\n                    <div>\r\n                       <button mat-icon-button  fxHide=\"false\" fxHide.gt-md>\r\n                          <mat-icon>fullscreen</mat-icon>\r\n                       </button>\r\n                       <img [src]=\"product.pictures[bigProductImageIndex].big\"/>\r\n                    </div>\r\n                    <a (click)=\"openProductDialog(product, bigProductImageIndex)\" style=\"cursor: pointer;\"><mat-icon>zoom_in</mat-icon></a>\r\n                 </mat-card>\r\n\r\n\r\n                <div class=\"small-carousel\">\r\n                    <div class=\"swiper-container\" [swiper]=\"config\">\r\n                        <div class=\"swiper-wrapper\">\r\n                            <div *ngFor=\"let image of product?.pictures; let i=index\" class=\"swiper-slide\">\r\n                                <mat-card (click)=\"selectImage(i)\" class=\"p-1\">\r\n                                    <img [src]=\"image.small\" class=\"swiper-lazy\"/>\r\n                                    <div class=\"swiper-lazy-preloader\"></div>\r\n                                </mat-card>\r\n                            </div>\r\n                        </div>\r\n                        <button mat-icon-button class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n                        <button mat-icon-button class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button>\r\n                    </div>\r\n                </div>\r\n               </div>\r\n               <div fxFlex=\"100\" fxFlex.gt-md=\"50\" fxFlex.md=\"55\" ngClass.gt-sm=\"px-3 m-0\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\">\r\n\r\n                  <div class=\"product-right\">\r\n                     <div class=\"product-details\">\r\n                        <h2>{{product.name}}</h2>\r\n                        <h4 *ngIf=\"!productsService?.catalogMode\"><del>{{product.salePrice | currency:productsService?.currency:'symbol'}}</del><span>{{product.discount}}% off</span></h4>\r\n                        <h3 class=\"price\" *ngIf=\"!productsService?.catalogMode\">{{product.price | currency:productsService?.currency:'symbol'}}</h3>\r\n                        <p class=\"text-muted description\">{{product.description}}</p>\r\n                     </div>\r\n                     <div class=\"py-1 mt-15\">\r\n                        <p>\r\n                           <span class=\"text-muted fw-500\">Avalibility: </span>\r\n                           <span class=\"avalibility\" *ngIf=\"counter <= product.stock\"><span>In Stock</span></span>\r\n                           <span class=\"avalibility\" *ngIf=\"counter > product.stock\"><span>Out of Stock</span></span>\r\n                        </p>\r\n                     </div>\r\n                     <div class=\"quantity\">\r\n                        <span class=\"text-muted fw-500\">Quantity</span>\r\n                        <div fxLayout=\"row\" fxLayout.xs=\"column\"  class=\"text-muted\">\r\n                           <div fxLayout=\"row\" fxLayoutAlign=\"center start\">\r\n                              <button mat-icon-button matTooltip=\"Remove\" (click)=\"decrement()\">\r\n                                 <mat-icon>remove</mat-icon>\r\n                              </button>\r\n                              <input type=\"text\" name=\"quantity\" value=\"{{counter}}\" class=\"form-control input-number\">\r\n                              <button mat-icon-button matTooltip=\"Add\" (click)=\"increment()\">\r\n                                 <mat-icon>add</mat-icon>\r\n                              </button>\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                     <div class=\"buttons mt-20\">\r\n                        <button mat-raised-button color=\"primary\" class=\"btn-project mr-10\" (click)=\"addToCart(product, counter)\">ADD TO CARD</button>\r\n                        <button mat-raised-button color=\"primary\" class=\"btn-project\" (click)=\"buyNow(product, counter)\">BUY NOW</button>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n          </div>\r\n\r\n          <div class=\"review-wrapper\" fxFlex=\"100\"  fxFlex.md=\"75\">\r\n            <mat-card>\r\n               <mat-tab-group [@.disabled]=\"true\" [selectedIndex]=\"0\">\r\n               <mat-tab label=\"Description\">\r\n                  <div class=\"full-desc lh\">\r\n                     <p class=\"text-muted\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n                  </div>\r\n               </mat-tab>\r\n               <mat-tab label=\"Details\">\r\n                  <div class=\"full-desc lh text-muted\">\r\n                     <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n                     <ul class=\"px-2 mt-1\">\r\n                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\r\n                        <li>Aenean vehicula, tortor gravida elementum tincidunt, justo lorem vestibulum ex, eget egestas arcu tellus in magna. Vivamus gravida, ipsum vel luctus luctus, nisi felis vestibulum est, nec interdum tellus leo quis tellus. Sed sit amet convallis enim, in laoreet orci.</li>\r\n                        <li>Donec et elit at nulla congue interdum sit amet varius erat.</li>\r\n                        <li>Nulla sit amet risus pellentesque, dignissim massa ut, dignissim arcu.</li>\r\n                        <li>Morbi dapibus ligula at faucibus tempus. Aenean vehicula, tortor gravida elementum tincidunt, justo lorem vestibulum ex, eget egestas arcu tellus in magna. Vivamus gravida, ipsum vel luctus luctus, nisi felis vestibulum est, nec interdum tellus leo quis tellus. Sed sit amet convallis enim, in laoreet orci.</li>\r\n                        <li>Nunc sodales justo ut nisi euismod, quis condimentum leo varius.</li>\r\n                     </ul>\r\n                  </div>\r\n               </mat-tab>\r\n               <mat-tab label=\"Reviews\">\r\n                  <div class=\"full-desc lh\">\r\n                     <mat-list class=\"reviews\">\r\n                        <mat-list-item class=\"content\">\r\n                           <img matListAvatar [src]=\"'assets/images/avatars/avatar-1.png'\" alt=\"image\" class=\"review-author\">\r\n                           <p matLine fxLayoutAlign=\"start center\">\r\n                              <span class=\"name\">Martina Solsker</span>\r\n                           </p>\r\n                           <p matLine class=\"text-muted\"><small>22 Mart, 2018 at 18:44</small></p>\r\n                           <p matLine class=\"text\">Integer id eros et mi fringilla imperdiet. In dictum turpis eget magna viverra condimentum. Ut malesuada interdum ultrices. Proin tristique sem pellentesque, posuere dui in, maximus magna. Aenean vehicula, tortor gravida elementum tincidunt, justo lorem vestibulum ex, eget egestas arcu tellus in magna.</p>\r\n                        </mat-list-item>\r\n                        <mat-list-item class=\"content\">\r\n                           <img matListAvatar [src]=\"'assets/images/avatars/avatar-2.png'\" alt=\"image\" class=\"review-author\">\r\n                           <p matLine fxLayoutAlign=\"start center\">\r\n                              <span class=\"name\">Deni Aniston</span>\r\n                           </p>\r\n                           <p matLine class=\"text-muted\"><small>09 Octomber, 2018 at 12:22</small></p>\r\n                           <p matLine class=\"text\">Nulla accumsan, lacus sed suscipit rutrum, turpis augue accumsan metus, in accumsan urna mi vehicula lorem. Pellentesque semper nibh vitae augue placerat finibus. Nulla sed porttitor nunc, quis tristique sem. Quisque in varius nisl. Integer turpis lorem, ultricies sed sem nec, commodo molestie arcu. Nulla finibus ex tortor, et suscipit magna semper consectetur. Cras sit amet metus dui. Maecenas eget dui at ex varius malesuada vel non felis.</p>\r\n                        </mat-list-item>\r\n                        <mat-list-item class=\"content\">\r\n                           <img matListAvatar [src]=\"'assets/images/avatars/avatar-3.png'\" alt=\"image\" class=\"review-author\">\r\n                           <p matLine fxLayoutAlign=\"start center\">\r\n                              <span class=\"name\">Simon Ladger</span>\r\n                           </p>\r\n                           <p matLine class=\"text-muted\"><small>14 December, 2018 at 2:10</small></p>\r\n                           <p matLine class=\"text\">Pellentesque hendrerit vel turpis aliquam placerat. Suspendisse ullamcorper congue feugiat. Etiam gravida metus ac massa posuere venenatis. Pellentesque vehicula lobortis dolor, ac pretium dolor maximus quis. Fusce vitae iaculis mauris, quis posuere ex. Mauris vitae convallis nibh. Etiam eget enim at orci interdum maximus nec in ante.</p>\r\n                        </mat-list-item>\r\n                     </mat-list>\r\n                     <div class=\"writte-reviews mt-40\">\r\n                        <h3 class=\"mt-2\">LEAVE YOUR REVIEW</h3>\r\n                        <div class=\"divider\"></div>\r\n                        <p class=\"mt-2 text-muted\">Your email address will not be published. Required fields are marked *</p>\r\n                        <h3 fxLayoutAlign=\"start center\" class=\"mt-2\">\r\n                           <span>Your Rating:</span>\r\n                           <button mat-icon-button matTooltip=\"Very Dissatisfied\" matTooltipPosition=\"above\">\r\n                              <mat-icon class=\"mat-icon-lg\">sentiment_very_dissatisfied</mat-icon>\r\n                           </button>\r\n                           <button mat-icon-button matTooltip=\"Dissatisfied\" matTooltipPosition=\"above\">\r\n                              <mat-icon class=\"mat-icon-lg\">sentiment_dissatisfied</mat-icon>\r\n                           </button>\r\n                           <button mat-icon-button matTooltip=\"Neutral\" matTooltipPosition=\"above\">\r\n                              <mat-icon class=\"mat-icon-lg\">sentiment_neutral</mat-icon>\r\n                           </button>\r\n                           <button mat-icon-button matTooltip=\"Satisfied\" matTooltipPosition=\"above\">\r\n                              <mat-icon class=\"mat-icon-lg\">sentiment_satisfied</mat-icon>\r\n                           </button>\r\n                           <button mat-icon-button matTooltip=\"Very Satisfied\" matTooltipPosition=\"above\">\r\n                              <mat-icon class=\"mat-icon-lg\">sentiment_very_satisfied</mat-icon>\r\n                           </button>\r\n                        </h3>\r\n                        <form fxLayout=\"row wrap\">\r\n                           <div  fxFlex=\"100\" fxFlex.gt-md=\"50\" fxFlex.md=\"50\" class=\"mt-20 pr-5\" ngClass.sm=\"mt-10\" ngClass.xs=\"mt-10\">\r\n                              <mat-form-field class=\"w-100\">\r\n                                 <input matInput placeholder=\"Your Name (required)\" #name=\"ngModel\" ngModel name=\"name\" required>\r\n                                 <mat-error *ngIf=\"name.invalid\">Please enter a valid message</mat-error>\r\n                              </mat-form-field>\r\n                           </div>\r\n                           <div  fxFlex=\"100\" fxFlex.gt-md=\"50\" fxFlex.md=\"50\" class=\"pl-5 mt-20\" ngClass.sm=\"mt-10\" ngClass.xs=\"mt-10\">\r\n                              <mat-form-field class=\"w-100\">\r\n                                 <input matInput placeholder=\"Your Email (required)\" #email=\"ngModel\" ngModel name=\"email\" required>\r\n                                 <mat-error *ngIf=\"email.invalid\">Please enter a valid message</mat-error>\r\n                              </mat-form-field>\r\n                           </div>\r\n                           <div  fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"mt-20\" ngClass.sm=\"mt-10\" ngClass.xs=\"mt-10\">\r\n                              <mat-form-field class=\"w-100\">\r\n                                 <input matInput placeholder=\"Subject\" #subject=\"ngModel\" ngModel name=\"subject\" required>\r\n                                 <mat-error *ngIf=\"subject.invalid\">Please enter a valid message</mat-error>\r\n                              </mat-form-field>\r\n                           </div>\r\n                           <div  fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"mt-20\" ngClass.sm=\"mt-10\" ngClass.xs=\"mt-10\">\r\n                              <mat-form-field class=\"w-100\">\r\n                                 <textarea placeholder=\"Post content\" matInput rows=\"6\" ngModel name=\"content\" required></textarea>\r\n                              </mat-form-field>\r\n                           </div>\r\n                           <div class=\"button-wrap\" fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\r\n                              <button class=\"btn-project\" mat-raised-button color=\"accent\" type=\"submit\">Submit Review</button>\r\n                           </div>\r\n                        </form>\r\n                     </div>\r\n                  </div>\r\n               </mat-tab>\r\n               </mat-tab-group>\r\n            </mat-card>\r\n         </div>\r\n\r\n         <div class=\"products sec-padding\">\r\n            <div class=\"title\">\r\n                <h4 class=\"widget-title\">Featured Products</h4>\r\n              </div>\r\n          <app-product-carousel-three [product]=\"products | slice:0:6\"></app-product-carousel-three>\r\n         </div>\r\n       </div>\r\n       <div fxLayout=\"row wrap\" fxHide fxShow.gt-sm fxFlex=\"100\" fxFlex.gt-sm=\"22\">\r\n        <div fxFlex=\"100\"  >\r\n          <div fxLayout=\"row wrap\" class=\"info-bar\" ngClass.gt-md=\"m-0\">\r\n             <div fxFlex=\"100\" >\r\n                <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                   <mat-icon class=\"mat-icon-xlg  m-0\">card_giftcard</mat-icon>\r\n                   <div class=\"content ml-10\">\r\n                      <p>BONUS PLUS</p>\r\n                      <span class=\"text-muted m-0\">Get a bonus plus for buying more that three products</span>\r\n                   </div>\r\n                </mat-card>\r\n             </div>\r\n             <div fxFlex=\"100\" >\r\n                <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                   <mat-icon class=\"mat-icon-xlg  m-0\">local_shipping</mat-icon>\r\n                   <div class=\"content ml-10\">\r\n                      <p>FREE SHIPPING</p>\r\n                      <span class=\"text-muted m-0\">Free shipping on all orders over $99</span>\r\n                   </div>\r\n                </mat-card>\r\n             </div>\r\n             <div fxFlex=\"100\"  class=\"mt-16\">\r\n                <mat-card class=\"light-block\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                   <mat-icon class=\"mat-icon-xlg m-0\">monetization_on</mat-icon>\r\n                   <div class=\"content ml-10\">\r\n                      <p>MONEY BACK GUARANTEE</p>\r\n                      <span class=\"text-muted m-0\">100% money back guarantee</span>\r\n                   </div>\r\n                </mat-card>\r\n             </div>\r\n             <div fxFlex=\"100\"  class=\"mt-16\">\r\n                <mat-card class=\"light-block no-border\" fxLayout=\"row\"  fxLayoutAlign=\"start center\">\r\n                   <mat-icon class=\"mat-icon-xlg m-0\">history</mat-icon>\r\n                   <div class=\"content ml-10\">\r\n                      <p>ONLINE SUPPORT 24/7</p>\r\n                      <span class=\"text-muted m-0\">Call us: 02 3555 65454 55</span>\r\n                   </div>\r\n                </mat-card>\r\n             </div>\r\n\r\n          </div>\r\n          <mat-toolbar color=\"primary\" >\r\n            <div class=\"sale-widget\">\r\n               <span class=\"sale-widget1\">\r\n                  BIG SALLE\r\n              </span>\r\n              <span class=\"sale-widget2\">\r\n                 DO NOT MISS IT!\r\n             </span>\r\n              <span class=\"discount\">60</span>\r\n              <div class=\"percent\">\r\n                <span>%</span>off\r\n              </div>\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nects.</p>\r\n            </div>\r\n             <mat-toolbar-row>\r\n              \r\n             </mat-toolbar-row>\r\n         \r\n          </mat-toolbar> \r\n         \r\n       </div>\r\n       </div>\r\n\r\n    </div>\r\n    <!-- <div class=\"py-2 mt-2\">\r\n       <h2>Related Products</h2>\r\n       <div class=\"divider\"></div>\r\n       <app-products-carousel [products]=\"relatedProducts\"></app-products-carousel>\r\n       </div> -->\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product-details/product-zoom/product-zoom.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product-details/product-zoom/product-zoom.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShopProductsProductDetailsProductZoomProductZoomComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"product-dialog\">\r\n\r\n  <div class=\"close-btn-outer\">\r\n    <button mat-mini-fab color=\"warn\" (click)=\"close()\"><mat-icon>close</mat-icon></button>\r\n  </div>\r\n  <div mat-dialog-content>\r\n    <div fxLayout=\"row wrap\" >\r\n        <div>\r\n            <div class=\"swiper-container h-100\">\r\n                <div class=\"swiper-wrapper\">\r\n                  <img [src]=\"product.pictures[selectedProductImageIndex].big\" alt=\"\" class=\"img-fluid\">\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  </div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product-dialog/product-dialog.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product-dialog/product-dialog.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShopProductsProductDialogProductDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"product-dialog\">\r\n\r\n  <div class=\"close-btn-outer\">\r\n    <button mat-mini-fab color=\"warn\" (click)=\"close()\"><mat-icon>close</mat-icon></button>\r\n  </div>\r\n  <div mat-dialog-content>\r\n    <div fxLayout=\"row wrap\" >\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\">\r\n            <div class=\"swiper-container h-100\">\r\n                <div class=\"swiper-wrapper\">\r\n                  <img [src]=\"product.pictures[0].big\" alt=\"\" class=\"img-fluid\">\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" ngClass.gt-sm=\"px-2 m-0\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\">\r\n          <div class=\"product-right\">\r\n              <div class=\"product-details\">\r\n                  <h2 class=\"mb-10\">{{product.name}}</h2>\r\n                <h4 class=\"mb-10\" ><del>{{product.salePrice | currency:productsService?.currency:'symbol'}}</del><span>{{product.discount}}% off</span></h4>\r\n                <h3 class=\"price mb-10\">{{product.price | currency:productsService?.currency:'symbol' }}</h3>\r\n                <div class=\"discription\">\r\n                  <p class=\"bold\">Product details</p>\r\n                  <p class=\"text-muted productDescription\">{{product.description}}</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"py-1 mt-15\">\r\n                <p>\r\n                  <span class=\"text-muted fw-500\">Avalibility: </span>\r\n                <span class=\"avalibility\" *ngIf=\"counter <= product.stock\"><span>In Stock</span></span>\r\n                <span class=\"avalibility\" *ngIf=\"counter > product.stock\"><span class=\"red\">Out of Stock</span></span>\r\n              </p>\r\n            </div>\r\n            <div class=\"\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" >\r\n              <div class=\"quantity mt-15\">\r\n                <span class=\"text-muted fw-500\">Quantity</span>\r\n                <div fxLayout=\"row\" fxLayout.xs=\"column\"  class=\"text-muted mt-15\">\r\n                  <div fxLayout=\"row\" fxLayoutAlign=\"center start\">\r\n                      <button mat-icon-button matTooltip=\"Remove\" (click)=\"decrement()\"><mat-icon>remove</mat-icon></button>\r\n                      <input type=\"text\" name=\"quantity\" value=\"{{counter}}\" class=\"form-control input-number\">\r\n                      <button mat-icon-button matTooltip=\"Add\" (click)=\"increment()\"><mat-icon>add</mat-icon></button>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"buttons mt-40\">\r\n              <mat-icon mat-stroked-button color=\"primary\" (click)=\"addToCart(product, counter)\" class=\"mat-icon-lg mat-icon material-icons\">shopping_cart</mat-icon>\r\n              <mat-icon mat-stroked-button color=\"primary\" (click)=\"buyNow()\" class=\"hvr-icon\">remove_red_eye</mat-icon>\r\n          </div>\r\n            </div>\r\n            \r\n          </div>\r\n\r\n\r\n\r\n        </div>\r\n    </div>\r\n  </div>\r\n\r\n  </div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product-left-sidebar/product-left-sidebar.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product-left-sidebar/product-left-sidebar.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShopProductsProductLeftSidebarProductLeftSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"left-sidebar-wrapper sec-padding\">\r\n<div class=\"container\">\r\n  <div class=\"sidebar-wrapper\" fxLayout='row' fxLayout.lt-md=\"column\" >\r\n      <div fxFlex=\"25\" fxFlex.lt-sm=\"100\" class=\"filter-sidenav\" perfectScrollbar>\r\n          <div class=\"toggles-wrapper\" fxLayout=\"column\" fxLayout.lt-md=\"column\">\r\n              <div class=\"toggles\" fxFlex.lt-md=\"100\">\r\n                  <mat-accordion>\r\n                      <mat-expansion-panel>\r\n                        <mat-expansion-panel-header>\r\n                          <mat-panel-title>\r\n                              <span>Categories</span>\r\n                          </mat-panel-title>\r\n                        </mat-expansion-panel-header>\r\n                    <app-categories></app-categories>\r\n                      </mat-expansion-panel>\r\n                      <mat-expansion-panel>\r\n                          <mat-expansion-panel-header>\r\n                            <mat-panel-title>\r\n                                <span>Brands</span>\r\n                            </mat-panel-title>\r\n                          </mat-expansion-panel-header>\r\n\r\n                          <div class=\"brands\">\r\n                             <app-brands (brandChanged)=\"onBrendsChanged($event)\"></app-brands>\r\n                           </div>\r\n                        </mat-expansion-panel>\r\n                        <mat-expansion-panel>\r\n                            <mat-expansion-panel-header>\r\n                              <mat-panel-title>\r\n                                  <span>Price</span>\r\n                              </mat-panel-title>\r\n                            </mat-expansion-panel-header>\r\n\r\n                            <app-price (priceFilters)=\"updatePriceFilters($event)\"></app-price>\r\n                          </mat-expansion-panel>\r\n                    </mat-accordion>\r\n              </div>\r\n                  <div class=\"popular-products\" fxFlex.lt-md=\"100\">\r\n                    <app-popular-products></app-popular-products>\r\n                  </div>\r\n          </div>\r\n\r\n          </div>\r\n        <div fxFlex=\"75\" fxFlex.lt-sm=\"100\" class=\"all-products\" ngClass.gt-sm=\"p-left\">\r\n            <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\" fxHide.lt-md=\"true\" class=\"filter-row mat-elevation-z1 text-muted\">\r\n                <button *ngIf=\"!sidenavOpen\" mat-icon-button (click)=\"sidenav.toggle()\">\r\n                    <mat-icon>more_vert</mat-icon>\r\n                </button>\r\n                <div >\r\n                    <select (change)=\"onChangeSorting($event.target.value)\">\r\n                        <option value=\"asc\">Sorting items</option>\r\n                        <option value=\"asc\">Ascending Order</option>\r\n                        <option value=\"desc\">Descending Order</option>\r\n                        <option value=\"a-z\">Alphabetically, A-Z</option>\r\n                        <option value=\"z-a\">Alphabetically, Z-A</option>\r\n                        <option value=\"low\">Price, low to high</option>\r\n                        <option value=\"high\">Price, high to low</option>\r\n                      </select>\r\n\r\n                </div>\r\n                <div>\r\n\r\n                    <button mat-icon-button (click)=\"changeViewType('list', 100)\">\r\n                        <mat-icon>view_list</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button (click)=\"changeViewType('list', 33.3)\">\r\n                        <mat-icon>view_module</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button (click)=\"changeViewType('list', 25)\">\r\n                        <mat-icon>view_comfy</mat-icon>\r\n                    </button>\r\n                </div>\r\n              </div>\r\n              <div [@Animation]=\"animation\" fxLayout=\"row wrap\" class=\"products-wrapper\">\r\n                  <div *ngFor=\"let products of allItems | orderBy:sortByOrder | paginate: { itemsPerPage: 12, currentPage: page  }\" fxFlex=\"100\" [fxFlex.gt-sm]=\"viewCol\" fxFlex.sm=\"50\" class=\"col\">\r\n                     <div class=\"product-box\">\r\n                        <app-product [product]=\"products\"></app-product>\r\n                     </div>\r\n                  </div>\r\n              </div>\r\n\r\n              <div *ngIf=\"products.length > 0\" fxLayout=\"row wrap \">\r\n                  <div fxFlex=\"100\">\r\n                      <mat-card class=\"p-0 text-center no-shadow\">\r\n                          <pagination-controls class=\"product-pagination\" autoHide=\"true\" maxSize=\"5\" (pageChange)=\"onPageChanged($event)\"></pagination-controls>\r\n                      </mat-card>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n  </div>\r\n</div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product-vertical/product-vertical.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product-vertical/product-vertical.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShopProductsProductVerticalProductVerticalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"vertical-products sec-padding\">\r\n  <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"start start\" class=\"p-0\">\r\n      <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"product-panel\">\r\n        <div class=\"widget-column\">\r\n            <div class=\"title\">\r\n                <h4 class=\"widget-title\">Featured Products</h4>\r\n              </div>\r\n              <ul class=\"product-list\">\r\n                <li *ngFor=\"let product of products | slice:0:3 \" fxLayout=\"row\">\r\n                  <div class=\"media-image\">\r\n                    <a [routerLink]=\"['/home/product', product.id]\"><img [src]=\"product.pictures[0].big\" class=\"small\" alt=\"\"> </a>\r\n                  </div>\r\n                  <div class=\"media-body\">\r\n                    <a [routerLink]=\"['/home/product', product.id]\"><span>{{product.name}}</span></a>\r\n                    <div class=\"stars\">\r\n                        <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                        <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                        <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                        <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                        <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                     </div>\r\n                     <p class=\"price\">{{product.price | number : '1.2-2' }}</p>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n        </div>\r\n      </div>\r\n      <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"product-panel\">\r\n          <div class=\"widget-column\">\r\n              <div class=\"title\">\r\n                  <h4 class=\"widget-title\">Top Selling Products</h4>\r\n                </div>\r\n                <ul class=\"product-list\">\r\n                  <li *ngFor=\"let product of products | slice:6:9 \" fxLayout=\"row\">\r\n                    <div class=\"media-image\">\r\n                      <a [routerLink]=\"['/home/product', product.id]\"><img [src]=\"product.pictures[0].big\" class=\"small\" alt=\"\"> </a>\r\n                    </div>\r\n                    <div class=\"media-body\">\r\n                      <a [routerLink]=\"['/home/product', product.id]\"><span>{{product.name}}</span></a>\r\n                      <div class=\"stars\">\r\n                          <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                          <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                          <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                          <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                          <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                       </div>\r\n                       <p class=\"price\">{{product.price | number : '1.2-2'}}</p>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n          </div>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"product-panel\">\r\n            <div class=\"widget-column\">\r\n                <div class=\"title\">\r\n                    <h4 class=\"widget-title\">Hot Offer</h4>\r\n                  </div>\r\n                  <ul class=\"product-list\">\r\n                    <li *ngFor=\"let product of products | slice:9:12 \" fxLayout=\"row\">\r\n                      <div class=\"media-image\">\r\n                        <a ><img [routerLink]=\"['/home/product', product.id]\" [src]=\"product.pictures[0].big\" class=\"small\" alt=\"\"> </a>\r\n                      </div>\r\n                      <div class=\"media-body\">\r\n                       <a [routerLink]=\"['/home/product', product.id]\"><span>{{product.name}}</span></a>\r\n                        <div class=\"stars\">\r\n                            <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                            <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                            <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                            <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                            <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                         </div>\r\n                         <p class=\"price\">{{product.price | number : '1.2-2'}}</p>\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n            </div>\r\n          </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product/product.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product/product.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShopProductsProductProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"product-item\"  >\r\n  <mat-card fxLayout=\"column\">\r\n    <div class=\"product-img\">\r\n        <a class=\"product-link\" [routerLink]=\"['/home/product', product.id]\">\r\n          <img [src]=\"product.pictures[0].big\" alt=\"\">\r\n       </a>\r\n       <div class=\"icons\" fxLayout=\"column\">\r\n         <a (click)=\"addToWishlist(product)\" class=\"hvr-icon-pulse-shrink\"><mat-icon class=\"hvr-icon mat-icon-lg mat-icon material-icons mr-10\">favorite_border</mat-icon></a>\r\n         <a (click)=\"openProductDialog(product)\" class=\"hvr-icon-pulse-shrink\"><mat-icon class=\"hvr-icon\">remove_red_eye</mat-icon></a>\r\n         <a (click)=\"addToCompare(product)\" class=\"hvr-icon-pulse-shrink\"><mat-icon class=\"hvr-icon\">cached</mat-icon></a>\r\n        </div>\r\n    </div>\r\n     <div class=\"product-info-wrapper\">\r\n        <span class=\"category\">{{product.category}}</span>\r\n        <div class=\"title-wrap\">\r\n           <h4>{{product.name}}</h4>\r\n        </div>\r\n        <div class=\"stars\">\r\n           <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n           <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n           <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n           <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n           <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n        </div>\r\n        <div class=\"price-wrap\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n         <p>{{product.price | currency:productsService?.currency:'symbol'}}</p>\r\n        <button (click)=\"addToCart(product)\" mat-mini-fab color=\"primary\"><mat-icon class=\"mat-icon-lg mat-icon material-icons\">shopping_cart</mat-icon></button>\r\n        </div>\r\n     </div>\r\n  </mat-card>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/products.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/products.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShopProductsProductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\r\n  products works!\r\n</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/widgets/brands/brands.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/widgets/brands/brands.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShopWidgetsBrandsBrandsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"brands-items\">\r\n    <mat-radio-group\r\n    (change)=\"brendSelect($event)\"\r\n    aria-labelledby=\"example-radio-group-label\"\r\n    class=\"example-radio-group\">\r\n    <mat-radio-button fxLayout=\"row\" class=\"example-radio-button\" *ngFor=\"let brand of brands\" [value]=\"brand\" multiple>\r\n      {{brand}}\r\n    </mat-radio-button>\r\n  </mat-radio-group>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/widgets/categories/categories.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/widgets/categories/categories.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShopWidgetsCategoriesCategoriesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"category-contant\">\r\n    <ul>\r\n        <li><a class=\"no-brd\" [routerLink]=\"['/home/products/all']\">Show All</a></li>\r\n        <li><a [routerLink]=\"['/home/products/Headphones']\">Headphones</a></li>\r\n        <li><a [routerLink]=\"['/home/products/Laptops']\">Laptops</a></li>\r\n        <li><a [routerLink]=\"['/home/products/Smartphones']\">Smart Phones</a></li>\r\n        <li><a [routerLink]=\"['/home/products/Cameras']\">Cameras</a></li>\r\n        <li><a [routerLink]=\"['/home/products/Tv & Audio']\">Tv & Audio</a></li>\r\n        <li><a [routerLink]=\"['/home/products/Watches']\">Watches</a></li>\r\n    </ul>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/widgets/popular-products/popular-products.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/widgets/popular-products/popular-products.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShopWidgetsPopularProductsPopularProductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div fxLayout=\"column\" class=\"popular-products\" ngClass.gt-md=\"m-0\">\r\n    <div class=\"title-header\">\r\n        <h4 class=\"title\">POPULAR PRODUCTS</h4>\r\n    </div>\r\n      <mat-list class=\"reviews\">\r\n         <mat-list-item class=\"content\"  *ngFor=\"let product of products | slice:0:3\">\r\n          <div class=\"media\">  <a [routerLink]=\"['/home/left-sidebar/product', product.id]\">\r\n              <img class=\"img-fluid\" [src]=\"product.pictures[0].big\" alt=\"\">\r\n            </a>\r\n          </div>\r\n             <div class=\"info align-self-center\">\r\n               <a [routerLink]=\"['/home/left-sidebar/product', product.id]\"><h5>{{product.name}}</h5></a>\r\n               <div class=\"stars\">\r\n                  <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                  <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                  <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                  <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n                  <mat-icon class=\"mat-icon-xs mat-icon material-icons ng-star-inserted\">star_rate</mat-icon>\r\n               </div>\r\n               <p class=\"price\" *ngIf=\"!productsService?.catalogMode\">{{product.price | currency:productsService?.currency:'symbol'}}</p>\r\n             </div>\r\n          </mat-list-item>\r\n      </mat-list>\r\n  </div>\r\n";
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/main/main.component */
    "./src/app/components/main/main.component.ts");
    /* harmony import */


    var _components_demo_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/demo/demo.component */
    "./src/app/components/demo/demo.component.ts");

    var appRoutes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: _components_demo_demo_component__WEBPACK_IMPORTED_MODULE_4__["DemoComponent"]
    }, {
      path: '',
      component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
      children: [{
        path: 'home',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./components/shop/shop.module */
          "./src/app/components/shop/shop.module.ts")).then(function (m) {
            return m.ShopModule;
          });
        }
      }, {
        path: 'pages',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | components-pages-pages-module */
          [__webpack_require__.e("default~components-blog-blog-module~components-pages-pages-module"), __webpack_require__.e("components-pages-pages-module")]).then(__webpack_require__.bind(null,
          /*! ./components/pages/pages.module */
          "./src/app/components/pages/pages.module.ts")).then(function (m) {
            return m.PagesModule;
          });
        }
      }, {
        path: 'blog',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | components-blog-blog-module */
          "default~components-blog-blog-module~components-pages-pages-module").then(__webpack_require__.bind(null,
          /*! ./components/blog/blog.module */
          "./src/app/components/blog/blog.module.ts")).then(function (m) {
            return m.BlogModule;
          });
        }
      }]
    }, {
      path: '**',
      redirectTo: 'home/one'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, {
        useHash: true
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _components_shared_services_color_option_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/shared/services/color-option.service */
    "./src/app/components/shared/services/color-option.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(spinner, appSettings, router) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.spinner = spinner;
        this.appSettings = appSettings;
        this.router = router;
        this.title = 'ecommerce-sophia-new';
        this.settings = this.appSettings.settings;
        this.router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
            _this.url = event.url;
          }
        });
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          /** spinner starts on init */
          this.spinner.show();
          setTimeout(function () {
            /** spinner ends after 5 seconds */
            _this2.spinner.hide();
          }, 5000);
          this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"])) {
              return;
            }

            window.scrollTo(0, 0);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]
      }, {
        type: _components_shared_services_color_option_service__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"], _components_shared_services_color_option_service__WEBPACK_IMPORTED_MODULE_3__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components_demo_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/demo/demo.component */
    "./src/app/components/demo/demo.component.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var ngx_img_zoom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-img-zoom */
    "./node_modules/ngx-img-zoom/fesm2015/ngx-img-zoom.js");
    /* harmony import */


    var _components_main_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/main/main.component */
    "./src/app/components/main/main.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _components_shop_shop_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/shop/shop.module */
    "./src/app/components/shop/shop.module.ts");
    /* harmony import */


    var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/shared/shared.module */
    "./src/app/components/shared/shared.module.ts");
    /* harmony import */


    var _components_color_options_color_options_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/color-options/color-options.component */
    "./src/app/components/color-options/color-options.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_demo_demo_component__WEBPACK_IMPORTED_MODULE_7__["DemoComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"], _components_color_options_color_options_component__WEBPACK_IMPORTED_MODULE_14__["ColorOptionsComponent"]],
      imports: [ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], _components_shop_shop_module__WEBPACK_IMPORTED_MODULE_12__["ShopModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], ngx_img_zoom__WEBPACK_IMPORTED_MODULE_9__["NgxImgZoomModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/color-options/color-options.component.sass":
  /*!***********************************************************************!*\
    !*** ./src/app/components/color-options/color-options.component.sass ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsColorOptionsColorOptionsComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29sb3Itb3B0aW9ucy9jb2xvci1vcHRpb25zLmNvbXBvbmVudC5zYXNzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/color-options/color-options.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/color-options/color-options.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ColorOptionsComponent */

  /***/
  function srcAppComponentsColorOptionsColorOptionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorOptionsComponent", function () {
      return ColorOptionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _components_shared_services_color_option_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../components/shared/services/color-option.service */
    "./src/app/components/shared/services/color-option.service.ts");

    var ColorOptionsComponent = /*#__PURE__*/function () {
      function ColorOptionsComponent(appSettings) {
        _classCallCheck(this, ColorOptionsComponent);

        this.appSettings = appSettings;
        this.showOptions = false;
        this.settings = this.appSettings.settings;
      }

      _createClass(ColorOptionsComponent, [{
        key: "changeTheme",
        value: function changeTheme(theme) {
          this.settings.theme = theme;
        }
      }]);

      return ColorOptionsComponent;
    }();

    ColorOptionsComponent.ctorParameters = function () {
      return [{
        type: _components_shared_services_color_option_service__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]
      }];
    };

    ColorOptionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-color-options',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./color-options.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/color-options/color-options.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./color-options.component.sass */
      "./src/app/components/color-options/color-options.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_components_shared_services_color_option_service__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]])], ColorOptionsComponent);
    /***/
  },

  /***/
  "./src/app/components/demo/demo.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/demo/demo.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDemoDemoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".demo-wrapper .demo-header {\n  background-image: url('demo-header-bg.jpg');\n  background-size: cover;\n  background-position: center;\n  padding: 116px 0 116px 0;\n  margin: 60px;\n}\n.demo-wrapper .demo-header .left-panel {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n.demo-wrapper .demo-header .left-panel .logo {\n  margin-bottom: 20px;\n}\n.demo-wrapper .demo-header .left-panel .text-intro h1 {\n  text-transform: capitalize;\n  color: #ffc111;\n  line-height: 58px;\n}\n.demo-wrapper .demo-header .left-panel .text-intro h1 .powerful {\n  font-size: 37px;\n  font-weight: 300;\n  letter-spacing: 7px;\n  color: #fff;\n}\n.demo-wrapper .demo-header .left-panel .text-intro h1 .theme {\n  font-size: 38px;\n  font-weight: 300;\n  color: #fff;\n}\n.demo-wrapper .demo-header .left-panel .button .ped-btn {\n  border: 1px solid #ffc111;\n  color: #333;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 700;\n  margin-top: 20px;\n  padding: 12px 10px;\n  text-align: center;\n  text-transform: uppercase;\n  transition: all 0.4s ease 0s;\n  z-index: 222;\n  background: #ffc111;\n  width: 175px;\n  border-radius: 3px;\n}\n.demo-wrapper .demo-header .left-panel ul {\n  display: flex;\n  justify-content: center;\n  margin-top: 15px;\n}\n.demo-wrapper .demo-header .left-panel ul li {\n  color: #fff;\n  margin-right: 7px;\n}\n.demo-wrapper .demo-header .left-panel ul li i {\n  margin-right: 5px;\n  font-size: 16px;\n}\n.demo-wrapper .demo-header .right-panel img {\n  width: 100%;\n  height: auto;\n}\n.demo-wrapper .demo-showcase .title {\n  text-align: center;\n  margin-bottom: 80px;\n}\n.demo-wrapper .demo-showcase .title h2 {\n  font-weight: 400;\n}\n.demo-wrapper .demo-showcase .title p {\n  margin-top: 15px;\n}\n.demo-wrapper .demo-showcase .demos .item {\n  margin: 0 auto;\n  position: relative;\n}\n.demo-wrapper .demo-showcase .demos .item img {\n  max-width: 100%;\n}\n.demo-wrapper .demo-showcase .demos .item .ped-btn {\n  border: 1px solid #ffc111;\n  color: #333;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 700;\n  margin: 0 auto;\n  padding: 12px 10px;\n  text-align: center;\n  text-transform: uppercase;\n  transition: all 0.4s ease 0s;\n  z-index: 222;\n  background: #ffc111;\n  width: 160px;\n  border-radius: 3px;\n  position: absolute;\n  top: 47%;\n  left: 0;\n  right: 0;\n  z-index: 99999;\n  opacity: 0;\n  box-shadow: 2px 2px 24px -8px rgba(0, 0, 0, 0.59);\n}\n.demo-wrapper .demo-showcase .demos .item:hover .ped-btn {\n  opacity: 1;\n}\n.demo-wrapper .demo-showcase .demos .item.middle {\n  margin: 0 60px 40px 60px;\n}\n.demo-wrapper .demo-showcase .demos .item .first {\n  background: #fff none repeat scroll 0 0;\n  margin-bottom: 0;\n  height: 490px;\n  overflow: hidden;\n  position: relative;\n  width: auto;\n  z-index: 99;\n  border: 2px solid #F0F0F0;\n}\n.demo-wrapper .demo-showcase .demos .item .seccond {\n  margin-top: 10px;\n  display: inline-block;\n  width: 100%;\n  vertical-align: top;\n  text-align: center;\n}\n.demo-wrapper .demo-showcase .demos .item .seccond h4 {\n  font-weight: 600;\n}\n.demo-wrapper .demo-showcase .demos .item .sec {\n  margin: 0 auto !important;\n}\n.demo-wrapper .demo-showcase .demo-row-sec {\n  align-content: center;\n}\n.demo-wrapper .color-showcase .title {\n  margin-bottom: 50px;\n}\n.demo-wrapper .color-showcase .title h2 {\n  text-align: center;\n}\n.demo-wrapper .color-showcase .demos .item {\n  margin: 0 auto;\n  position: relative;\n}\n.demo-wrapper .color-showcase .demos .item img {\n  max-width: 100%;\n}\n.demo-wrapper .color-showcase .demos .item .ped-btn {\n  border: 1px solid #ffc111;\n  color: #333;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 700;\n  margin: 0 auto;\n  padding: 12px 10px;\n  text-align: center;\n  text-transform: uppercase;\n  transition: all 0.4s ease 0s;\n  z-index: 222;\n  background: #ffc111;\n  width: 160px;\n  border-radius: 3px;\n  position: absolute;\n  top: 47%;\n  left: 0;\n  right: 0;\n  z-index: 99999;\n  opacity: 0;\n}\n.demo-wrapper .color-showcase .demos .item:hover .ped-btn {\n  opacity: 1;\n}\n.demo-wrapper .color-showcase .demos .item.middle {\n  margin: 0 60px 40px 60px;\n}\n.demo-wrapper .color-showcase .demos .item .first {\n  background: #fff none repeat scroll 0 0;\n  margin-bottom: 0;\n  /* height: 490px; */\n  /* overflow: hidden; */\n  position: relative;\n  width: auto;\n  z-index: 99;\n  margin-right: 15px;\n}\n.demo-wrapper .color-showcase .demos .item .first img {\n  border: 1px solid #e8e8e8;\n}\n.demo-wrapper .color-showcase .demos .item .sec {\n  margin: 0 auto !important;\n}\n.demo-wrapper .color-showcase .demo-row-sec {\n  align-content: center;\n}\n.demo-wrapper .main-features {\n  background-color: #f6f6f6;\n}\n.demo-wrapper .main-features .features-wrap .title {\n  text-align: center;\n  margin-bottom: 80px;\n}\n.demo-wrapper .main-features .features-wrap .title h2 {\n  font-weight: 400;\n}\n.demo-wrapper .main-features .features-wrap .features .row {\n  margin-bottom: 50px;\n}\n.demo-wrapper .main-features .features-wrap .features .row .feature-item {\n  padding: 0 20px 0 0;\n}\n.demo-wrapper .main-features .features-wrap .features .row .feature-item .icon-box {\n  display: inline-block;\n}\n.demo-wrapper .main-features .features-wrap .features .row .feature-item .text-box {\n  padding: 55px 0 0 25px;\n}\n.demo-wrapper .main-features .features-wrap .features .row .feature-item .text-box h4 {\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n.demo-wrapper .main-features .features-wrap .features .row .feature-item .text-box p {\n  color: #333;\n}\n@media (max-width: 1280px) {\n  .demo-wrapper .demo-showcase .demos .item.middle {\n    margin: 0 auto;\n  }\n  .demo-wrapper .demo-showcase .demos .item {\n    margin-bottom: 50px;\n  }\n}\n@media (max-width: 475px) {\n  .main-features .features-wrap .features .row {\n    margin-bottom: 0px !important;\n  }\n  .main-features .features-wrap .features .row .feature-item {\n    padding: 0;\n    margin-bottom: 30px;\n  }\n  .main-features .features-wrap .features .row .feature-item .icon-box img {\n    max-width: 100px;\n  }\n  .main-features .features-wrap .features .row .feature-item .text-box {\n    padding: 0px 0 0 18px !important;\n  }\n  .main-features .features-wrap .features .row .feature-item .text-box h4 {\n    font-size: 20px !important;\n    font-weight: 600;\n    margin-bottom: 10px;\n  }\n  .main-features .features-wrap .features .row .feature-item .text-box p {\n    color: #333;\n  }\n\n  .text-intro h1 .powerful {\n    font-size: 45px !important;\n  }\n\n  .demo-header {\n    margin: 0 !important;\n    padding: 100px 0 100px 0 !important;\n  }\n  .demo-header .left-panel {\n    margin-bottom: 20px !important;\n  }\n\n  .likeUs .theme-features {\n    width: 80% !important;\n    max-width: 100% !important;\n    padding: 26px !important;\n  }\n  .likeUs .title h2 {\n    font-size: 28px !important;\n    line-height: 33px !important;\n  }\n}\n.likeUs {\n  background-color: #f6f6f6;\n}\n.likeUs .theme-features {\n  margin: 0 auto;\n  max-width: 540px;\n  padding: 32px;\n  border-radius: 6px;\n}\n.likeUs .theme-features .mat-card .item h2 {\n  font-weight: 400;\n  margin-bottom: 10px;\n}\n.likeUs .theme-features .mat-card .item ul {\n  margin-top: 17px;\n}\n.likeUs .theme-features .mat-card .item ul li {\n  margin-bottom: 10px;\n  font-weight: 600;\n}\n.likeUs .theme-features .mat-card .item ul li i {\n  margin-right: 5px;\n  font-size: 16px;\n}\n.likeUs .title {\n  text-align: center;\n}\n.likeUs .title h1 {\n  text-align: center;\n}\n.likeUs .stars {\n  margin-top: 20px;\n  color: #ffc111;\n}\n.footer {\n  background: #222222;\n}\n.footer p {\n  color: #fff;\n  padding: 10px 0;\n  text-align: center;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZW1vL2RlbW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSwyQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUFBSjtBQUNJO0VBQ0UsV0FBQTtFQUNGLFlBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQUk7RUFDRSxtQkFBQTtBQUVOO0FBQ007RUFDRSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNSO0FBQVE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFFVjtBQUNRO0VBQ0UsZUFBQTtFQUNOLGdCQUFBO0VBQ0EsV0FBQTtBQUNKO0FBSUU7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRk47QUFLQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNGLGdCQUFBO0FBSEE7QUFJRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQUZKO0FBR0k7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFETjtBQU9NO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFMUjtBQVVJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQVJOO0FBU007RUFDRSxnQkFBQTtBQVBSO0FBU007RUFDRSxnQkFBQTtBQVBSO0FBV007RUFDRSxjQUFBO0VBRUEsa0JBQUE7QUFWUjtBQVdRO0VBQ0UsZUFBQTtBQVRWO0FBWVU7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBR2QsaURBQUE7QUFWQTtBQWNVO0VBQ0UsVUFBQTtBQVpaO0FBZVE7RUFDRSx3QkFBQTtBQWJWO0FBZVE7RUFDRSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBYlY7QUFlUTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWJWO0FBY1U7RUFDRSxnQkFBQTtBQVpaO0FBZUc7RUFDRSx5QkFBQTtBQWJMO0FBa0JJO0VBQ0UscUJBQUE7QUFoQk47QUFzQkk7RUFDRSxtQkFBQTtBQXBCTjtBQXFCTTtFQUNFLGtCQUFBO0FBbkJSO0FBdUJNO0VBQ0UsY0FBQTtFQUVBLGtCQUFBO0FBdEJSO0FBdUJRO0VBQ0UsZUFBQTtBQXJCVjtBQXdCVTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUF0QmQ7QUEwQlU7RUFDRSxVQUFBO0FBeEJaO0FBMkJRO0VBQ0Usd0JBQUE7QUF6QlY7QUEyQlE7RUFDRSx1Q0FBQTtFQUNOLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQXpCSjtBQTRCSTtFQUNFLHlCQUFBO0FBMUJOO0FBK0JHO0VBQ0UseUJBQUE7QUE3Qkw7QUFrQ0k7RUFDRSxxQkFBQTtBQWhDTjtBQXFDRTtFQUNFLHlCQUFBO0FBbkNKO0FBcUNRO0VBQ0Msa0JBQUE7RUFDQSxtQkFBQTtBQW5DVDtBQW9DUztFQUNFLGdCQUFBO0FBbENYO0FBc0NVO0VBQ0UsbUJBQUE7QUFwQ1o7QUFxQ1k7RUFDRSxtQkFBQTtBQW5DZDtBQW9DYztFQUNFLHFCQUFBO0FBbENoQjtBQXFDYztFQUNFLHNCQUFBO0FBbkNoQjtBQW9DZTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBbENoQjtBQW9DZTtFQUNBLFdBQUE7QUFsQ2Y7QUE0Q0E7RUFJUTtJQUNFLGNBQUE7RUE1Q1I7RUE4Q0k7SUFFSSxtQkFBQTtFQTdDUjtBQUNGO0FBbURBO0VBS1U7SUFDRSw2QkFBQTtFQXJEVjtFQXNEVTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFQXBEWjtFQXNEYztJQUNFLGdCQUFBO0VBcERoQjtFQXdEWTtJQUNFLGdDQUFBO0VBdERkO0VBdURhO0lBQ0MsMEJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VBckRkO0VBdURhO0lBQ0EsV0FBQTtFQXJEYjs7RUFpRUk7SUFDRSwwQkFBQTtFQTlETjs7RUFxRUE7SUFDRSxvQkFBQTtJQUNBLG1DQUFBO0VBbEVGO0VBbUVFO0lBQ0UsOEJBQUE7RUFqRUo7O0VBdUVFO0lBQ0UscUJBQUE7SUFDQSwwQkFBQTtJQUNBLHdCQUFBO0VBcEVKO0VBd0VJO0lBQ0UsMEJBQUE7SUFFQSw0QkFBQTtFQXZFTjtBQUNGO0FBMkVBO0VBQ0UseUJBQUE7QUF6RUY7QUEwRUU7RUFDRSxjQUFBO0VBRUEsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUF6RUo7QUE0RU87RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBMUVUO0FBNEVPO0VBQ0UsZ0JBQUE7QUExRVQ7QUEyRVM7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBekVYO0FBMEVXO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBeEViO0FBK0VFO0VBQ0Usa0JBQUE7QUE3RUo7QUE4RUk7RUFDRSxrQkFBQTtBQTVFTjtBQStFRTtFQUNDLGdCQUFBO0VBQ0EsY0FBQTtBQTdFSDtBQWdGQTtFQUNFLG1CQUFBO0FBN0VGO0FBOEVFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBNUVKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kZW1vL2RlbW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVtby13cmFwcGVyIHtcclxuICAuZGVtby1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9zcmMvYXNzZXRzL2ltYWdlcy9kZW1vL2RlbW8taGVhZGVyLWJnLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDExNnB4IDAgMTE2cHggMDtcclxuICAgIG1hcmdpbjogNjBweDtcclxuICAgIC5sZWZ0LXBhbmVsIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAubG9nbyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICAudGV4dC1pbnRybyB7XHJcbiAgICAgIGgxIHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBjb2xvcjogI2ZmYzExMTtcclxuICAgICAgICBsaW5lLWhlaWdodDogNThweDtcclxuICAgICAgICAucG93ZXJmdWwge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzN3B4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA3cHg7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aGVtZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbi5idXR0b24ge1xyXG4gIC5wZWQtYnRuIHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmYzExMTtcclxuICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDEycHggMTBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xyXG4gICAgICB6LWluZGV4OiAyMjI7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmMxMTE7XHJcbiAgICAgIHdpZHRoOiAxNzVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIH1cclxufVxyXG51bCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxubWFyZ2luLXRvcDogMTVweDtcclxuICBsaSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgaSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiAgICB9XHJcbiAgICAucmlnaHQtcGFuZWwge1xyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuZGVtby1zaG93Y2FzZSB7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbiAgICAgIGgyIHtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICB9XHJcbiAgICAgIHAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgIH1cclxuICAgICB9XHJcbiAgICAuZGVtb3Mge1xyXG4gICAgICAuaXRlbSB7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucGVkLWJ0biB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmYzExMTtcclxuICAgICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMTBweDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDIyMjtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZjMTExO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxNjBweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHRvcDogNDclO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogOTk5OTk7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAycHggMjRweCAtOHB4IHJnYmEoMCwwLDAsMC41OSk7XHJcbi1tb3otYm94LXNoYWRvdzogMnB4IDJweCAyNHB4IC04cHggcmdiYSgwLDAsMCwwLjU5KTtcclxuYm94LXNoYWRvdzogMnB4IDJweCAyNHB4IC04cHggcmdiYSgwLDAsMCwwLjU5KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAucGVkLWJ0biB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYubWlkZGxlIHtcclxuICAgICAgICAgIG1hcmdpbjogMCA2MHB4IDQwcHggNjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZpcnN0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQ5MHB4O1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjRjBGMEYwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VjY29uZCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgLnNlYyB7XHJcbiAgICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcclxuICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLmRlbW8tcm93LXNlYyB7XHJcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgLml0ZW0ge1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb2xvci1zaG93Y2FzZSB7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICBoMiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGVtb3Mge1xyXG4gICAgICAuaXRlbSB7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucGVkLWJ0biB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmYzExMTtcclxuICAgICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMTBweDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDIyMjtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZjMTExO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxNjBweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHRvcDogNDclO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogOTk5OTk7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAucGVkLWJ0biB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYubWlkZGxlIHtcclxuICAgICAgICAgIG1hcmdpbjogMCA2MHB4IDQwcHggNjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZpcnN0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAvKiBoZWlnaHQ6IDQ5MHB4OyAqL1xyXG4gICAgLyogb3ZlcmZsb3c6IGhpZGRlbjsgKi9cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcblxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZTg7XHJcbiAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgIC5zZWMge1xyXG4gICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC5kZW1vLXJvdy1zZWMge1xyXG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIC5pdGVtIHtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAubWFpbi1mZWF0dXJlcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgLmZlYXR1cmVzLXdyYXAge1xyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuICAgICAgICAgaDIge1xyXG4gICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmZlYXR1cmVzIHtcclxuICAgICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAgICAgICAuZmVhdHVyZS1pdGVtIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHggMCAwO1xyXG4gICAgICAgICAgICAgIC5pY29uLWJveCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAudGV4dC1ib3gge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNTVweCAwIDAgMjVweDtcclxuICAgICAgICAgICAgICAgaDQge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgLmRlbW8td3JhcHBlciB7XHJcbiAgICAuZGVtby1zaG93Y2FzZSB7XHJcbiAgICAgIC5kZW1vcyB7XHJcbiAgICAgICAgLml0ZW0ubWlkZGxlIHtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICB9XHJcbiAgICAgIC5pdGVtIHtcclxuXHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG5cclxuICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6IDQ3NXB4KSB7XHJcbiAgLm1haW4tZmVhdHVyZXMge1xyXG4gICAgLmZlYXR1cmVzLXdyYXAge1xyXG5cclxuICAgICAgICAuZmVhdHVyZXMge1xyXG4gICAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAuZmVhdHVyZS1pdGVtIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgICAgLmljb24tYm94IHtcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAudGV4dC1ib3gge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDAgMCAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnRleHQtaW50cm8ge1xyXG4gICAgaDEge1xyXG5cclxuICAgICAgLnBvd2VyZnVsIHtcclxuICAgICAgICBmb250LXNpemU6IDQ1cHggIWltcG9ydGFudDtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZGVtby1oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxMDBweCAwIDEwMHB4IDAgIWltcG9ydGFudDtcclxuICAgIC5sZWZ0LXBhbmVsIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmxpa2VVcyB7XHJcblxyXG4gICAgLnRoZW1lLWZlYXR1cmVzIHtcclxuICAgICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZzogMjZweCAhaW1wb3J0YW50O1xyXG5cclxuICAgIH1cclxuICAgIC50aXRsZSB7XHJcbiAgICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDI4cHggIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMzcHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubGlrZVVzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gIC50aGVtZS1mZWF0dXJlcyB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgICBtYXgtd2lkdGg6IDU0MHB4O1xyXG4gICAgcGFkZGluZzogMzJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgLm1hdC1jYXJkIHtcclxuICAgICAuaXRlbSB7XHJcbiAgICAgICBoMiB7XHJcbiAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICB9XHJcbiAgICAgICB1bCB7XHJcbiAgICAgICAgIG1hcmdpbi10b3A6IDE3cHg7XHJcbiAgICAgICAgIGxpIHtcclxuICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgIH1cclxuICAgICB9XHJcbiAgIH1cclxuICB9XHJcbiAgLnRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGgxIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc3RhcnMge1xyXG4gICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICBjb2xvcjogI2ZmYzExMTtcclxuICB9XHJcbn1cclxuLmZvb3RlciB7XHJcbiAgYmFja2dyb3VuZDogIzIyMjIyMjtcclxuICBwIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/demo/demo.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/demo/demo.component.ts ***!
    \***************************************************/

  /*! exports provided: DemoComponent */

  /***/
  function srcAppComponentsDemoDemoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DemoComponent", function () {
      return DemoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DemoComponent = /*#__PURE__*/function () {
      function DemoComponent() {
        _classCallCheck(this, DemoComponent);
      }

      _createClass(DemoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DemoComponent;
    }();

    DemoComponent.ctorParameters = function () {
      return [];
    };

    DemoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-demo',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./demo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/demo/demo.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./demo.component.scss */
      "./src/app/components/demo/demo.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DemoComponent);
    /***/
  },

  /***/
  "./src/app/components/main/main.component.sass":
  /*!*****************************************************!*\
    !*** ./src/app/components/main/main.component.sass ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMainMainComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5zYXNzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/main/main.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/main/main.component.ts ***!
    \***************************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppComponentsMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/services/cart.service */
    "./src/app/components/shared/services/cart.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_sidebar_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/sidebar/sidebar-menu.service */
    "./src/app/components/shared/sidebar/sidebar-menu.service.ts");

    var MainComponent = /*#__PURE__*/function () {
      function MainComponent(router, cartService, sidenavMenuService) {
        var _this3 = this;

        _classCallCheck(this, MainComponent);

        this.router = router;
        this.cartService = cartService;
        this.sidenavMenuService = sidenavMenuService;
        this.currencies = ['USD', 'EUR'];
        this.flags = [{
          name: 'English',
          image: 'assets/images/flags/gb.svg'
        }, {
          name: 'German',
          image: 'assets/images/flags/de.svg'
        }, {
          name: 'French',
          image: 'assets/images/flags/fr.svg'
        }, {
          name: 'Russian',
          image: 'assets/images/flags/ru.svg'
        }, {
          name: 'Turkish',
          image: 'assets/images/flags/tr.svg'
        }];
        this.shoppingCartItems = [];
        this.banners = [];
        this.wishlistItems = [];
        this.navItems = [{
          displayName: 'Home',
          iconName: 'recent_actors',
          children: [{
            displayName: 'Home-1',
            iconName: 'group',
            route: '/home/one'
          }, {
            displayName: 'Home-2',
            iconName: 'speaker_notes',
            route: '/home/two'
          }, {
            displayName: 'Home-3',
            iconName: 'feedback',
            route: '/home/three'
          }]
        }, {
          displayName: 'Products',
          iconName: 'feedback',
          route: '/home/products/all'
        }, {
          displayName: 'Shop',
          iconName: 'movie_filter',
          children: [{
            displayName: 'Computers',
            iconName: 'group',
            children: [{
              displayName: 'Laptops',
              iconName: 'person',
              route: 'michael-prentice'
            }, {
              displayName: 'Cables',
              iconName: 'person',
              route: 'stephen-fluin'
            }, {
              displayName: 'Monitors',
              iconName: 'person',
              route: 'mike-brocchi'
            }, {
              displayName: 'Tablets',
              iconName: 'person',
              route: 'mike-brocchi'
            }, {
              displayName: 'Headsets',
              iconName: 'person',
              route: 'mike-brocchi'
            }]
          }, {
            displayName: 'Tv & Audio',
            iconName: 'speaker_notes',
            children: [{
              displayName: 'Tv',
              iconName: 'star_rate',
              route: 'material-design'
            }, {
              displayName: 'Audio',
              iconName: 'star_rate',
              route: 'what-up-web'
            }, {
              displayName: 'Video',
              iconName: 'star_rate',
              route: 'my-ally-cli'
            }, {
              displayName: 'Dvd',
              iconName: 'star_rate',
              route: 'become-angular-tailer'
            }]
          }, {
            displayName: 'Phones',
            iconName: 'feedback',
            children: [{
              displayName: 'Mobile phones',
              iconName: 'star_rate',
              route: 'material-design'
            }, {
              displayName: 'Power Bank',
              iconName: 'star_rate',
              route: 'what-up-web'
            }, {
              displayName: 'Memory Cards',
              iconName: 'star_rate',
              route: 'my-ally-cli'
            }, {
              displayName: 'Accesories',
              iconName: 'star_rate',
              route: 'become-angular-tailer'
            }]
          }, {
            displayName: 'Electronics',
            iconName: 'feedback',
            children: [{
              displayName: 'Washing Machines',
              iconName: 'star_rate',
              route: 'material-design'
            }, {
              displayName: 'Water heater',
              iconName: 'star_rate',
              route: 'what-up-web'
            }, {
              displayName: 'Cookers',
              iconName: 'star_rate',
              route: 'my-ally-cli'
            }, {
              displayName: 'Cold stores',
              iconName: 'star_rate',
              route: 'become-angular-tailer'
            }]
          }]
        }, {
          displayName: 'Blog',
          iconName: 'report_problem',
          children: [{
            displayName: 'Blog List',
            iconName: 'group',
            route: '/blog/blog-list'
          }, {
            displayName: 'Blog Columns',
            iconName: 'speaker_notes',
            route: '/blog/blog-column'
          }, {
            displayName: 'Blog Details',
            iconName: 'feedback',
            route: '/blog/blog-details'
          }]
        }, {
          displayName: 'Pages',
          iconName: 'report_problem',
          children: [{
            displayName: 'About Us',
            iconName: 'group',
            route: '/pages/about'
          }, {
            displayName: 'FAQ',
            iconName: 'speaker_notes',
            route: '/pages/faq'
          }, {
            displayName: 'Contact',
            iconName: 'feedback',
            route: '/pages/contact'
          }, {
            displayName: 'Wishlist',
            iconName: 'group',
            route: '/pages/wishlist'
          }, {
            displayName: 'Compare',
            iconName: 'speaker_notes',
            route: '/pages/compare'
          }, {
            displayName: 'Checkout',
            iconName: 'feedback',
            route: '/pages/checkout'
          }, {
            displayName: 'Cart',
            iconName: 'group',
            route: '/pages/cart'
          }, {
            displayName: 'My Account',
            iconName: 'speaker_notes',
            route: '/pages/my-account'
          }, {
            displayName: '404',
            iconName: 'feedback',
            route: '/pages/error'
          }]
        }, {
          displayName: 'Contact',
          iconName: 'feedback',
          route: '/pages/contact'
        }];
        this.cartService.getItems().subscribe(function (shoppingCartItems) {
          return _this3.shoppingCartItems = shoppingCartItems;
        });
        this.router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
            _this3.url = event.url;
          }
        });
      }

      _createClass(MainComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currency = this.currencies[0];
          this.flag = this.flags[0];
        }
      }, {
        key: "changeCurrency",
        value: function changeCurrency(currency) {
          this.currency = currency;
        }
      }, {
        key: "changeLang",
        value: function changeLang(flag) {
          this.flag = flag;
        }
      }]);

      return MainComponent;
    }();

    MainComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
      }, {
        type: _shared_sidebar_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_4__["SidebarMenuService"]
      }];
    };

    MainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./main.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./main.component.sass */
      "./src/app/components/main/main.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"], _shared_sidebar_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_4__["SidebarMenuService"]])], MainComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/banner-promotion/banner-promotion.component.sass":
  /*!************************************************************************************!*\
    !*** ./src/app/components/shared/banner-promotion/banner-promotion.component.sass ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedBannerPromotionBannerPromotionComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2Jhbm5lci1wcm9tb3Rpb24vYmFubmVyLXByb21vdGlvbi5jb21wb25lbnQuc2FzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/shared/banner-promotion/banner-promotion.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/shared/banner-promotion/banner-promotion.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: BannerPromotionComponent */

  /***/
  function srcAppComponentsSharedBannerPromotionBannerPromotionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BannerPromotionComponent", function () {
      return BannerPromotionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BannerPromotionComponent = /*#__PURE__*/function () {
      function BannerPromotionComponent() {
        _classCallCheck(this, BannerPromotionComponent);
      }

      _createClass(BannerPromotionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BannerPromotionComponent;
    }();

    BannerPromotionComponent.ctorParameters = function () {
      return [];
    };

    BannerPromotionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-banner-promotion',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./banner-promotion.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/banner-promotion/banner-promotion.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./banner-promotion.component.sass */
      "./src/app/components/shared/banner-promotion/banner-promotion.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BannerPromotionComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/banners-four/banners-four.component.sass":
  /*!****************************************************************************!*\
    !*** ./src/app/components/shared/banners-four/banners-four.component.sass ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedBannersFourBannersFourComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2Jhbm5lcnMtZm91ci9iYW5uZXJzLWZvdXIuY29tcG9uZW50LnNhc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/shared/banners-four/banners-four.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/components/shared/banners-four/banners-four.component.ts ***!
    \**************************************************************************/

  /*! exports provided: BannersFourComponent */

  /***/
  function srcAppComponentsSharedBannersFourBannersFourComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BannersFourComponent", function () {
      return BannersFourComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BannersFourComponent = /*#__PURE__*/function () {
      function BannersFourComponent() {
        _classCallCheck(this, BannersFourComponent);

        this.banners = [];
      }

      _createClass(BannersFourComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getBanner",
        value: function getBanner(index) {
          return this.banners[index];
        }
      }, {
        key: "getBgImage",
        value: function getBgImage(index) {
          var bgImage = {
            'background-image': index != null ? "url(" + this.banners[index].image + ")" : "url(https://via.placeholder.com/600x400/ff0000/fff/)"
          };
          return bgImage;
        }
      }]);

      return BannersFourComponent;
    }();

    BannersFourComponent.ctorParameters = function () {
      return [];
    };

    BannersFourComponent.propDecorators = {
      banners: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['banners']
      }]
    };
    BannersFourComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-banners-four',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./banners-four.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/banners-four/banners-four.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./banners-four.component.sass */
      "./src/app/components/shared/banners-four/banners-four.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BannersFourComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/banners/banners.component.sass":
  /*!******************************************************************!*\
    !*** ./src/app/components/shared/banners/banners.component.sass ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedBannersBannersComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2Jhbm5lcnMvYmFubmVycy5jb21wb25lbnQuc2FzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/shared/banners/banners.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/shared/banners/banners.component.ts ***!
    \****************************************************************/

  /*! exports provided: BannersComponent */

  /***/
  function srcAppComponentsSharedBannersBannersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BannersComponent", function () {
      return BannersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BannersComponent = /*#__PURE__*/function () {
      function BannersComponent() {
        _classCallCheck(this, BannersComponent);

        this.banners = [];
      }

      _createClass(BannersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getBanner",
        value: function getBanner(index) {
          return this.banners[index];
        }
      }, {
        key: "getBgImage",
        value: function getBgImage(index) {
          var bgImage = {
            'background-image': index != null ? "url(" + this.banners[index].image + ")" : "url(https://via.placeholder.com/600x400/ff0000/fff/)"
          };
          return bgImage;
        }
      }]);

      return BannersComponent;
    }();

    BannersComponent.ctorParameters = function () {
      return [];
    };

    BannersComponent.propDecorators = {
      banners: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['banners']
      }]
    };
    BannersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-banners',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./banners.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/banners/banners.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./banners.component.sass */
      "./src/app/components/shared/banners/banners.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BannersComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/blog-section/blog-section.component.sass":
  /*!****************************************************************************!*\
    !*** ./src/app/components/shared/blog-section/blog-section.component.sass ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedBlogSectionBlogSectionComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2Jsb2ctc2VjdGlvbi9ibG9nLXNlY3Rpb24uY29tcG9uZW50LnNhc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/shared/blog-section/blog-section.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/components/shared/blog-section/blog-section.component.ts ***!
    \**************************************************************************/

  /*! exports provided: BlogSectionComponent */

  /***/
  function srcAppComponentsSharedBlogSectionBlogSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogSectionComponent", function () {
      return BlogSectionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BlogSectionComponent = /*#__PURE__*/function () {
      function BlogSectionComponent() {
        _classCallCheck(this, BlogSectionComponent);
      }

      _createClass(BlogSectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlogSectionComponent;
    }();

    BlogSectionComponent.ctorParameters = function () {
      return [];
    };

    BlogSectionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blog-section',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./blog-section.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/blog-section/blog-section.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./blog-section.component.sass */
      "./src/app/components/shared/blog-section/blog-section.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BlogSectionComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/categories-menu/categories-menu.component.sass":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/shared/categories-menu/categories-menu.component.sass ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedCategoriesMenuCategoriesMenuComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2NhdGVnb3JpZXMtbWVudS9jYXRlZ29yaWVzLW1lbnUuY29tcG9uZW50LnNhc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/shared/categories-menu/categories-menu.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/components/shared/categories-menu/categories-menu.component.ts ***!
    \********************************************************************************/

  /*! exports provided: CategoriesMenuComponent */

  /***/
  function srcAppComponentsSharedCategoriesMenuCategoriesMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesMenuComponent", function () {
      return CategoriesMenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CategoriesMenuComponent = /*#__PURE__*/function () {
      function CategoriesMenuComponent() {
        _classCallCheck(this, CategoriesMenuComponent);
      }

      _createClass(CategoriesMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CategoriesMenuComponent;
    }();

    CategoriesMenuComponent.ctorParameters = function () {
      return [];
    };

    CategoriesMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-categories-menu',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./categories-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/categories-menu/categories-menu.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./categories-menu.component.sass */
      "./src/app/components/shared/categories-menu/categories-menu.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CategoriesMenuComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/categories-section/categories-section.component.sass":
  /*!****************************************************************************************!*\
    !*** ./src/app/components/shared/categories-section/categories-section.component.sass ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedCategoriesSectionCategoriesSectionComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2NhdGVnb3JpZXMtc2VjdGlvbi9jYXRlZ29yaWVzLXNlY3Rpb24uY29tcG9uZW50LnNhc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/shared/categories-section/categories-section.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/components/shared/categories-section/categories-section.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: CategoriesSectionComponent */

  /***/
  function srcAppComponentsSharedCategoriesSectionCategoriesSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesSectionComponent", function () {
      return CategoriesSectionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CategoriesSectionComponent = /*#__PURE__*/function () {
      function CategoriesSectionComponent() {
        _classCallCheck(this, CategoriesSectionComponent);
      }

      _createClass(CategoriesSectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CategoriesSectionComponent;
    }();

    CategoriesSectionComponent.ctorParameters = function () {
      return [];
    };

    CategoriesSectionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-categories-section',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./categories-section.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/categories-section/categories-section.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./categories-section.component.sass */
      "./src/app/components/shared/categories-section/categories-section.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CategoriesSectionComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/footer-two/footer-two.component.sass":
  /*!************************************************************************!*\
    !*** ./src/app/components/shared/footer-two/footer-two.component.sass ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedFooterTwoFooterTwoComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2Zvb3Rlci10d28vZm9vdGVyLXR3by5jb21wb25lbnQuc2FzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/shared/footer-two/footer-two.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/shared/footer-two/footer-two.component.ts ***!
    \**********************************************************************/

  /*! exports provided: FooterTwoComponent */

  /***/
  function srcAppComponentsSharedFooterTwoFooterTwoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterTwoComponent", function () {
      return FooterTwoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterTwoComponent = /*#__PURE__*/function () {
      function FooterTwoComponent() {
        _classCallCheck(this, FooterTwoComponent);
      }

      _createClass(FooterTwoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterTwoComponent;
    }();

    FooterTwoComponent.ctorParameters = function () {
      return [];
    };

    FooterTwoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer-two',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./footer-two.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer-two/footer-two.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./footer-two.component.sass */
      "./src/app/components/shared/footer-two/footer-two.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], FooterTwoComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/footer/footer.component.sass":
  /*!****************************************************************!*\
    !*** ./src/app/components/shared/footer/footer.component.sass ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedFooterFooterComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNhc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/shared/footer/footer.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/shared/footer/footer.component.ts ***!
    \**************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsSharedFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ctorParameters = function () {
      return [];
    };

    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./footer.component.sass */
      "./src/app/components/shared/footer/footer.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], FooterComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/header-four/header-four.component.sass":
  /*!**************************************************************************!*\
    !*** ./src/app/components/shared/header-four/header-four.component.sass ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedHeaderFourHeaderFourComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2hlYWRlci1mb3VyL2hlYWRlci1mb3VyLmNvbXBvbmVudC5zYXNzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/shared/header-four/header-four.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/components/shared/header-four/header-four.component.ts ***!
    \************************************************************************/

  /*! exports provided: HeaderFourComponent */

  /***/
  function srcAppComponentsSharedHeaderFourHeaderFourComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderFourComponent", function () {
      return HeaderFourComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/cart.service */
    "./src/app/components/shared/services/cart.service.ts");

    var HeaderFourComponent = /*#__PURE__*/function () {
      function HeaderFourComponent(cartService) {
        var _this4 = this;

        _classCallCheck(this, HeaderFourComponent);

        this.cartService = cartService;
        this.currencies = ['USD', 'EUR'];
        this.flags = [{
          name: 'English',
          image: 'assets/images/flags/gb.svg'
        }, {
          name: 'German',
          image: 'assets/images/flags/de.svg'
        }, {
          name: 'French',
          image: 'assets/images/flags/fr.svg'
        }, {
          name: 'Russian',
          image: 'assets/images/flags/ru.svg'
        }, {
          name: 'Turkish',
          image: 'assets/images/flags/tr.svg'
        }];
        this.shoppingCartItems = [];
        this.cartService.getItems().subscribe(function (shoppingCartItems) {
          return _this4.shoppingCartItems = shoppingCartItems;
        });
      }

      _createClass(HeaderFourComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currency = this.currencies[0];
          this.flag = this.flags[0];
        }
      }, {
        key: "changeCurrency",
        value: function changeCurrency(currency) {
          this.currency = currency;
        }
      }, {
        key: "changeLang",
        value: function changeLang(flag) {
          this.flag = flag;
        }
      }]);

      return HeaderFourComponent;
    }();

    HeaderFourComponent.ctorParameters = function () {
      return [{
        type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
      }];
    };

    HeaderFourComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header-four',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./header-four.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/header-four/header-four.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./header-four.component.sass */
      "./src/app/components/shared/header-four/header-four.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])], HeaderFourComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/header-three/header-three.component.sass":
  /*!****************************************************************************!*\
    !*** ./src/app/components/shared/header-three/header-three.component.sass ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedHeaderThreeHeaderThreeComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2hlYWRlci10aHJlZS9oZWFkZXItdGhyZWUuY29tcG9uZW50LnNhc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/shared/header-three/header-three.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/components/shared/header-three/header-three.component.ts ***!
    \**************************************************************************/

  /*! exports provided: HeaderThreeComponent */

  /***/
  function srcAppComponentsSharedHeaderThreeHeaderThreeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderThreeComponent", function () {
      return HeaderThreeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/cart.service */
    "./src/app/components/shared/services/cart.service.ts");

    var HeaderThreeComponent = /*#__PURE__*/function () {
      function HeaderThreeComponent(cartService) {
        var _this5 = this;

        _classCallCheck(this, HeaderThreeComponent);

        this.cartService = cartService;
        this.currencies = ['USD', 'EUR'];
        this.flags = [{
          name: 'English',
          image: 'assets/images/flags/gb.svg'
        }, {
          name: 'German',
          image: 'assets/images/flags/de.svg'
        }, {
          name: 'French',
          image: 'assets/images/flags/fr.svg'
        }, {
          name: 'Russian',
          image: 'assets/images/flags/ru.svg'
        }, {
          name: 'Turkish',
          image: 'assets/images/flags/tr.svg'
        }];
        this.shoppingCartItems = [];
        this.cartService.getItems().subscribe(function (shoppingCartItems) {
          return _this5.shoppingCartItems = shoppingCartItems;
        });
      }

      _createClass(HeaderThreeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currency = this.currencies[0];
          this.flag = this.flags[0];
        }
      }, {
        key: "changeCurrency",
        value: function changeCurrency(currency) {
          this.currency = currency;
        }
      }, {
        key: "changeLang",
        value: function changeLang(flag) {
          this.flag = flag;
        }
      }]);

      return HeaderThreeComponent;
    }();

    HeaderThreeComponent.ctorParameters = function () {
      return [{
        type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
      }];
    };

    HeaderThreeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header-three',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./header-three.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/header-three/header-three.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./header-three.component.sass */
      "./src/app/components/shared/header-three/header-three.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])], HeaderThreeComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/header-two/header-two.component.sass":
  /*!************************************************************************!*\
    !*** ./src/app/components/shared/header-two/header-two.component.sass ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedHeaderTwoHeaderTwoComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2hlYWRlci10d28vaGVhZGVyLXR3by5jb21wb25lbnQuc2FzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/shared/header-two/header-two.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/shared/header-two/header-two.component.ts ***!
    \**********************************************************************/

  /*! exports provided: HeaderTwoComponent */

  /***/
  function srcAppComponentsSharedHeaderTwoHeaderTwoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderTwoComponent", function () {
      return HeaderTwoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/cart.service */
    "./src/app/components/shared/services/cart.service.ts");

    var HeaderTwoComponent = /*#__PURE__*/function () {
      function HeaderTwoComponent(cartService) {
        var _this6 = this;

        _classCallCheck(this, HeaderTwoComponent);

        this.cartService = cartService;
        this.currencies = ['USD', 'EUR'];
        this.flags = [{
          name: 'English',
          image: 'assets/images/flags/gb.svg'
        }, {
          name: 'German',
          image: 'assets/images/flags/de.svg'
        }, {
          name: 'French',
          image: 'assets/images/flags/fr.svg'
        }, {
          name: 'Russian',
          image: 'assets/images/flags/ru.svg'
        }, {
          name: 'Turkish',
          image: 'assets/images/flags/tr.svg'
        }];
        this.shoppingCartItems = [];
        this.cartService.getItems().subscribe(function (shoppingCartItems) {
          return _this6.shoppingCartItems = shoppingCartItems;
        });
      }

      _createClass(HeaderTwoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currency = this.currencies[0];
          this.flag = this.flags[0];
        }
      }, {
        key: "changeCurrency",
        value: function changeCurrency(currency) {
          this.currency = currency;
        }
      }, {
        key: "changeLang",
        value: function changeLang(flag) {
          this.flag = flag;
        }
      }]);

      return HeaderTwoComponent;
    }();

    HeaderTwoComponent.ctorParameters = function () {
      return [{
        type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
      }];
    };

    HeaderTwoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header-two',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./header-two.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/header-two/header-two.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./header-two.component.sass */
      "./src/app/components/shared/header-two/header-two.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])], HeaderTwoComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/header/header.component.sass":
  /*!****************************************************************!*\
    !*** ./src/app/components/shared/header/header.component.sass ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedHeaderHeaderComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNhc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/shared/header/header.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/shared/header/header.component.ts ***!
    \**************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsSharedHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/cart.service */
    "./src/app/components/shared/services/cart.service.ts");
    /* harmony import */


    var _services_color_option_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/color-option.service */
    "./src/app/components/shared/services/color-option.service.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(cartService, appSettings) {
        var _this7 = this;

        _classCallCheck(this, HeaderComponent);

        this.cartService = cartService;
        this.appSettings = appSettings;
        this.currencies = ['USD', 'EUR'];
        this.flags = [{
          name: 'English',
          image: 'assets/images/flags/gb.svg'
        }, {
          name: 'German',
          image: 'assets/images/flags/de.svg'
        }, {
          name: 'French',
          image: 'assets/images/flags/fr.svg'
        }, {
          name: 'Russian',
          image: 'assets/images/flags/ru.svg'
        }, {
          name: 'Turkish',
          image: 'assets/images/flags/tr.svg'
        }];
        this.shoppingCartItems = [];
        this.settings = this.appSettings.settings;
        this.cartService.getItems().subscribe(function (shoppingCartItems) {
          return _this7.shoppingCartItems = shoppingCartItems;
        });
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currency = this.currencies[0];
          this.flag = this.flags[0];
        }
      }, {
        key: "changeCurrency",
        value: function changeCurrency(currency) {
          this.currency = currency;
        }
      }, {
        key: "changeLang",
        value: function changeLang(flag) {
          this.flag = flag;
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
      }, {
        type: _services_color_option_service__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]
      }];
    };

    HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/header/header.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./header.component.sass */
      "./src/app/components/shared/header/header.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"], _services_color_option_service__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]])], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/menu/menu.component.sass":
  /*!************************************************************!*\
    !*** ./src/app/components/shared/menu/menu.component.sass ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedMenuMenuComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL21lbnUvbWVudS5jb21wb25lbnQuc2FzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/shared/menu/menu.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/components/shared/menu/menu.component.ts ***!
    \**********************************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppComponentsSharedMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent() {
        _classCallCheck(this, MenuComponent);
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openMegaMenu",
        value: function openMegaMenu() {
          var pane = document.getElementsByClassName('cdk-overlay-pane');
          [].forEach.call(pane, function (el) {
            if (el.children.length > 0) {
              if (el.children[0].classList.contains('mega-menu')) {
                el.classList.add('mega-menu-pane');
              }
            }
          });
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ctorParameters = function () {
      return [];
    };

    MenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/menu/menu.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./menu.component.sass */
      "./src/app/components/shared/menu/menu.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], MenuComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/pipes/order-by.pipe.ts":
  /*!**********************************************************!*\
    !*** ./src/app/components/shared/pipes/order-by.pipe.ts ***!
    \**********************************************************/

  /*! exports provided: OrderByPipe */

  /***/
  function srcAppComponentsSharedPipesOrderByPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderByPipe", function () {
      return OrderByPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OrderByPipe = /*#__PURE__*/function () {
      function OrderByPipe() {
        _classCallCheck(this, OrderByPipe);
      }

      _createClass(OrderByPipe, [{
        key: "transform",
        value: function transform(array) {
          var _this8 = this;

          var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'desc';

          if (!val || val.trim() == "") {
            return array;
          } //ascending


          if (val == 'asc') {
            return Array.from(array).sort(function (item1, item2) {
              return _this8.orderByComparator(item1['id'], item2['id']);
            });
          } else if (val == 'desc') {
            // desc
            return Array.from(array).sort(function (item1, item2) {
              return _this8.orderByComparator(item2['id'], item1['id']);
            });
          } else if (val == 'a-z') {
            // a-z
            return Array.from(array).sort(function (a, b) {
              if (a['name'] < b['name']) {
                return -1;
              } else if (a['name'] > b['name']) {
                return 1;
              } else {
                return 0;
              }
            });
          } else if (val == 'z-a') {
            // z-a
            return Array.from(array).sort(function (a, b) {
              if (a['name'] > b['name']) {
                return -1;
              } else if (a['name'] < b['name']) {
                return 1;
              } else {
                return 0;
              }
            });
          } else if (val == 'low') {
            // low to high
            return Array.from(array).sort(function (a, b) {
              if (a['price'] < b['price']) {
                return -1;
              } else if (a['price'] > b['price']) {
                return 1;
              } else {
                return 0;
              }
            });
          } else if (val == 'high') {
            // high to low
            return Array.from(array).sort(function (a, b) {
              if (a['price'] > b['price']) {
                return -1;
              } else if (a['price'] < b['price']) {
                return 1;
              } else {
                return 0;
              }
            });
          }
        }
      }, {
        key: "orderByComparator",
        value: function orderByComparator(a, b) {
          if (isNaN(parseFloat(a)) || !isFinite(a) || isNaN(parseFloat(b)) || !isFinite(b)) {
            //Isn't a number so lowercase the string to properly compare
            if (a.toLowerCase() < b.toLowerCase()) return -1;
            if (a.toLowerCase() > b.toLowerCase()) return 1;
          } else {
            //Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b)) return -1;
            if (parseFloat(a) > parseFloat(b)) return 1;
          }

          return 0; //equal each other
        }
      }]);

      return OrderByPipe;
    }();

    OrderByPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'orderBy'
    })], OrderByPipe);
    /***/
  },

  /***/
  "./src/app/components/shared/services/cart.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/shared/services/cart.service.ts ***!
    \************************************************************/

  /*! exports provided: CartService */

  /***/
  function srcAppComponentsSharedServicesCartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartService", function () {
      return CartService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/fesm2015/snack-bar.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js"); // Get product from Localstorage


    var products = JSON.parse(localStorage.getItem("cartItem")) || [];

    var CartService = /*#__PURE__*/function () {
      function CartService(snackBar) {
        _classCallCheck(this, CartService);

        this.snackBar = snackBar; // Array

        this.cartItems = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.cartItems.subscribe(function (products) {
          return products = products;
        });
      } // Get Products


      _createClass(CartService, [{
        key: "getItems",
        value: function getItems() {
          var itemsStream = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            observer.next(products);
            observer.complete();
          });
          return itemsStream;
        } // Add to cart

      }, {
        key: "addToCart",
        value: function addToCart(product, quantity) {
          var _this9 = this;

          var message, status;
          var item = false; // If Products exist

          var hasItem = products.find(function (items, index) {
            if (items.product.id == product.id) {
              var qty = products[index].quantity + quantity;

              var stock = _this9.calculateStockCounts(products[index], quantity);

              if (qty != 0 && stock) {
                products[index]['quantity'] = qty;
                message = 'The product ' + product.name + ' has been added to cart.';
                status = 'success';

                _this9.snackBar.open(message, '×', {
                  panelClass: [status],
                  verticalPosition: 'top',
                  duration: 3000
                });
              }

              return true;
            }
          }); // If Products does not exist (Add New Products)

          if (!hasItem) {
            item = {
              product: product,
              quantity: quantity
            };
            products.push(item);
            message = 'The product ' + product.name + ' has been added to cart.';
            status = 'success';
            this.snackBar.open(message, '×', {
              panelClass: [status],
              verticalPosition: 'top',
              duration: 3000
            });
          }

          localStorage.setItem("cartItem", JSON.stringify(products));
          return item;
        } // Calculate Product stock Counts

      }, {
        key: "calculateStockCounts",
        value: function calculateStockCounts(product, quantity) {
          var message, status;
          var qty = product.quantity + quantity;
          var stock = product.product.stock;

          if (stock < qty) {
            // this.toastrService.error('You can not add more items than available. In stock '+ stock +' items.');
            this.snackBar.open('You can not choose more items than available. In stock ' + stock + ' items.', '×', {
              panelClass: 'error',
              verticalPosition: 'top',
              duration: 3000
            });
            return false;
          }

          return true;
        } // Removed in cart

      }, {
        key: "removeFromCart",
        value: function removeFromCart(item) {
          if (item === undefined) return false;
          var index = products.indexOf(item);
          products.splice(index, 1);
          localStorage.setItem("cartItem", JSON.stringify(products));
        } // Total amount

      }, {
        key: "getTotalAmount",
        value: function getTotalAmount() {
          return this.cartItems.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (product) {
            return products.reduce(function (prev, curr) {
              return prev + curr.product.price * curr.quantity;
            }, 0);
          }));
        } // Update Cart Value

      }, {
        key: "updateCartQuantity",
        value: function updateCartQuantity(product, quantity) {
          var _this10 = this;

          return products.find(function (items, index) {
            if (items.product.id == product.id) {
              var qty = products[index].quantity + quantity;

              var stock = _this10.calculateStockCounts(products[index], quantity);

              if (qty != 0 && stock) products[index]['quantity'] = qty;
              localStorage.setItem("cartItem", JSON.stringify(products));
              return true;
            }
          });
        }
      }]);

      return CartService;
    }();

    CartService.ctorParameters = function () {
      return [{
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }];
    };

    CartService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])], CartService);
    /***/
  },

  /***/
  "./src/app/components/shared/services/color-option.service.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/shared/services/color-option.service.ts ***!
    \********************************************************************/

  /*! exports provided: Settings, AppSettings */

  /***/
  function srcAppComponentsSharedServicesColorOptionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Settings", function () {
      return Settings;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppSettings", function () {
      return AppSettings;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Settings = function Settings(name, theme, rtl) {
      _classCallCheck(this, Settings);

      this.name = name;
      this.theme = theme;
      this.rtl = rtl;
    };

    var AppSettings = function AppSettings() {
      _classCallCheck(this, AppSettings);

      this.settings = new Settings('Sophia', // theme name
      'orange', // green, blue, red, pink, purple, grey
      false);
    };

    AppSettings = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AppSettings);
    /***/
  },

  /***/
  "./src/app/components/shared/services/product.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/shared/services/product.service.ts ***!
    \***************************************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppComponentsSharedServicesProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/fesm2015/snack-bar.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js"); // Get product from Localstorage


    var products = JSON.parse(localStorage.getItem("compareItem")) || [];

    var ProductService = /*#__PURE__*/function () {
      function ProductService(httpClient, snackBar) {
        _classCallCheck(this, ProductService);

        this.httpClient = httpClient;
        this.snackBar = snackBar;
        this.currency = 'USD';
        this.catalogMode = false;
        this._url = "assets/data/";
        this.url = "assets/data/banners.json";
        this.compareProducts = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.compareProducts.subscribe(function (products) {
          return products = products;
        });
      }

      _createClass(ProductService, [{
        key: "products",
        value: function products() {
          return this.httpClient.get('assets/data/products2.json');
        }
      }, {
        key: "banners",
        value: function banners() {
          return this.httpClient.get(this.url);
        } // Get Banners

      }, {
        key: "getBanners",
        value: function getBanners() {
          return this.banners();
        } // Get Banners

      }, {
        key: "getProducts",
        value: function getProducts() {
          return this.products();
        } // Get Products By Id

      }, {
        key: "getProduct",
        value: function getProduct(id) {
          return this.products().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (items) {
            return items.find(function (item) {
              return item.id === id;
            });
          })); // return this.products.find(product=> product.id === id);
          // return this.httpClient.get<Product>(this._url + 'product-' + id + '.json');
        }
        /*
        ---------------------------------------------
        ----------  Compare Product  ----------------
        ---------------------------------------------
        */
        // Get Compare Products

      }, {
        key: "getComapreProducts",
        value: function getComapreProducts() {
          var itemsStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            observer.next(products);
            observer.complete();
          });
          return itemsStream;
        } // If item is aleready added In compare

      }, {
        key: "hasProduct",
        value: function hasProduct(product) {
          var item = products.find(function (item) {
            return item.id === product.id;
          });
          return item !== undefined;
        } // Add to compare

      }, {
        key: "addToCompare",
        value: function addToCompare(product) {
          var message, status;
          var item = false;

          if (this.hasProduct(product)) {
            item = products.filter(function (item) {
              return item.id === product.id;
            })[0];
            var index = products.indexOf(item);
            this.snackBar.open('The product  ' + product.name + ' already added to comparison list.', '×', {
              panelClass: 'error',
              verticalPosition: 'top',
              duration: 3000
            });
          } else {
            if (products.length < 4) products.push(product);
            message = 'The product ' + product.name + ' has been added to comparison list.';
            status = 'success';
            this.snackBar.open(message, '×', {
              panelClass: [status],
              verticalPosition: 'top',
              duration: 3000
            });
          }

          localStorage.setItem("compareItem", JSON.stringify(products));
          return item;
        } // Removed Product

      }, {
        key: "removeFromCompare",
        value: function removeFromCompare(product) {
          if (product === undefined) {
            return;
          }

          var index = products.indexOf(product);
          products.splice(index, 1);
          localStorage.setItem("compareItem", JSON.stringify(products));
        } // Get Products By category

      }, {
        key: "getProductByCategory",
        value: function getProductByCategory(category) {
          return this.products().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (items) {
            return items.filter(function (item) {
              if (category == 'all') return item;else return item.category === category;
            });
          }));
        }
      }]);

      return ProductService;
    }();

    ProductService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
      }];
    };

    ProductService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])], ProductService);
    /***/
  },

  /***/
  "./src/app/components/shared/services/wishlist.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/shared/services/wishlist.service.ts ***!
    \****************************************************************/

  /*! exports provided: WishlistService */

  /***/
  function srcAppComponentsSharedServicesWishlistServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WishlistService", function () {
      return WishlistService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/fesm2015/snack-bar.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js"); // Get product from Localstorage


    var products = JSON.parse(localStorage.getItem("wishlistItem")) || [];

    var WishlistService = /*#__PURE__*/function () {
      function WishlistService(snackBar) {
        _classCallCheck(this, WishlistService);

        this.snackBar = snackBar; // wishlist array

        this.wishlistProducts = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
      } // Get  wishlist Products


      _createClass(WishlistService, [{
        key: "getProducts",
        value: function getProducts() {
          var itemsStream = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            observer.next(products);
            observer.complete();
          });
          return itemsStream;
        } // If item is aleready added In wishlist

      }, {
        key: "hasProduct",
        value: function hasProduct(product) {
          var item = products.find(function (item) {
            return item.id === product.id;
          });
          return item !== undefined;
        } // Add to wishlist

      }, {
        key: "addToWishlist",
        value: function addToWishlist(product) {
          var message, status;
          var item = false;

          if (this.hasProduct(product)) {
            item = products.filter(function (item) {
              return item.id === product.id;
            })[0];
            var index = products.indexOf(item);
          } else {
            products.push(product);
          }

          message = 'The product ' + product.name + ' has been added to wishlist.';
          status = 'success';
          this.snackBar.open(message, '×', {
            panelClass: [status],
            verticalPosition: 'top',
            duration: 3000
          });
          localStorage.setItem("wishlistItem", JSON.stringify(products));
          return item;
        } // Removed Product

      }, {
        key: "removeFromWishlist",
        value: function removeFromWishlist(product) {
          if (product === undefined) {
            return;
          }

          var index = products.indexOf(product);
          products.splice(index, 1);
          localStorage.setItem("wishlistItem", JSON.stringify(products));
        }
      }]);

      return WishlistService;
    }();

    WishlistService.ctorParameters = function () {
      return [{
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }];
    };

    WishlistService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])], WishlistService);
    /***/
  },

  /***/
  "./src/app/components/shared/shared.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/components/shared/shared.module.ts ***!
    \****************************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppComponentsSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_color_option_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/color-option.service */
    "./src/app/components/shared/services/color-option.service.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/fesm2015/select.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/fesm2015/card.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/fesm2015/list.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/fesm2015/input.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/fesm2015/table.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/components/shared/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/components/shared/footer/footer.component.ts");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/components/shared/menu/menu.component.ts");
    /* harmony import */


    var _pipes_order_by_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./pipes/order-by.pipe */
    "./src/app/components/shared/pipes/order-by.pipe.ts");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./services/product.service */
    "./src/app/components/shared/services/product.service.ts");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./services/cart.service */
    "./src/app/components/shared/services/cart.service.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/components/shared/sidebar/sidebar.component.ts");
    /* harmony import */


    var _banners_banners_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./banners/banners.component */
    "./src/app/components/shared/banners/banners.component.ts");
    /* harmony import */


    var _header_two_header_two_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./header-two/header-two.component */
    "./src/app/components/shared/header-two/header-two.component.ts");
    /* harmony import */


    var _shopping_widgets_shopping_widgets_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./shopping-widgets/shopping-widgets.component */
    "./src/app/components/shared/shopping-widgets/shopping-widgets.component.ts");
    /* harmony import */


    var _header_three_header_three_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./header-three/header-three.component */
    "./src/app/components/shared/header-three/header-three.component.ts");
    /* harmony import */


    var _banners_four_banners_four_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./banners-four/banners-four.component */
    "./src/app/components/shared/banners-four/banners-four.component.ts");
    /* harmony import */


    var _blog_section_blog_section_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./blog-section/blog-section.component */
    "./src/app/components/shared/blog-section/blog-section.component.ts");
    /* harmony import */


    var _banner_promotion_banner_promotion_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./banner-promotion/banner-promotion.component */
    "./src/app/components/shared/banner-promotion/banner-promotion.component.ts");
    /* harmony import */


    var _header_four_header_four_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./header-four/header-four.component */
    "./src/app/components/shared/header-four/header-four.component.ts");
    /* harmony import */


    var _categories_menu_categories_menu_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./categories-menu/categories-menu.component */
    "./src/app/components/shared/categories-menu/categories-menu.component.ts");
    /* harmony import */


    var _categories_section_categories_section_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./categories-section/categories-section.component */
    "./src/app/components/shared/categories-section/categories-section.component.ts");
    /* harmony import */


    var _footer_two_footer_two_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./footer-two/footer-two.component */
    "./src/app/components/shared/footer-two/footer-two.component.ts");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/fesm2015/badge.js");
    /* harmony import */


    var _shopping_widgets_two_shopping_widgets_two_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./shopping-widgets-two/shopping-widgets-two.component */
    "./src/app/components/shared/shopping-widgets-two/shopping-widgets-two.component.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_24__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_25__["FooterComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_26__["MenuComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_30__["SidebarComponent"], _pipes_order_by_pipe__WEBPACK_IMPORTED_MODULE_27__["OrderByPipe"], _banners_banners_component__WEBPACK_IMPORTED_MODULE_31__["BannersComponent"], _header_two_header_two_component__WEBPACK_IMPORTED_MODULE_32__["HeaderTwoComponent"], _shopping_widgets_shopping_widgets_component__WEBPACK_IMPORTED_MODULE_33__["ShoppingWidgetsComponent"], _header_three_header_three_component__WEBPACK_IMPORTED_MODULE_34__["HeaderThreeComponent"], _banners_four_banners_four_component__WEBPACK_IMPORTED_MODULE_35__["BannersFourComponent"], _blog_section_blog_section_component__WEBPACK_IMPORTED_MODULE_36__["BlogSectionComponent"], _banner_promotion_banner_promotion_component__WEBPACK_IMPORTED_MODULE_37__["BannerPromotionComponent"], _header_four_header_four_component__WEBPACK_IMPORTED_MODULE_38__["HeaderFourComponent"], _categories_menu_categories_menu_component__WEBPACK_IMPORTED_MODULE_39__["CategoriesMenuComponent"], _categories_section_categories_section_component__WEBPACK_IMPORTED_MODULE_40__["CategoriesSectionComponent"], _footer_two_footer_two_component__WEBPACK_IMPORTED_MODULE_41__["FooterTwoComponent"], _shopping_widgets_two_shopping_widgets_two_component__WEBPACK_IMPORTED_MODULE_43__["ShoppingWidgetsTwoComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_42__["MatBadgeModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatTableModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDividerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"]],
      exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_23__["MatTableModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDividerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _pipes_order_by_pipe__WEBPACK_IMPORTED_MODULE_27__["OrderByPipe"], _header_header_component__WEBPACK_IMPORTED_MODULE_24__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_25__["FooterComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_26__["MenuComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_30__["SidebarComponent"], _banners_banners_component__WEBPACK_IMPORTED_MODULE_31__["BannersComponent"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _header_two_header_two_component__WEBPACK_IMPORTED_MODULE_32__["HeaderTwoComponent"], _header_three_header_three_component__WEBPACK_IMPORTED_MODULE_34__["HeaderThreeComponent"], _header_four_header_four_component__WEBPACK_IMPORTED_MODULE_38__["HeaderFourComponent"], _shopping_widgets_shopping_widgets_component__WEBPACK_IMPORTED_MODULE_33__["ShoppingWidgetsComponent"], _banners_four_banners_four_component__WEBPACK_IMPORTED_MODULE_35__["BannersFourComponent"], _blog_section_blog_section_component__WEBPACK_IMPORTED_MODULE_36__["BlogSectionComponent"], _banner_promotion_banner_promotion_component__WEBPACK_IMPORTED_MODULE_37__["BannerPromotionComponent"], _categories_menu_categories_menu_component__WEBPACK_IMPORTED_MODULE_39__["CategoriesMenuComponent"], _categories_section_categories_section_component__WEBPACK_IMPORTED_MODULE_40__["CategoriesSectionComponent"], _footer_two_footer_two_component__WEBPACK_IMPORTED_MODULE_41__["FooterTwoComponent"]],
      providers: [_services_product_service__WEBPACK_IMPORTED_MODULE_28__["ProductService"], _services_cart_service__WEBPACK_IMPORTED_MODULE_29__["CartService"], _services_color_option_service__WEBPACK_IMPORTED_MODULE_4__["AppSettings"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/components/shared/shopping-widgets-two/shopping-widgets-two.component.sass":
  /*!********************************************************************************************!*\
    !*** ./src/app/components/shared/shopping-widgets-two/shopping-widgets-two.component.sass ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedShoppingWidgetsTwoShoppingWidgetsTwoComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3Nob3BwaW5nLXdpZGdldHMtdHdvL3Nob3BwaW5nLXdpZGdldHMtdHdvLmNvbXBvbmVudC5zYXNzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/shared/shopping-widgets-two/shopping-widgets-two.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/components/shared/shopping-widgets-two/shopping-widgets-two.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: ShoppingWidgetsTwoComponent */

  /***/
  function srcAppComponentsSharedShoppingWidgetsTwoShoppingWidgetsTwoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingWidgetsTwoComponent", function () {
      return ShoppingWidgetsTwoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/cart.service */
    "./src/app/components/shared/services/cart.service.ts");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/product.service */
    "./src/app/components/shared/services/product.service.ts");

    var ShoppingWidgetsTwoComponent = /*#__PURE__*/function () {
      function ShoppingWidgetsTwoComponent(cartService, productService) {
        _classCallCheck(this, ShoppingWidgetsTwoComponent);

        this.cartService = cartService;
        this.productService = productService;
        this.shoppingCartItems = [];
      }

      _createClass(ShoppingWidgetsTwoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "updateCurrency",
        value: function updateCurrency(curr) {
          this.productService.currency = curr;
        }
      }, {
        key: "removeItem",
        value: function removeItem(item) {
          this.cartService.removeFromCart(item);
        }
      }, {
        key: "getTotal",
        value: function getTotal() {
          return this.cartService.getTotalAmount();
        }
      }]);

      return ShoppingWidgetsTwoComponent;
    }();

    ShoppingWidgetsTwoComponent.ctorParameters = function () {
      return [{
        type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
      }, {
        type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
      }];
    };

    ShoppingWidgetsTwoComponent.propDecorators = {
      shoppingCartItems: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    ShoppingWidgetsTwoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shopping-widgets-two',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./shopping-widgets-two.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/shopping-widgets-two/shopping-widgets-two.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./shopping-widgets-two.component.sass */
      "./src/app/components/shared/shopping-widgets-two/shopping-widgets-two.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"], _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])], ShoppingWidgetsTwoComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/shopping-widgets/shopping-widgets.component.sass":
  /*!************************************************************************************!*\
    !*** ./src/app/components/shared/shopping-widgets/shopping-widgets.component.sass ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedShoppingWidgetsShoppingWidgetsComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3Nob3BwaW5nLXdpZGdldHMvc2hvcHBpbmctd2lkZ2V0cy5jb21wb25lbnQuc2FzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/shared/shopping-widgets/shopping-widgets.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/shared/shopping-widgets/shopping-widgets.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: ShoppingWidgetsComponent */

  /***/
  function srcAppComponentsSharedShoppingWidgetsShoppingWidgetsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingWidgetsComponent", function () {
      return ShoppingWidgetsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/cart.service */
    "./src/app/components/shared/services/cart.service.ts");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/product.service */
    "./src/app/components/shared/services/product.service.ts");

    var ShoppingWidgetsComponent = /*#__PURE__*/function () {
      function ShoppingWidgetsComponent(cartService, productService) {
        _classCallCheck(this, ShoppingWidgetsComponent);

        this.cartService = cartService;
        this.productService = productService;
        this.shoppingCartItems = [];
      }

      _createClass(ShoppingWidgetsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "updateCurrency",
        value: function updateCurrency(curr) {
          this.productService.currency = curr;
        }
      }, {
        key: "removeItem",
        value: function removeItem(item) {
          this.cartService.removeFromCart(item);
        }
      }, {
        key: "getTotal",
        value: function getTotal() {
          return this.cartService.getTotalAmount();
        }
      }]);

      return ShoppingWidgetsComponent;
    }();

    ShoppingWidgetsComponent.ctorParameters = function () {
      return [{
        type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
      }, {
        type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
      }];
    };

    ShoppingWidgetsComponent.propDecorators = {
      shoppingCartItems: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    ShoppingWidgetsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shopping-widgets',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./shopping-widgets.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/shopping-widgets/shopping-widgets.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./shopping-widgets.component.sass */
      "./src/app/components/shared/shopping-widgets/shopping-widgets.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"], _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])], ShoppingWidgetsComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/sidebar/sidebar-menu.service.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/shared/sidebar/sidebar-menu.service.ts ***!
    \*******************************************************************/

  /*! exports provided: SidebarMenuService */

  /***/
  function srcAppComponentsSharedSidebarSidebarMenuServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarMenuService", function () {
      return SidebarMenuService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var SidebarMenuService = function SidebarMenuService(router) {
      _classCallCheck(this, SidebarMenuService);

      this.router = router;
      this.currentUrl = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](undefined);
    };

    SidebarMenuService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    SidebarMenuService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], SidebarMenuService);
    /***/
  },

  /***/
  "./src/app/components/shared/sidebar/sidebar.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/components/shared/sidebar/sidebar.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedSidebarSidebarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/shared/sidebar/sidebar.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/shared/sidebar/sidebar.component.ts ***!
    \****************************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppComponentsSharedSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _sidebar_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./sidebar-menu.service */
    "./src/app/components/shared/sidebar/sidebar-menu.service.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent(sidenavMenuService, router) {
        _classCallCheck(this, SidebarComponent);

        this.sidenavMenuService = sidenavMenuService;
        this.router = router;
        this.ariaExpanded = this.expanded;

        if (this.depth === undefined) {
          this.depth = 0;
        }
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.sidenavMenuService.currentUrl.subscribe(function (url) {
            if (_this11.item.route && url) {
              // console.log(`Checking '/${this.item.route}' against '${url}'`);
              _this11.expanded = url.indexOf("/".concat(_this11.item.route)) === 0;
              _this11.ariaExpanded = _this11.expanded; // console.log(`${this.item.route} is expanded: ${this.expanded}`);
            }
          });
        }
      }, {
        key: "onItemSelected",
        value: function onItemSelected(item) {
          if (!item.children || !item.children.length) {
            this.router.navigate([item.route]);
          }

          if (item.children && item.children.length) {
            this.expanded = !this.expanded;
          }
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ctorParameters = function () {
      return [{
        type: _sidebar_menu_service__WEBPACK_IMPORTED_MODULE_2__["SidebarMenuService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    SidebarComponent.propDecorators = {
      ariaExpanded: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
        args: ['attr.aria-expanded']
      }],
      item: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      depth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sidebar',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/sidebar/sidebar.component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('indicatorRotate', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        transform: 'rotate(0deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        transform: 'rotate(180deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('225ms cubic-bezier(0.4,0.0,0.2,1)'))])],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./sidebar.component.scss */
      "./src/app/components/shared/sidebar/sidebar.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_sidebar_menu_service__WEBPACK_IMPORTED_MODULE_2__["SidebarMenuService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], SidebarComponent);
    /***/
  },

  /***/
  "./src/app/components/shop/home-five/home-five.component.sass":
  /*!********************************************************************!*\
    !*** ./src/app/components/shop/home-five/home-five.component.sass ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShopHomeFiveHomeFiveComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC9ob21lLWZpdmUvaG9tZS1maXZlLmNvbXBvbmVudC5zYXNzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/shop/home-five/home-five.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/shop/home-five/home-five.component.ts ***!
    \******************************************************************/

  /*! exports provided: HomeFiveComponent */

  /***/
  function srcAppComponentsShopHomeFiveHomeFiveComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeFiveComponent", function () {
      return HomeFiveComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/services/product.service */
    "./src/app/components/shared/services/product.service.ts");
    /* harmony import */


    var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/cart.service */
    "./src/app/components/shared/services/cart.service.ts");

    var HomeFiveComponent = /*#__PURE__*/function () {
      function HomeFiveComponent(productService, cartService) {
        _classCallCheck(this, HomeFiveComponent);

        this.productService = productService;
        this.cartService = cartService;
        this.shoppingCartItems = [];
        this.slides = [{
          title: 'Huge sale',
          subtitle: 'Up to 70%',
          image: 'assets/images/carousel/banner1.jpg'
        }, {
          title: 'Biggest discount',
          subtitle: 'Check the promotion',
          image: 'assets/images/carousel/banner2.jpg'
        }, {
          title: 'Biggest sale',
          subtitle: 'Dont miss it',
          image: 'assets/images/carousel/banner3.jpg'
        }, {
          title: 'Our best products',
          subtitle: 'Special selection',
          image: 'assets/images/carousel/banner4.jpg'
        }, {
          title: 'Massive sale',
          subtitle: 'Only for today',
          image: 'assets/images/carousel/banner5.jpg'
        }]; // Collection banner

        this.discount = [{
          image: 'assets/images/product/tablet_bn.png',
          title: 'Tablets, Smartphones and more',
          subtitle: 'Sale up to 30%'
        }, {
          image: 'assets/images/product/camera_bn.png',
          title: 'New Cameras Collection',
          subtitle: 'Sale up to 30%'
        }];
      }

      _createClass(HomeFiveComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.cartService.getItems().subscribe(function (shoppingCartItems) {
            return _this12.shoppingCartItems = shoppingCartItems;
          });
          this.productService.getProducts().subscribe(function (product) {
            _this12.products = product;
          });
        }
      }]);

      return HomeFiveComponent;
    }();

    HomeFiveComponent.ctorParameters = function () {
      return [{
        type: _shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }, {
        type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]
      }];
    };

    HomeFiveComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-five',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home-five.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/home-five/home-five.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home-five.component.sass */
      "./src/app/components/shop/home-five/home-five.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])], HomeFiveComponent);
    /***/
  },

  /***/
  "./src/app/components/shop/home-four/home-four.component.sass":
  /*!********************************************************************!*\
    !*** ./src/app/components/shop/home-four/home-four.component.sass ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShopHomeFourHomeFourComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC9ob21lLWZvdXIvaG9tZS1mb3VyLmNvbXBvbmVudC5zYXNzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/shop/home-four/home-four.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/shop/home-four/home-four.component.ts ***!
    \******************************************************************/

  /*! exports provided: HomeFourComponent */

  /***/
  function srcAppComponentsShopHomeFourHomeFourComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeFourComponent", function () {
      return HomeFourComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/services/product.service */
    "./src/app/components/shared/services/product.service.ts");
    /* harmony import */


    var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/cart.service */
    "./src/app/components/shared/services/cart.service.ts");

    var HomeFourComponent = /*#__PURE__*/function () {
      function HomeFourComponent(productService, cartService) {
        var _this13 = this;

        _classCallCheck(this, HomeFourComponent);

        this.productService = productService;
        this.cartService = cartService;
        this.banners = [];
        this.currencies = ['USD', 'EUR'];
        this.flags = [{
          name: 'English',
          image: 'assets/images/flags/gb.svg'
        }, {
          name: 'German',
          image: 'assets/images/flags/de.svg'
        }, {
          name: 'French',
          image: 'assets/images/flags/fr.svg'
        }, {
          name: 'Russian',
          image: 'assets/images/flags/ru.svg'
        }, {
          name: 'Turkish',
          image: 'assets/images/flags/tr.svg'
        }];
        this.shoppingCartItems = [];
        this.wishlistItems = [];
        this.slides = [{
          title: 'Huge sale',
          subtitle: 'Up to 70%',
          image: 'assets/images/carousel/banner1.jpg'
        }, {
          title: 'Biggest discount',
          subtitle: 'Check the promotion',
          image: 'assets/images/carousel/banner2.jpg'
        }, {
          title: 'Biggest sale',
          subtitle: 'Dont miss it',
          image: 'assets/images/carousel/banner3.jpg'
        }, {
          title: 'Our best products',
          subtitle: 'Special selection',
          image: 'assets/images/carousel/banner4.jpg'
        }, {
          title: 'Massive sale',
          subtitle: 'Only for today',
          image: 'assets/images/carousel/banner5.jpg'
        }];
        this.cartService.getItems().subscribe(function (shoppingCartItems) {
          return _this13.shoppingCartItems = shoppingCartItems;
        });
      }

      _createClass(HomeFourComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.productService.getBanners().subscribe(function (data) {
            return _this14.banners = data;
          });
          this.productService.getProducts().subscribe(function (product) {
            _this14.products = product;
          });
          this.currency = this.currencies[0];
          this.flag = this.flags[0];
        }
      }, {
        key: "changeCurrency",
        value: function changeCurrency(currency) {
          this.currency = currency;
        }
      }, {
        key: "changeLang",
        value: function changeLang(flag) {
          this.flag = flag;
        }
      }]);

      return HomeFourComponent;
    }();

    HomeFourComponent.ctorParameters = function () {
      return [{
        type: _shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }, {
        type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]
      }];
    };

    HomeFourComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-four',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home-four.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/home-four/home-four.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home-four.component.sass */
      "./src/app/components/shop/home-four/home-four.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])], HomeFourComponent);
    /***/
  },

  /***/
  "./src/app/components/shop/home-three/home-three.component.sass":
  /*!**********************************************************************!*\
    !*** ./src/app/components/shop/home-three/home-three.component.sass ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShopHomeThreeHomeThreeComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC9ob21lLXRocmVlL2hvbWUtdGhyZWUuY29tcG9uZW50LnNhc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/shop/home-three/home-three.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/shop/home-three/home-three.component.ts ***!
    \********************************************************************/

  /*! exports provided: HomeThreeComponent */

  /***/
  function srcAppComponentsShopHomeThreeHomeThreeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeThreeComponent", function () {
      return HomeThreeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/services/product.service */
    "./src/app/components/shared/services/product.service.ts");
    /* harmony import */


    var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/cart.service */
    "./src/app/components/shared/services/cart.service.ts");

    var HomeThreeComponent = /*#__PURE__*/function () {
      function HomeThreeComponent(productService, cartService) {
        _classCallCheck(this, HomeThreeComponent);

        this.productService = productService;
        this.cartService = cartService;
        this.banners = [];
        this.shoppingCartItems = [];
        this.wishlistItems = [];
        this.slides = [{
          title: 'Huge sale',
          subtitle: 'Up to 70%',
          image: 'assets/images/carousel/banner1.jpg'
        }, {
          title: 'Biggest discount',
          subtitle: 'Check the promotion',
          image: 'assets/images/carousel/banner2.jpg'
        }, {
          title: 'Biggest sale',
          subtitle: 'Dont miss it',
          image: 'assets/images/carousel/banner3.jpg'
        }, {
          title: 'Our best products',
          subtitle: 'Special selection',
          image: 'assets/images/carousel/banner4.jpg'
        }, {
          title: 'Massive sale',
          subtitle: 'Only for today',
          image: 'assets/images/carousel/banner5.jpg'
        }]; // Collection banner

        this.discount = [{
          image: 'assets/images/product/tablet_bn.png',
          title: 'Tablets, Smartphones and more',
          subtitle: 'Sale up to 30%'
        }, {
          image: 'assets/images/product/camera_bn.png',
          title: 'New Cameras Collection',
          subtitle: 'Sale up to 30%'
        }];
      }

      _createClass(HomeThreeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.cartService.getItems().subscribe(function (shoppingCartItems) {
            return _this15.shoppingCartItems = shoppingCartItems;
          });
          this.productService.getProducts().subscribe(function (product) {
            _this15.products = product;
            console.log(product);
          });
        }
      }]);

      return HomeThreeComponent;
    }();

    HomeThreeComponent.ctorParameters = function () {
      return [{
        type: _shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }, {
        type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]
      }];
    };

    HomeThreeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-three',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home-three.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/home-three/home-three.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home-three.component.sass */
      "./src/app/components/shop/home-three/home-three.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])], HomeThreeComponent);
    /***/
  },

  /***/
  "./src/app/components/shop/home-three/product-carousel-three/product-carousel-three.component.sass":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/components/shop/home-three/product-carousel-three/product-carousel-three.component.sass ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShopHomeThreeProductCarouselThreeProductCarouselThreeComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC9ob21lLXRocmVlL3Byb2R1Y3QtY2Fyb3VzZWwtdGhyZWUvcHJvZHVjdC1jYXJvdXNlbC10aHJlZS5jb21wb25lbnQuc2FzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/shop/home-three/product-carousel-three/product-carousel-three.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/components/shop/home-three/product-carousel-three/product-carousel-three.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: ProductCarouselThreeComponent */

  /***/
  function srcAppComponentsShopHomeThreeProductCarouselThreeProductCarouselThreeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductCarouselThreeComponent", function () {
      return ProductCarouselThreeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/shared/services/cart.service */
    "./src/app/components/shared/services/cart.service.ts");
    /* harmony import */


    var src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/components/shared/services/product.service */
    "./src/app/components/shared/services/product.service.ts");
    /* harmony import */


    var src_app_components_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/components/shared/services/wishlist.service */
    "./src/app/components/shared/services/wishlist.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _products_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../products/product-dialog/product-dialog.component */
    "./src/app/components/shop/products/product-dialog/product-dialog.component.ts");

    var ProductCarouselThreeComponent = /*#__PURE__*/function () {
      function ProductCarouselThreeComponent(cartService, productsService, wishlistService, dialog, router) {
        _classCallCheck(this, ProductCarouselThreeComponent);

        this.cartService = cartService;
        this.productsService = productsService;
        this.wishlistService = wishlistService;
        this.dialog = dialog;
        this.router = router;
        this.onOpenProductDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.product = [];
        this.config = {};
      } // @ViewChild(SwiperDirective) directiveRef: SwiperDirective;


      _createClass(ProductCarouselThreeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.config = {
            observer: true,
            slidesPerView: 4,
            spaceBetween: 16,
            keyboard: true,
            navigation: true,
            pagination: false,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            breakpoints: {
              480: {
                slidesPerView: 1
              },
              740: {
                slidesPerView: 2
              },
              960: {
                slidesPerView: 3
              },
              1280: {
                slidesPerView: 4
              }
            }
          };
        } // Add to cart

      }, {
        key: "addToCart",
        value: function addToCart(product) {
          var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          this.cartService.addToCart(product, quantity);
          console.log(product, quantity);
        } // Add to wishlist

      }, {
        key: "addToWishlist",
        value: function addToWishlist(product) {
          this.wishlistService.addToWishlist(product);
        } // Add to compare

      }, {
        key: "addToCompare",
        value: function addToCompare(product) {
          this.productsService.addToCompare(product);
        }
      }, {
        key: "openProductDialog",
        value: function openProductDialog(product) {
          var _this16 = this;

          var dialogRef = this.dialog.open(_products_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ProductDialogComponent"], {
            data: product,
            panelClass: 'product-dialog'
          });
          dialogRef.afterClosed().subscribe(function (product) {
            if (product) {
              _this16.router.navigate(['/products', product.id, product.name]);
            }
          });
        }
      }]);

      return ProductCarouselThreeComponent;
    }();

    ProductCarouselThreeComponent.ctorParameters = function () {
      return [{
        type: src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
      }, {
        type: src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
      }, {
        type: src_app_components_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_4__["WishlistService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    ProductCarouselThreeComponent.propDecorators = {
      onOpenProductDialog: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      product: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['product']
      }]
    };
    ProductCarouselThreeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-carousel-three',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./product-carousel-three.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/home-three/product-carousel-three/product-carousel-three.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./product-carousel-three.component.sass */
      "./src/app/components/shop/home-three/product-carousel-three/product-carousel-three.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"], src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], src_app_components_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_4__["WishlistService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])], ProductCarouselThreeComponent);
    /***/
  },

  /***/
  "./src/app/components/shop/home-two/home-two.component.sass":
  /*!******************************************************************!*\
    !*** ./src/app/components/shop/home-two/home-two.component.sass ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShopHomeTwoHomeTwoComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC9ob21lLXR3by9ob21lLXR3by5jb21wb25lbnQuc2FzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/shop/home-two/home-two.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/shop/home-two/home-two.component.ts ***!
    \****************************************************************/

  /*! exports provided: HomeTwoComponent */

  /***/
  function srcAppComponentsShopHomeTwoHomeTwoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeTwoComponent", function () {
      return HomeTwoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/services/product.service */
    "./src/app/components/shared/services/product.service.ts");
    /* harmony import */


    var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/cart.service */
    "./src/app/components/shared/services/cart.service.ts");

    var HomeTwoComponent = /*#__PURE__*/function () {
      function HomeTwoComponent(productService, cartService) {
        _classCallCheck(this, HomeTwoComponent);

        this.productService = productService;
        this.cartService = cartService;
        this.banners = [];
        this.shoppingCartItems = [];
        this.wishlistItems = [];
        this.slides = [{
          title: 'Huge sale',
          subtitle: 'Up to 70%',
          image: 'assets/images/carousel/banner1.jpg'
        }, {
          title: 'Biggest discount',
          subtitle: 'Check the promotion',
          image: 'assets/images/carousel/banner2.jpg'
        }, {
          title: 'Biggest sale',
          subtitle: 'Dont miss it',
          image: 'assets/images/carousel/banner3.jpg'
        }, {
          title: 'Our best products',
          subtitle: 'Special selection',
          image: 'assets/images/carousel/banner4.jpg'
        }, {
          title: 'Massive sale',
          subtitle: 'Only for today',
          image: 'assets/images/carousel/banner5.jpg'
        }];
      }

      _createClass(HomeTwoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.cartService.getItems().subscribe(function (shoppingCartItems) {
            return _this17.shoppingCartItems = shoppingCartItems;
          });
          this.productService.getProducts().subscribe(function (product) {
            _this17.products = product;
          });
          this.productService.getBanners().subscribe(function (data) {
            return _this17.banners = data;
          });
        }
      }]);

      return HomeTwoComponent;
    }();

    HomeTwoComponent.ctorParameters = function () {
      return [{
        type: _shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }, {
        type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]
      }];
    };

    HomeTwoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-two',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home-two.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/home-two/home-two.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home-two.component.sass */
      "./src/app/components/shop/home-two/home-two.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])], HomeTwoComponent);
    /***/
  },

  /***/
  "./src/app/components/shop/home-two/product-carousel-two/product-carousel-two.component.sass":
  /*!***************************************************************************************************!*\
    !*** ./src/app/components/shop/home-two/product-carousel-two/product-carousel-two.component.sass ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShopHomeTwoProductCarouselTwoProductCarouselTwoComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC9ob21lLXR3by9wcm9kdWN0LWNhcm91c2VsLXR3by9wcm9kdWN0LWNhcm91c2VsLXR3by5jb21wb25lbnQuc2FzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/shop/home-two/product-carousel-two/product-carousel-two.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/components/shop/home-two/product-carousel-two/product-carousel-two.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: ProductCarouselTwoComponent */

  /***/
  function srcAppComponentsShopHomeTwoProductCarouselTwoProductCarouselTwoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductCarouselTwoComponent", function () {
      return ProductCarouselTwoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/shared/services/cart.service */
    "./src/app/components/shared/services/cart.service.ts");
    /* harmony import */


    var src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/components/shared/services/product.service */
    "./src/app/components/shared/services/product.service.ts");
    /* harmony import */


    var src_app_components_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/components/shared/services/wishlist.service */
    "./src/app/components/shared/services/wishlist.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _products_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../products/product-dialog/product-dialog.component */
    "./src/app/components/shop/products/product-dialog/product-dialog.component.ts");

    var ProductCarouselTwoComponent = /*#__PURE__*/function () {
      function ProductCarouselTwoComponent(cartService, productsService, wishlistService, dialog, router) {
        _classCallCheck(this, ProductCarouselTwoComponent);

        this.cartService = cartService;
        this.productsService = productsService;
        this.wishlistService = wishlistService;
        this.dialog = dialog;
        this.router = router;
        this.onOpenProductDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.product = [];
        this.config = {};
      } //  @ViewChild(SwiperDirective) directiveRef: SwiperDirective;


      _createClass(ProductCarouselTwoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.product);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.config = {
            observer: true,
            slidesPerView: 5,
            spaceBetween: 16,
            keyboard: true,
            navigation: true,
            pagination: false,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            breakpoints: {
              480: {
                slidesPerView: 1
              },
              740: {
                slidesPerView: 2
              },
              960: {
                slidesPerView: 3
              },
              1280: {
                slidesPerView: 4
              }
            }
          };
        } // Add to cart

      }, {
        key: "addToCart",
        value: function addToCart(product) {
          var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          this.cartService.addToCart(product, quantity);
          console.log(product, quantity);
        } // Add to wishlist

      }, {
        key: "addToWishlist",
        value: function addToWishlist(product) {
          this.wishlistService.addToWishlist(product);
        } // Add to compare

      }, {
        key: "addToCompare",
        value: function addToCompare(product) {
          this.productsService.addToCompare(product);
        }
      }, {
        key: "openProductDialog",
        value: function openProductDialog(product) {
          var _this18 = this;

          var dialogRef = this.dialog.open(_products_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ProductDialogComponent"], {
            data: product,
            panelClass: 'product-dialog'
          });
          dialogRef.afterClosed().subscribe(function (product) {
            if (product) {
              _this18.router.navigate(['/products', product.id, product.name]);
            }
          });
        }
      }]);

      return ProductCarouselTwoComponent;
    }();

    ProductCarouselTwoComponent.ctorParameters = function () {
      return [{
        type: src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
      }, {
        type: src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
      }, {
        type: src_app_components_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_4__["WishlistService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    ProductCarouselTwoComponent.propDecorators = {
      onOpenProductDialog: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      product: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['product']
      }]
    };
    ProductCarouselTwoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-carousel-two',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./product-carousel-two.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/home-two/product-carousel-two/product-carousel-two.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./product-carousel-two.component.sass */
      "./src/app/components/shop/home-two/product-carousel-two/product-carousel-two.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"], src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], src_app_components_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_4__["WishlistService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])], ProductCarouselTwoComponent);
    /***/
  },

  /***/
  "./src/app/components/shop/home/home.component.sass":
  /*!**********************************************************!*\
    !*** ./src/app/components/shop/home/home.component.sass ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShopHomeHomeComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC9ob21lL2hvbWUuY29tcG9uZW50LnNhc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/shop/home/home.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/components/shop/home/home.component.ts ***!
    \********************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsShopHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/services/product.service */
    "./src/app/components/shared/services/product.service.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(productService) {
        _classCallCheck(this, HomeComponent);

        this.productService = productService;
        this.banners = [];
        this.slides = [{
          title: 'Huge sale',
          subtitle: 'Up to 70%',
          image: 'assets/images/carousel/banner1.jpg'
        }, {
          title: 'Biggest discount',
          subtitle: 'Check the promotion',
          image: 'assets/images/carousel/banner2.jpg'
        }, {
          title: 'Biggest sale',
          subtitle: 'Dont miss it',
          image: 'assets/images/carousel/banner3.jpg'
        }, {
          title: 'Our best products',
          subtitle: 'Special selection',
          image: 'assets/images/carousel/banner4.jpg'
        }, {
          title: 'Massive sale',
          subtitle: 'Only for today',
          image: 'assets/images/carousel/banner5.jpg'
        }];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          this.productService.getBanners().subscribe(function (data) {
            return _this19.banners = data;
          });
          this.productService.getProducts().subscribe(function (product) {
            _this19.products = product;
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }];
    };

    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/home/home.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.component.sass */
      "./src/app/components/shop/home/home.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/shop/home/product-carousel/product-carousel.component.sass":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/shop/home/product-carousel/product-carousel.component.sass ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShopHomeProductCarouselProductCarouselComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC9ob21lL3Byb2R1Y3QtY2Fyb3VzZWwvcHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQuc2FzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/shop/home/product-carousel/product-carousel.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/shop/home/product-carousel/product-carousel.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: ProductCarouselComponent */

  /***/
  function srcAppComponentsShopHomeProductCarouselProductCarouselComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductCarouselComponent", function () {
      return ProductCarouselComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _products_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../products/product-dialog/product-dialog.component */
    "./src/app/components/shop/products/product-dialog/product-dialog.component.ts");
    /* harmony import */


    var src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/components/shared/services/cart.service */
    "./src/app/components/shared/services/cart.service.ts");
    /* harmony import */


    var src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/components/shared/services/product.service */
    "./src/app/components/shared/services/product.service.ts");
    /* harmony import */


    var src_app_components_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/shared/services/wishlist.service */
    "./src/app/components/shared/services/wishlist.service.ts");

    var ProductCarouselComponent = /*#__PURE__*/function () {
      function ProductCarouselComponent(dialog, router, cartService, productService, wishlistService) {
        _classCallCheck(this, ProductCarouselComponent);

        this.dialog = dialog;
        this.router = router;
        this.cartService = cartService;
        this.productService = productService;
        this.wishlistService = wishlistService;
        this.onOpenProductDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.product = [];
        this.config = {};
      }

      _createClass(ProductCarouselComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.config = {
            observer: true,
            slidesPerView: 5,
            spaceBetween: 16,
            keyboard: true,
            navigation: true,
            pagination: false,
            grabCursor: true,
            loop: true,
            preloadImages: false,
            lazy: true,
            breakpoints: {
              480: {
                slidesPerView: 1
              },
              740: {
                slidesPerView: 2
              },
              960: {
                slidesPerView: 3
              },
              1280: {
                slidesPerView: 4
              }
            }
          };
        }
      }, {
        key: "openProductDialog",
        value: function openProductDialog(product) {
          var _this20 = this;

          var dialogRef = this.dialog.open(_products_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ProductDialogComponent"], {
            data: product,
            panelClass: 'product-dialog'
          });
          dialogRef.afterClosed().subscribe(function (product) {
            if (product) {
              _this20.router.navigate(['/products', product.id, product.name]);
            }
          });
        } // Add to cart

      }, {
        key: "addToCart",
        value: function addToCart(product) {
          var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          this.cartService.addToCart(product, quantity);
          console.log(product, quantity);
        } // Add to wishlist

      }, {
        key: "addToWishlist",
        value: function addToWishlist(product) {
          this.wishlistService.addToWishlist(product);
        } // Add to compare

      }, {
        key: "addToCompare",
        value: function addToCompare(product) {
          this.productService.addToCompare(product);
        }
      }]);

      return ProductCarouselComponent;
    }();

    ProductCarouselComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]
      }, {
        type: src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]
      }, {
        type: src_app_components_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_7__["WishlistService"]
      }];
    };

    ProductCarouselComponent.propDecorators = {
      onOpenProductDialog: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      product: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['product']
      }]
    };
    ProductCarouselComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-carousel',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./product-carousel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/home/product-carousel/product-carousel.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./product-carousel.component.sass */
      "./src/app/components/shop/home/product-carousel/product-carousel.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"], src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"], src_app_components_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_7__["WishlistService"]])], ProductCarouselComponent);
    /***/
  },

  /***/
  "./src/app/components/shop/main-carousel/main-carousel.component.sass":
  /*!****************************************************************************!*\
    !*** ./src/app/components/shop/main-carousel/main-carousel.component.sass ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShopMainCarouselMainCarouselComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC9tYWluLWNhcm91c2VsL21haW4tY2Fyb3VzZWwuY29tcG9uZW50LnNhc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/shop/main-carousel/main-carousel.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/components/shop/main-carousel/main-carousel.component.ts ***!
    \**************************************************************************/

  /*! exports provided: MainCarouselComponent */

  /***/
  function srcAppComponentsShopMainCarouselMainCarouselComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainCarouselComponent", function () {
      return MainCarouselComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MainCarouselComponent = /*#__PURE__*/function () {
      function MainCarouselComponent() {
        _classCallCheck(this, MainCarouselComponent);

        this.slides = [];
        this.config = {};
        this.pagination = {
          el: '.swiper-pagination',
          clickable: true
        };
      }

      _createClass(MainCarouselComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.config = {
            slidesPerView: 1,
            spaceBetween: 0,
            initialSlide: 5,
            keyboard: true,
            navigation: true,
            pagination: this.pagination,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            autoplay: {
              delay: 6000,
              disableOnInteraction: false
            },
            speed: 500,
            effect: "slide"
          };
        }
      }]);

      return MainCarouselComponent;
    }();

    MainCarouselComponent.ctorParameters = function () {
      return [];
    };

    MainCarouselComponent.propDecorators = {
      slides: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['slides']
      }]
    };
    MainCarouselComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-carousel',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./main-carousel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/main-carousel/main-carousel.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./main-carousel.component.sass */
      "./src/app/components/shop/main-carousel/main-carousel.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], MainCarouselComponent);
    /***/
  },

  /***/
  "./src/app/components/shop/products/price/price.component.sass":
  /*!*********************************************************************!*\
    !*** ./src/app/components/shop/products/price/price.component.sass ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShopProductsPricePriceComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC9wcm9kdWN0cy9wcmljZS9wcmljZS5jb21wb25lbnQuc2FzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/shop/products/price/price.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/shop/products/price/price.component.ts ***!
    \*******************************************************************/

  /*! exports provided: PriceComponent */

  /***/
  function srcAppComponentsShopProductsPricePriceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PriceComponent", function () {
      return PriceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PriceComponent = /*#__PURE__*/function () {
      function PriceComponent() {
        _classCallCheck(this, PriceComponent);

        this.priceFrom = 750;
        this.priceTo = 1599; // Using Output EventEmitter

        this.priceFilters = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // define min, max and range

        this.min = 100;
        this.max = 1000;
        this.range = [100, 1000];
      }

      _createClass(PriceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // rangeChanged

      }, {
        key: "priceChanged",
        value: function priceChanged(event) {
          var _this21 = this;

          setInterval(function () {
            _this21.priceFilters.emit(event);
          }, 1000);
        }
      }, {
        key: "priceFilter",
        value: function priceFilter() {
          this.priceFilters.emit({
            priceFrom: this.priceFrom,
            priceTo: this.priceTo
          });
        }
      }]);

      return PriceComponent;
    }();

    PriceComponent.ctorParameters = function () {
      return [];
    };

    PriceComponent.propDecorators = {
      priceFilters: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    PriceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-price',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./price.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/price/price.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./price.component.sass */
      "./src/app/components/shop/products/price/price.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PriceComponent);
    /***/
  },

  /***/
  "./src/app/components/shop/products/product-details/product-details.component.sass":
  /*!*****************************************************************************************!*\
    !*** ./src/app/components/shop/products/product-details/product-details.component.sass ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShopProductsProductDetailsProductDetailsComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC9wcm9kdWN0cy9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5zYXNzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/shop/products/product-details/product-details.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/shop/products/product-details/product-details.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: ProductDetailsComponent */

  /***/
  function srcAppComponentsShopProductsProductDetailsProductDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function () {
      return ProductDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/shared/services/product.service */
    "./src/app/components/shared/services/product.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/components/shared/services/cart.service */
    "./src/app/components/shared/services/cart.service.ts");
    /* harmony import */


    var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-swiper-wrapper */
    "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
    /* harmony import */


    var _product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./product-zoom/product-zoom.component */
    "./src/app/components/shop/products/product-details/product-zoom/product-zoom.component.ts");

    var ProductDetailsComponent = /*#__PURE__*/function () {
      function ProductDetailsComponent(route, productsService, dialog, router, cartService) {
        var _this22 = this;

        _classCallCheck(this, ProductDetailsComponent);

        this.route = route;
        this.productsService = productsService;
        this.dialog = dialog;
        this.router = router;
        this.cartService = cartService;
        this.config = {};
        this.onOpenProductDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.product = {};
        this.products = [];
        this.counter = 1;
        this.bigProductImageIndex = 0;
        this.route.params.subscribe(function (params) {
          var id = +params['id'];

          _this22.productsService.getProduct(id).subscribe(function (product) {
            return _this22.product = product;
          });
        });
      }

      _createClass(ProductDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          this.productsService.getProducts().subscribe(function (product) {
            return _this23.products = product;
          });
          this.getRelatedProducts();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.config = {
            observer: true,
            slidesPerView: 3,
            spaceBetween: 10,
            keyboard: true,
            navigation: true,
            pagination: false,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            breakpoints: {
              480: {
                slidesPerView: 1
              },
              740: {
                slidesPerView: 2
              },
              960: {
                slidesPerView: 3
              },
              1280: {
                slidesPerView: 3
              }
            }
          };
        }
      }, {
        key: "openProductDialog",
        value: function openProductDialog(product, bigProductImageIndex) {
          var _this24 = this;

          var dialogRef = this.dialog.open(_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_7__["ProductZoomComponent"], {
            data: {
              product: product,
              index: bigProductImageIndex
            },
            panelClass: 'product-dialog'
          });
          dialogRef.afterClosed().subscribe(function (product) {
            if (product) {
              _this24.router.navigate(['/products', product.id, product.name]);
            }
          });
        }
      }, {
        key: "selectImage",
        value: function selectImage(index) {
          console.log(this.product);
          console.log(index);
          this.bigProductImageIndex = index;
        }
      }, {
        key: "increment",
        value: function increment() {
          this.counter += 1;
        }
      }, {
        key: "decrement",
        value: function decrement() {
          if (this.counter > 1) {
            this.counter -= 1;
          }
        }
      }, {
        key: "getRelatedProducts",
        value: function getRelatedProducts() {
          var _this25 = this;

          this.productsService.getProducts().subscribe(function (product) {
            _this25.products = product;
          });
        } // Add to cart

      }, {
        key: "addToCart",
        value: function addToCart(product, quantity) {
          if (quantity == 0) return false;
          this.cartService.addToCart(product, parseInt(quantity));
        } // Add to cart

      }, {
        key: "buyNow",
        value: function buyNow(product, quantity) {
          if (quantity > 0) this.cartService.addToCart(product, parseInt(quantity));
          this.router.navigate(['/pages/checkout']);
        }
      }, {
        key: "onMouseMove",
        value: function onMouseMove(e) {
          if (window.innerWidth >= 1280) {
            var image, offsetX, offsetY, x, y, zoomer;
            image = e.currentTarget;
            offsetX = e.offsetX;
            offsetY = e.offsetY;
            x = offsetX / image.offsetWidth * 100;
            y = offsetY / image.offsetHeight * 100;
            zoomer = this.zoomViewer.nativeElement.children[0];

            if (zoomer) {
              zoomer.style.backgroundPosition = x + '% ' + y + '%';
              zoomer.style.display = "block";
              zoomer.style.height = image.height + 'px';
              zoomer.style.width = image.width + 'px';
            }
          }
        }
      }, {
        key: "onMouseLeave",
        value: function onMouseLeave(event) {
          this.zoomViewer.nativeElement.children[0].style.display = "none";
        }
      }, {
        key: "openZoomViewer",
        value: function openZoomViewer() {
          this.dialog.open(_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_7__["ProductZoomComponent"], {
            data: this.zoomImage,
            panelClass: 'zoom-dialog'
          });
        }
      }]);

      return ProductDetailsComponent;
    }();

    ProductDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]
      }];
    };

    ProductDetailsComponent.propDecorators = {
      onOpenProductDialog: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      zoomViewer: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['zoomViewer', {
          "static": true
        }]
      }],
      directiveRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: [ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_6__["SwiperDirective"], {
          "static": true
        }]
      }]
    };
    ProductDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-details',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./product-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product-details/product-details.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./product-details.component.sass */
      "./src/app/components/shop/products/product-details/product-details.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]])], ProductDetailsComponent);
    /***/
  },

  /***/
  "./src/app/components/shop/products/product-details/product-zoom/product-zoom.component.sass":
  /*!***************************************************************************************************!*\
    !*** ./src/app/components/shop/products/product-details/product-zoom/product-zoom.component.sass ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShopProductsProductDetailsProductZoomProductZoomComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC9wcm9kdWN0cy9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC16b29tL3Byb2R1Y3Qtem9vbS5jb21wb25lbnQuc2FzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/shop/products/product-details/product-zoom/product-zoom.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/components/shop/products/product-details/product-zoom/product-zoom.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: ProductZoomComponent */

  /***/
  function srcAppComponentsShopProductsProductDetailsProductZoomProductZoomComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductZoomComponent", function () {
      return ProductZoomComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/components/shared/services/product.service */
    "./src/app/components/shared/services/product.service.ts");

    var ProductZoomComponent = /*#__PURE__*/function () {
      function ProductZoomComponent(productsService, dialogRef, data) {
        _classCallCheck(this, ProductZoomComponent);

        this.productsService = productsService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.product = data.product;
        this.selectedProductImageIndex = data.index;
      }

      _createClass(ProductZoomComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }]);

      return ProductZoomComponent;
    }();

    ProductZoomComponent.ctorParameters = function () {
      return [{
        type: src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    ProductZoomComponent.propDecorators = {
      zoomImage: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['zoomImage', {
          "static": true
        }]
      }]
    };
    ProductZoomComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-zoom',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./product-zoom.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product-details/product-zoom/product-zoom.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./product-zoom.component.sass */
      "./src/app/components/shop/products/product-details/product-zoom/product-zoom.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])], ProductZoomComponent);
    /***/
  },

  /***/
  "./src/app/components/shop/products/product-dialog/product-dialog.component.sass":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/shop/products/product-dialog/product-dialog.component.sass ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShopProductsProductDialogProductDialogComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC9wcm9kdWN0cy9wcm9kdWN0LWRpYWxvZy9wcm9kdWN0LWRpYWxvZy5jb21wb25lbnQuc2FzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/shop/products/product-dialog/product-dialog.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/shop/products/product-dialog/product-dialog.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: ProductDialogComponent */

  /***/
  function srcAppComponentsShopProductsProductDialogProductDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDialogComponent", function () {
      return ProductDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/shared/services/product.service */
    "./src/app/components/shared/services/product.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var src_app_modals_product_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/modals/product.model */
    "./src/app/modals/product.model.ts");
    /* harmony import */


    var src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/components/shared/services/cart.service */
    "./src/app/components/shared/services/cart.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ProductDialogComponent = /*#__PURE__*/function () {
      function ProductDialogComponent(router, productsService, cartService, dialogRef, product) {
        _classCallCheck(this, ProductDialogComponent);

        this.router = router;
        this.productsService = productsService;
        this.cartService = cartService;
        this.dialogRef = dialogRef;
        this.product = product;
        this.products = [];
        this.counter = 1;
        this.variantImage = '';
        this.selectedColor = '';
        this.selectedSize = '';
      }

      _createClass(ProductDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this26 = this;

          this.productsService.getProducts().subscribe(function (product) {
            return _this26.products = product;
          });
        }
      }, {
        key: "addToCart",
        value: function addToCart(product, quantity) {
          if (quantity == 0) return false;
          this.cartService.addToCart(product, parseInt(quantity));
        }
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }, {
        key: "increment",
        value: function increment() {
          this.counter += 1;
        }
      }, {
        key: "decrement",
        value: function decrement() {
          if (this.counter > 1) {
            this.counter -= 1;
          }
        } // Add to cart

      }, {
        key: "buyNow",
        value: function buyNow() {
          this.router.navigate(['/home/product', this.product.id]);
          this.close();
        }
      }]);

      return ProductDialogComponent;
    }();

    ProductDialogComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }, {
        type: src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
      }, {
        type: src_app_modals_product_model__WEBPACK_IMPORTED_MODULE_4__["Product"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    ProductDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-dialog',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./product-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product-dialog/product-dialog.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./product-dialog.component.sass */
      "./src/app/components/shop/products/product-dialog/product-dialog.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], src_app_modals_product_model__WEBPACK_IMPORTED_MODULE_4__["Product"]])], ProductDialogComponent);
    /***/
  },

  /***/
  "./src/app/components/shop/products/product-left-sidebar/product-left-sidebar.component.sass":
  /*!***************************************************************************************************!*\
    !*** ./src/app/components/shop/products/product-left-sidebar/product-left-sidebar.component.sass ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShopProductsProductLeftSidebarProductLeftSidebarComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC9wcm9kdWN0cy9wcm9kdWN0LWxlZnQtc2lkZWJhci9wcm9kdWN0LWxlZnQtc2lkZWJhci5jb21wb25lbnQuc2FzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/shop/products/product-left-sidebar/product-left-sidebar.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/components/shop/products/product-left-sidebar/product-left-sidebar.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: ProductLeftSidebarComponent */

  /***/
  function srcAppComponentsShopProductsProductLeftSidebarProductLeftSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductLeftSidebarComponent", function () {
      return ProductLeftSidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/shared/services/product.service */
    "./src/app/components/shared/services/product.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ProductLeftSidebarComponent = /*#__PURE__*/function () {
      function ProductLeftSidebarComponent(productService, route) {
        var _this27 = this;

        _classCallCheck(this, ProductLeftSidebarComponent);

        this.productService = productService;
        this.route = route;
        this.sidenavOpen = true;
        this.sortByOrder = ''; // sorting

        this.tagsFilters = [];
        this.viewType = 'grid';
        this.viewCol = 25;
        this.colorFilters = [];
        this.items = [];
        this.allItems = [];
        this.products = [];
        this.tags = [];
        this.colors = [];
        this.route.params.subscribe(function (params) {
          var category = params['category'];

          _this27.productService.getProductByCategory(category).subscribe(function (products) {
            _this27.allItems = products;
            _this27.products = products.slice(0.8);

            _this27.getTags(products);

            _this27.getColors(products);
          });
        });
      } // Get current product tags


      _createClass(ProductLeftSidebarComponent, [{
        key: "getTags",
        value: function getTags(products) {
          var uniqueBrands = [];
          var itemBrand = Array();
          products.map(function (product, index) {
            if (product.tags) {
              product.tags.map(function (tag) {
                var index = uniqueBrands.indexOf(tag);
                if (index === -1) uniqueBrands.push(tag);
              });
            }
          });

          for (var i = 0; i < uniqueBrands.length; i++) {
            itemBrand.push({
              brand: uniqueBrands[i]
            });
          }

          this.tags = itemBrand;
        } // Get current product colors

      }, {
        key: "getColors",
        value: function getColors(products) {
          var uniqueColors = [];
          var itemColor = Array();
          products.map(function (product, index) {
            if (product.colors) {
              product.colors.map(function (color) {
                var index = uniqueColors.indexOf(color);
                if (index === -1) uniqueColors.push(color);
              });
            }
          });

          for (var i = 0; i < uniqueColors.length; i++) {
            itemColor.push({
              color: uniqueColors[i]
            });
          }

          this.colors = itemColor;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "changeViewType",
        value: function changeViewType(viewType, viewCol) {
          this.viewType = viewType;
          this.viewCol = viewCol;
        } // Animation Effect fadeIn

      }, {
        key: "fadeIn",
        value: function fadeIn() {
          this.animation = 'fadeIn';
        } // Animation Effect fadeOut

      }, {
        key: "fadeOut",
        value: function fadeOut() {
          this.animation = 'fadeOut';
        } // Update tags filter

      }, {
        key: "updateTagFilters",
        value: function updateTagFilters(tags) {
          this.tagsFilters = tags;
          this.animation == 'fadeOut' ? this.fadeIn() : this.fadeOut(); // animation
        } // sorting type ASC / DESC / A-Z / Z-A etc.

      }, {
        key: "onChangeSorting",
        value: function onChangeSorting(val) {
          this.sortByOrder = val;
          this.animation == 'fadeOut' ? this.fadeIn() : this.fadeOut(); // animation
        } // Initialize filetr Items

      }, {
        key: "filterItems",
        value: function filterItems() {
          var _this28 = this;

          return this.items.filter(function (item) {
            var Colors = _this28.colorFilters.reduce(function (prev, curr) {
              if (item.colors) {
                if (item.colors.includes(curr.color)) {
                  return prev && true;
                }
              }
            }, true);

            var Tags = _this28.tagsFilters.reduce(function (prev, curr) {
              if (item.tags) {
                if (item.tags.includes(curr)) {
                  return prev && true;
                }
              }
            }, true);

            return Colors && Tags; // return true
          });
        }
      }, {
        key: "onPageChanged",
        value: function onPageChanged(event) {
          this.page = event;
          this.allItems;
          window.scrollTo(0, 0);
        } // Update price filter
        //   public updatePriceFilters(price: any) {
        //     let items: any[] = [];
        //     this.products.filter((item: Product) => {
        //         if (item.price >= price[0] && item.price <= price[1] )  {
        //            items.push(item); // push in array
        //         }
        //     });
        //     this.items = items;
        // }
        // Update price filter

      }, {
        key: "updatePriceFilters",
        value: function updatePriceFilters(price) {
          console.log(price);
          console.log(this.products);
          this.allItems = this.products.filter(function (item) {
            return item.price >= price.priceFrom && item.price <= price.priceTo;
          });
          console.log(this.products);
        }
      }, {
        key: "onBrendsChanged",
        value: function onBrendsChanged(newBrend) {
          console.log(newBrend);
          this.allItems = newBrend === 'all' ? this.products : this.products.filter(function (item) {
            return item.brand === newBrend;
          });
          console.log(this.allItems);
        }
      }]);

      return ProductLeftSidebarComponent;
    }();

    ProductLeftSidebarComponent.ctorParameters = function () {
      return [{
        type: src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    ProductLeftSidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-left-sidebar',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./product-left-sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product-left-sidebar/product-left-sidebar.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./product-left-sidebar.component.sass */
      "./src/app/components/shop/products/product-left-sidebar/product-left-sidebar.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], ProductLeftSidebarComponent);
    /***/
  },

  /***/
  "./src/app/components/shop/products/product-vertical/product-vertical.component.sass":
  /*!*******************************************************************************************!*\
    !*** ./src/app/components/shop/products/product-vertical/product-vertical.component.sass ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShopProductsProductVerticalProductVerticalComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC9wcm9kdWN0cy9wcm9kdWN0LXZlcnRpY2FsL3Byb2R1Y3QtdmVydGljYWwuY29tcG9uZW50LnNhc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/shop/products/product-vertical/product-vertical.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/components/shop/products/product-vertical/product-vertical.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: ProductVerticalComponent */

  /***/
  function srcAppComponentsShopProductsProductVerticalProductVerticalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductVerticalComponent", function () {
      return ProductVerticalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/shared/services/product.service */
    "./src/app/components/shared/services/product.service.ts");

    var ProductVerticalComponent = /*#__PURE__*/function () {
      function ProductVerticalComponent(productService) {
        _classCallCheck(this, ProductVerticalComponent);

        this.productService = productService;
      }

      _createClass(ProductVerticalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this29 = this;

          this.productService.getProducts().subscribe(function (product) {
            return _this29.products = product;
          });
        }
      }]);

      return ProductVerticalComponent;
    }();

    ProductVerticalComponent.ctorParameters = function () {
      return [{
        type: src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }];
    };

    ProductVerticalComponent.propDecorators = {
      products: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    ProductVerticalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-vertical',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./product-vertical.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product-vertical/product-vertical.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./product-vertical.component.sass */
      "./src/app/components/shop/products/product-vertical/product-vertical.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])], ProductVerticalComponent);
    /***/
  },

  /***/
  "./src/app/components/shop/products/product/product.component.sass":
  /*!*************************************************************************!*\
    !*** ./src/app/components/shop/products/product/product.component.sass ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShopProductsProductProductComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC9wcm9kdWN0cy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNhc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/shop/products/product/product.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/shop/products/product/product.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ProductComponent */

  /***/
  function srcAppComponentsShopProductsProductProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
      return ProductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/shared/services/cart.service */
    "./src/app/components/shared/services/cart.service.ts");
    /* harmony import */


    var src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/components/shared/services/product.service */
    "./src/app/components/shared/services/product.service.ts");
    /* harmony import */


    var src_app_components_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/components/shared/services/wishlist.service */
    "./src/app/components/shared/services/wishlist.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_modals_product_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/modals/product.model */
    "./src/app/modals/product.model.ts");
    /* harmony import */


    var _product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../product-dialog/product-dialog.component */
    "./src/app/components/shop/products/product-dialog/product-dialog.component.ts");

    var ProductComponent = /*#__PURE__*/function () {
      function ProductComponent(cartService, productsService, wishlistService, dialog, router) {
        _classCallCheck(this, ProductComponent);

        this.cartService = cartService;
        this.productsService = productsService;
        this.wishlistService = wishlistService;
        this.dialog = dialog;
        this.router = router;
        this.onOpenProductDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // Add to cart

      }, {
        key: "addToCart",
        value: function addToCart(product) {
          var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          this.cartService.addToCart(product, quantity);
          console.log(product, quantity);
        } // Add to wishlist

      }, {
        key: "addToWishlist",
        value: function addToWishlist(product) {
          this.wishlistService.addToWishlist(product);
        } // Add to compare

      }, {
        key: "addToCompare",
        value: function addToCompare(product) {
          this.productsService.addToCompare(product);
        }
      }, {
        key: "openProductDialog",
        value: function openProductDialog(product) {
          var _this30 = this;

          var dialogRef = this.dialog.open(_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ProductDialogComponent"], {
            data: product,
            panelClass: 'product-dialog'
          });
          dialogRef.afterClosed().subscribe(function (product) {
            if (product) {
              _this30.router.navigate(['/products', product.id, product.name]);
            }
          });
        }
      }]);

      return ProductComponent;
    }();

    ProductComponent.ctorParameters = function () {
      return [{
        type: src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
      }, {
        type: src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
      }, {
        type: src_app_components_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_4__["WishlistService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    ProductComponent.propDecorators = {
      onOpenProductDialog: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      product: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    ProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/product/product.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./product.component.sass */
      "./src/app/components/shop/products/product/product.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_components_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"], src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], src_app_components_shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_4__["WishlistService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])], ProductComponent);
    /***/
  },

  /***/
  "./src/app/components/shop/products/products.component.sass":
  /*!******************************************************************!*\
    !*** ./src/app/components/shop/products/products.component.sass ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShopProductsProductsComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2FzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/shop/products/products.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/shop/products/products.component.ts ***!
    \****************************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppComponentsShopProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProductsComponent = /*#__PURE__*/function () {
      function ProductsComponent() {
        _classCallCheck(this, ProductsComponent);
      }

      _createClass(ProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.ctorParameters = function () {
      return [];
    };

    ProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-products',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./products.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/products/products.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./products.component.sass */
      "./src/app/components/shop/products/products.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ProductsComponent);
    /***/
  },

  /***/
  "./src/app/components/shop/shop-routing.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/components/shop/shop-routing.module.ts ***!
    \********************************************************/

  /*! exports provided: ShopRoutingModule */

  /***/
  function srcAppComponentsShopShopRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopRoutingModule", function () {
      return ShopRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/components/shop/home/home.component.ts");
    /* harmony import */


    var _products_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./products/product-details/product-details.component */
    "./src/app/components/shop/products/product-details/product-details.component.ts");
    /* harmony import */


    var _products_product_left_sidebar_product_left_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./products/product-left-sidebar/product-left-sidebar.component */
    "./src/app/components/shop/products/product-left-sidebar/product-left-sidebar.component.ts");
    /* harmony import */


    var _home_two_home_two_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home-two/home-two.component */
    "./src/app/components/shop/home-two/home-two.component.ts");
    /* harmony import */


    var _home_three_home_three_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home-three/home-three.component */
    "./src/app/components/shop/home-three/home-three.component.ts");
    /* harmony import */


    var _home_four_home_four_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home-four/home-four.component */
    "./src/app/components/shop/home-four/home-four.component.ts");
    /* harmony import */


    var _home_five_home_five_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home-five/home-five.component */
    "./src/app/components/shop/home-five/home-five.component.ts"); // Routes


    var routes = [{
      path: 'one',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'two',
      component: _home_two_home_two_component__WEBPACK_IMPORTED_MODULE_6__["HomeTwoComponent"]
    }, {
      path: 'three',
      component: _home_three_home_three_component__WEBPACK_IMPORTED_MODULE_7__["HomeThreeComponent"]
    }, {
      path: 'four',
      component: _home_four_home_four_component__WEBPACK_IMPORTED_MODULE_8__["HomeFourComponent"]
    }, {
      path: 'five',
      component: _home_five_home_five_component__WEBPACK_IMPORTED_MODULE_9__["HomeFiveComponent"]
    }, {
      path: 'products/:category',
      component: _products_product_left_sidebar_product_left_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["ProductLeftSidebarComponent"]
    }, {
      path: 'product/:id',
      component: _products_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailsComponent"]
    }];

    var ShopRoutingModule = function ShopRoutingModule() {
      _classCallCheck(this, ShopRoutingModule);
    };

    ShopRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ShopRoutingModule);
    /***/
  },

  /***/
  "./src/app/components/shop/shop.module.ts":
  /*!************************************************!*\
    !*** ./src/app/components/shop/shop.module.ts ***!
    \************************************************/

  /*! exports provided: ShopModule */

  /***/
  function srcAppComponentsShopShopModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopModule", function () {
      return ShopModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/components/shop/home/home.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _main_carousel_main_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./main-carousel/main-carousel.component */
    "./src/app/components/shop/main-carousel/main-carousel.component.ts");
    /* harmony import */


    var _products_price_price_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./products/price/price.component */
    "./src/app/components/shop/products/price/price.component.ts");
    /* harmony import */


    var _products_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./products/products.component */
    "./src/app/components/shop/products/products.component.ts");
    /* harmony import */


    var _products_product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./products/product/product.component */
    "./src/app/components/shop/products/product/product.component.ts");
    /* harmony import */


    var _products_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./products/product-details/product-details.component */
    "./src/app/components/shop/products/product-details/product-details.component.ts");
    /* harmony import */


    var _products_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./products/product-dialog/product-dialog.component */
    "./src/app/components/shop/products/product-dialog/product-dialog.component.ts");
    /* harmony import */


    var _products_product_left_sidebar_product_left_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./products/product-left-sidebar/product-left-sidebar.component */
    "./src/app/components/shop/products/product-left-sidebar/product-left-sidebar.component.ts");
    /* harmony import */


    var _products_product_vertical_product_vertical_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./products/product-vertical/product-vertical.component */
    "./src/app/components/shop/products/product-vertical/product-vertical.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shop_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./shop-routing.module */
    "./src/app/components/shop/shop-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/components/shared/shared.module.ts");
    /* harmony import */


    var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-swiper-wrapper */
    "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */


    var _home_two_home_two_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./home-two/home-two.component */
    "./src/app/components/shop/home-two/home-two.component.ts");
    /* harmony import */


    var _home_three_home_three_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./home-three/home-three.component */
    "./src/app/components/shop/home-three/home-three.component.ts");
    /* harmony import */


    var ngx_image_zoom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ngx-image-zoom */
    "./node_modules/ngx-image-zoom/fesm2015/ngx-image-zoom.js");
    /* harmony import */


    var _shop_home_product_carousel_product_carousel_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./../shop/home/product-carousel/product-carousel.component */
    "./src/app/components/shop/home/product-carousel/product-carousel.component.ts");
    /* harmony import */


    var _home_two_product_carousel_two_product_carousel_two_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./home-two/product-carousel-two/product-carousel-two.component */
    "./src/app/components/shop/home-two/product-carousel-two/product-carousel-two.component.ts");
    /* harmony import */


    var _home_three_product_carousel_three_product_carousel_three_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./home-three/product-carousel-three/product-carousel-three.component */
    "./src/app/components/shop/home-three/product-carousel-three/product-carousel-three.component.ts");
    /* harmony import */


    var _widgets_brands_brands_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./widgets/brands/brands.component */
    "./src/app/components/shop/widgets/brands/brands.component.ts");
    /* harmony import */


    var _widgets_categories_categories_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./widgets/categories/categories.component */
    "./src/app/components/shop/widgets/categories/categories.component.ts");
    /* harmony import */


    var _widgets_popular_products_popular_products_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./widgets/popular-products/popular-products.component */
    "./src/app/components/shop/widgets/popular-products/popular-products.component.ts");
    /* harmony import */


    var _home_four_home_four_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./home-four/home-four.component */
    "./src/app/components/shop/home-four/home-four.component.ts");
    /* harmony import */


    var _products_product_details_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./products/product-details/product-zoom/product-zoom.component */
    "./src/app/components/shop/products/product-details/product-zoom/product-zoom.component.ts");
    /* harmony import */


    var _home_five_home_five_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./home-five/home-five.component */
    "./src/app/components/shop/home-five/home-five.component.ts"); // Import the library


    var ShopModule = function ShopModule() {
      _classCallCheck(this, ShopModule);
    };

    ShopModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _main_carousel_main_carousel_component__WEBPACK_IMPORTED_MODULE_4__["MainCarouselComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"], _products_price_price_component__WEBPACK_IMPORTED_MODULE_5__["PriceComponent"], _products_product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"], _products_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_8__["ProductDetailsComponent"], _products_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ProductDialogComponent"], _products_product_left_sidebar_product_left_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["ProductLeftSidebarComponent"], _products_product_vertical_product_vertical_component__WEBPACK_IMPORTED_MODULE_11__["ProductVerticalComponent"], _home_two_home_two_component__WEBPACK_IMPORTED_MODULE_18__["HomeTwoComponent"], _home_three_home_three_component__WEBPACK_IMPORTED_MODULE_19__["HomeThreeComponent"], _shop_home_product_carousel_product_carousel_component__WEBPACK_IMPORTED_MODULE_21__["ProductCarouselComponent"], _home_two_product_carousel_two_product_carousel_two_component__WEBPACK_IMPORTED_MODULE_22__["ProductCarouselTwoComponent"], _home_three_product_carousel_three_product_carousel_three_component__WEBPACK_IMPORTED_MODULE_23__["ProductCarouselThreeComponent"], _widgets_brands_brands_component__WEBPACK_IMPORTED_MODULE_24__["BrandsComponent"], _widgets_categories_categories_component__WEBPACK_IMPORTED_MODULE_25__["CategoriesComponent"], _widgets_popular_products_popular_products_component__WEBPACK_IMPORTED_MODULE_26__["PopularProductsComponent"], _home_four_home_four_component__WEBPACK_IMPORTED_MODULE_27__["HomeFourComponent"], _products_product_details_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_28__["ProductZoomComponent"], _home_five_home_five_component__WEBPACK_IMPORTED_MODULE_29__["HomeFiveComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], _shop_routing_module__WEBPACK_IMPORTED_MODULE_13__["ShopRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"], ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_15__["SwiperModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_17__["NgxPaginationModule"], ngx_image_zoom__WEBPACK_IMPORTED_MODULE_20__["NgxImageZoomModule"]],
      exports: [_products_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ProductDialogComponent"], _products_product_details_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_28__["ProductZoomComponent"]],
      entryComponents: [_products_product_dialog_product_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ProductDialogComponent"], _products_product_details_product_zoom_product_zoom_component__WEBPACK_IMPORTED_MODULE_28__["ProductZoomComponent"]]
    })], ShopModule);
    /***/
  },

  /***/
  "./src/app/components/shop/widgets/brands/brands.component.sass":
  /*!**********************************************************************!*\
    !*** ./src/app/components/shop/widgets/brands/brands.component.sass ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShopWidgetsBrandsBrandsComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC93aWRnZXRzL2JyYW5kcy9icmFuZHMuY29tcG9uZW50LnNhc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/shop/widgets/brands/brands.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/shop/widgets/brands/brands.component.ts ***!
    \********************************************************************/

  /*! exports provided: BrandsComponent */

  /***/
  function srcAppComponentsShopWidgetsBrandsBrandsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrandsComponent", function () {
      return BrandsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BrandsComponent = /*#__PURE__*/function () {
      function BrandsComponent() {
        _classCallCheck(this, BrandsComponent);

        // brands: string[] = ['all', 'Lenovo', 'Dell', 'Dell', 'Lg', 'Samsung'];
        this.brands = ['all', 'Brand-1', 'Brand-2', 'Brand-3', 'Brand-4', 'Brand-5'];
        this.brandChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(BrandsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "brendSelect",
        value: function brendSelect(event) {
          this.brandChanged.emit(event.value);
        }
      }]);

      return BrandsComponent;
    }();

    BrandsComponent.ctorParameters = function () {
      return [];
    };

    BrandsComponent.propDecorators = {
      brandChanged: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    BrandsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-brands',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./brands.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/widgets/brands/brands.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./brands.component.sass */
      "./src/app/components/shop/widgets/brands/brands.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BrandsComponent);
    /***/
  },

  /***/
  "./src/app/components/shop/widgets/categories/categories.component.sass":
  /*!******************************************************************************!*\
    !*** ./src/app/components/shop/widgets/categories/categories.component.sass ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShopWidgetsCategoriesCategoriesComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC93aWRnZXRzL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuc2FzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/shop/widgets/categories/categories.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/shop/widgets/categories/categories.component.ts ***!
    \****************************************************************************/

  /*! exports provided: CategoriesComponent */

  /***/
  function srcAppComponentsShopWidgetsCategoriesCategoriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function () {
      return CategoriesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CategoriesComponent = /*#__PURE__*/function () {
      function CategoriesComponent() {
        _classCallCheck(this, CategoriesComponent);
      }

      _createClass(CategoriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CategoriesComponent;
    }();

    CategoriesComponent.ctorParameters = function () {
      return [];
    };

    CategoriesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-categories',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./categories.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/widgets/categories/categories.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./categories.component.sass */
      "./src/app/components/shop/widgets/categories/categories.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CategoriesComponent);
    /***/
  },

  /***/
  "./src/app/components/shop/widgets/popular-products/popular-products.component.sass":
  /*!******************************************************************************************!*\
    !*** ./src/app/components/shop/widgets/popular-products/popular-products.component.sass ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShopWidgetsPopularProductsPopularProductsComponentSass(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcC93aWRnZXRzL3BvcHVsYXItcHJvZHVjdHMvcG9wdWxhci1wcm9kdWN0cy5jb21wb25lbnQuc2FzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/shop/widgets/popular-products/popular-products.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/components/shop/widgets/popular-products/popular-products.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: PopularProductsComponent */

  /***/
  function srcAppComponentsShopWidgetsPopularProductsPopularProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopularProductsComponent", function () {
      return PopularProductsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/shared/services/product.service */
    "./src/app/components/shared/services/product.service.ts");

    var PopularProductsComponent = /*#__PURE__*/function () {
      function PopularProductsComponent(productService) {
        _classCallCheck(this, PopularProductsComponent);

        this.productService = productService;
        this.product = {};
      }

      _createClass(PopularProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this31 = this;

          this.productService.getProducts().subscribe(function (product) {
            return _this31.products = product;
          });
        }
      }]);

      return PopularProductsComponent;
    }();

    PopularProductsComponent.ctorParameters = function () {
      return [{
        type: src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }];
    };

    PopularProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-popular-products',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./popular-products.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shop/widgets/popular-products/popular-products.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./popular-products.component.sass */
      "./src/app/components/shop/widgets/popular-products/popular-products.component.sass"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_components_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])], PopularProductsComponent);
    /***/
  },

  /***/
  "./src/app/modals/product.model.ts":
  /*!*****************************************!*\
    !*** ./src/app/modals/product.model.ts ***!
    \*****************************************/

  /*! exports provided: Product */

  /***/
  function srcAppModalsProductModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Product", function () {
      return Product;
    });

    var Product = function Product(id, name, price, salePrice, discount, pictures, shortDetails, description, stock, newPro, brand, sale, category, tags, colors) {
      _classCallCheck(this, Product);

      this.id = id;
      this.name = name;
      this.price = price;
      this.salePrice = salePrice;
      this.discount = discount;
      this.pictures = pictures;
      this.shortDetails = shortDetails;
      this.description = description;
      this.stock = stock;
      this.newPro = newPro;
      this.brand = brand;
      this.sale = sale;
      this.category = category;
      this.tags = tags;
      this.colors = colors;
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Miguel\Desktop\Nueva carpeta (2)\sophia\ecommerce-sophia-new\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map