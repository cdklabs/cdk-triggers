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



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new AfterCreate(scope: Construct, id: string, props: AfterCreateProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[AfterCreateProps](#cdk-triggers-aftercreateprops)</code>)  *No description*
  * **handler** (<code>[IFunction](#aws-cdk-aws-lambda-ifunction)</code>)  The handler to execute once after all the resources are created. 
  * **resources** (<code>Array<[Construct](#aws-cdk-core-construct)></code>)  Resources to trigger on. __*Default*__: [] Run the trigger at any time during stack deployment.




## struct AfterCreateProps  <a id="cdk-triggers-aftercreateprops"></a>






Name | Type | Description 
-----|------|-------------
**handler** | <code>[IFunction](#aws-cdk-aws-lambda-ifunction)</code> | The handler to execute once after all the resources are created.
**resources**? | <code>Array<[Construct](#aws-cdk-core-construct)></code> | Resources to trigger on.<br/>__*Default*__: [] Run the trigger at any time during stack deployment.



