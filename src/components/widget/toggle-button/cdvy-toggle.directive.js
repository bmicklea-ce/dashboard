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
 * Defines a directive for the toggle button.
 * @author Florent Benoit
 */
class CodenvyToggle {

  /**
   * Default constructor that is using resource
   * @ngInject for Dependency injection
   */
  constructor () {
    this.restrict='E';
    this.templateUrl = 'components/widget/toggle-button/cdvy-toggle.html';

    this.transclude = true;
    this.controller = 'CodenvyToggleCtrl';
    this.controllerAs = 'codenvyToggleCtrl';

    // we require ngModel as we want to use it inside our directive
    this.require = 'ngModel';

    // scope values
    this.scope = {};

  }

  /**
   * Keep reference to the model controller
   */
  link($scope, element, attr, ngModelCtrl) {
    $scope.setupModelController = ngModelCtrl;
  }


}

export default CodenvyToggle;

Register.getInstance().directive('cdvyToggle', CodenvyToggle);
