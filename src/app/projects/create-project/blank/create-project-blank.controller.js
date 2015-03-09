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

/**
 * This class is handling the controller for the createblank projects
 * @author Florent Benoit
 */
class CreateProjectBlankCtrl {

  /**
   * Default constructor that is using resource
   * @ngInject for Dependency injection
   */
  constructor(codenvyAPI) {
    this.codenvyAPI = codenvyAPI;


    // get project types
    let promiseTypes = codenvyAPI.getProjectType().fetchTypes();

    // update types
    promiseTypes.then(() => {
        this.updateTypes();
      },
      (error) => {
        if (error.status === 304) {
          // ok
          this.updateTypes();
          return;
        }
        this.state = 'error';
      });

  }

  /**
   * Update the project types. (Callback of a promise)
   */
  updateTypes() {
    this.typesByCategory = this.codenvyAPI.getProjectType().getTypesByCategory();
  }

}

export default CreateProjectBlankCtrl;
