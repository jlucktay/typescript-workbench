# Google Cloud client library prototype

```shell
# Create a new key for the SA and save it in the local directory, then let the Google code know where to find it.
gcloud iam service-accounts keys create key.json --iam-account=my-iam-account@my-project.iam.gserviceaccount.com
export GOOGLE_APPLICATION_CREDENTIALS="$(pwd)/key.json"

# Install, compile, execute.
yarn
tsc
node hello.js
```
