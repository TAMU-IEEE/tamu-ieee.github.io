/* tslint:disable */
import { enableProdMode, NgModuleRef } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { Environment } from './model';

enableProdMode();

export const environment: Environment = {
  production: true,
  showDevModule: false,
  firebase: {
    apiKey: "AIzaSyBEGaujUt1IhCWdcl-mAS-gR4GjbnhYFNk",
    authDomain: "tamum-c5fdd.firebaseapp.com",
    databaseURL: "https://tamum-c5fdd.firebaseio.com",
    projectId: "tamum-c5fdd",
    storageBucket: "",
    messagingSenderId: "403861820701",
  },
  /** Angular debug tools in the dev console
   * https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
   * @param modRef
   * @return {any}
   */
  decorateModuleRef(modRef: NgModuleRef<any>) {
    disableDebugTools();
    return modRef;
  },
  ENV_PROVIDERS: [

  ]
};
