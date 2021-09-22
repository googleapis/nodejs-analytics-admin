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

function main(updateMask) {
  // [START admin_update_custom_dimension_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The CustomDimension to update
   */
  // const customDimension = ''
  /**
   *  Required. The list of fields to be updated. Omitted fields will not be updated.
   *  To replace the entire entity, use one path with the string "*" to match
   *  all fields.
   */
  // const updateMask = ''

  // Imports the Admin library
  const {AnalyticsAdminServiceClient} = require('@google-analytics/admin').v1alpha;

  // Instantiates a client
  const adminClient = new AnalyticsAdminServiceClient();

  async function updateCustomDimension() {
    // Construct request
    const request = {
      updateMask,
    };

    // Run request
    const response = await adminClient.updateCustomDimension(request);
    console.log(response);
  }

  updateCustomDimension();
  // [END admin_update_custom_dimension_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
