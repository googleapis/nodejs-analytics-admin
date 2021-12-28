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

function main(name) {
  // [START analyticsadmin_v1alpha_generated_AnalyticsAdminService_DeleteMeasurementProtocolSecret_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the MeasurementProtocolSecret to delete.
   *  Format:
   *  properties/{property}/webDataStreams/{webDataStream}/measurementProtocolSecrets/{measurementProtocolSecret}
   *  Note: Any type of stream (WebDataStream, IosAppDataStream,
   *  AndroidAppDataStream) may be a parent.
   */
  // const name = 'abc123'

  // Imports the Admin library
  const {AnalyticsAdminServiceClient} = require('@google-analytics/admin').v1alpha;

  // Instantiates a client
  const adminClient = new AnalyticsAdminServiceClient();

  async function callDeleteMeasurementProtocolSecret() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await adminClient.deleteMeasurementProtocolSecret(request);
    console.log(response);
  }

  callDeleteMeasurementProtocolSecret();
  // [END analyticsadmin_v1alpha_generated_AnalyticsAdminService_DeleteMeasurementProtocolSecret_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));