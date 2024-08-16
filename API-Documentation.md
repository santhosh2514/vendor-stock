# API Documentation

## Vendor Routes

### 1. **POST** `/api/vendor/updateStock`

**Description:** Updates the stock for a specific item.

#### Request Body:
```json
{
  "apparelCode": "string",
  "size": "string",
  "quantity": "number",
  "price": "number"
}
```

#### Responses:
- **200 OK:** Stock updated successfully.
- **400 Bad Request:** Invalid stock data.
- **500 Internal Server Error:** Error in updating stock data.

#### Steps to Test:
1. Use Postman or any API testing tool.
2. Paste the below curl and send the request

```curl
curl --location 'http://localhost:2356/api/vendor/updateStock' \
--header 'Content-Type: application/json' \
--data '{
    "apparelCode": "sockss",
    "size" : "M",
    "quantity": 11,
    "price": 785
}'
```

### 2. **POST** `/api/vendor/bulkUpdateStock`

**Description:** Bulk updates the stock for multiple items.

#### Request Body:
```json
{
  "bulkStockUpdates": [
    {
      "apparelCode": "string",
      "size": "string",
      "quantity": "number",
      "price": "number"
    }
  ]
}
```

#### Responses:
- **200 OK:** Stock updated successfully.
- **400 Bad Request:** Invalid stock data.
- **500 Internal Server Error:** Error in bulk updating stock data.

#### Steps to Test:
1. Use Postman or any API testing tool.
2. Paste the below curl and send the request

```curl
curl --location 'http://localhost:2356/api/vendor/bulkUpdateStock' \
--header 'Content-Type: application/json' \
--data '{
    "bulkStockUpdates": [
        {
            "apparelCode": "shirt",
            "size": "31",
            "quantity": 23,
            "price": 345
        },
        {
            "apparelCode": "shirt",
            "size": "34",
            "quantity": 28765,
            "price": 634
        },
        {
            "apparelCode": "shoe",
            "size": "8",
            "quantity": 22,
            "price": 452
        },
        {
            "apparelCode": "cap",
            "size": "M",
            "quantity": 31,
            "price": 134
        }
    ]
}'
```

## Customer Routes

### 1. **POST** `/api/customer/checkFullfillment`

**Description:** Checks the fulfillment status of an order.

#### Request Body:
```json
{
  "order": [
    {
      "itemCode": "string",
      "quantity": "number"
    }
  ]
}
```

#### Responses:
- **200 OK:** Fulfillment status returned.
- **400 Bad Request:** Invalid order data.
- **500 Internal Server Error:** Error in checking fulfillment.

#### Steps to Test:
1. Use Postman or any API testing tool.
2. Paste the below curl and send the request

```curl
curl --location 'http://localhost:2356/api/customer/checkFullfillment' \
--data '{
    "order": [
        {
            "apparelCode": "shirt",
            "size": "31",
            "quantity": 1
        },
        {
            "apparelCode": "shirt",
            "size": "34",
            "quantity": 44
        },
        {
            "apparelCode": "cap",
            "size": "M",
            "quantity": 1
        }
    ]
}'
```
### 2. **POST** `/api/customer/getLowestCost`

**Description:** Gets the lowest cost for an order.

#### Request Body:
```json
{
  "order": [
    {
      "itemCode": "string",
      "quantity": "number"
    }
  ]
}
```

#### Responses:
- **200 OK:** Lowest cost returned.
- **400 Bad Request:** Invalid order data.
- **500 Internal Server Error:** Error in getting the lowest cost.
- 
#### Steps to Test:
1. Use Postman or any API testing tool.
2. Paste the below curl and send the request

```curl
curl --location 'http://localhost:2356/api/customer/getLowestCost' \
--data '{
    "order": [
        {
            "apparelCode": "shirt",
            "size": "31",
            "quantity": 1
        },
        {
            "apparelCode": "shirt",
            "size": "34",
            "quantity": 44
        },
        {
            "apparelCode": "cap",
            "size": "M",
            "quantity": 1
        }
    ]
}'
```