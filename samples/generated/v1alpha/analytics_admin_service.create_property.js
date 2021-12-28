// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(property) {
  // [START analyticsadmin_v1alpha_generated_AnalyticsAdminService_CreateProperty_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The property to create.
   *  Note: the supplied property must specify its parent.
   */
  // const property = {}

  // Imports the Admin library
  const {AnalyticsAdminServiceClient} = require('@google-analytics/admin').v1alpha;

  // Instantiates a client
  const adminClient = new AnalyticsAdminServiceClient();

  async function callCreateProperty() {
    // Construct request
    const request = {
      property,
    };

    // Run request
    const response = await adminClient.createProperty(request);
    console.log(response);
  }

  callCreateProperty();
  // [END analyticsadmin_v1alpha_generated_AnalyticsAdminService_CreateProperty_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));