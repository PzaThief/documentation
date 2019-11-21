# Indexes

## List all indexes

<RouteHighlighter method="GET" route="/indexes"/>

List all indexes.

#### Headers

| Header              | Value         |
|---------------------|---------------|
| **X-Meili-API-Key** | `$API_KEY`    |
| **Accept-encoding** | gzip, deflate |

### Example

```bash
curl \
  --location \
  --request GET 'http://localhost:8080/indexes' \
  --header "X-Meili-API-Key: $API_KEY"
```

#### Response: `200 Ok`

```json
[
  {
    "name": "Movie",
    "uid": "3d9pkcnb",
    "createdAt": "2019-11-20T09:40:33.711324Z",
    "updatedAt": "2019-11-20T10:16:42.761858Z"
  }
]
```

## Get one index

<RouteHighlighter method="GET" route="/indexes/:index"/>

Get the index relative information.

#### Headers

| Header              | Value         |
|---------------------|---------------|
| **X-Meili-API-Key** | `$API_KEY`    |
| **Accept-encoding** | gzip, deflate |

#### Path Variables

| Variable  | Description           |
|-----------|-----------------------|
| **index** | The index UID |

### Example

```bash
curl \
  --location \
  --request GET 'http://localhost:8080/indexes/movies' \
  --header "X-Meili-API-Key: $API_KEY"
```

#### Response: `200 Ok`

```json
{
  "name": "Movie",
  "uid": "3d9pkcnb",
  "createdAt": "2019-11-20T09:40:33.711324Z",
  "updatedAt": "2019-11-20T10:16:42.761858Z"
}
```



## Create an index

<RouteHighlighter method="POST" route="/indexes"/>

Create an index.

