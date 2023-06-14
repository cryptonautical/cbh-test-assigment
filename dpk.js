const crypto = require("crypto");

exports.deterministicPartitionKey = (partitionKey) => {
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate = "0";

  if (partitionKey) {
    candidate = partitionKey;
  } else {
    const data = JSON.stringify({partitionKey});
    candidate = crypto.createHash("sha3-512").update(data).digest("hex");
  }

  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }
  return candidate;
};

// added the default candidate value of "0" and removed the redundant constant definition for TRIVIAL_PARTITION_KEY
// removed the entire object from function parameter since we only need one attribute of the event object