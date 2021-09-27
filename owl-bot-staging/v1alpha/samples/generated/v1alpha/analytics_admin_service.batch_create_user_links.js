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

function main(parent, requests) {
  // [START analyticsadmin_v1alpha_generated_AnalyticsAdminService_BatchCreateUserLinks_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The account or property that all user links in the request are for.
   *  This field is required. The parent field in the CreateUserLinkRequest
   *  messages must either be empty or match this field.
   *  Example format: accounts/1234
   */
  // const parent = 'abc123'
  /**
   *  Optional. If set, then email the new users notifying them that they've been granted
   *  permissions to the resource. Regardless of whether this is set or not,
   *  notify_new_user field inside each individual request is ignored.
   */
  // const notifyNewUsers = true
  /**
   *  Required. The requests specifying the user links to create.
   *  A maximum of 1000 user links can be created in a batch.
   */
  // const requests = 1234

  // Imports the Admin library
  const {AnalyticsAdminServiceClient} = require('@google-analytics/admin').v1alpha;

  // Instantiates a client
  const adminClient = new AnalyticsAdminServiceClient();

  async function batchCreateUserLinks() {
    // Construct request
    const request = {
      parent,
      requests,
    };

    // Run request
    const response = await adminClient.batchCreateUserLinks(request);
    console.log(response);
  }

  batchCreateUserLinks();
  // [END analyticsadmin_v1alpha_generated_AnalyticsAdminService_BatchCreateUserLinks_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));