The [schema](/main_concept/indexes.md) definition is optionally send through the body.
If no [schema](/main_concept/indexes.md) has been defined when the first document is sent it will be [infered based on that document](/main_concept/documents.md#schemas).

A randomly generated UID will be returned. It's associated to the new index. This UID will be essential to make all request over the created index.

#### Headers

| Header              | Value            |
|---------------------|------------------|
| **X-Meili-API-Key** | `$API_KEY`       |
| **Content-Type**    | application/json |
| **Accept-encoding** | gzip, deflate    |

#### Body

The body take at least an index name.

The body accepts an optional [schema](/main_concept/indexes.md) definition of your documents.

```json
{
  "name": "Movies",
  "schema": {
    "id": ["identifier", "indexed", "displayed"],
    "title": ["indexed", "displayed"],
    "description": ["indexed", "displayed"],
    "release_date": ["displayed"],
    "cover": ["displayed"]
  }
}
```

The index can be created without any schema.

If no schema has been defined when the first document is added, the schema will be [infered based upon the first document](/main_concept/documents.md#schemas).

### Example

```bash
curl \
  --location \
  --request POST 'http://localhost:8080/indexes/movies' \
  --header 'Content-Type: application/json' \
  --header "X-Meili-API-Key: $API_KEY" \
  --data '{
  "name": "Movies",
  "schema": {
    "id": ["identifier", "indexed", "displayed"],
    "title": ["displayed", "indexed"],
    "overview": ["displayed", "indexed"],
    "release_date": ["displayed"],
    "poster": ["displayed"]
  }
}'
```

If no schema has been defined : 
#### Response: `201 created`
```json
{
  "name": "Movie",
  "uid": "3d9pkcnb",
  "schema": null,
  "createdAt": "2019-11-20T09:40:33.711476Z",
  "updatedAt": "2019-11-20T09:40:33.711476Z"
}
```

If schema has been given : 
#### Response: `201 created`

```json
{
  "updateId": 1,
  "name": "Movie",
  "uid": "3d9pkcnb",
  "schema": {
    "id": ["identifier", "indexed", "displayed"],
    "title": ["displayed", "indexed"],
    "overview": ["displayed", "indexed"],
    "release_date": ["displayed"],
    "poster": ["displayed"]
  },
  "createdAt": "2019-11-20T09:40:33.711476Z",
  "updatedAt": "2019-11-20T09:40:33.711476Z"
}
```
This [update id allows you to track](/references/updates) the current action.


## Update an index

<RouteHighlighter method="PUT" route="/indexes/:index"/>

Update an index name.

#### Headers

| Header              | Value            |
|---------------------|------------------|
| **X-Meili-API-Key** | `$API_KEY`       |
| **Content-Type**    | application/json |
| **Accept-encoding** | gzip, deflate    |

#### Path Variables

| Variable          | Description           |
|-------------------|-----------------------|
| **index**         | The index UID        |

#### Body

The body accepts a new name for the given index.

```json
{
  "name": "Movies"
}
```

### Example

```bash
curl \
  --location \
  --request PUT 'http://localhost:8080/indexes/movies' \
  --header 'Content-Type: application/json' \
  --header "X-Meili-API-Key: $API_KEY" \
  --data '{
  "name": "Movies"
}'
```

#### Response: `202 Accepted`

```json
{
  "name": "Movie",
  "uid": "3d9pkcnb",
  "createdAt": "2019-11-20T09:40:33.711324Z",
  "updatedAt": "2019-11-20T10:16:42.761858Z"
}
```


## Delete an index

<RouteHighlighter method="DELETE" route="/indexes/:index"/>

Delete an index.

#### Headers

| Header              | Value            |
|---------------------|------------------|
| **X-Meili-API-Key** | `$API_KEY`       |
| **Content-Type**    | application/json |
| **Accept-encoding** | gzip, deflate    |

#### Path Variables

| Variable          | Description           |
|-------------------|-----------------------|
| **index**         | The index UID        |

#### Body

no body

### Example

```bash
curl \
  --location \
  --request DELETE 'http://localhost:8080/indexes/movies' \
  --header 'Content-Type: application/json' \
  --header "X-Meili-API-Key: $API_KEY" \
```

#### Response: `200 OK`

```json
{
  "updateId": 1,
}
```
This [update id allows you to track](/references/updates) the current action.


## Get one index schema

<RouteHighlighter method="GET" route="/indexes/:index/schema"/>

Get the schema of one index.

#### Headers

| Header              | Value         |
|---------------------|---------------|
| **X-Meili-API-Key** | `$API_KEY`    |
| **Accept-encoding** | gzip, deflate |

#### Path Variables

| Variable  | Description           |
|-----------|-----------------------|
| **index** | The index UID         |

#### Query Parameters

| Query Parameter | Description | Default Value |
|-----------------|-------------|:-------------:|
| **raw**         | Change the format of response | false |

### Example

```bash
curl \
  --location \
  --request GET 'http://localhost:8080/indexes/movies/schema' \
  --header "X-Meili-API-Key: $API_KEY"
```


#### Response: `200 Ok`
```json
{
  "id": ["identifier", "indexed", "displayed"],
  "title": ["displayed", "indexed"],
  "overview": ["displayed", "indexed"],
  "release_date": ["displayed"],
  "poster": ["displayed"]
}
```

If `raw` query parameter has been set to `true` : 
```json
{
  "identifier": "id",
  "attributes": {
    "id": {
      "displayed": true,
      "indexed": true,
      "ranked": false
    },
    "title": {
      "displayed": true,
      "indexed": true,
      "ranked": false
    },
    "overview": {
      "displayed": true,
      "indexed": true,
      "ranked": false
    },
    "release_date": {
      "displayed": true,
      "indexed": false,
      "ranked": false
    },
    "poster": {
      "displayed": true,
      "indexed": false,
      "ranked": false
    }
  }
}
```

## Update an index schema

<RouteHighlighter method="PUT" route="/indexes/:index/schema"/>

Update an index schema.

#### Headers

| Header              | Value            |
|---------------------|------------------|
| **X-Meili-API-Key** | `$API_KEY`       |
| **Content-Type**    | application/json |
| **Accept-encoding** | gzip, deflate    |

#### Path Variables

| Variable          | Description           |
|-------------------|-----------------------|
| **index**         | The index UID        |

#### Query Parameters

| Query Parameter | Description | Default Value |
|-----------------|-------------|:-------------:|
| **raw**         | Change the format of response | false |

#### Body

The body accepts a new schema for the given index.

```json
{
  "id": ["identifier", "indexed", "displayed"],
  "title": ["displayed", "indexed"],
  "overview": ["displayed", "indexed"],
  "release_date": ["displayed"],
  "poster": ["displayed"]
}
```

If `raw` query parameter has been set to `true` : 
```json
{
  "identifier": "id",
  "attributes": {
    "id": {
      "displayed": true,
      "indexed": true,
      "ranked": false
    },
    "title": {
      "displayed": true,
      "indexed": true,
      "ranked": false
    },
    "overview": {
      "displayed": true,
      "indexed": true,
      "ranked": false
    },
    "release_date": {
      "displayed": true,
      "indexed": false,
      "ranked": false
    },
    "poster": {
      "displayed": true,
      "indexed": false,
      "ranked": false
    }
  }
}
```

### Example

```bash
curl \
  --location \
  --request PUT 'http://localhost:8080/indexes/movies' \
  --header 'Content-Type: application/json' \
  --header "X-Meili-API-Key: $API_KEY" \
  --data '{
  "id": ["identifier", "indexed", "displayed"],
  "title": ["displayed", "indexed"],
  "overview": ["displayed", "indexed"],
  "release_date": ["displayed"],
  "poster": ["displayed"]
}'
```

#### Response: `202 Accepted`

```json
{
  "updateId": 1,
}
```
This [update id allows you to track](/references/updates) the current action.