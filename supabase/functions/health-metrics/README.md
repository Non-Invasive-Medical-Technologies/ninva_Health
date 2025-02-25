
# Health Metrics API Documentation

## Overview
This API allows you to store and retrieve health metrics data from wearable devices.

## Authentication
All requests must include a valid JWT token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

## Endpoints

### POST /health-metrics
Store new health metrics data.

#### Request Body
```json
{
  "metrics": {
    "heart_rate": number,
    "blood_pressure_systolic": number,
    "blood_pressure_diastolic": number,
    "blood_oxygen_level": number,
    "steps_count": number,
    "calories_burned": number,
    "sleep_duration_minutes": number,
    "device_type": string
  }
}
```

#### Response
```json
{
  "data": {
    "id": "uuid",
    "user_id": "uuid",
    "heart_rate": number,
    "blood_pressure_systolic": number,
    "blood_pressure_diastolic": number,
    "blood_oxygen_level": number,
    "steps_count": number,
    "calories_burned": number,
    "sleep_duration_minutes": number,
    "device_type": string,
    "recorded_at": "timestamp",
    "created_at": "timestamp"
  }
}
```

### GET /health-metrics
Retrieve the latest health metrics for the authenticated user.

#### Response
```json
{
  "data": {
    "heart_rate": number,
    "blood_pressure_systolic": number,
    "blood_pressure_diastolic": number,
    "blood_oxygen_level": number,
    "steps_count": number,
    "calories_burned": number,
    "sleep_duration_minutes": number,
    "recorded_at": "timestamp"
  }
}
```

## Error Responses
```json
{
  "error": "Error message"
}
```

Status codes:
- 200: Success
- 400: Bad Request
- 401: Unauthorized
- 405: Method Not Allowed
