// controllers/bfhlController.js

// Helper: alternate caps reverse
function alternateCapsReverse(str) {
  let reversed = str.split("").reverse().join("");
  return reversed
    .split("")
    .map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
    .join("");
}

export const processData = (req, res) => {
  try {
    const { data } = req.body;

    if (!Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: "Invalid input: 'data' must be an array",
      });
    }

    let odd_numbers = [];
    let even_numbers = [];
    let alphabets = [];
    let special_characters = [];
    let sum = 0;
    let allAlphabetsConcat = "";

    data.forEach((item) => {
      if (!isNaN(item) && item.trim() !== "") {
        // number
        let num = parseInt(item);
        if (!isNaN(num)) {
          num % 2 === 0 ? even_numbers.push(item) : odd_numbers.push(item);
          sum += num;
        }
      } else if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
        allAlphabetsConcat += item;
      } else {
        special_characters.push(item);
      }
    });

    const response = {
      is_success: true,
      user_id: `john_doe_17091999`,
      email: "john@xyz.com",
      roll_number: "ABCD123",
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(),
      concat_string: alternateCapsReverse(allAlphabetsConcat),
    };

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      is_success: false,
      message: "Server error",
      error: error.message,
    });
  }
};
