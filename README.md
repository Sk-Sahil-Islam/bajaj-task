# BFHL API – Full Stack Question (VIT)

A REST API built with **Node.js + Express** to process arrays as per the Full Stack Question Paper (VIT).  
The API accepts an array and returns categorized data: odd numbers, even numbers, alphabets (uppercase), special characters, sum, and a concatenated string in alternating caps.
Name - Sk Sahil Islam
Reg No. - 22BCE10440

---

## Features
- `POST /bfhl` endpoint
- Categorizes numbers (odd/even), alphabets, and special characters
- Converts alphabets to uppercase
- Returns sum of all numbers
- Generates concatenated alphabets string (reverse order with alternating caps)
- Includes Swagger documentation at `/api-docs`
- Structured with Controllers & Routes for best practices

---

## Hosted API

The project is deployed on **Render**. You can access it here:

- **Base URL**: [https://bajaj-task-sq48.onrender.com/](https://bajaj-task-sq48.onrender.com/)
- **Swagger Docs**: [https://bajaj-task-sq48.onrender.com/api-docs/](https://bajaj-task-sq48.onrender.com/api-docs/)
- **POST Endpoint**: [https://bajaj-task-sq48.onrender.com/bfhl](https://bajaj-task-sq48.onrender.com/bfhl)

### Example Request (POST `/bfhl`)
```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}

```
### Example Response
```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```


