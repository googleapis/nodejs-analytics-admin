// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(parent, firebaseLink) {
  // [START analyticsadmin_v1alpha_generated_AnalyticsAdminService_CreateFirebaseLink_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Format: properties/{property_id}
   *  Example: properties/1234
   */
  // const parent = 'abc123'
  /**
   *  Required. The Firebase link to create.
   */
  // const firebaseLink = {}

  // Imports the Admin library
  const {AnalyticsAdminServiceClient} = require('@google-analytics/admin').v1alpha;

  // Instantiates a client
  const adminClient = new AnalyticsAdminServiceClient();

  async function callCreateFirebaseLink() {
    // Construct request
    const request = {
      parent,
      firebaseLink,
    };

    // Run request
    const response = await adminClient.createFirebaseLink(request);
    console.log(response);
  }

  callCreateFirebaseLink();
  // [END analyticsadmin_v1alpha_generated_AnalyticsAdminService_CreateFirebaseLink_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
