---
title: Passing in `cname` to make sure it gets to where it needs to go
author: "@OlaHolstVea"
date: 2023-10-18
---

I added a `cname` here in our `pluginOptionsSchema`

```js
exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({

    cname: Joi.string(),

  });
};
```

I passed the `cname` into our `getNodeData`

```js
const getNodeData = (

  cname,

) => {
```


I passed the `cname` into our `generateCloudinaryUrl`

```js

  const url = generateCloudinaryUrl(media, {

    cname: cname,

  });
```

I passed the `cname` into our `createCloudinaryNodes`

```js
const createCloudinaryNodes = async (

  cname,

) => {
```

I passed the `cname` into our `getNodeData`

```js
const result = await cloudinary.api.resources({      });

      result.resources.forEach((resource) => {
        const nodeData = getNodeData(

          cname,

        );
        actions.createNode(nodeData);
      });

```

I passed the `cname` into our `createCloudinaryNodes`

```js
exports.sourceNodes = async ( pluginOptions) => {
  const { cname } =
    pluginOptions;
  const cloudinary = newCloudinary(pluginOptions);
  const resourceOptions = getResourceOptions(pluginOptions);

  await createCloudinaryNodes(

    cname,

  );
};

```

Here is the PR

(https://github.com/cloudinary-devs/gatsby-source-cloudinary/pull/83/files)[https://github.com/cloudinary-devs/gatsby-source-cloudinary/pull/83/files]