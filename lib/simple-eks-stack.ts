import * as cdk from '@aws-cdk/core';

export class SimpleEksStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {   // this is auto-generated
    super(scope, id, props);

    

    // provisiong a cluster
    const cluster = new eks.Cluster(this, 'hello-eks', {
      version: eks.KubernetesVersion.V1_21,
      defaultCapacity: 3    // number of nodes in a Managed Nodegroup
    });

    // apply a kubernetes manifest to the cluster
    cluster.addManifest('mypod', {
      apiVersion: 'v1',
      kind: 'Pod',
      metadata: { name: 'mypod' },
      spec: {
        containers: [
          {
            name: 'hello',
            image: 'paulbouwer/hello-kubernetes:1.5',
            ports: [ { containerPort: 8080 } ]
          }
        ]
      }
    });








  }
}
