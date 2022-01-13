# API Reference

**Classes**

Name|Description
----|-----------
[AfterCreate](#cdk-triggers-aftercreate)|*No description*


**Structs**

Name|Description
----|-----------
[AfterCreateProps](#cdk-triggers-aftercreateprops)|*No description*



## class AfterCreate  <a id="cdk-triggers-aftercreate"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IDependable](#constructs-idependable)
__Extends__: [Construct](#constructs-construct)

### Initializer




```ts
new AfterCreate(scope: Construct, id: string, props: AfterCreateProps)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[AfterCreateProps](#cdk-triggers-aftercreateprops)</code>)  *No description*
  * **handler** (<code>[aws_lambda.Function](#aws-cdk-lib-aws-lambda-function)</code>)  The handler to execute once after all the resources are created. 
  * **resources** (<code>Array<[Construct](#constructs-construct)></code>)  Resources to trigger on. __*Default*__: [] Run the trigger at any time during stack deployment.




## struct AfterCreateProps  <a id="cdk-triggers-aftercreateprops"></a>






Name | Type | Description 
-----|------|-------------
**handler** | <code>[aws_lambda.Function](#aws-cdk-lib-aws-lambda-function)</code> | The handler to execute once after all the resources are created.
**resources**? | <code>Array<[Construct](#constructs-construct)></code> | Resources to trigger on.<br/>__*Default*__: [] Run the trigger at any time during stack deployment.



