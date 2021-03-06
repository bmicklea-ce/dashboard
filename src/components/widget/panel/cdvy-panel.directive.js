/*
 * Copyright (c) 2015 Codenvy, S.A.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *   Codenvy, S.A. - initial API and implementation
 */
'use strict';

import Register from '../../utils/register';

/**
 * @ngdoc directive
 * @name components.directive:cdvyPanel
 * @restrict E
 * @function
 * @element
 *
 * @description
 * `<cdvy-panel>` defines a panel used to insert data.
 *
 * @param {string=} cdvy-title the title of the panel
 * @param {string=} cdvy-title-icon icon font prefixing the panel's title
 * @param {string=} cdvy-title-svg-icon path to SVG image used as panel's title
 * @param {boolean=} cdvy-toggle boolean used to display or not the panel toggle
 * @param {boolean=} cdvy-disabled boolean used to add a glass panel over the panel
 *
 * @usage
 *   <cdvy-panel cdvy-title="hello"></cdvy-panel>
 *
 * @example
 <example module="userDashboard">
 <file name="index.html">
 <cdvy-panel cdvy-title-icon="fa fa-lock" cdvy-title="hello">This is simple text</cdvy-panel>
 </file>
 </example>
 * @author Florent Benoit
 */
class CodenvyPanel {

  /**
   * Default constructor that is using resource
   * @ngInject for Dependency injection
   */
  constructor () {
    this.restrict='E';
    this.replace= true;
    this.transclude= true;
    this.bindToController = true;


    this.controller = 'CodenvyPanelCtrl';
    this.controllerAs = 'codenvyPanelCtrl';

    this.scope = {
      svgIcon: '@cdvyTitleSvgIcon',
      title:'@cdvyTitle',
      disabled: '@cdvyDisabled'
    };
  }

  /**
   * Defines id of the controller and apply some initial settings
   */

  link(scope, element, attributes, controller) {

    // special mode
    if (attributes['cdvyLockMode']) {
      controller.lock();
    }

    // special mode
    if (attributes['cdvyCollapse']) {
      controller.collapse = true;
    }

    // set id
    if (attributes['cdvyPanelId']) {
      controller.setId(attributes['cdvyPanelId']);
    }

    // disabled
    if (attributes['cdvyDisabled']) {
      controller.disabled = true;
    }
  }


  /**
   * Template for the current toolbar
   * @param element
   * @param attrs
   * @returns {string} the template
   */
  template( element, attrs){

    var template = '<md-card class="cdvy-panel" md-theme="default">'
      + '<div layout="row" class="cdvy-panel-titlebox" layout-align="start center">'
      + '<div class="cdvy-panel-title" layout="row" layout-align="start center"'
      + (attrs['cdvyToggle'] ? ' ng-click="codenvyPanelCtrl.toggle()">' : '>');

    if (attrs['cdvyTitleIcon']) {
      template = template + '<span class="cdvy-panel-title-icon ' + attrs['cdvyTitleIcon'] + '"></span>';
    }
    if (attrs['cdvyTitleSvgIcon']) {
      template = template + '<md-icon md-svg-src="' +  '{{codenvyPanelCtrl.svgIcon}}' + '"></md-icon>';
    }


    template = template + '{{codenvyPanelCtrl.title}}</div>'
    + '<span flex></span>';


    if (attrs['cdvyToggle']) {
     template = template +'<i class="{{codenvyPanelCtrl.getToggleIcon()}}" ng-click="codenvyPanelCtrl.toggle()"></i>';
    }


    template = template
    + '</div>'
    +  '<md-card-content class="cdvy-panel-content" ng-hide="codenvyPanelCtrl.isCollapsed()">'
    +  '<ng-transclude></ng-transclude>'
    +  '</md-card-content>'
    +  '<div class="cdvy-panel-glass" ng-show="codenvyPanelCtrl.disabled"></div>'
    +  '</md-card>';

    return template;
  }



}

export default CodenvyPanel;

Register.getInstance().directive('cdvyPanel', CodenvyPanel);
