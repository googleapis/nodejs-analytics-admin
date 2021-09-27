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

function main(parent) {
  // [START analyticsadmin_v1alpha_generated_AnalyticsAdminService_ListGoogleAdsLinks_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Example format: properties/1234
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of resources to return.
   *  If unspecified, at most 50 resources will be returned.
   *  The maximum value is 200 (higher values will be coerced to the maximum).
   */
  // const pageSize = 1234
  /**
   *  A page token, received from a previous `ListGoogleAdsLinks` call.
   *  Provide this to retrieve the subsequent page.
   *  When paginating, all other parameters provided to `ListGoogleAdsLinks` must
   *  match the call that provided the page token.
   */
  // const pageToken = 'abc123'

  // Imports the Admin library
  const {AnalyticsAdminServiceClient} = require('@google-analytics/admin').v1alpha;

  // Instantiates a client
  const adminClient = new AnalyticsAdminServiceClient();

  async function listGoogleAdsLinks() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await adminClient.listGoogleAdsLinksAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  listGoogleAdsLinks();
  // [END analyticsadmin_v1alpha_generated_AnalyticsAdminService_ListGoogleAdsLinks_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
