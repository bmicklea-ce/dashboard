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

import AdminLinksPanel from './links/links.directive';
import AdminLinksCtrl from './links/links.controller';
import NavbarAdminPanel from './admin/navbar-admin.directive';
import NavbarAdminCtrl from './admin/navbar-admin.controller';

class OnPremisesAdminNavbarConfig {

  constructor(register) {
    register.controller('NavbarAdminCtrl', NavbarAdminCtrl);
    register.directive('cdvyNavbarAdmin', NavbarAdminPanel);
    register.controller('AdminLinksCtrl', AdminLinksCtrl);
    register.directive('cdvyAdminLinks', AdminLinksPanel);
  }
}

export default OnPremisesAdminNavbarConfig;
